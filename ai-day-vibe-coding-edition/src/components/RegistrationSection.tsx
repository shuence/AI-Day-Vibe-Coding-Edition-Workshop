import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { QrCode, Share2, Download, Github, Linkedin, IdCard } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import AiDayIdCard from './VercelIdCard';

const RegistrationSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showIdCard, setShowIdCard] = useState(false);
  const [idCardData, setIdCardData] = useState({
    fullName: "",
    participantId: "",
    qrValue: "",
  });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    rollNo: "",
    githubProfile: "",
    linkedinProfile: "",
    whyJoin: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const generateParticipantId = () => {
    // Generate a unique participant ID: GHV-<year>-<random 6 digits>
    const year = new Date().getFullYear();
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `GHV-${year}-${randomDigits}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here we would normally send data to a backend
      // For now we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate unique ID and QR code value
      const participantId = generateParticipantId();
      const qrValue = `https://aiday.shuence.com/participant/${participantId}`;
      
      setIdCardData({
        fullName: formData.fullName,
        participantId: participantId,
        qrValue: qrValue,
      });
      
      setShowIdCard(true);
      
      toast({
        title: "Registration Successful!",
        description: "You've successfully registered for the Ai Day : Vibe coding!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
      });
      setShowIdCard(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadIdCard = () => {
    // This is a placeholder for actual download functionality
    // In a real implementation, you would generate an image from the ID card HTML
    toast({
      title: "ID Card Downloaded",
      description: "Your ID card has been downloaded successfully!",
    });
  };

  const shareIdCard = () => {
    // This is a placeholder for actual sharing functionality
    if (navigator.share) {
      navigator.share({
        title: 'My Ai Day : Vibe coding ID Card',
        text: `Check out my participant ID: ${idCardData.participantId}`,
        url: `https://aiday.shuence.com/participant/${idCardData.participantId}`,
      }).then(() => {
        toast({
          title: "Shared Successfully",
          description: "Your ID card has been shared!",
        });
      }).catch(console.error);
    } else {
      toast({
        title: "Sharing Not Supported",
        description: "Your browser doesn't support the Web Share API. Try copying the link directly.",
      });
    }
  };

  return (
    <section id="register" className="section py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-6">Register Now</h2>
            <p className="text-lg text-gray-600 mb-6">
              Secure your spot in this exclusive AI Day: Vibe Coding Edition – Code the Vibe and take the first step towards becoming an AI-enhanced developer.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-vibe-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Event Date</h3>
                  <p className="text-gray-600">Last week of May or First week of June | 10:30 AM - 5:30 PM</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-vibe-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Capgemini Hall, DIEMS</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-vibe-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Capacity</h3>
                  <p className="text-gray-600">Limited to 80 participants</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-amber-50 border border-amber-200 rounded-lg p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p className="text-amber-700">
                Registration closes on May 25, 2025, or when we reach capacity. Early registration is recommended to secure your spot.
              </p>
            </div>
            
            <div className="mt-8 p-6 github-card">
              <div className="flex items-center mb-2">
                <IdCard className="w-5 h-5 mr-2 text-vibe-blue" />
                <h3 className="font-bold text-lg">Digital ID Card</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Upon registration, you'll receive a personalized digital ID card with a unique QR code that you can download and share on social media.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center bg-vibe-dark/50 rounded-md px-3 py-1">
                  <QrCode size={16} className="text-vibe-blue mr-1" />
                  <span className="text-sm">Unique QR Code</span>
                </div>
                <div className="flex items-center bg-vibe-dark/50 rounded-md px-3 py-1">
                  <Share2 size={16} className="text-vibe-blue mr-1" />
                  <span className="text-sm">Shareable</span>
                </div>
                <div className="flex items-center bg-vibe-dark/50 rounded-md px-3 py-1">
                  <Download size={16} className="text-vibe-blue mr-1" />
                  <span className="text-sm">Downloadable</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Registration Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input 
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rollNo">Roll Number / Registration ID *</Label>
                <Input 
                  id="rollNo"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleInputChange}
                  placeholder="Enter your roll number or registration ID"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch *</Label>
                  <Select 
                    name="branch" 
                    onValueChange={(value) => handleSelectChange("branch", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">CSE</SelectItem>
                      <SelectItem value="cse-aiml">CSE (AI/ML)</SelectItem>
                      <SelectItem value="extc">EXTC</SelectItem>
                      <SelectItem value="mechanical">Mechanical</SelectItem>
                      <SelectItem value="civil">Civil</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="year">Year *</Label>
                  <Select 
                    name="year" 
                    onValueChange={(value) => handleSelectChange("year", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="githubProfile">GitHub Profile (Optional)</Label>
                <div className="flex">
                  <div className="flex items-center bg-gray-100 px-3 rounded-l-md border-y border-l border-gray-300">
                    <Github size={18} className="text-gray-600" />
                  </div>
                  <Input 
                    id="githubProfile"
                    name="githubProfile"
                    value={formData.githubProfile}
                    onChange={handleInputChange}
                    placeholder="username"
                    className="rounded-l-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedinProfile">LinkedIn Profile (Optional)</Label>
                <div className="flex">
                  <div className="flex items-center bg-gray-100 px-3 rounded-l-md border-y border-l border-gray-300">
                    <Linkedin size={18} className="text-gray-600" />
                  </div>
                  <Input 
                    id="linkedinProfile"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    placeholder="username"
                    className="rounded-l-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whyJoin">Why do you want to join this event? *</Label>
                <Textarea 
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in learning about GitHub Universe & Vercel..."
                  required
                  className="min-h-[100px]"
                />
              </div>
              
              <Button type="submit" className="button-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register Now"}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                By registering, you agree to bring your own laptop and actively participate in all sessions.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* ID Card Dialog */}
      <Dialog open={showIdCard} onOpenChange={setShowIdCard}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Event ID Card</DialogTitle>
            <DialogDescription>
              Your registration is confirmed. Here's your unique ID card for the event.
            </DialogDescription>
          </DialogHeader>
            <div className="mt-4">
            <AiDayIdCard
              name={idCardData.fullName}
              title="Developer"
              organization="DIEMS"
              eventDate="May/June"
              id={idCardData.participantId.split('-').pop() || "010800"}
              virtual={true}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button onClick={downloadIdCard} className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download ID Card
            </Button>
            <Button onClick={shareIdCard} variant="outline" className="flex-1">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegistrationSection;
