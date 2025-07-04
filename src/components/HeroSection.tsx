
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, Star, Github } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Badge className="mb-8 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
            <Star className="w-4 h-4 mr-2" />
            AI-Powered Job Applications
          </Badge>
        </div>

        {/* Main Headline */}
        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            <span className="inline-block mr-4">💼</span>Land Your Dream Job.
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl">Automatically.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            AI Agent that reads job descriptions, tailors your resume, writes cover letters, 
            and even applies — <span className="text-blue-400 font-semibold">on your behalf</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 animate-pulse shadow-lg shadow-blue-500/25 text-white"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero Animation Placeholder */}
        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                {/* Resume Upload */}
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl">📄</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Upload Resume</h3>
                  <p className="text-xs md:text-sm text-gray-400">Your existing resume</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="text-blue-400 text-2xl md:text-3xl animate-pulse">→</div>
                </div>

                {/* AI Processing */}
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl animate-spin">🧠</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">AI Magic</h3>
                  <p className="text-xs md:text-sm text-gray-400">Tailors & applies</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="text-purple-400 text-2xl md:text-3xl animate-pulse">→</div>
                </div>

                {/* Job Success */}
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl">✅</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Get Hired</h3>
                  <p className="text-xs md:text-sm text-gray-400">Land your dream job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
