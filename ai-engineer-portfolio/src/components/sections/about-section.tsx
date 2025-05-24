import type React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const aboutText = "Soy Ingeniero Civil Industrial con especialización en Ciencia de Datos, Ingeniería de Datos y Cloud Computing. Cuento con diplomados en Data Science y Data Engineering, además de certificaciones en Google Cloud Platform (GCP) y Amazon Web Services (AWS).\n\nActualmente, me desempeño como Analista IT en Prevención de Fraudes en el Banco BCI, donde desarrollo modelos predictivos, automatización de procesos y análisis de datos para la detección de patrones fraudulentos. Paralelamente, fundé y dirijo SoulDream (`souldream.cl`), una innovadora aplicación SaaS donde he liderado todo el ciclo de desarrollo, desde la concepción hasta el despliegue, aplicando mis conocimientos en desarrollo full-stack y la integración de IA. Tengo experiencia en el diseño y optimización de pipelines de datos (ETL), manejo de BigQuery, Airflow, SQL, Python y herramientas de visualización como Power BI y Tableau.\n\nMi enfoque se basa en la optimización de procesos mediante datos, integrando soluciones en la nube para mejorar la eficiencia y escalabilidad de los sistemas, tanto en entornos corporativos como en mis propios emprendimientos tecnológicos.\n\nEstoy en constante aprendizaje y actualmente perfecciono mi inglés para ampliar mis oportunidades en el ámbito Data & AI.";

  // Split the text into paragraphs if there are natural breaks, or use as a single block.
  // For now, treating as a single block. Can be enhanced to split by newline characters if present in original and desired.
  const paragraphs = aboutText.split('\n\n').filter(p => p.trim() !== '');


  return (
    <section className="py-16 md:py-20 px-4 sm:px-6" id="about">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Acerca de Mí
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 md:p-10"
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 