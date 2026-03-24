import React from 'react';
import { 
  MemoryStick, Cpu, Activity, Terminal, Wifi, Network, CircuitBoard, 
  Microchip, Database, Aperture, Bot, Zap, RadioTower, Binary 
} from 'lucide-react';
import styles from './GeometricGrid.module.css';

// Pre-computed dense matrix of CAD icons mapped to the exact 25px CSS grid.
// Mixing pure Navy hardware components with precise Saffron and Green 
// highlight stamps to natively weave the India theme into the blueprint matrix.
const gridNodes = [
  { x: 4, y: 4, Icon: Cpu, color: styles.colorNavy },
  { x: 12, y: 2, Icon: Zap, color: styles.colorSaffron },
  { x: 18, y: 10, Icon: MemoryStick, color: styles.colorGreen },
  { x: 26, y: 4, Icon: Binary, color: styles.colorGreen },
  { x: 32, y: 5, Icon: Activity, color: styles.colorNavy },
  { x: 38, y: 12, Icon: Microchip, color: styles.colorGreen },
  { x: 45, y: 15, Icon: Terminal, color: styles.colorNavy },
  { x: 50, y: 3, Icon: Aperture, color: styles.colorSaffron },
  { x: 60, y: 18, Icon: Bot, color: styles.colorGreen },
  { x: 68, y: 22, Icon: CircuitBoard, color: styles.colorNavy },
  { x: 74, y: 6, Icon: RadioTower, color: styles.colorNavy },
  { x: 82, y: 14, Icon: Cpu, color: styles.colorGreen },
  { x: 88, y: 25, Icon: Network, color: styles.colorNavy },
  { x: 95, y: 10, Icon: Database, color: styles.colorGreen },
  { x: 105, y: 22, Icon: Zap, color: styles.colorSaffron },
  { x: 115, y: 8, Icon: MemoryStick, color: styles.colorNavy },
  { x: 122, y: 18, Icon: Bot, color: styles.colorGreen },
  
  { x: 6, y: 18, Icon: Network, color: styles.colorNavy },
  { x: 10, y: 25, Icon: Wifi, color: styles.colorGreen },
  { x: 15, y: 32, Icon: CircuitBoard, color: styles.colorNavy },
  { x: 22, y: 28, Icon: Aperture, color: styles.colorSaffron },
  { x: 28, y: 38, Icon: Database, color: styles.colorNavy },
  { x: 35, y: 30, Icon: Network, color: styles.colorGreen },
  { x: 42, y: 45, Icon: Zap, color: styles.colorNavy },
  { x: 48, y: 35, Icon: Cpu, color: styles.colorNavy },
  { x: 55, y: 28, Icon: Binary, color: styles.colorGreen },
  { x: 62, y: 42, Icon: MemoryStick, color: styles.colorNavy },
  { x: 75, y: 32, Icon: Activity, color: styles.colorGreen },
  { x: 82, y: 48, Icon: Bot, color: styles.colorSaffron },
  { x: 92, y: 38, Icon: CircuitBoard, color: styles.colorNavy },
  { x: 100, y: 45, Icon: Wifi, color: styles.colorGreen },
  { x: 112, y: 35, Icon: Microchip, color: styles.colorNavy },
  { x: 125, y: 42, Icon: RadioTower, color: styles.colorNavy },
  
  { x: 8, y: 45, Icon: Activity, color: styles.colorNavy },
  { x: 15, y: 55, Icon: Database, color: styles.colorGreen },
  { x: 24, y: 48, Icon: Bot, color: styles.colorNavy },
  { x: 30, y: 60, Icon: CircuitBoard, color: styles.colorNavy },
  { x: 38, y: 52, Icon: Terminal, color: styles.colorGreen },
  { x: 45, y: 65, Icon: Zap, color: styles.colorSaffron },
  { x: 55, y: 56, Icon: MemoryStick, color: styles.colorNavy },
  { x: 65, y: 62, Icon: Aperture, color: styles.colorGreen },
  { x: 72, y: 50, Icon: Wifi, color: styles.colorNavy },
  { x: 85, y: 65, Icon: Cpu, color: styles.colorGreen },
  { x: 95, y: 58, Icon: Network, color: styles.colorNavy },
  { x: 105, y: 68, Icon: Binary, color: styles.colorNavy },
  { x: 118, y: 55, Icon: CircuitBoard, color: styles.colorSaffron },
  { x: 128, y: 65, Icon: Bot, color: styles.colorGreen }
];

const GeometricGrid: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
      {gridNodes.map((node, i) => (
        <div 
          key={i} 
          className={`${styles.gridNode} ${node.color}`}
          style={{ 
            left: `calc(25px * ${node.x})`, 
            top: `calc(25px * ${node.y})` 
          }}
        >
          <node.Icon size={24} strokeWidth={1} />
        </div>
      ))}
    </div>
  );
};

export default GeometricGrid;
