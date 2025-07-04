
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Live Demo Preview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how our AI agent works in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Demo Dashboard */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Rocket className="w-5 h-5 text-blue-400" />
                AI Job Agent Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Job Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Job URL</label>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <code className="text-sm text-blue-300">
                    https://careers.google.com/jobs/results/123456/
                  </code>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Resume</label>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white">resume_john_doe.pdf</span>
                  <Badge className="ml-auto bg-green-500/20 text-green-300">Uploaded</Badge>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg transition-all duration-500
                      ${index <= currentStep ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/5 border border-white/5'}
                      ${index === currentStep ? 'animate-pulse' : ''}
                    `}
                  >
                    <div className={`
                      text-2xl transition-all duration-500 
                      ${index === currentStep && isAnimating ? 'animate-spin' : ''}
                    `}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{step.title}</div>
                      <div className="text-sm text-gray-400">{step.status}</div>
                    </div>
                    {index < currentStep && (
                      <Check className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button 
                className={`
                  w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                  ${currentStep === steps.length - 1 ? 'animate-pulse' : ''}
                `}
                disabled={currentStep < steps.length - 1}
              >
                {currentStep === steps.length - 1 ? '🎉 Application Submitted!' : 'Processing...'}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content Preview */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  AI-Generated Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-white">Tailored Resume Summary</h4>
                  <div className="p-3 bg-white/5 rounded-lg text-sm text-gray-300">
                    "Passionate Computer Science student with strong foundation in algorithms, 
                    data structures, and <span className="text-blue-400 font-medium">machine learning</span>. 
                    Experience with <span className="text-green-400 font-medium">Python, Java, and React</span> 
                    from internships and projects..."
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-white">Cover Letter Preview</h4>
                  <div className="p-3 bg-white/5 rounded-lg text-sm text-gray-300">
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
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Bell className="w-5 h-5 text-green-400" />
                  Live Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white">Resume optimized for Google SWE Intern</span>
                    <span className="text-xs text-gray-400 ml-auto">2:34 PM</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white">Application submitted successfully</span>
                    <span className="text-xs text-gray-400 ml-auto">2:35 PM</span>
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
