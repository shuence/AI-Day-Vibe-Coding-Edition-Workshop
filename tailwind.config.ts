import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        },        // Google I/O Connect Theme Colors
        vibe: {
          blue: "#4285F4",    // Google Blue
          red: "#EA4335",     // Google Red
          yellow: "#FBBC04",  // Google Yellow
          green: "#34A853",   // Google Green
          dark: "#202124",    // Google Dark Gray
          light: "#F8F9FA",   // Google Light Gray
          teal: "#00C4B4",    // Google IO Teal
          purple: "#673AB7"   // Additional Purple
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-5px)"
          }
        },
        "typing": {
          "0%": {
            width: "0%"
          },
          "100%": {
            width: "100%"
          }
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "morph": {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        "scale-up": {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "typing": "typing 3.5s steps(40, end)",
        "bounce": "bounce 2s ease-in-out infinite",
        "pulse": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "morph": "morph 8s ease-in-out infinite",
        "gradient-shift": "gradient-shift 5s ease infinite",
        "scale-up": "scale-up 0.3s ease-in-out"
      },      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC04 100%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "google-gradient": "linear-gradient(90deg, #4285F4, #34A853, #FBBC04, #EA4335)",
        "io-pattern": "repeating-linear-gradient(45deg, #4285F4 0%, #34A853 25%, #FBBC04 50%, #EA4335 75%, #4285F4 100%)",
        "dots-pattern": "radial-gradient(#4285F4 2px, transparent 2px), radial-gradient(#FBBC04 2px, transparent 2px)",
        "wave-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234285F4' fill-opacity='0.5' d='M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,122.7C672,139,768,213,864,218.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
        "grid-pattern": "linear-gradient(to right, rgba(66, 133, 244, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 133, 244, 0.1) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
