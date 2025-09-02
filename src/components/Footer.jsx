import { Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logoFooter.svg';


const Footer = () => {
  return (
    <footer className="bg-primaryPink text-white">
      {/* Version Desktop */}
      <div className="hidden md:block">
        <div className="container font-semibold mx-auto px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Section gauche - Logo et description */}
            <div className="lg:col-span-1">
            <img src={logo} alt="logo" className=" h-16 mb-4" />
              <p className="text-white  leading-relaxed">
                Votre fleuriste de confiance, pour embellir chaque instant de votre vie
              </p>
            </div>

            {/* Section centre - Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-4">
                <a href="#" className="block text-white  text-lg">
                  Accueil
                </a>
                <a href="#" className="block text-white text-lg">
                  À propos de nous
                </a>
                <a href="#" className="block text-white  text-lg">
                  Nos produits
                </a>
                <a href="#" className="block text-white  text-lg">
                  Événements
                </a>
                <a href="#" className="block text-white  text-lg">
                  Contacts
                </a>
              </nav>
            </div>

            {/* Section droite - Contact et réseaux sociaux */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Contact info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-white/90">0560012565 / 0775547060</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <span className="text-white/90">Rue de Shakespeare, El Mouradia, Alger</span>
                  </div>
                </div>

                {/* Social media */}
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        <hr className="border-white w-full  border-[1px] my-4 mx-4" />
          {/* Copyright */}
          <div className="">
            <p className="text-center text-white">
              © 2025 Flower Paradise Events. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Version Mobile */}
      <div className="md:hidden font-semibold">
        <div className="px-6 py-8">
          {/* Logo et titre */}
          <img src={logo} alt="logo" className=" h-16 mb-4" />
          {/* Description */}
          <p className="text-white mb-8 leading-relaxed">
            Votre fleuriste de confiance, pour embellir chaque instant de votre vie
          </p>

          {/* Navigation */}
          <nav className="space-y-4 mb-8">
            <a href="#" className="block text-white">
              Accueil
            </a>
            <a href="#" className="block text-white">
              À propos de nous
            </a>
            <a href="#" className="block text-white">
              Nos produits
            </a>
            <a href="#" className="block text-white">
              Événements
            </a>
            <a href="#" className="block text-white">
              Contacts
            </a>
          </nav>

          {/* Contact info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white/90">0560012565 / 0775547060</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <span className="text-white/90">Rue de Shakespeare, El Mouradia, Alger</span>
            </div>
          </div>

          {/* Social media */}
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
         <hr className="border-white border-[1px] w-full my-2 " />

          {/* Copyright */}
          <div className="">
            <p className="text-center text-white text-sm">
              © 2025 Flower Paradise Events. All rights reserved
            </p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};


export default Footer;