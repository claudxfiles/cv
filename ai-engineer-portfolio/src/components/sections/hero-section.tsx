import type React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Brain, Cpu } from 'lucide-react';

const featureItems = [
  {
    id: "ai-dev",
    icon: <Terminal className="h-6 w-6 text-violet-500" />,
    title: "Desarrollo de IA",
    description: "Construyendo modelos y aplicaciones de IA personalizados con frameworks modernos",
  },
  {
    id: "ml",
    icon: <Brain className="h-6 w-6 text-violet-500" />,
    title: "Aprendizaje Automático",
    description: "Creando pipelines y sistemas de ML que aprenden y se adaptan",
  },
  {
    id: "deep-learning",
    icon: <Cpu className="h-6 w-6 text-violet-500" />,
    title: "Aprendizaje Profundo",
    description: "Diseñando redes neuronales para el reconocimiento de patrones complejos",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pb-24 pt-32">
      <div className="container max-w-5xl mx-auto z-10">
        <div className="space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
              Ingeniero de IA y Especialista en Aprendizaje Automático
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Construyendo{' '}
            <span className="inline-block relative">
              <span className="text-violet-600 dark:text-violet-400">
                inteligentes
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-violet-500 dark:bg-violet-400"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>{' '}
            sistemas que transforman el futuro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Me especializo en diseñar, desarrollar e implementar soluciones avanzadas de IA que resuelven problemas complejos e impulsan la innovación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
              Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contáctame
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
        >
          {featureItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="rounded-full bg-violet-100 dark:bg-violet-900/30 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-medium text-lg text-center mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
