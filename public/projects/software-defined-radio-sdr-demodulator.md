# Project Portfolio: Audio Demodulator for Software Defined Radio (SDR)

![SSB Demodulator Group Image](/SSBDemodulatorGroup.png)


## Project Overview
This project involved designing, simulating, and physically implementing a Demodulator (Subsystem B7) for a Flexible Radio Transceiver (FLRTRX), also known as a Software Defined Radio (SDR). Software Defined Radios are critical in modern telecommunications and crisis response scenarios because of their adaptability.

The primary importance of this work lies in its core function: taking an unintelligible incoming radio frequency signal with interference and processing it into a human-intelligible audio message. By manipulating incoming In-phase (I) and Quadrature-phase (Q) signals, the demodulator filters out noise, isolates the intended message, and amplifies it to drive an 8Ω speaker.

## System Architecture & Technical Specifications
The system takes in I and Q signals from a receiver subsystem. These inputs share the same frequency (up to 96 kHz) but have a 90-degree phase difference. The demodulator is designed to output an audio frequency range between 100 Hz and 4000 Hz.

To achieve this, the signal processing pipeline is divided into four main stages:

### 1. Butterworth Low-Pass Filter
To restrict the output to the human audible range (100 Hz - 4000 Hz), the I and Q signals are first passed through a second-order active Butterworth filter. The Butterworth filter was specifically chosen because it provides a highly consistent unity gain in the passband and a rapid decrease in gain after the cut-off frequency, minimizing signal distortion.

### 2. Hilbert Transformer & Inverter
During transmission, unwanted interference noise is mixed into the lower-sideband of the Q signal. To isolate the pure message, a Hilbert transformer is applied to the Q signal to shift its phase by exactly 90 degrees.
* **Design Iteration:** Initially, the plan was to place 4 All-Pass Filters (APFs) in parallel to cover different frequency channels. However, to reduce mathematical complexity and save physical space on the Printed Circuit Board (PCB), the design was optimized by placing the APFs in series.

### 3. Adder Circuit
Once the Q signal has been phase-shifted and inverted, an adder circuit combines the processed I and Q signals. Because of the precise 90-degree phase alignment, summing the signals effectively cancels out the unwanted interference through subtraction, leaving only the recovered message signal.

### 4. Audio Amplification
Filtering and transforming the signals result in negative gain (loss of amplitude). To ensure the final output can successfully drive an audio speaker, an LM386 amplification circuit is used. The circuit incorporates a potentiometer on the feedback path, allowing the user to easily adjust the speaker volume.

## Implementation, Testing, & Challenges Solved
The project followed a rigorous engineering lifecycle, moving from theoretical research and LTSpice circuit simulation to PCB layout using Altium, and finally to physical assembly and testing.

### Overcoming a Major PCB Design Flaw
During physical implementation, our team encountered a critical challenge: the assembled PCB failed to produce the required Single Sideband (SSB) demodulation performance.

Through diligent troubleshooting, we discovered a routing error on the PCB. All "voltageDivision" nodes—intended to provide separate DC biasing to different components—were accidentally connected, creating a massive feedback loop that shorted all the input signals together. This flaw caused the I and Q signal pathways to interfere with one another, preventing the necessary signal integration.

**The Solution:** Rather than abandoning the physical tests, we adapted our testing methodology to logically prove the correctness of our theoretical design:
* **Digital Modification:** We performed isolated tests on the PCB without the inverter to break the feedback loop and recorded the data via Python scripts, calculating the sideband rejection ratio manually.
* **Breadboard Verification:** To fully correct the voltage division error, we completely rebuilt the circuit from scratch on a breadboard, properly isolating all voltage division nodes with multiple 10k ohm resistor pairs.
* **Results:** The breadboard rebuild was a success. Testing the isolated components confirmed that the filters, Hilbert transformer, and adder all performed exactly as expected when the short circuit was removed. We successfully demonstrated a sideband rejection ratio close to the desired 30dB, proving our core mathematical and electrical designs were fundamentally sound.

## Conclusion & Key Takeaways
This project was a comprehensive exercise in electronic systems design, combining signal processing theory with hands-on hardware debugging. Key learnings included:
* The profound importance of adequate signal isolation and understanding complete signal flow.
* The complexities and space limitations of PCB routing, and how easily a single shared node can compromise an entire subsystem.
* The value of modular, integrated testing to isolate faults and mathematically prove a design's viability even when hardware manufacturing errors occur.