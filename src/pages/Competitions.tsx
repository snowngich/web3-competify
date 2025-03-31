
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompetitionCard from '@/components/CompetitionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    image: 'https://images.unsplash.com/photo-1658902089025-e505dd91426b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Arbitrage Masters',
    description: 'Find the best arbitrage opportunities across chains.',
    prize: '7,500 USDC',
    participants: 205,
    maxParticipants: 300,
    endDate: 'Dec 20, 2023',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Yield Farming Derby',
    description: 'Maximize yield farming returns within the competition period.',
    prize: '2,500 USDC',
    participants: 389,
    maxParticipants: 600,
    endDate: 'Dec 12, 2023',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'DeFi Portfolio Challenge',
    description: 'Build the best DeFi portfolio with virtual funds.',
    prize: '4,000 USDC',
    participants: 521,
    maxParticipants: 750,
    endDate: 'Dec 25, 2023',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop'
  }
];

const Competitions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-6">Competitions</h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="w-full md:w-64">
            <Input type="text" placeholder="Search competitions..." />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="trading">Trading</SelectItem>
                <SelectItem value="staking">Staking</SelectItem>
                <SelectItem value="nft">NFTs</SelectItem>
                <SelectItem value="defi">DeFi</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="popular">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="prize">Highest Prize</SelectItem>
                <SelectItem value="ending">Ending Soon</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="active" className="mb-8">
          <TabsList>
            <TabsTrigger value="active">Active Competitions</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="my">My Competitions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.map((competition, index) => (
                <CompetitionCard key={index} {...competition} />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Upcoming competitions will be announced soon!</p>
              <Button variant="outline" className="mt-4">Get Notified</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Past competition results will appear here.</p>
              <Button variant="outline" className="mt-4">View Archive</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="my" className="mt-6">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Connect your wallet to view your competitions</p>
              <Button className="mt-4 bg-crypto-purple hover:bg-purple-700 text-white">Connect Wallet</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Competitions;
