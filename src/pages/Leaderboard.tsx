
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const leaderboardData = [
  { rank: 1, username: 'Satoshi', address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', score: 9580, winRate: '68%', change: 'up' },
  { rank: 2, username: 'Vitalik', address: '0x8B3a7DC2E2535d4ae53Fb456a53c159eDFc1eE81', score: 8750, winRate: '63%', change: 'up' },
  { rank: 3, username: 'CryptoKing', address: '0x2E7c5e7c7CcBb9A4C29Cf640C482b3a7Fb2b9f1A', score: 7920, winRate: '59%', change: 'neutral' },
  { rank: 4, username: 'BlockchainGuru', address: '0xB6a9F7DDC36D7F7B2d11586EF033Af10962cc4Dd0', score: 7650, winRate: '57%', change: 'down' },
  { rank: 5, username: 'TokenMaster', address: '0x3F9c6eE1fa3B6C3146aF6AD60B9c988aF7E5e', score: 7210, winRate: '55%', change: 'up' },
  { rank: 6, username: 'CryptoPunk42', address: '0x6F3a8C421B89A6b1f3D162891377C8635DF3c1a7', score: 6850, winRate: '52%', change: 'up' },
  { rank: 7, username: 'EtherQueen', address: '0x1D2B954024772C2B8d69bF88BcCEe1AD52a3f526', score: 6720, winRate: '50%', change: 'down' },
  { rank: 8, username: 'DeFiWhale', address: '0x7F367cC41522cE07553e823bf3be79A889DEaD29', score: 6590, winRate: '49%', change: 'up' },
  { rank: 9, username: 'MetaTrader', address: '0x8c76eCdD6fDd06b56e2Bf2Ae2304A4D2fF27c026', score: 6340, winRate: '47%', change: 'neutral' },
  { rank: 10, username: 'ChainMaster', address: '0x4CB54BA98F6A5B24e7c12f0F441F22416E9B3B1C', score: 6120, winRate: '45%', change: 'down' },
  { rank: 11, username: 'ShibaHolder', address: '0xA3C28F5E204CC5CACCB18ABE59C7EF9349A8FF83', score: 5980, winRate: '44%', change: 'up' },
  { rank: 12, username: 'TokenBaron', address: '0x9D5DF30F7fEe3365dF2c5A9D75bd22F8a9FD5D07', score: 5840, winRate: '43%', change: 'neutral' },
  { rank: 13, username: 'MoonShot', address: '0x2B71cc952C8e5F4Bb9C28C83583eF14830738067', score: 5720, winRate: '42%', change: 'up' },
  { rank: 14, username: 'BitMaster', address: '0xD32Db39b8BcE3E7dF01802CA5F584b814Bf2CAaB', score: 5630, winRate: '41%', change: 'down' },
  { rank: 15, username: 'CryptoDragon', address: '0x5A3e85EAc3669CE4dFcB7e4bE4494D77D7d2dcad', score: 5590, winRate: '40%', change: 'up' },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-6">Global Leaderboard</h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="w-full md:w-64">
            <Input type="text" placeholder="Search by username..." />
          </div>
          <div className="w-full md:w-[180px]">
            <Select defaultValue="all-time">
              <SelectTrigger>
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="today">Today</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="global" className="mb-8">
          <TabsList>
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
            <TabsTrigger value="nft">NFT</TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="mt-6">
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 dark:bg-gray-900">
                    <TableHead className="w-20 text-center">Rank</TableHead>
                    <TableHead>Competitor</TableHead>
                    <TableHead className="hidden sm:table-cell">Address</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Win Rate</TableHead>
                    <TableHead className="text-center w-24">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((entry) => (
                    <TableRow key={entry.rank} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <TableCell className="text-center font-medium">
                        {entry.rank === 1 ? (
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100 text-yellow-800 font-bold">1</span>
                        ) : entry.rank === 2 ? (
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-800 font-bold">2</span>
                        ) : entry.rank === 3 ? (
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-800 font-bold">3</span>
                        ) : (
                          entry.rank
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{entry.username}</TableCell>
                      <TableCell className="hidden sm:table-cell font-mono text-xs text-muted-foreground">{entry.address}</TableCell>
                      <TableCell className="text-right font-bold">{entry.score.toLocaleString()}</TableCell>
                      <TableCell className="hidden md:table-cell text-right">{entry.winRate}</TableCell>
                      <TableCell className="text-center">
                        {entry.change === 'up' ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            ↑ Up
                          </Badge>
                        ) : entry.change === 'down' ? (
                          <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                            ↓ Down
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400">
                            • Same
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="trading" className="mt-6">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Trading competition leaderboard will appear here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="staking" className="mt-6">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Staking competition leaderboard will appear here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="nft" className="mt-6">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">NFT competition leaderboard will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
