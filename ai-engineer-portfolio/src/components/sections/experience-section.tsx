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
      'Fundé SoulDream y lideré el desarrollo integral del SaaS (souldream.cl), una plataforma innovadora para la exploración y comprensión de los sueños.',
      'Dirigí todas las fases del proyecto, desde la concepción de la idea, planificación estratégica y diseño de arquitectura, hasta el desarrollo full-stack y la implementación de funcionalidades clave.',
      'Responsable del desarrollo completo (front-end con React, back-end con Node.js), la integración de componentes de Inteligencia Artificial, la gestión de bases de datos y el diseño de APIs.',
      'Orquesté el despliegue exitoso y el mantenimiento continuo de la aplicación en un entorno de producción, asegurando su escalabilidad, robustez y una óptima experiencia de usuario.'
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
      'Como Senior Fraud Specialist, lidero iniciativas estratégicas para la optimización continua de los sistemas de prevención de fraudes, aplicando mi experiencia avanzada en el ciclo completo de datos.',
      'Desarrollo y refino modelos predictivos complejos y automatizo procesos críticos utilizando Python, SQL, Airflow y BigQuery, para la detección proactiva y el análisis sofisticado de patrones fraudulentos.',
      'Diseño y gestiono pipelines de datos (ETL/ELT) robustos y escalables, integrando soluciones en plataformas cloud (GCP/AWS) para potenciar las capacidades analíticas del equipo.',
      'Transformo datos complejos en insights accionables mediante herramientas de visualización como Power BI y Tableau, facilitando la toma de decisiones estratégicas a nivel gerencial.',
      'Asumo un rol de mentoría técnica y colaboro en la definición de la hoja de ruta tecnológica para la prevención de fraudes, investigando y proponiendo la adopción de nuevas herramientas y metodologías.'
    ],
    location: 'Híbrido',
    type: 'Jornada completa',
  },
  {
    id: 'bci-fraud-specialist',
    company: 'Banco Bci',
    role: 'Fraud Specialist Riesgo no Financiero',
    dates: 'sept. 2022 - may. 2024',
    description: [
      'Realicé investigaciones de profundidad en áreas relacionadas con prevención de fraudes y riesgos no financieros.',
      'Lideré la creación de un sistema de análisis de riesgo basado en datos, que permite a la empresa evaluar y controlar la exposición a riesgos en todos los niveles, presentando los datos de forma estructurada y comprensible para el usuario.'
    ],
    location: 'Chile',
    type: 'Jornada completa',
  },
  {
    id: 'entel',
    company: 'Entel',
    role: 'Analista de datos',
    dates: 'mar. 2022 - sept. 2022 (7 meses)',
    description: [
      'Consolidar y analizar datos provenientes de distintas fuentes de información.',
      'Crear Dashboards, paneles y automatizar la generación de informes.',
      'Analizar procedimientos internos e identificar posibles mejoras.'
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