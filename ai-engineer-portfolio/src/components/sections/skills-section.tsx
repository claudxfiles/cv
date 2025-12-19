import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, Code, Server, LineChart, Blocks } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'ai' | 'data' | 'programming' | 'cloud' | 'tools';
}

const skills: Skill[] = [
  // AI & ML
  { id: 'ml', name: 'Machine Learning', level: 90, icon: <Brain />, category: 'ai' },
  { id: 'ia-negocio', name: 'IA Aplicada a Negocio', level: 88, icon: <Brain />, category: 'ai' },
  { id: 'modelos-predictivos', name: 'Modelos Predictivos', level: 92, icon: <Brain />, category: 'ai' },
  { id: 'analisis-riesgo', name: 'Análisis de Riesgo', level: 90, icon: <Brain />, category: 'ai' },
  { id: 'scikit', name: 'Scikit-Learn', level: 95, icon: <Brain />, category: 'ai' },

  // Data
  { id: 'python', name: 'Python Avanzado', level: 95, icon: <Code />, category: 'data' },
  { id: 'sql', name: 'SQL Avanzado', level: 90, icon: <Database />, category: 'data' },
  { id: 'big-data', name: 'Análisis Grandes Volúmenes', level: 85, icon: <Database />, category: 'data' },
  { id: 'automatizacion', name: 'Automatización de Procesos', level: 88, icon: <Database />, category: 'data' },
  { id: 'etl', name: 'ETL/ELT', level: 85, icon: <Database />, category: 'data' },

  // Cloud & DevOps
  { id: 'gcp', name: 'Google Cloud Platform', level: 85, icon: <Server />, category: 'cloud' },
  { id: 'bigquery', name: 'BigQuery', level: 88, icon: <Server />, category: 'cloud' },
  { id: 'airflow', name: 'Airflow', level: 85, icon: <Server />, category: 'cloud' },
  { id: 'aws', name: 'Amazon Web Services', level: 80, icon: <Server />, category: 'cloud' },

  // Tools & Frameworks
  { id: 'powerbi', name: 'Power BI', level: 90, icon: <LineChart />, category: 'tools' },
  { id: 'tableau', name: 'Tableau', level: 85, icon: <LineChart />, category: 'tools' },
  { id: 'equipos', name: 'Trabajo Multidisciplinario', level: 90, icon: <Blocks />, category: 'tools' },
];

// Group skills by category
const groupedSkills = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, Skill[]>
);

// Category titles
const categoryTitles = {
  ai: 'IA y Aprendizaje Automático',
  data: 'Ciencia de Datos',
  programming: 'Lenguajes de Programación',
  cloud: 'Nube y DevOps',
  tools: 'Herramientas y Frameworks',
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative"
    >
      <Card className="h-full border border-gray-200 dark:border-gray-700 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-violet-500 dark:text-violet-400 p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
              {React.cloneElement(skill.icon as React.ReactElement, { className: 'h-5 w-5' })}
            </div>
            <h3 className="font-medium">{skill.name}</h3>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-violet-400"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Nivel</span>
            <span>{skill.level}%</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Mis Habilidades Técnicas
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una descripción general completa de mi experiencia técnica en IA, aprendizaje automático y desarrollo de software.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-violet-500 pl-3"
              >
                {categoryTitles[category as keyof typeof categoryTitles]}
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
