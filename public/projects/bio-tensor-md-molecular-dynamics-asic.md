---
title: "Bio-Tensor MD: A Custom ASIC for Molecular Dynamics"
date: "2026-03-24"
description: "Designing a deeply pipelined, fixed-point ASIC architecture to accelerate molecular dynamics and protein folding simulations."
tags: ["ASIC Design", "Verilog", "Molecular Dynamics", "Hardware Architecture", "Verilator"]
---

# Bio-Tensor MD: A Custom ASIC for Molecular Dynamics

**The Challenge:** Simulating protein folding—the process by which linear amino acid chains form functional 3D structures—is one of the most computationally demanding problems in biophysics. Traditional CPUs compute these physics temporally, bottlenecked by instruction fetches and sequential floating-point operations. To achieve the microsecond-scale simulations required to observe proteins "settling" into equilibrium, we need hardware that computes physics spatially.

**The Solution:** I designed a custom Application-Specific Integrated Circuit (ASIC) engineered exclusively for high-throughput Molecular Dynamics (MD). By stripping away the bloat of general-purpose processors, this dataflow architecture executes complex biomolecular mathematics—including Lennard-Jones, Coulombic, and multi-body bonded forces—with maximum area and power efficiency.

---

## System Architecture

![Bio-Tensor MD System Architecture Block Diagram](/BioTensorMDBlockDiagram.png)

The chip is organized into four highly synchronized, deeply pipelined stages:

* **The Master FSM (MINIMIZER_TOP):** The central nervous system of the ASIC. It eliminates general-purpose instruction overhead by autonomously generating read/write addresses and synchronization signals to keep the parallel datapath saturated 100% of the time.

* **Memory & Lookup Stage:** To minimize power-hungry data fetches, the architecture utilizes a local **atom_regfile** for 3D coordinates. A dedicated Residue Database (RDB) acts as a hardware-level force field lookup, seamlessly translating atom IDs into physical parameters (like partial charges, σ, ε, and spring constants) on the fly.

* **Parallel Physics Pipelines:** This is the core arithmetic engine. Data streams simultaneously into isolated, fixed-function physics cores. The **Bonded, Angle, and Dihedral Cores** calculate structural forces using custom CORDIC modules for atan2 and optimized vector normal/cross-product hardware. The **Non-Bonded Pipeline** is the most computationally intense block (O(N²) complexity). It features a fused datapath that computes reciprocal squared distances, Lennard-Jones, and Coulombic electrostatic forces in parallel, spitting out a fully resolved 3D force vector every single clock cycle.

* **Accumulation & Integration:** The output force vectors from all physics pipelines are summed in hardware accumulators. A native Gradient Descent Update block applies these forces to the coordinates, physically advancing the simulation and updating the 3D atomic positions in a continuous loop.

---

## Engineering Highlights & PPA Optimization

To fit this massive computational workload onto a constrained silicon footprint, I ruthlessly optimized for Power, Performance, and Area (PPA):

* **Q16.16 Fixed-Point Arithmetic:** Replaced massive 64-bit IEEE-754 floating-point units with deeply pipelined Q16.16 fixed-point math. This saved enormous silicon area while maintaining the numerical precision required to prevent energy drift during simulation.

* **1-Cycle Throughput:** By heavily pipelining the heavy combinatorial logic (like inverse square roots and multiplications), the physics cores achieve a throughput of one fully calculated force vector per clock cycle, vastly outperforming CPU instruction loops.

* **Cycle-Accurate Verification:** The system was rigorously verified using a dual-simulator framework (Icarus Verilog and Verilator) running burst-mode stress tests. By injecting real 3D atomic coordinates (like an Alanine dipeptide) directly into the register file, I could prove the hardware correctly minimizes the energy state over time.

![Hardware Minimization of Alanine Dipeptide](/BioTensorMDCoordinateGraph.png)

---

## Why It Matters

By migrating computational chemistry from software theory into raw silicon logic, this architecture provides a blueprint for ultra-fast, energy-efficient molecular simulation. Achieving rapid, autonomous protein settling in hardware is a critical stepping stone toward real-time drug discovery, allowing researchers to screen how thousands of small-molecule therapeutics physically dock into protein targets without waiting weeks for supercomputer clusters.

---

## Lessons Learned: Engineering at the Silicon Level

Building a domain-specific physics engine from scratch fundamentally changed how I approach hardware architecture. Here are the biggest engineering takeaways from the Bio-Tensor MD project:

* **The Floating-Point Trap (Math vs. Silicon):** My initial instinct was to use IEEE-754 floating-point math for the molecular coordinates to maintain scientific precision. I quickly realized this is a software mindset that destroys ASIC area and power budgets. Switching the entire datapath to **Q16.16 fixed-point arithmetic** was a revelation. I learned how to manage bit-growth, handle precision loss, and utilize "free" hardware truncation (simply dropping wires) to drastically shrink my logic footprint without sacrificing the physics.

* **Pipelining is a Balancing Act (Timing vs. Throughput):** Complex operations like the inverse square root and 32-bit `qmult` create massive combinatorial logic clouds. To avoid brutal setup time violations and critical path delays, I had to deeply slice the non-bonded engine into a 13-stage pipeline. The lesson here was counter-intuitive but powerful: **latency doesn't matter if your throughput is maximized.** Taking 13 clock cycles to calculate a single force is perfectly fine, as long as the pipeline spits out a *new* force every single clock cycle thereafter.

* **Verification is 80% of the Work:** Hardware bugs are unforgiving. I learned that simple `$display` testbenches are not enough for a deeply pipelined, parallel architecture. I had to upgrade my verification framework from standard Icarus Verilog to **Verilator** for aggressive, cycle-accurate C++ linting. Building burst-mode stress tests and injecting real 3D atomic coordinates (like Alanine residues) into the testbench taught me how to verify the physical science, not just the digital logic.

* **"Feeding the Beast" (The Memory Bottleneck):** You can build the fastest math pipeline in the world, but it is useless if it starves waiting for data. Managing the O(N²) complexity meant the central FSM had to perfectly orchestrate the **atom_regfile** and the parameter Look-Up Tables (LUTs). This reinforced the reality of modern hardware design: **compute is cheap; data movement is expensive.**