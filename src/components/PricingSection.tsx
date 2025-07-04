
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Rocket } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Free Tier',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '3 applications per day',
        'Basic resume optimization',
        'Cover letter generation',
        'Email notifications',
        'Application tracking'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro Tier',
      price: '$29',
      period: 'per month',
      description: 'For serious job seekers',
      features: [
        'Unlimited applications',
        'Advanced AI customization',
        'Multi-platform automation',
        'Priority support',
        'Advanced analytics dashboard',
        'Email + SMS notifications',
        'Interview preparation tips',
        'Success rate optimization'
      ],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'default' as const,
      popular: true
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Start free, upgrade when you're ready to land more opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`
                bg-black/20 backdrop-blur-xl border border-white/10
                relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black/30
                ${plan.popular ? 'ring-2 ring-blue-400/50' : ''}
              `}
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 md:px-4 md:py-1 flex items-center gap-1 text-xs md:text-sm">
                    <Star className="w-3 h-3 md:w-4 md:h-4" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6 md:pb-8">
                <CardTitle className="text-xl md:text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
                  {plan.description}
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm md:text-base">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 md:space-y-6">
                <ul className="space-y-2 md:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-300 text-sm md:text-base"
                    >
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  size="lg"
                  className={`
                    w-full py-4 md:py-6 text-sm md:text-lg font-semibold transition-all duration-300
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25' 
                      : 'border-2 border-white/20 hover:border-white/40 hover:bg-white/5'
                    }
                  `}
                >
                  {plan.popular && <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />}
                  {plan.buttonText}
                </Button>

                {plan.popular && (
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-400">
                      🎯 <strong className="text-white">7-day free trial</strong> • Cancel anytime
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-8 md:mt-12">
          <Card className="bg-black/20 backdrop-blur-xl border border-green-500/20 max-w-2xl mx-auto" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                <span className="text-xl md:text-2xl">💰</span>
                <h3 className="text-base md:text-lg font-bold text-white">30-Day Money-Back Guarantee</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Not getting interviews? We'll refund every penny. No questions asked.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
