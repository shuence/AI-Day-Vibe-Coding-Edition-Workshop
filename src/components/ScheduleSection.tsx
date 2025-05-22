import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

const ScheduleSection: React.FC = () => {
  const [view, setView] = useState<'timeline' | 'table'>('timeline');
    const scheduleItems: ScheduleItem[] = [
    {
      time: "10:30 – 11:00 AM",
      title: "Kickoff & Icebreaker",
      description: "Intro to modern AI coding workflows, GitHub & Copilot"
    },
    {
      time: "11:00 – 12:15 PM",
      title: "Vibe Stack Bootcamp",
      description: "Setup: GitHub, Cursor, Firebase/Supabase, Replit, Windsurf"
    },
    {
      time: "12:15 – 1:15 PM",
      title: "Lunch Break",
      description: "–"
    },
    {
      time: "1:15 – 1:45 PM",
      title: "Prompt Engineering 101",
      description: "Learn how to prompt AI tools for smart coding and design"
    },
    {
      time: "1:45 – 3:15 PM",
      title: "AI Build Session",
      description: "Students create mini project using Copilot and Firebase stack"
    },
    {
      time: "3:15 – 3:30 PM",
      title: "Break",
      description: "–"
    },
    {
      time: "3:30 – 4:45 PM",
      title: "Code Sprint",
      description: "Build phase continues – finalize, debug, and polish"
    },
    {
      time: "4:45 – 5:00 PM",
      title: "Vercel Deployment",
      description: "Go live with project using Vercel deployment"
    },
    {
      time: "5:00 – 5:30 PM",
      title: "GitHub + LinkedIn Challenge & Closing",
      description: "Final submission, GitHub push, LinkedIn post + closing ceremony & group photo"
    }
  ];

  return (
    <section id="schedule" className="section py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold gradient-text mb-4">Full Schedule</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A full day of AI-powered coding, learning, and building
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <Tabs defaultValue="timeline" className="w-full max-w-4xl">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger 
              value="timeline" 
              onClick={() => setView('timeline')}
              className="data-[state=active]:bg-vibe-purple data-[state=active]:text-white"
            >
              <Clock className="w-4 h-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger 
              value="table" 
              onClick={() => setView('table')}
              className="data-[state=active]:bg-vibe-purple data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Table
            </TabsTrigger>
          </TabsList>
          <TabsContent value="timeline" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {scheduleItems.map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-vibe-purple text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {i + 1}
                    </div>
                    
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-vibe-purple flex items-center">
                          <Clock className="w-4 h-4 mr-1.5 inline" />
                          {item.time}
                        </div>
                      </div>
                      <div className="text-lg font-semibold">{item.title}</div>
                      <div className="text-slate-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="table" className="mt-6">
            <Card>
              <CardHeader className="bg-vibe-purple text-white rounded-t-lg">
                <div className="grid grid-cols-12 text-left">
                  <div className="col-span-3 py-3 px-4">Time</div>
                  <div className="col-span-4 py-3 px-4">Session Title</div>
                  <div className="col-span-5 py-3 px-4">Description</div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {scheduleItems.map((item, i) => (
                    <div key={i} className="grid grid-cols-12 text-left hover:bg-gray-50">
                      <div className="col-span-3 py-4 px-4 font-medium text-vibe-purple">{item.time}</div>
                      <div className="col-span-4 py-4 px-4 font-semibold">{item.title}</div>
                      <div className="col-span-5 py-4 px-4 text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;
