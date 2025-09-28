import { Shield, Award, Clock, Users, Star, CheckCircle } from "lucide-react";

export function Footer() {
  const trustBadges = [
    {
      icon: Shield,
      title: "Licensed & Regulated",
      description: "All casinos are properly licensed",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Instant Payouts",
      description: "Fast cryptocurrency withdrawals",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Expert Reviews",
      description: "Reviewed by gambling professionals",
      color: "text-purple-500"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Only highest quality casinos",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "Updated Daily",
      description: "Fresh reviews and information",
      color: "text-orange-500"
    },
    {
      icon: CheckCircle,
      title: "100% Anonymous",
      description: "No KYC required for most casinos",
      color: "text-emerald-500"
    }
  ];

  const quickLinks = [
    { name: "Top Casinos", href: "#casinos" },
    { name: "Best Bonuses", href: "#bonuses" },
    { name: "Casino Reviews", href: "#reviews" },
    { name: "Gambling Guides", href: "#guides" }
  ];

  const resources = [
    { name: "How to Choose a Casino", href: "#" },
    { name: "Crypto Gambling Guide", href: "#" },
    { name: "Bonus Terms Explained", href: "#" },
    { name: "Safety Tips", href: "#" }
  ];

  const legal = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Contact Us", href: "#" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12">
        {/* Trust Badges Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-center">Why Trust Our Reviews?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-all"
                >
                  <div className={`p-2 rounded-lg bg-muted ${badge.color} mb-2`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-medium mb-1">{badge.title}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                SBG
              </div>
              <span className="text-lg font-bold">SMART BETTING GUIDE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for crypto casino reviews and gambling guides.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs">📧</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs">🐦</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs">📘</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsible Gambling Notice */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-destructive text-lg">⚠️</div>
              <div className="space-y-2">
                <h3 className="font-semibold text-destructive">Responsible Gambling</h3>
                <p className="text-sm text-muted-foreground">
                  Gambling can be addictive. Please play responsibly. If you feel you may have a gambling problem, 
                  please seek help from organizations like Gamblers Anonymous or contact your local helpline.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a 
                    href="https://www.gamblersanonymous.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Gamblers Anonymous
                  </a>
                  <a 
                    href="https://www.begambleaware.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    BeGambleAware
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © 2025 Smart Betting Guide. All rights reserved. | 
            <span className="ml-2">18+ Only | Gambling can be addictive, please play responsibly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
