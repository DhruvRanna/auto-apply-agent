
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Rocket, Check, Bell } from 'lucide-react';

export const DemoSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    { title: 'Job Link Pasted', icon: '🔗', status: 'Google - Software Engineer Intern' },
    { title: 'Resume Uploaded', icon: '📄', status: 'resume_john_doe.pdf' },
    { title: 'AI Processing', icon: '🧠', status: 'Analyzing job requirements...' },
    { title: 'Content Generated', icon: '✍️', status: 'Resume & cover letter tailored' },
    { title: 'Auto-Application', icon: '🤖', status: 'Submitting to Google...' },
    { title: 'Success!', icon: '✅', status: 'Application submitted successfully!' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Live Demo Preview
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Watch how our AI agent works in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Demo Dashboard */}
          <Card className="bg-black/20 backdrop-blur-xl border border-white/10" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg md:text-xl">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                AI Job Agent Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              {/* Job Input */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-gray-400">Job URL</label>
                <div className="p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <code className="text-xs md:text-sm text-blue-300 break-all">
                    https://careers.google.com/jobs/results/123456/
                  </code>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-gray-400">Resume</label>
                <div className="p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center gap-3">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white truncate">resume_john_doe.pdf</span>
                  <Badge className="ml-auto bg-green-500/20 text-green-300 text-xs">Uploaded</Badge>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-2 md:space-y-3">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-center gap-3 p-2 md:p-3 rounded-lg transition-all duration-500 backdrop-blur-sm
                      ${index <= currentStep ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/5 border border-white/5'}
                      ${index === currentStep ? 'animate-pulse' : ''}
                    `}
                  >
                    <div className={`
                      text-lg md:text-2xl transition-all duration-500 
                      ${index === currentStep && isAnimating ? 'animate-spin' : ''}
                    `}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white text-sm md:text-base">{step.title}</div>
                      <div className="text-xs md:text-sm text-gray-400 truncate">{step.status}</div>
                    </div>
                    {index < currentStep && (
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button 
                className={`
                  w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm md:text-base
                  ${currentStep === steps.length - 1 ? 'animate-pulse' : ''}
                `}
                disabled={currentStep < steps.length - 1}
              >
                {currentStep === steps.length - 1 ? '🎉 Application Submitted!' : 'Processing...'}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content Preview */}
          <div className="space-y-4 md:space-y-6">
            <Card className="bg-black/20 backdrop-blur-xl border border-purple-500/20" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  AI-Generated Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-white text-sm md:text-base">Tailored Resume Summary</h4>
                  <div className="p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg text-xs md:text-sm text-gray-300 leading-relaxed">
                    "Passionate Computer Science student with strong foundation in algorithms, 
                    data structures, and <span className="text-blue-400 font-medium">machine learning</span>. 
                    Experience with <span className="text-green-400 font-medium">Python, Java, and React</span> 
                    from internships and projects..."
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-white text-sm md:text-base">Cover Letter Preview</h4>
                  <div className="p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg text-xs md:text-sm text-gray-300 leading-relaxed">
                    "Dear Google Hiring Team,<br/><br/>
                    I am excited to apply for the Software Engineer Intern position. 
                    My background in <span className="text-yellow-400 font-medium">full-stack development</span> 
                    and passion for <span className="text-pink-400 font-medium">innovative technology</span> 
                    aligns perfectly with Google's mission..."
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Notifications */}
            <Card className="bg-black/20 backdrop-blur-xl border border-green-500/20" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
                  <Bell className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                  Live Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-3 p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <span className="text-xs md:text-sm text-white flex-1">Resume optimized for Google SWE Intern</span>
                    <span className="text-xs text-gray-400">2:34 PM</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <span className="text-xs md:text-sm text-white flex-1">Application submitted successfully</span>
                    <span className="text-xs text-gray-400">2:35 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
