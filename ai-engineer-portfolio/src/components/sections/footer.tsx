import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ type: 'error', message: result.error || 'Error al enviar el mensaje. Intenta de nuevo.' });
      }
    } catch (error) {
      console.error("Error en handleSubmit:", error);
      setFormStatus({ type: 'error', message: 'Error al conectar con el servidor. Intenta de nuevo.' });
    }
    setIsSending(false);
  };

  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Conectemos</h2>
              <p className="text-gray-400 max-w-md">
                Siempre estoy interesado en nuevas oportunidades, colaboraciones y desafíos. No dudes en contactarme si quieres que trabajemos juntos o simplemente charlar.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <a href="mailto:claudio.alcaman@gmail.com" className="hover:text-violet-400 transition-colors">
                  claudio.alcaman@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-violet-400" />
                <span>+569 56020860</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-violet-400" />
                <span>Santiago, Chile</span>
              </li>
            </ul>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/claudxfiles"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/claudio-alcaman-morales-7b0653135/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800 border-gray-700 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Enviar un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400">
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400">
                        Correo Electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="Tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                      Asunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Asunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Tu mensaje"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={isSending}>
                      {isSending ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </div>
                  {formStatus && (
                    <div className={`mt-4 text-sm ${
                      formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} AIDev. Todos los derechos reservados.</p>
          <p className="mt-2">
            Creado con Next.js, Tailwind CSS y Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
