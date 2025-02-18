import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Scroll, 
  BookOpen, 
  TestTube, // Changé de Flask à TestTube
  Routes, 
  Clock, 
  Map,
  BookMarked,
  Beaker,
  Archive
} from 'lucide-react';

const HistoireSanda = () => {
  const [activeSection, setActiveSection] = useState('intro');

  // Configuration des sections avec react-intersection-observer
  const createSectionObserver = (sectionId) => {
    const { ref } = useInView({
      threshold: 0.5,
      onChange: (inView) => {
        if (inView) {
          setActiveSection(sectionId);
        }
      },
    });
    return ref;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navigationItems = [
    { id: 'intro', label: 'Introduction', icon: <BookMarked className="h-4 w-4" /> },
    { id: 'origins', label: 'Origines', icon: <Scroll className="h-4 w-4" /> },
    { id: 'golden-age', label: 'Âge d\'Or', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'preparation', label: 'Préparation', icon: <TestTube className="h-4 w-4" /> },
    { id: 'medical-texts', label: 'Textes Médicaux', icon: <Archive className="h-4 w-4" /> },
    { id: 'trade', label: 'Commerce', icon: <Routes className="h-4 w-4" /> },
    { id: 'modern', label: 'Ère Moderne', icon: <Clock className="h-4 w-4" /> }
  ];

  // Données pour les routes commerciales
  const tradeRoutes = [
    {
      name: "Route de l'Encens",
      description: "Principal axe commercial reliant le Yémen à la Méditerranée",
      points: ["Yémen", "Najran", "Médine", "Petra", "Gaza"],
      products: ["Huile de sanda", "Encens", "Myrrhe", "Épices"]
    },
    {
      name: "Route Maritime de la Mer Rouge",
      description: "Connexion maritime importante pour le commerce",
      points: ["Aden", "Djeddah", "Suez"],
      products: ["Produits médicinaux", "Parfums", "Tissus"]
    }
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
        <section id="intro" ref={createSectionObserver('intro')} className="mb-12">
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

        {/* Section Routes Commerciales */}
        <section id="trade" ref={createSectionObserver('trade')} className="mb-12">
          <Card className="bg-amber-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Map className="h-6 w-6" />
                <CardTitle className="text-xl text-amber-800">
                  Routes Commerciales Historiques
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {tradeRoutes.map((route, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-800">{route.name}</h3>
                    <p className="text-gray-700 mt-2">{route.description}</p>
                    <div className="mt-2">
                      <span className="text-sm font-medium text-gray-600">Points principaux :</span>
                      <p className="text-sm text-gray-600">{route.points.join(" → ")}</p>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium text-gray-600">Produits échangés :</span>
                      <p className="text-sm text-gray-600">{route.products.join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HistoireSanda;