
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Users, 
  Rocket, 
  Check, 
  Star, 
  Bell, 
  Search,
  Settings,
  Github,
  Mail
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { DemoSection } from '@/components/DemoSection';
import { TechStackSection } from '@/components/TechStackSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { NotificationDemo } from '@/components/NotificationDemo';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Notification Demo - Sticky */}
        <NotificationDemo />

        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Demo Section */}
        <DemoSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Final CTA Section */}
        <CTASection />

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>&copy; 2025 AI Job Agent. Land your dream job automatically.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
