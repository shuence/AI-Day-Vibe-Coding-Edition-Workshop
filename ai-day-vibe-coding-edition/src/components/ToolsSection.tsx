import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ToolsSection: React.FC = () => {
 const toolCategories = {
  aiCodeAssistants: [
    {
      name: "GitHub Copilot",
      description: "AI code completion tool by GitHub and OpenAI for faster development.",
      logo: "https://github.githubassets.com/images/modules/site/copilot/copilot.png"
    },
    {
      name: "Gemini Code Assist",
      description: "Google’s AI assistant for real-time coding and debugging help.",
      logo: "https://lh3.googleusercontent.com/Xtt-WZqHiV8OjACMMMr6wMdoMGE7bABi-HYujupzevufo1kiHUFQZukI1JILhjItrPNrDWLq6pfd=s600-w600"
    },
    {
      name: "Claude",
      description: "AI assistant by Anthropic with strong reasoning for code and tasks.",
      logo: "https://Claude.ai/favicon.ico"
    },
    {
      name: "ChatGPT",
      description: "Versatile AI for coding, productivity, writing, and more by OpenAI.",
      logo: "https://img.icons8.com/?size=512&id=4KY3tfAid4dZ&format=png"
    },
    {
      name: "Cline",
      description: "Lightweight developer-focused AI assistant for code and commands.",
      logo: "https://cline.bot/assets/icons/apple-touch-icon.png"
    }
  ],
  aiIDEsAndEditors: [
    {
      name: "Cursor",
      description: "AI-native code editor built for modern software engineering teams.",
      logo: "https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp"
    },
    {
      name: "Windsurf",
      description: "Windsurf AI is an agentic code editor, an AI-powered Integrated Development Environment (IDE)",
      logo: "https://windsurf.com/favicon.png"
    },
    {
      name: "VS Code",
      description: "Popular open-source editor with support for AI coding extensions.",
      logo: "https://code.visualstudio.com/assets/images/code-stable.png"
    },
    {
      name: "Replit",
      description: "Collaborative cloud-based IDE with integrated AI and real-time dev tools.",
      logo: "https://play-lh.googleusercontent.com/baV9RL2D0iV8JkTtCzSxeLf6XxCJMWQYbyXMqyQfc0OQGtjkCyUenUbLb5tefYfMxfU"
    }
  ],
  fullstackPlatforms: [
    {
      name: "Lovable",
      description: "AI-powered platform to design and build full-stack apps from prompts.",
      logo: "https://lovable.dev/favicon.ico"
    },
    {
      name: "Bolt AI",
      description: "AI platform for building full-stack applications with minimal code.",
      logo: "https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg"
    },
    {
      name: "v0.dev",
      description: "Generate production-ready web UIs using natural language input.",
      logo: "https://v0.dev/assets/apple-icon.png"
    },
    {
      name: "a0.dev",
      description: "AI platform for rapid prototyping of full-stack applications.",
      logo: "https://a0.dev/favicon.ico"
    }
  ],
  backendAndDatabases: [
    {
      name: "Supabase",
      description: "Open-source backend platform offering instant APIs and auth.",
      logo: "https://supabase.com/dashboard/img/supabase-logo.svg"
    },
    {
      name: "Firebase",
      description: "Google’s backend platform with real-time database and auth services.",
      logo: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png"
    }
  ],
  versionControlAndDeployment: [
    {
      name: "Git",
      description: "Distributed version control system widely used for code collaboration.",
      logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
    },
    {
      name: "GitHub",
      description: "Platform for hosting and managing Git repositories collaboratively.",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
      name: "Vercel",
      description: "Hosting and deployment platform optimized for frontend frameworks.",
      logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
    },
    {
      name: "Netlify",
      description: "Platform for deploying and automating modern web applications.",
      logo: "https://www.netlify.com/favicon.ico"
    }
  ]
};


  const categoryTitles = {
    aiCodeAssistants: "AI Code Assistants",
    aiIDEsAndEditors: "AI-Powered IDEs & Editors",
    fullstackPlatforms: "No-Code/Low-Code & Full-Stack Platforms",
    backendAndDatabases: "Backend & Database Services",
    versionControlAndDeployment: "Version Control & Deployment"
  };

  return (
    <section id="tools" className="section py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold gradient-text mb-4">Tools You'll Explore</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn and apply AI-assisted tools that are reshaping how developers build modern applications
        </p>
      </div>

      {Object.entries(toolCategories).map(([category, tools]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">{categoryTitles[category]}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <Card key={i} className="overflow-hidden card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{tool.name}</h3>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 text-center">
        <p className="text-gray-600 italic">
          All tools and platforms will be explained in the workshop — no prior experience required.
        </p>
      </div>
    </section>
  );
};

export default ToolsSection;
