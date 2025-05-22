import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Triangle } from 'lucide-react';

interface AiDayIdCardProps {
  name: string;
  title: string;
  organization: string;
  eventDate?: string;
  id: string;
  virtual?: boolean;
}

const AiDayIdCard: React.FC<AiDayIdCardProps> = ({
  name,
  title,
  organization,
  eventDate = "June 05",
  id = "010800",
  virtual = true
}) => {
  return (
    <Card className="w-full max-w-sm mx-auto bg-black text-white rounded-lg overflow-hidden border-0 shadow-lg">
      {/* Top section with name, title and org */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-400">Ai Day : Vibe coding ID</span>
          <svg className="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z"/>
          </svg>
        </div>
        <h2 className="text-4xl font-bold">{name}</h2>
        <h3 className="text-xl mb-2">{title}</h3>
        <div className="text-gray-400 text-lg uppercase font-semibold">
          {organization}
        </div>
      </div>

      {/* Wavy separator */}
      <div className="h-10 relative overflow-hidden">
        <div className="absolute inset-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-24 w-full">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-gray-800"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-gray-800"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-gray-800"
            ></path>
          </svg>
        </div>
      </div>

      {/* Bottom section with ID and virtual label */}
      <CardContent className="pt-0 px-6 pb-6 bg-gray-800 relative">
        <div className="text-gray-400 uppercase font-semibold mb-2 text-sm">
          VIRTUAL 
        </div>
        <div className="text-3xl font-mono font-semibold">
          #{id}
        </div>
        <div className="absolute bottom-4 right-4">
          <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,0 24,24 0,24" fill="white"/>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiDayIdCard;
