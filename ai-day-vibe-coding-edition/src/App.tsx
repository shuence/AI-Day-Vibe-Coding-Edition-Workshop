import React from 'react';
import { Toaster as AiDayToaster } from "@/components/ui/toaster";
import { Toaster as AiDaySonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";
import ParticipantView from "./pages/ParticipantView";
import IdCardDemo from "./pages/IdCardDemo";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      {/* Ai Day : Vibe Coding - Code the Vibe */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AiDayToaster />
          <AiDaySonner />
          <BrowserRouter>
            <Routes>
              {/* Ai Day : Vibe Coding - Code the Vibe */}
              <Route path="/" element={<Index />} />
              <Route path="/participant/:id" element={<ParticipantView />} />
              <Route path="/id-cards" element={<IdCardDemo />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
