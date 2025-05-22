import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { IdCard, QrCode, Calendar, MapPin, ArrowLeft } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AiDayIdCard from '@/components/VercelIdCard';

const ParticipantView = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch participant data from a database
  // using the ID. For this example, we'll use placeholder data
  const participant = {
    id: id || "GHV-2025-1234",
    name: "Example Participant",
    email: "participant@example.com",
    role: "Attendee",
    registered: true,
    registrationDate: "May 15, 2025",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow container mx-auto py-20 px-4">
        <Link to="/" className="inline-flex items-center text-vibe-blue hover:underline mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to Home
        </Link>
          <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Event Card</h2>
          
          <div className="mb-8">
            <AiDayIdCard
              name={participant.name}
              title="Developer"
              organization="CALEX"
              eventDate="June 05"
              id={participant.id.split('-').pop() || "010800"}
              virtual={true}
            />
          </div>
          
          <Card className="border border-gray-200 shadow-md">
            <CardHeader className="bg-gray-50">
              <h3 className="text-lg font-medium">Event Details</h3>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Calendar size={20} className="text-vibe-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Event Date</h4>
                    <p className="text-gray-600">June 05, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <IdCard size={20} className="text-vibe-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Registration Status</h4>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {participant.registered ? "Registered" : "Not Registered"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="bg-gray-50 border-t border-gray-200 flex justify-between">
              <p className="text-sm text-gray-500">
                Registered on: {participant.registrationDate}
              </p>
              <p className="text-sm font-medium text-vibe-blue">ai-day-vibe-coding.dev</p>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center">
            <h3 className="text-lg font-medium mb-2">Attending Ai Day : Vibe coding?</h3>
            <p className="text-gray-600 mb-4">Join us for an amazing day of coding, learning and networking!</p>
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

export default ParticipantView;
