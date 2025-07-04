
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Star, Check } from 'lucide-react';

export const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: 'GPT-4o', color: 'bg-green-500/20 text-green-300' },
    { name: 'LangChain', color: 'bg-blue-500/20 text-blue-300' },
    { name: 'RAG', color: 'bg-purple-500/20 text-purple-300' },
    { name: 'Puppeteer', color: 'bg-orange-500/20 text-orange-300' },
    { name: 'Supabase', color: 'bg-teal-500/20 text-teal-300' },
    { name: 'Pinecone', color: 'bg-pink-500/20 text-pink-300' },
    { name: 'React', color: 'bg-cyan-500/20 text-cyan-300' },
    { name: 'Tailwind CSS', color: 'bg-indigo-500/20 text-indigo-300' }
  ];

  const skills = [
    'LLMs & Prompt Engineering',
    'Natural Language Processing',
    'Web Automation & Scraping',
    'AI/ML Integration',
    'Modern Frontend Development',
    'Database Design & Management'
  ];

  const benefits = [
    'Add this project to your resume',
    'Share with recruiters as your custom AI Agent',
    'Post on GitHub for maximum visibility',
    'Showcase cutting-edge tech skills'
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Tech Stack & Resume Power
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Built with cutting-edge technologies that will make your resume stand out
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Tech Stack */}
          <Card className={`
            bg-black/20 backdrop-blur-xl border border-white/10
            transform transition-all duration-1000
            ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
          `} style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white flex items-center gap-2">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                Built With
              </h3>
              
              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={tech.name}
                    className={`
                      ${tech.color} border-0 px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium
                      transform transition-all duration-500 hover:scale-110 backdrop-blur-sm
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Skills Demonstrated:</h4>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className={`
                      flex items-center gap-3 text-sm md:text-base text-gray-300
                      transform transition-all duration-500
                      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                    `}
                    style={{ transitionDelay: `${(index + techStack.length) * 100}ms` }}
                  >
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resume Benefits */}
          <Card className={`
            bg-black/20 backdrop-blur-xl border border-purple-500/20
            transform transition-all duration-1000 delay-300
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
          `} style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white flex items-center gap-2">
                <Github className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                Career Impact
              </h3>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className={`
                      flex items-start gap-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg
                      transform transition-all duration-500 hover:bg-white/10
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}
                    style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white font-medium text-sm md:text-base">✅ {benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 md:p-6 bg-purple-500/10 backdrop-blur-sm rounded-xl border border-purple-500/20">
                <h4 className="font-bold text-white mb-2 text-sm md:text-base">🚀 Pro Tip:</h4>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  This project demonstrates your ability to integrate multiple cutting-edge AI technologies, 
                  showing employers you're at the forefront of tech innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
