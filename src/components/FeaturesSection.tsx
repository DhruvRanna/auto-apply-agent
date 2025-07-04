
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
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      id: 2,
      icon: Users,
      title: 'Cover Letter Generator',
      description: 'AI-crafted cover letters based on job description tone and requirements',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      id: 3,
      icon: Search,
      title: 'Job Keyword Extraction',
      description: 'RAG-based analysis to identify and incorporate critical keywords',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      id: 4,
      icon: Settings,
      title: 'Puppeteer-Based Auto-Application',
      description: 'Seamless automation that applies to jobs across multiple platforms',
      color: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400'
    },
    {
      id: 5,
      icon: Bell,
      title: 'Live Notifications & Email Alerts',
      description: 'Real-time updates on application status and responses',
      color: 'from-teal-500/20 to-blue-500/20',
      iconColor: 'text-teal-400'
    },
    {
      id: 6,
      icon: Star,
      title: 'Application Tracker Dashboard',
      description: 'Comprehensive analytics and tracking for all your applications',
      color: 'from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-400'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Smart Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge AI technology to give you the competitive edge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id}
                className={`
                  bg-gradient-to-br ${feature.color} border border-white/10 backdrop-blur-sm
                  transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-white/20
                  group cursor-pointer
                  ${visibleFeatures.includes(feature.id) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Active</span>
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
