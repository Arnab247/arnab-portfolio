# Brain-Implantable FPGA for Neuromodulation

**Role:** NSERC Undergraduate Researcher  
**Laboratory:** Intelligent Sensory Microsystems Lab (ISML)  
**Supervisor:** Prof. Roman Genov and Mustafa Kanchwala
**Core Technologies:** TensorFlow (1.15 to 2.15), Python, FPGA, Split-Computing, Neural Signal Processing, Machine Learning

## Project Overview

Secured a nationally competitive NSERC Undergraduate Student Research Award (USRA), valued at $7,500, to fund 16 weeks of dedicated research on neural signal processing. The research focuses on developing a low-power, brain-implantable system for real-time neuromodulation, utilizing a distributed computing approach between an implant and a wearable device to analyze neural activity. 

## Key Contributions & Technical Depth

### 1. Split-Computing Architecture & ML Validation
* **Distributed Processing:** Architected a Split Learning framework into a neural signal processing model, bridging the implant and external hardware. This enhanced data privacy and reduced the computational load on the wearable device by an estimated 75-80%, critical for operating within strict 50ms latency constraints.
* **Model Replication:** Replicated a state-of-the-art machine learning model for analyzing Single-Unit Activity (SUA). Achieved 99% accuracy, consistent with the original paper's results, establishing a highly validated baseline for novel experimentation.

### 2. Software Modernization & Hardware Translation
* **Codebase Migration:** Led the complete migration of a 1,100-line legacy research codebase from TensorFlow 1.15 to 2.15. Successfully resolved critical GPU incompatibilities and complex dependency conflicts to ensure project viability on modern hardware.
* **FPGA Integration (Ongoing):** Currently executing the full project scope by transitioning the validated software model into a hardware-accelerated integrated circuit on an FPGA, optimizing for the stringent power and area limitations of neural implants.

### 3. Academic Research & Technical Scoping
* **Literature Synthesis:** Conducted a comprehensive literature review of over 50 academic papers focusing on distributed machine learning and neural activity models. 
* **Strategic Direction:** Synthesized these findings to select the project's core technologies, defining the technical direction for the hardware-software co-design.