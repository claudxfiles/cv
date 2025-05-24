import type React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, PieChart, Database, BarChart, Sigma, Bot, Network, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const iconComponents = [
  Brain, Cpu, PieChart, Database, BarChart, Sigma, Bot, Network, Github
];

interface FloatingIconProps {
  Icon: React.ElementType;
  size: number;
  position: { x: string; y: string };
  delay: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ Icon, size, position, delay }) => {
  return (
    <motion.div
      className="absolute text-violet-600/20 dark:text-violet-400/10"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size
      }}
      initial={{ opacity: 0, rotate: -10 }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        rotate: [0, 10, -10, 5, 0],
        y: [0, -15, 5, -10, 0]
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

interface GeneratedIconProps {
  Icon: React.ElementType;
  size: number;
  position: { x: string; y: string };
  delay: number;
  id: string;
}

const FloatingIcons: React.FC = () => {
  const [generatedIcons, setGeneratedIcons] = useState<GeneratedIconProps[]>([]);

  useEffect(() => {
    const icons = Array.from({ length: 12 }).map((_, index) => {
      const Icon = iconComponents[index % iconComponents.length];
      const size = Math.floor(Math.random() * 30) + 20;

      const x = `${Math.floor(Math.random() * 85) + 5}%`;
      const y = `${Math.floor(Math.random() * 60) + 5}%`;

      const delay = Math.random() * 5;

      return { Icon, size, position: { x, y }, delay, id: `icon-${index}` };
    });
    setGeneratedIcons(icons);
  }, []);

  if (generatedIcons.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {generatedIcons.map((icon) => (
        <FloatingIcon
          key={icon.id}
          Icon={icon.Icon}
          size={icon.size}
          position={icon.position}
          delay={icon.delay}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
