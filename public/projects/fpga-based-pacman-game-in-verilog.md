# Hardware-Accelerated Pacman Arcade Game

**Platform:** Intel DE1-SoC FPGA
**Core Technologies:** Verilog, Finite State Machines (FSM), VGA Graphics Pipeline, On-Chip Block RAM, PS/2 Keyboard I/O

## Project Overview

![FPGA-Based Pacman Game in Verilog Image](/FPGAPacmanGame.png)

Engineered a complete hardware implementation of the classic Pacman arcade game entirely in Verilog, bypassing the need for a traditional software microprocessor. The system is driven by a top-level module architected on a DE1-SoC FPGA, managing everything from input debouncing to complex ghost AI directly at the Register-Transfer Level (RTL).

Unfortunately the most up to date video is unavailable.

## Key Contributions & Technical Depth

### 1. Complex Finite State Machine (FSM) Design
* **Core Game Logic:** Developed a robust 10-state Finite State Machine (FSM) to manage all central game mechanics, including start/win/loss states, score tracking, player movement, and precise collision detection between entities and maze walls.
* **Multi-Mode Ghost AI:** Implemented dynamic, hardware-level AI for the ghosts, featuring distinct 'Chase', 'Scatter', and 'Frightened' behaviors that shift based on game state and player actions.

### 2. High-Performance VGA Graphics Pipeline
* **Hardware Rendering:** Integrated a custom 640x480, 60Hz VGA graphics pipeline directly in Verilog to handle real-time screen updates without frame drops.
* **Memory Management:** Leveraged on-chip Block RAM (BRAM) to store sprite data, maze layouts, and dynamic grid states (such as tracking eaten pellets).

### 3. Synchronous Datapath & I/O Integration
* **Input Handling:** Engineered reliable I/O integration for both a PS/2 keyboard and on-board push-buttons, translating raw user input into synchronized movement commands within the game's clock domain.
* **Clock Domain Crossing:** Managed timing constraints between the high-frequency FPGA system clock and the 25.175 MHz VGA pixel clock by implementing two-flop synchronizers to safely pass control signals and prevent metastability.

## System Architecture

* **Logic Layer:** Pure Verilog implementation of a 10-state game FSM and multi-state ghost AI logic.
* **Memory/Storage:** On-chip Block RAM utilized for fast, synchronous retrieval of rendering assets.
* **Interface:** Direct hardware I/O mapping for keyboard controls and VGA display output.