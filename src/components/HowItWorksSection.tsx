
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one
          setTimeout(() => setVisibleSteps([1]), 200);
          setTimeout(() => setVisibleSteps([1, 2]), 600);
          setTimeout(() => setVisibleSteps([1, 2, 3]), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      icon: '🧾',
      title: 'Upload Resume + Job Link',
      description: 'Paste job description → Upload existing resume',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 2,
      icon: '🧠',
      title: 'AI Customizes & Prepares Docs',
      description: 'Uses GPT-4o + RAG to match resume, tailor cover letter',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'Agent Applies On Your Behalf',
      description: 'Puppeteer automation logs into job portals, applies in real-time',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three simple steps to automate your entire job application process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-500/50 to-green-500/50 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <Card 
              key={step.id}
              className={`
                bg-gradient-to-br ${step.color} border ${step.borderColor} backdrop-blur-sm
                transform transition-all duration-700 hover:scale-105 hover:shadow-2xl
                ${visibleSteps.includes(step.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
                }
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center relative">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 animate-bounce" style={{ animationDelay: `${index * 300}ms` }}>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {step.id === 3 && (
                  <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm text-yellow-300">
                      ✨ <strong>Bonus:</strong> Real-time application status notifications!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
