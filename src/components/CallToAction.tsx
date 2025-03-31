
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg animate-gradient-x"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate the Web3 Competition?</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of competitors already winning on the most competitive Web3 platform. Start earning rewards today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-crypto-purple hover:bg-purple-700 text-white">
              Start Competing Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
