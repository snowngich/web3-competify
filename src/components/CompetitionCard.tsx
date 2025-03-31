
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface CompetitionCardProps {
  title: string;
  description: string;
  prize: string;
  participants: number;
  maxParticipants: number;
  endDate: string;
  image: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  description,
  prize,
  participants,
  maxParticipants,
  endDate,
  image
}) => {
  const participationPercentage = (participants / maxParticipants) * 100;
  
  return (
    <Card className="overflow-hidden crypto-card">
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 pb-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Prize Pool</span>
          <span className="font-bold text-crypto-purple">{prize}</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>{participants} participants</span>
            <span>{maxParticipants} max</span>
          </div>
          <Progress value={participationPercentage} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-gray-500">Ends {endDate}</div>
        <Button className="bg-crypto-purple hover:bg-purple-700 text-white">Enter</Button>
      </CardFooter>
    </Card>
  );
};

export default CompetitionCard;
