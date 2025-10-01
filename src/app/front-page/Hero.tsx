"use client";

import { Coins, Dice6, Trophy, Star, Zap, Shield, Bitcoin, Sparkles } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(251,191,36,0.15),_transparent_45%)]" />

        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[180px]" />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-[200px]" />

        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(148,163,184,0.08)_0%,_rgba(96,165,250,0.12)_40%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(210deg,_rgba(20,184,166,0.12)_10%,_transparent_60%)]" />

        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,_black,_transparent_70%)]">
          <div className="animate-[pulse_12s_ease-in-out_infinite] h-full w-full bg-[radial-gradient(circle_at_20%_30%,_rgba(96,165,250,0.12),_transparent_45%)]" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100/90 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90 animate-pulse" />
                  Curated crypto picks
                </span>
                <SplitText
                  text="Top Crypto Casino Sites in 2025"
                  tag="h1"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                  splitType="words, chars"
                  delay={45}
                  duration={0.7}
                  from={{ opacity: 0, y: 32, rotateX: -30 }}
                  to={{ opacity: 1, y: 0, rotateX: 0 }}
                />
              </div>
              
              <SplitText
                text={
                  "Crypto casinos are changing the game — and we're here to help you play smarter. From lightning-fast payouts to crypto-exclusive bonuses, we've reviewed and ranked only the most trusted crypto sites. Forget sketchy operators — we cut through the noise so you can focus on what really matters: enjoying the thrill, without the risk."
                }
                tag="p"
                className="text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl"
                splitType="words"
                delay={25}
                duration={0.6}
                from={{ opacity: 0, y: 16 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.25}
                rootMargin="-150px"
                textAlign="left"
              />
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
            <div className="relative w-full h-[420px]">
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
