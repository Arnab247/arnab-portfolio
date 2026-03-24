# Autonomous Survival Rover: "Two-Brain" Architecture

**Platform:** Arduino Microcontroller & Cloud AI 
**Core Technologies:** C++ (Arduino), Gemini API, Embedded Systems, Sensor Integration, Serial Communication, Motor Control

## Project Overview

![Autonomous Survival Rover Image](/RoverRobot2026Feb.jpg)

Designed and built an autonomous, survival-themed rover featuring a novel "Two-Brain" processing architecture. This project bridges the gap between deterministic embedded hardware and advanced cloud-based artificial intelligence, splitting the system's processing into immediate physical survival and long-term strategic decision-making.

## Key Contributions & Technical Depth

### 1. The "Lizard Brain" (Arduino - Low-Level Control)
* **Real-Time Navigation:** Programmed the Arduino to act as the rover's autonomic nervous system, handling critical, low-latency tasks such as motor actuation and immediate obstacle avoidance.
* **Sensor Polling & Telemetry:** Integrated hardware sensors to continuously monitor the rover's immediate environment, ensuring safe physical operation independent of network latency.
* **Hardware-Level Safety:** Designed interrupt-driven failsafes to stop the rover's motors instantly upon detecting imminent collisions.

### 2. "The General" (Gemini AI - High-Level Strategy)
* **Cognitive Processing:** Integrated the Gemini LLM to serve as the rover's strategic commander. This layer processes complex environmental context and dictates the rover's overarching survival strategy.
* **Dynamic Decision Making:** Fed telemetry data to the AI to evaluate scenarios, prioritize objectives (e.g., exploring vs. avoiding "hazards"), and issue high-level navigational waypoints.

![Autonomous Survival Rover Web App](/RoverRobot2026Web.jpg)

### 3. Hardware-Software Communications Bridge
* **Asynchronous Telemetry:** Engineered a reliable communication pipeline between the local Arduino hardware and the cloud-based AI. 
* **Command Parsing:** Developed a custom protocol to translate natural language or high-level strategic outputs from "The General" into actionable, byte-level serial commands for the "Lizard Brain" to execute.

## System Architecture

* **Hardware Layer:** Arduino-based chassis with drive motors and proximity sensors, focused entirely on real-time execution and immediate physical reactions.
* **Strategy Layer:** Cloud-hosted Gemini AI determining long-term goals and behavioral states based on aggregated sensor telemetry.
* **Integration:** A dedicated communication bridge managing the asynchronous handshake between the deterministic microcontroller and the AI logic.

![Autonomous Survival Rover Top View](/RoverRobot2026Top.jpg)