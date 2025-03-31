
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface LeaderboardEntry {
  rank: number;
  username: string;
  address: string;
  score: number;
  winRate: string;
  change: 'up' | 'down' | 'neutral';
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, username: 'Satoshi', address: '0xd8dA...6Dd9', score: 9580, winRate: '68%', change: 'up' },
  { rank: 2, username: 'Vitalik', address: '0x8B3a...5e81', score: 8750, winRate: '63%', change: 'up' },
  { rank: 3, username: 'CryptoKing', address: '0x2E7c...9f1A', score: 7920, winRate: '59%', change: 'neutral' },
  { rank: 4, username: 'BlockchainGuru', address: '0xB6a9...4Dd0', score: 7650, winRate: '57%', change: 'down' },
  { rank: 5, username: 'TokenMaster', address: '0x3F9c...7E5e', score: 7210, winRate: '55%', change: 'up' },
];

const LeaderboardSection = () => {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-10">Top Competitors</h2>
      
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
            {mockLeaderboard.map((entry) => (
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
      
      <div className="text-center mt-6">
        <a href="/leaderboard" className="text-crypto-purple hover:text-purple-700 text-sm font-medium inline-flex items-center">
          View full leaderboard
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default LeaderboardSection;
