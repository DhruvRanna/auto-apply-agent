
import { Button } from '@/components/ui/button';
import { Rocket, Star, Github } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
            <div className="text-6xl mb-6 animate-bounce">🎯</div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Let AI Apply So You Don't Have To.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tailor. Apply. Get Hired.
              <br />
              <span className="text-blue-400 font-semibold">Your dream job is just one click away.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="px-12 py-8 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 animate-pulse shadow-2xl shadow-blue-500/25"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Build My Resume Agent →
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-8 text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transform hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-400">Applications Sent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-gray-400">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">2,500+</div>
                <div className="text-gray-400">Jobs Landed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-gray-400">Trusted by 1000+ job seekers</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="text-gray-400">Featured on Product Hunt</div>
          <div className="text-gray-400">•</div>
          <div className="text-gray-400">500+ GitHub stars</div>
        </div>
      </div>
    </section>
  );
};
