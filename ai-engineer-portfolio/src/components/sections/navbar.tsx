import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(8px)']
  );

  const darkTextColor = useTransform(
    scrollY,
    [0, 50],
    [1, 0]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', '0 4px 20px rgba(0, 0, 0, 0.1)']
  );

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'dark:bg-gray-900/90 dark:backdrop-blur-md' : 'dark:bg-transparent'
      }`}
      style={{
        backgroundColor,
        backdropFilter,
        boxShadow
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#home" className="flex items-center gap-2 font-bold text-xl">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-md bg-violet-600 flex items-center justify-center text-white"
              >
                AI
              </motion.div>
              <motion.span
                className="dark:text-white"
                style={{
                  opacity: darkTextColor,
                  color: scrolled ? '#111827' : '#FFFFFF'
                }}
              >
                AIDev
              </motion.span>
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                } dark:text-white`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-violet-600 text-primary-foreground hover:bg-violet-700 h-10 px-4 py-2"
            >
              Descargar CV
            </a>
          </nav>

          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <Menu className={`h-6 w-6 ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  } dark:text-white`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4">
                    <span className="font-bold text-xl">Menú</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="space-y-4 py-4 flex-grow">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2 px-4 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-4 flex gap-4 border-t border-gray-200 dark:border-gray-700">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
