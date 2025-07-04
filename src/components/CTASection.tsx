
import { Button } from '@/components/ui/button';
import { Rocket, Star, Github } from 'lucide-react';

export const CTASection = () => {
  const handleBuildResumeAgent = () => {
    // Start building resume agent functionality
    console.log('Building resume agent...');
    alert('Welcome to Resume Agent Builder! 🎯');
  };

  const handleViewSourceCode = () => {
    // Redirect to GitHub profile
    window.open('https://github.com/DhruvRanna', '_blank');
  };

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6 animate-bounce">
              <span style={{ color: '#f59e0b' }}>🎯</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Let AI Apply So You Don't Have To.
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Tailor. Apply. Get Hired.
              <br />
              <span className="text-blue-400 font-semibold">Your dream job is just one click away.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={handleBuildResumeAgent}
                className="w-full sm:w-auto px-6 md:px-8 py-6 md:py-8 text-base md:text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 animate-pulse shadow-2xl shadow-blue-500/25 text-white max-w-xs"
              >
                <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                <span className="truncate">Build My Resume Agent →</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleViewSourceCode}
                className="w-full sm:w-auto px-6 md:px-8 py-6 md:py-8 text-base md:text-lg border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View Source Code
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-400 text-sm md:text-base">Applications Sent</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-gray-400 text-sm md:text-base">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-400 mb-2">2,500+</div>
                <div className="text-gray-400 text-sm md:text-base">Jobs Landed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            <span className="text-gray-400 text-sm md:text-base">Trusted by 1000+ job seekers</span>
          </div>
          <div className="text-gray-400 hidden md:block">•</div>
          <div className="text-gray-400 text-sm md:text-base">Featured on Product Hunt</div>
          <div className="text-gray-400 hidden md:block">•</div>
          <div className="text-gray-400 text-sm md:text-base">500+ GitHub stars</div>
        </div>
      </div>
    </section>
  );
};
