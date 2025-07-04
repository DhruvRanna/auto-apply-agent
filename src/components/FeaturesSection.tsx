
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, FileText, Users, Bell, Search, Settings, Star } from 'lucide-react';

export const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate features in waves
          setTimeout(() => setVisibleFeatures([1, 2]), 200);
          setTimeout(() => setVisibleFeatures([1, 2, 3, 4]), 400);
          setTimeout(() => setVisibleFeatures([1, 2, 3, 4, 5, 6]), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: FileText,
      title: 'GPT-4o-Powered Resume Customization',
      description: 'Intelligent resume tailoring that matches job requirements perfectly',
      iconColor: 'text-blue-400'
    },
    {
      id: 2,
      icon: Users,
      title: 'Cover Letter Generator',
      description: 'AI-crafted cover letters based on job description tone and requirements',
      iconColor: 'text-purple-400'
    },
    {
      id: 3,
      icon: Search,
      title: 'Job Keyword Extraction',
      description: 'RAG-based analysis to identify and incorporate critical keywords',
      iconColor: 'text-green-400'
    },
    {
      id: 4,
      icon: Settings,
      title: 'Puppeteer-Based Auto-Application',
      description: 'Seamless automation that applies to jobs across multiple platforms',
      iconColor: 'text-orange-400'
    },
    {
      id: 5,
      icon: Bell,
      title: 'Live Notifications & Email Alerts',
      description: 'Real-time updates on application status and responses',
      iconColor: 'text-teal-400'
    },
    {
      id: 6,
      icon: Star,
      title: 'Application Tracker Dashboard',
      description: 'Comprehensive analytics and tracking for all your applications',
      iconColor: 'text-yellow-400'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Smart Features
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Powered by cutting-edge AI technology to give you the competitive edge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id}
                className={`
                  bg-black/20 backdrop-blur-xl border border-white/10 
                  transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-white/20 hover:bg-black/30
                  group cursor-pointer
                  ${visibleFeatures.includes(feature.id) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                  }
                `}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <CardHeader className="pb-3 md:pb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3 md:mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-green-400">
                    <Check className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span className="text-xs md:text-sm font-medium">Active</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
