# FPGA-Based Quantum Circuit Visualizer & Simulator

**Platform:** Intel DE1-SoC FPGA (Cyclone V)  
**Core Technologies:** Nios V Soft-Core Processor (RISC-V), C, RISC-V Assembly, Verilog, VGA, PS/2 Protocol

## Project Overview

![FPGA-Based Quantum Circuit Block Diagram](/FPGAQuantumCircuitSimulatorBlockDiagram.png)

Developed a real-time quantum circuit simulator and visualizer on an Intel DE1-SoC FPGA. This system allows users to interactively design quantum circuits via a PS/2 keyboard, simulate quantum state evolutions, and visualize the results through a custom-built VGA graphical interface, including a 3D Bloch Sphere representation.

![FPGA-Based Quantum Circuit Accessory Image](/FPGAQuantumCircuitSimulatorAccessoryImage.png)

## Key Contributions & Technical Depth

### 1. High-Performance Quantum Simulation Firmware
* **RISC-V Firmware Engineering:** Engineered the core simulation engine in **C and RISC-V Assembly** for the Nios V soft-core processor, optimizing for the resource-constrained environment of an FPGA.
* **State-Vector Computation:** Implemented complex mathematical operations to simulate quantum gate applications (Hadamard, Pauli-X/Z, CNOT) on multi-qubit systems.
* **Hardware-Software Integration:** Managed data flow between the Nios V processor and FPGA fabric peripherals, ensuring low-latency updates between user input and visual output.

### 2. Interrupt-Driven Control System
* **Advanced ISR Development:** Developed a robust, asynchronous input system by writing **Interrupt Service Routines (ISRs)** to handle real-time data from a PS/2 keyboard.
* **Interrupt Controller Configuration:** Configured the Nios V interrupt controller to prioritize time-sensitive user interactions, enabling a seamless "drag-and-drop" gate placement experience.

### 3. Real-Time VGA Visualization Engine
* **3D Bloch Sphere Rendering:** Designed a mathematical model to project the complex state of a qubit onto a 3D Bloch Sphere, rendered in real-time via the VGA controller.
* **Circuit UI Design:** Created an interactive graphical editor that renders qubit lines and gate icons dynamically based on the current simulation state.
* **Probability Mapping:** Developed a histogram-style visualization to display final measurement probabilities, providing intuitive feedback for quantum algorithm results.

## System Architecture

The project leverages a hardware-software co-design approach:
* **Processor:** Nios V (RISC-V Architecture) orchestrates the logic and simulation.
* **Input:** PS/2 Keyboard interface for gate selection (H, X, Z, C) and qubit indexing.
* **Output:** VGA (640x480) for the primary UI and 3D visualization; Audio cues for interaction feedback.
* **Control:** Physical push-buttons on the DE1-SoC for qubit initialization and system resets.