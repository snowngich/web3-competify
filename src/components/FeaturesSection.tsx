
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin, Wallet, Link } from 'lucide-react';

const features = [
  {
    icon: <Bitcoin className="h-10 w-10 text-crypto-purple" />,
    title: 'Crypto Rewards',
    description: 'Win real cryptocurrency tokens by competing in trading competitions and challenges.'
  },
  {
    icon: <Wallet className="h-10 w-10 text-crypto-blue" />,
    title: 'Secure Wallet Integration',
    description: 'Connect your favorite Web3 wallet for seamless transactions and rewards distribution.'
  },
  {
    icon: <Link className="h-10 w-10 text-crypto-indigo" />,
    title: 'Cross-Chain Competitions',
    description: 'Participate in competitions across multiple blockchains to maximize your earning potential.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-2">Why Choose Web3Compete</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Our platform offers unique advantages to help you stand out in the competitive Web3 landscape.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="crypto-card">
            <CardHeader className="pb-2">
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-1 w-20 bg-gradient-to-r from-crypto-purple to-crypto-blue rounded-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
