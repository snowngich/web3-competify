
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bitcoin, Wallet } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Bitcoin className="h-8 w-8 text-crypto-purple" />
          <span className="text-xl font-bold">Web3Compete</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-crypto-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/competitions" className="text-sm font-medium hover:text-crypto-purple transition-colors">
            Competitions
          </Link>
          <Link to="/leaderboard" className="text-sm font-medium hover:text-crypto-purple transition-colors">
            Leaderboard
          </Link>
          <Link to="/rewards" className="text-sm font-medium hover:text-crypto-purple transition-colors">
            Rewards
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span>Connect Wallet</span>
          </Button>
          <Button size="sm" className="bg-crypto-purple hover:bg-purple-700 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
