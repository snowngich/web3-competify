
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wallet, Bitcoin, Link } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$2,458</span>
                <span className="ml-2 text-sm text-green-500">+12.5%</span>
              </div>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span>This Month</span>
                <span className="ml-2 px-1.5 py-0.5 rounded bg-green-100 text-green-800">+$345</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Competition Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">#138</span>
                <span className="ml-2 text-sm text-green-500">+22 this week</span>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-1 text-xs">
                  <span>Progress to next rank</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Competitions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">3</span>
                <span className="ml-2 text-sm text-gray-500">of 5 max</span>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="rounded bg-green-100 px-2 py-1 text-xs text-green-800 text-center">Trading</div>
                <div className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 text-center">Staking</div>
                <div className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-800 text-center">NFT</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="competitions">My Competitions</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-4 border rounded-md mt-2">
            <h3 className="text-lg font-medium mb-4">Activity Overview</h3>
            <p className="text-gray-600 dark:text-gray-400">Connect your wallet to view your full dashboard and competition history.</p>
            
            <div className="mt-6 grid gap-4">
              <div className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Bitcoin className="h-5 w-5 text-crypto-purple" />
                </div>
                <div className="ml-4 flex-grow">
                  <h4 className="text-sm font-medium">Trading Competition Ended</h4>
                  <p className="text-xs text-gray-500">You placed #23 and earned 125 USDC</p>
                </div>
                <div className="text-xs text-gray-500">2 days ago</div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-crypto-blue" />
                </div>
                <div className="ml-4 flex-grow">
                  <h4 className="text-sm font-medium">Reward Claim</h4>
                  <p className="text-xs text-gray-500">You claimed 250 USDC from staking rewards</p>
                </div>
                <div className="text-xs text-gray-500">4 days ago</div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Link className="h-5 w-5 text-crypto-indigo" />
                </div>
                <div className="ml-4 flex-grow">
                  <h4 className="text-sm font-medium">New Competition Joined</h4>
                  <p className="text-xs text-gray-500">Entered the NFT Battle Royale competition</p>
                </div>
                <div className="text-xs text-gray-500">1 week ago</div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="competitions" className="p-4 border rounded-md mt-2">
            <h3 className="text-lg font-medium mb-4">My Competitions</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Track your active and completed competition performance.</p>
            <div className="text-center py-8">
              <p className="text-gray-500">Connect your wallet to view your competitions</p>
            </div>
          </TabsContent>
          
          <TabsContent value="wallet" className="p-4 border rounded-md mt-2">
            <h3 className="text-lg font-medium mb-4">Wallet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Connect your Web3 wallet to manage your assets and rewards.</p>
            <div className="text-center py-8">
              <Wallet className="mx-auto h-12 w-12 text-gray-400 mb-2" />
              <p className="text-gray-500">No wallet connected</p>
            </div>
          </TabsContent>
          
          <TabsContent value="rewards" className="p-4 border rounded-md mt-2">
            <h3 className="text-lg font-medium mb-4">Rewards</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Track and claim your competition rewards.</p>
            <div className="text-center py-8">
              <p className="text-gray-500">Connect your wallet to view your rewards</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
