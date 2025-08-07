import React from 'react';
import { ShieldCheck, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: ['Overview', 'AI Engine', 'Capabilities', 'Fin Insights', 'Fin Tasks', 'Pricing'],
  },
  {
    title: 'Research',
    links: ['AI Research'],
  },
  {
    title: 'Resources',
    links: ['Customers', 'Ideas Blog', 'Help Center', 'Security & safety'],
  },
  {
    title: 'Events',
    links: ['Pioneer', 'Built For You', 'Webinars'],
  },
];

const socialLinks = [
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'Youtube', icon: <Youtube size={20} />, href: '#' },
];

const Footer = () => {
  return (
    // The specific background color has been removed to let it blend with the page
    <footer className="text-white w-full relative overflow-hidden">
      
      {/* This new div creates the background gradient effect */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 100%, rgba(16, 185, 129, 0.1), transparent 40%)',
        }}
      ></div>

      {/* The original content now sits on top of the background */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section with link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 text-left">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* This is the new social media column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Follow us out there
            </h3>
            <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="text-gray-400 hover:text-white">
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom section with legal links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Tensor Base. An Intercom Product.</p>
          <div className="flex flex-wrap justify-center items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="flex items-center hover:text-white mt-2 sm:mt-0">
              <ShieldCheck size={16} className="mr-1.5" />
              Your Privacy Choices
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
