
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 glow-bg animate-pulse-glow"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-crypto-purple opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-crypto-blue opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-crypto-purple to-crypto-blue animate-gradient-x">
            Compete & Win in the Web3 Arena
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Join the ultimate blockchain competition platform. Trade, stake, and climb the leaderboard to win crypto rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-crypto-purple hover:bg-purple-700 text-white">
              Start Competing
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-crypto-purple">$2.5M+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Rewards</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-crypto-blue">24K+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-crypto-indigo">150+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Competitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
