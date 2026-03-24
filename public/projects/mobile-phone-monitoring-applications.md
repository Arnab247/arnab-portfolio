# Mobile Phone Monitoring Applications: Muscle Fatigue Tracker

**Platform:** iOS & Android  
**Core Technologies:** Python, Pandas, Jupyter Notebook, SwiftUI, Android SensorEvent API, Linear Accelerometer

## Project Overview

Open the google drive link at the bottom and look at the final presentation to see complete quick details of project.

![Mobile Phone Monitoring Applications Image](/APS112Project.png)

Collaborated with a PhD candidate from the Institute of Biomedical Engineering to conceptualize and design a mobile application that diversifies the use of built-in smartphone sensors for biometric monitoring. The final proposed system utilizes a smartphone's linear accelerometer to track muscle fatigue during cyclical exercises, providing a highly accessible alternative to specialized medical equipment. 

## Key Contributions & Technical Depth

### 1. Mobile Sensor Integration
* **API Utilization:** Proposed the use of SwiftUI's `startAccelerometerUpdates()` within the `CMMotionManager` module to capture motion data on iOS devices. 
* **Cross-Platform Sensor Access:** Leveraged Android's `Sensor.TYPE_LINEAR_ACCELERATION` within the `SensorEvent` module to ensure platform-agnostic capabilities.
* **Data Transformation:** Designed the system to continuously convert raw sensor input into measurable physical acceleration ($m/s^2$).
* **Fatigue Metric Tracking:** Tracked peak intensity and the time elapsed between movements to accurately quantify muscle fatigue over the duration of an exercise. 

### 2. Signal Processing & Data Pipeline
* **Data Extraction:** Architected a data pipeline to extract raw acceleration data directly from the sensor into a CSV format for offline processing.
* **Filter Implementation:** Implemented Exponential Moving Average (EMA) and Simple Moving Average (SMA) filters using Python and the Pandas library within a Jupyter Notebook environment.
* **Axis Isolation:** Isolated the primary axis of motion (Z-axis) during exercises to maximize data accuracy and filter out extraneous movements. 
* **Noise Reduction:** Optimized the processing pipeline to achieve a Signal-to-Noise Ratio (SNR) greater than 10 dB, ensuring reliable biometric readings.

### 3. Systems Engineering & Leadership
* **Project Management:** Served as the Team Leader for this Conceptual Design Specification (CDS), guiding the project from initial problem scoping to final design recommendation.
* **Structured Ideation:** Led rigorous idea generation sessions utilizing SCAMPER and TRIZ methodologies to explore and evaluate potential applications for mobile sensors.