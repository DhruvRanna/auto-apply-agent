
import { useState, useEffect } from 'react';
import { Bell, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const NotificationDemo = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    message: string;
    type: 'success' | 'info' | 'processing';
    timestamp: string;
  }>>([]);

  const demoNotifications = [
    {
      message: 'Your resume has been tailored for Google - SWE Intern',
      type: 'info' as const,
    },
    {
      message: 'Cover letter generated for Amazon - Frontend Developer',
      type: 'processing' as const,
    },
    {
      message: 'Application to Meta submitted successfully!',
      type: 'success' as const,
    },
    {
      message: 'Netflix application reviewed - Response pending',
      type: 'info' as const,
    }
  ];

  useEffect(() => {
    let notificationIndex = 0;
    
    const showNotification = () => {
      const notification = demoNotifications[notificationIndex];
      const newNotification = {
        id: Date.now(),
        message: notification.message,
        type: notification.type,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 2)]);
      notificationIndex = (notificationIndex + 1) % demoNotifications.length;

      // Auto remove notification after 1.5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(notif => notif.id !== newNotification.id));
      }, 1500);
    };

    // Show first notification immediately
    showNotification();
    
    // Then show new notifications every 5 seconds
    const interval = setInterval(showNotification, 5000);

    return () => clearInterval(interval);
  }, []);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="w-4 h-4 text-green-400" />;
      case 'processing':
        return <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />;
      default:
        return <Bell className="w-4 h-4 text-blue-400" />;
    }
  };

  const getNotificationColors = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-400/40 bg-green-900/80 shadow-green-500/20';
      case 'processing':
        return 'border-blue-400/40 bg-blue-900/80 shadow-blue-500/20';
      default:
        return 'border-purple-400/40 bg-purple-900/80 shadow-purple-500/20';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            flex items-center gap-3 p-4 rounded-xl border backdrop-blur-md
            ${getNotificationColors(notification.type)}
            transform transition-all duration-300 animate-slide-in-right
            max-w-sm shadow-2xl
            bg-black/70 border-white/20
          `}
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex-shrink-0">
            {getNotificationIcon(notification.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white font-semibold leading-tight drop-shadow-lg">
              {notification.message}
            </p>
            <p className="text-xs text-gray-300 mt-1 drop-shadow-md">
              {notification.timestamp}
            </p>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="flex-shrink-0 w-8 h-8 p-0 hover:bg-white/20 rounded-full"
            onClick={() => removeNotification(notification.id)}
          >
            <X className="w-3 h-3 text-gray-300 hover:text-white" />
          </Button>
        </div>
      ))}
    </div>
  );
};
