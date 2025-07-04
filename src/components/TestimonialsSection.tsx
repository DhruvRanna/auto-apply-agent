
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CS Student @ Stanford',
      content: 'This got me 3 interviews in a week. The AI-generated cover letters were so personalized, I thought I wrote them myself!',
      avatar: '👩‍💻',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Bootcamp Graduate',
      content: 'The AI-generated cover letter matched perfectly with the job requirements. Landed my first dev job in 2 months!',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Recent Graduate',
      content: 'Best tool for lazy applicants 😎. I applied to 50+ jobs while binge-watching Netflix. Got 12 responses!',
      avatar: '🎓',
      rating: 5
    },
    {
      name: 'Alex Kim',
      role: 'Career Changer',
      content: 'Switched from marketing to tech. The resume optimization helped me get past ATS systems I never could before.',
      avatar: '🔄',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Join thousands who've automated their way to dream jobs
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-8 md:mb-12">
          <Card className="bg-black/20 backdrop-blur-xl border border-white/20" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6 animate-bounce">
                {testimonials[currentTestimonial].avatar}
              </div>
              
              <div className="flex justify-center mb-4 md:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="text-gray-300">
                <div className="font-semibold text-base md:text-lg text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm md:text-base">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`
                  w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300
                  ${index === currentTestimonial 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`
                bg-black/20 backdrop-blur-xl border border-white/10
                cursor-pointer transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-black/30
                ${index === currentTestimonial ? 'ring-2 ring-blue-400/50' : ''}
              `}
              onClick={() => setCurrentTestimonial(index)}
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{testimonial.avatar}</div>
                <div className="text-xs md:text-sm font-semibold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-400 mb-2 md:mb-3">
                  {testimonial.role}
                </div>
                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-2 h-2 md:w-3 md:h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
