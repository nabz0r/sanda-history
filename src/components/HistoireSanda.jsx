import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Scroll, BookOpen, Flask, Routes, Scale, Clock, GraduationCap, Map, BookMarked, BeakerIcon, Archive } from 'lucide-react';

const HistoireSanda = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navigationItems = [
    { id: 'intro', label: 'Introduction', icon: <BookMarked className="h-4 w-4" /> },
    { id: 'origins', label: 'Origines', icon: <Scroll className="h-4 w-4" /> },
    { id: 'golden-age', label: 'Âge d\'Or', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'preparation', label: 'Préparation', icon: <Flask className="h-4 w-4" /> },
    { id: 'medical-texts', label: 'Textes Médicaux', icon: <Archive className="h-4 w-4" /> },
    { id: 'trade', label: 'Commerce', icon: <Routes className="h-4 w-4" /> },
    { id: 'modern', label: 'Ère Moderne', icon: <Clock className="h-4 w-4" /> }
  ];

  return (
    <div className="flex">
      <nav className="fixed w-64 h-screen overflow-y-auto bg-white shadow-lg p-4">
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center p-2 rounded-lg transition-colors
                  ${activeSection === item.id ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ml-64 flex-1 p-6 bg-gray-50">
        <section id="intro" className="mb-12">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">
                Histoire Complète de l'Huile de Sanda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                L'huile de sanda, extraite de l'Uromastyx (dhab), représente un exemple fascinant 
                de l'intersection entre médecine traditionnelle, culture bédouine et science médiévale 
                islamique. Cette page retrace son histoire millénaire, documentée à travers les âges 
                par de nombreux érudits et praticiens.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HistoireSanda;