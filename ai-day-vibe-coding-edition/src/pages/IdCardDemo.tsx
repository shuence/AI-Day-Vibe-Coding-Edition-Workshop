import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AiDayIdCard from '@/components/VercelIdCard';

const IdCardDemo = () => {
  const demoCards = [
    {
      name: "Shubham Pitekar",
      title: "Developer",
      organization: "CALEX",
      id: "010800"
    },
    {
      name: "Alex Johnson",
      title: "Designer",
      organization: "ACME INC",
      id: "020304"
    },
    {
      name: "Maria Garcia",
      title: "Data Scientist",
      organization: "TECHNO",
      id: "345678"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow container mx-auto py-20 px-4">
        <Link to="/" className="inline-flex items-center text-vibe-blue hover:underline mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to Home
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Ai Day : Vibe coding ID Cards</h1>
          <p className="text-gray-600 text-center mb-8">See you online on June 05</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoCards.map((card, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-300">
                <AiDayIdCard
                  name={card.name}
                  title={card.title}
                  organization={card.organization}
                  id={card.id}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">Ready to get your own ID card?</h2>
            <Button asChild className="button-primary">
              <Link to="/#register">Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IdCardDemo;
