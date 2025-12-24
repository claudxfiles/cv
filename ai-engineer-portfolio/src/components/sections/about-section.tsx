import type React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const aboutText = "Ingeniero Civil Industrial, especialista en Ciencia de Datos, Inteligencia Artificial y gestión de riesgos. Cuento con experiencia en el desarrollo de modelos predictivos, automatización de procesos y análisis avanzado de datos aplicados a prevención de fraudes y evaluación de riesgos en banca. Actualmente me desempeño como Senior Fraud Specialist en Banco BCI, trabajando con Python, SQL y plataformas cloud para apoyar decisiones estratégicas, optimizar campañas y fortalecer sistemas de control. Me motiva aportar en proyectos de IA que generen impacto real en la gestión de riesgos y el negocio.\n\nFormación académica: Ingeniero Civil Industrial con especialización en Ciencia de Datos, Ingeniería de Datos y Cloud Computing. Diplomados en Data Science y Data Engineering. Actualmente cursando el Magíster en Inteligencia Artificial en la Universidad Adolfo Ibáñez (UAI), programa acreditado por la CNA hasta 2027.";

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