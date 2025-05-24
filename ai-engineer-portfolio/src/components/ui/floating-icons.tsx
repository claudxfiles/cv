import type React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, PieChart, Database, BarChart, Sigma, Bot, Network, Github } from 'lucide-react';

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

const FloatingIcons: React.FC = () => {
  // Generate random icons with random positions
  const icons = Array.from({ length: 12 }).map((_, index) => {
    const Icon = iconComponents[index % iconComponents.length];
    const size = Math.floor(Math.random() * 30) + 20; // Size between 20-50px

    // Random positions that don't interfere too much with content
    const x = `${Math.floor(Math.random() * 85) + 5}%`;
    const y = `${Math.floor(Math.random() * 60) + 5}%`;

    // Random delay so they don't all animate together
    const delay = Math.random() * 5;

    return { Icon, size, position: { x, y }, delay, id: `icon-${index}` };
  });

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
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
