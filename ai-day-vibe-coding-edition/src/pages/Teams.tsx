
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface Team {
  name: string;
  description: string;
  members: TeamMember[];
}

const TeamsPage: React.FC = () => {
  const teams: Team[] = [
    {
      name: "Organizing Committee",
      description: "The masterminds behind AI Day: Vibe Coding Edition",
      members: [
        {
          name: "Dr. Pankaj Sharma",
          role: "Event Director",
          bio: "AI researcher with 10+ years of experience in machine learning applications",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=1"
        },
        {
          name: "Anjali Mehta",
          role: "Program Coordinator",
          bio: "Ed-tech specialist focusing on AI integration in education",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=2"
        },
        {
          name: "Rohit Kapoor",
          role: "Technical Head",
          bio: "Full-stack developer and AI enthusiast with GitHub expertise",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=3"
        }
      ]
    },
    {
      name: "Mentors",
      description: "Industry experts guiding participants through the sprint",
      members: [
        {
          name: "Priya Nair",
          role: "AI Developer Advocate",
          bio: "Works with top AI tools including ChatGPT, Claude and Gemini",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=4"
        },
        {
          name: "Ahmed Khan",
          role: "GitHub Specialist",
          bio: "10+ years experience with GitHub workflows and version control",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=5"
        },
        {
          name: "Sophia Chen",
          role: "Prompt Engineering Expert",
          bio: "Author of 'Effective Prompting for Developers' and AI consultant",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=6"
        }
      ]
    },
    {
      name: "Technical Support",
      description: "The team ensuring everything runs smoothly on the day",
      members: [
        {
          name: "Vijay Reddy",
          role: "Infrastructure Lead",
          bio: "Cloud engineering specialist with expertise in real-time collaboration tools",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=7"
        },
        {
          name: "Neha Singh",
          role: "Developer Experience",
          bio: "Front-end expert specializing in React and modern JS frameworks",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=8"
        },
        {
          name: "Karthik Iyer",
          role: "DevOps Engineer",
          bio: "Specializes in seamless integration of AI tools in development workflows",
          imageUrl: "https://source.unsplash.com/random/300x300?portrait=9"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-vibe-dark to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Meet Our Teams</h1>
            <p className="text-xl text-gray-300">
              The incredible people behind AI Day: Vibe Coding Edition who make this event possible
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {teams.map((team, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className="flex items-center mb-12">
                <div className="w-16 h-1 bg-vibe-purple mr-6"></div>
                <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                  <Users className="mr-3 text-vibe-purple" />
                  {team.name}
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-10 max-w-3xl">
                {team.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.members.map((member, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-64 relative overflow-hidden">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-vibe-purple font-medium">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TeamsPage;
