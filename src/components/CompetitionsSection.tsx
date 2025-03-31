
import React from 'react';
import CompetitionCard from './CompetitionCard';

const competitions = [
  {
    title: 'Trading Tournament',
    description: 'Compete with the best traders across DeFi protocols.',
    prize: '10,000 USDC',
    participants: 675,
    maxParticipants: 1000,
    endDate: 'Dec 15, 2023',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Staking Challenge',
    description: 'Lock in your assets and compete for the highest APY.',
    prize: '5,000 USDC',
    participants: 458,
    maxParticipants: 800,
    endDate: 'Dec 5, 2023',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'NFT Battle Royale',
    description: 'Your NFT collection vs others - who has the best ROI?',
    prize: '3 ETH + NFT Prize',
    participants: 312,
    maxParticipants: 500,
    endDate: 'Nov 30, 2023',
    image: 'https://images.unsplash.com/photo-1646671380691-f5c7025a0266?q=80&w=1000&auto=format&fit=crop'
  }
];

const CompetitionsSection = () => {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-2">Active Competitions</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Join our current challenges and compete to win crypto rewards.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {competitions.map((competition, index) => (
          <CompetitionCard key={index} {...competition} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a href="/competitions" className="text-crypto-purple hover:text-purple-700 font-medium inline-flex items-center">
          View all competitions
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CompetitionsSection;
