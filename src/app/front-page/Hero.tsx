"use client";

import { Coins, Dice6, Trophy, Star, Zap, Shield, Bitcoin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Top Crypto Casino Sites in 2025
              </h1>
              
              <p className="text-base text-blue-100 leading-relaxed max-w-2xl">
                Crypto casinos are changing the game — and we&apos;re here to help you play smarter. 
                From lightning-fast payouts to crypto-exclusive bonuses, we&apos;ve reviewed and ranked 
                only the most trusted crypto sites out there. Forget sketchy operators — we cut 
                through the noise so you can focus on what really matters: enjoying the thrill, 
                without the risk.
              </p>
            </div>

            {/* Reviewer/Checker Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-3">
                <span className="font-medium">Reviewed by:</span>
                <div className="flex -space-x-2">
                  {["Ramona", "Aleksa", "Irina", "Nikola"].map((name) => (
                    <div
                      key={name}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-semibold border-2 border-white/20"
                    >
                      {name[0]}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Checked by:</span>
                <span>Natalia, Jelena</span>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Main Crypto Coins */}
              <div className="absolute top-8 right-16 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                <Bitcoin className="w-12 h-12 text-yellow-900" />
              </div>
              
              {/* Casino Dice */}
              <div className="absolute top-4 left-8 w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                <Dice6 className="w-10 h-10 text-white" />
              </div>
              
              {/* Trophy/Award */}
              <div className="absolute bottom-20 left-12 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110">
                <Trophy className="w-10 h-10 text-amber-900" />
              </div>
              
              {/* Coins Stack */}
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110">
                <Coins className="w-8 h-8 text-white" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-16 left-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Star className="w-6 h-6 text-yellow-300" />
              </div>
              
              <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Zap className="w-5 h-5 text-blue-300" />
              </div>
              
              <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Shield className="w-4 h-4 text-green-300" />
              </div>
              
              <div className="absolute top-24 left-1/4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sparkles className="w-3 h-3 text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
