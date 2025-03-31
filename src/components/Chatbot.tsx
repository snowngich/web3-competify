
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { MessageCircle, Send, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const chatbotData = {
  intro: "Hi there! I'm your Web3Compete assistant. How can I help you today?",
  knowledge: {
    platform: "Web3Compete is a competitive platform for Web3 enthusiasts to participate in challenges and earn crypto rewards.",
    competitions: "We offer various competitions including Trading Tournaments, Staking Challenges, NFT Battle Royale, Arbitrage Masters, Yield Farming Derby, and DeFi Portfolio Challenges.",
    rewards: "Prizes range from USDC to ETH and exclusive NFTs depending on the competition.",
    joining: "To join a competition, click the 'Enter' button on any competition card and connect your wallet.",
    wallet: "We support most popular Web3 wallets including MetaMask, WalletConnect, and Coinbase Wallet.",
    leaderboard: "Our leaderboard tracks the top performers across all competitions, updated in real-time.",
    dashboard: "Your dashboard shows your active competitions, rewards, and overall performance stats."
  }
};

// Simple pattern matching for chatbot responses
const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
    return chatbotData.intro;
  }
  if (lowerInput.includes('what is') && (lowerInput.includes('web3compete') || lowerInput.includes('platform'))) {
    return chatbotData.knowledge.platform;
  }
  if (lowerInput.includes('competition') || lowerInput.includes('challenge')) {
    return chatbotData.knowledge.competitions;
  }
  if (lowerInput.includes('prize') || lowerInput.includes('reward')) {
    return chatbotData.knowledge.rewards;
  }
  if (lowerInput.includes('join') || lowerInput.includes('enter') || lowerInput.includes('participate')) {
    return chatbotData.knowledge.joining;
  }
  if (lowerInput.includes('wallet') || lowerInput.includes('connect')) {
    return chatbotData.knowledge.wallet;
  }
  if (lowerInput.includes('leaderboard') || lowerInput.includes('ranking')) {
    return chatbotData.knowledge.leaderboard;
  }
  if (lowerInput.includes('dashboard') || lowerInput.includes('profile') || lowerInput.includes('account')) {
    return chatbotData.knowledge.dashboard;
  }
  
  // Default response
  return "I'm not sure I understand. You can ask me about competitions, rewards, how to join, wallet connections, the leaderboard, or your dashboard.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: chatbotData.intro, isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { 
      id: messages.length + 1, 
      text: inputValue, 
      isUser: true 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot typing with slight delay
    setTimeout(() => {
      const botResponse = { 
        id: messages.length + 2, 
        text: generateResponse(inputValue), 
        isUser: false 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      toast({
        title: "Chatbot activated",
        description: "Ask me anything about Web3Compete!",
      });
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Button 
            className="rounded-full w-14 h-14 bg-crypto-purple hover:bg-purple-700 text-white shadow-lg"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[340px] sm:w-[400px] p-0 flex flex-col h-[520px]">
          <SheetHeader className="border-b py-3 px-4">
            <div className="flex items-center justify-between">
              <SheetTitle>Web3Compete Assistant</SheetTitle>
              <Sheet.Close asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </Sheet.Close>
            </div>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser 
                      ? 'bg-crypto-purple text-white' 
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t p-4 flex gap-2">
            <Input
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage} 
              className="bg-crypto-purple hover:bg-purple-700 text-white"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Chatbot;
