import type React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'souldream',
    title: 'SoulDream',
    description: 'SoulDream AI - Plataforma All-in-One para Gestión Personal. SoulDream AI es una plataforma integral para la gestión personal que combina tareas, hábitos, finanzas, fitness y más en una sola aplicación, potenciada por inteligencia artificial.',
    tags: ['React', 'Node.js', 'IA'],
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    link: 'https://www.souldream.cl/',
    github: 'https://github.com/claudxfiles/SoulDream',
    featured: true,
  },
  {
    id: 'analisis-de-jardines-apis',
    title: 'Análisis de Jardines APIs',
    description: 'APIs para una aplicación relacionada con el análisis de jardines.',
    tags: ['API', 'Python', 'Flask'],
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    link: 'https://github.com/claudxfiles/analisis-de-jardines-apis',
    github: 'https://github.com/claudxfiles/analisis-de-jardines-apis',
  },
  {
    id: 'app-learning',
    title: 'App Learning',
    description: 'Un proyecto de aplicación de aprendizaje.',
    tags: ['TypeScript', 'React', 'Vite'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    link: 'https://github.com/claudxfiles/app_learning',
    github: 'https://github.com/claudxfiles/app_learning',
    featured: true,
  },
  {
    id: 'pet-hotel1',
    title: 'Pet Hotel 1',
    description: 'Una aplicación web para un hotel de mascotas.',
    tags: ['TypeScript', 'React', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb',
    link: 'https://github.com/claudxfiles/Pet-Hotel1',
    github: 'https://github.com/claudxfiles/Pet-Hotel1',
  },
  {
    id: 'infra-ai-backend',
    title: 'Despliegue de Infraestructura AI/Backend',
    description: 'Experiencia en la configuración y gestión de servidores, bases de datos, y despliegue de modelos de IA y servicios backend.',
    tags: ["Docker", "Linux", "VPS", "CI/CD", "Backend"],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: '#',
    featured: true,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6" id="projects">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mi trabajo en IA y aprendizaje automático. Cada proyecto demuestra diferentes habilidades y enfoques para resolver problemas complejos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <img
                      src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-violet-600 text-white text-xs px-2 py-1 rounded-md flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Destacado
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <HoverCard key={`${project.id}-${tag}`}>
                        <HoverCardTrigger asChild>
                          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md cursor-pointer">
                            {tag}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-48 p-3">
                          <p className="text-sm">
                            {tag === 'TensorFlow' && 'Framework popular de aprendizaje profundo'}
                            {tag === 'React' && 'Biblioteca de JavaScript para frontend'}
                            {tag === 'D3.js' && 'Biblioteca para visualización de datos'}
                            {tag === 'Python' && 'Lenguaje de programación de propósito general'}
                            {tag === 'PyTorch' && 'Framework de aprendizaje profundo'}
                            {tag === 'spaCy' && 'Biblioteca para procesamiento de lenguaje natural'}
                            {tag === 'OpenAI Gym' && 'Kit de herramientas para aprendizaje por refuerzo'}
                            {tag === 'JAX' && 'Biblioteca de computación numérica de alto rendimiento'}
                            {tag === 'Stable Diffusion' && 'Modelo de difusión latente para generación de imágenes'}
                            {tag === 'Flask' && 'Framework web ligero de Python'}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Código
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline">
            Ver Todos los Proyectos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
