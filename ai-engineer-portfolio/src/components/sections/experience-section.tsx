import type React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  description: string[];
  location?: string;
  type?: string; // e.g., 'Full-time', 'Internship'
}

const experienceHistory: ExperienceItem[] = [

  {
    id: 'souldream-saas',
    company: 'SoulDream',
    role: 'Fundador y Desarrollador Principal',
    dates: '2025 - actualidad',
    description: [
      'Liderazgo y desarrollo de una plataforma SaaS basada en inteligencia artificial, participando en todo el ciclo de vida del producto.',
      'Diseño de arquitectura, integración de modelos de IA, análisis de datos y despliegue en entornos productivos cloud.',
      'Experiencia directa en proyectos de IA aplicados a usuarios reales y toma de decisiones basada en datos.'
    ],
    location: 'Remoto / Chile',
    type: 'Emprendimiento / SaaS',
  },
  {
    id: 'bci-senior',
    company: 'Banco Bci',
    role: 'Senior Fraud Specialist',
    dates: 'may. 2024 - actualidad',
    description: [
      'Desarrollo y optimización de modelos predictivos orientados a la detección y mitigación de riesgos, utilizando Python y SQL.',
      'Automatización de procesos analíticos y construcción de pipelines de datos en entornos cloud (GCP y AWS).',
      'Análisis de grandes volúmenes de información para identificar patrones de riesgo y generar insights accionables para áreas de negocio y toma de decisiones estratégicas.',
      'Apoyo a iniciativas transversales relacionadas con campañas y control de riesgo.'
    ],
    location: 'Híbrido',
    type: 'Jornada completa',
  },
  {
    id: 'bci-fraud-specialist',
    company: 'Banco Bci',
    role: 'Fraud Specialist Riesgo No Financiero',
    dates: 'sept. 2022 - may. 2024',
    description: [
      'Investigación y análisis de riesgos no financieros mediante metodologías basadas en datos.',
      'Desarrollo de sistemas de evaluación de riesgo que permitieron mejorar el control y monitoreo de exposiciones a nivel organizacional.',
      'Trabajo colaborativo con áreas técnicas y de negocio para fortalecer procesos de prevención.'
    ],
    location: 'Chile',
    type: 'Jornada completa',
  },
  {
    id: 'entel',
    company: 'Entel',
    role: 'Analista de Datos',
    dates: 'mar. 2022 - sept. 2022 (7 meses)',
    description: [
      'Consolidación y análisis de datos provenientes de múltiples fuentes.',
      'Creación de dashboards e informes automatizados para el seguimiento de indicadores clave.',
      'Identificación de oportunidades de mejora en procesos internos mediante análisis cuantitativo.'
    ],
    location: 'Av Costanera Sur 2760, las condes.',
    type: 'Jornada completa',
  },
  {
    id: 'fondef',
    company: 'FONDEF',
    role: 'Control de Gestión y control de riesgos',
    dates: 'mar. 2020 - sept. 2020 (7 meses)',
    description: [
      'Realizar un Plan de mejoramiento de la línea de investigación de suelos y medio ambiente.',
      'Aplicar minería de datos para identificar las fortalezas y debilidades de la línea de investigación.',
      'Crear Dashboards, paneles y automatizar la generación de informes de las muestras del laboratorio con Power Bi.',
      'Procesos de ETL SQL y Python para automatizar el flujo de datos de las muestras.',
      'Liderar equipo, levantar procesos y cotizar solución para desarrollar un plan de acción.'
    ],
    location: 'Santiago, Región Metropolitana de Santiago, Chile',
    type: 'Contrato de prácticas',
  },
  {
    id: 'distintec',
    company: 'DISTINTEC ®',
    role: 'Gestión de control',
    dates: 'ene. 2019 - mar. 2019 (3 meses)',
    description: [
      'Desarrollar un plan de marketing y análisis de KPIs, control y registros de inventarios.',
      'Apoyar en el levantamiento de procesos de transporte de insumo, materias primas y equipos dedicado al conocimiento de la producción en la maestranza de eslingas de izaje.',
      'Generar reportaría en Tableau Desktop y desarrollo de flujograma en Bizagi Modeler.'
    ],
    location: 'Lampa, Región Metropolitana de Santiago, Chile',
    type: 'Contrato de prácticas',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experiencia Laboral
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional y los roles que he desempeñado.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for timeline effect */}
          <div className="hidden md:block absolute w-1 bg-violet-500 dark:bg-violet-700 h-full left-1/2 transform -translate-x-1/2" />

          {experienceHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 md:mb-16 flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 md:pr-8 ${index % 2 !== 0 ? 'md:pl-8 md:pr-0 md:text-right' : 'md:text-left'}">
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700`}>
                  <div className={`flex items-center mb-3 ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Briefcase className={`h-6 w-6 mr-2 ${index % 2 !== 0 ? 'ml-2 mr-0 md:order-2' : 'mr-2'} text-violet-500 dark:text-violet-400`} />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.role}</h3>
                  </div>
                  <p className="text-md font-medium text-violet-600 dark:text-violet-400">{item.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {item.dates} {item.location && `| ${item.location}`} {item.type && `(${item.type})`}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Circle on the timeline */}
              <div className="hidden md:flex md:w-12 md:justify-center">
                <div className="bg-violet-500 dark:bg-violet-700 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 mt-1" />
              </div>
               {/* Empty div for spacing on mobile and for aligning items on desktop*/}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : ''}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 