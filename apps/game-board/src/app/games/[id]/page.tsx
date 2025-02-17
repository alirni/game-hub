import Link from 'next/link';
import {
  ArrowLeft,
  Trophy,
  Info,
  PlayCircle,
  Star,
  Settings,
  Share2,
  MessageSquare,
  Clock,
  Users,
  Medal,
  Gamepad2,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@game-hub/libs/ui/card';
import { Button } from '@game-hub/libs/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@game-hub/libs/ui/tabs';
import { Badge } from '@game-hub/libs/ui/badge';
import { Progress } from '@game-hub/libs/ui/progress';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@game-hub/libs/ui/select';

const games = {
  'memory-match': {
    title: 'Memory Match',
    description:
      'Challenge your memory in this classic card-matching game. Flip cards to find matching pairs and clear the board as quickly as possible. The game features various difficulty levels and themed card sets.',
    longDescription: `
      Memory Match is an engaging brain-training game that helps improve concentration and memory skills. 
      The game presents you with a grid of face-down cards, each hiding a symbol or image. Your task is to find 
      matching pairs by flipping two cards at a time.
      
      What makes our version special is the variety of themes and difficulty levels available. From cute animals 
      to challenging abstract patterns, there's something for everyone. As you progress, you'll unlock new card 
      sets and face increasingly complex layouts.
    `,
    difficulty: 'Medium',
    averagePlayTime: '5-10 minutes',
    totalPlays: 15234,
    rating: 4.5,
    lastUpdated: '2024-02-16',
    categories: ['Memory', 'Puzzle', 'Brain Training'],
    achievements: [
      {
        name: 'Speed Demon',
        description: 'Complete a game in under 1 minute',
        icon: '⚡',
      },
      {
        name: 'Perfect Memory',
        description: 'Complete a game with no mistakes',
        icon: '🎯',
      },
      {
        name: 'Theme Master',
        description: 'Win games with all available themes',
        icon: '🎨',
      },
    ],
    howToPlay: [
      'Click on any card to flip it over',
      'Try to find another card that matches',
      'If the cards match, they stay face up',
      "If they don't match, both cards flip face down",
      'Remember card positions to make matches more quickly',
      'Clear all pairs to win the game',
    ],
    tips: [
      'Start with corner cards to create reference points',
      "Try to remember the position of pairs even if they don't match immediately",
      'Take your time on the first few moves to memorize more cards',
      'Focus on one section of the board at a time',
    ],
    settings: {
      difficulties: ['Easy (4x4)', 'Medium (6x6)', 'Hard (8x8)'],
      themes: ['Classic', 'Animals', 'Space', 'Sports'],
      soundEffects: true,
      timerVisible: true,
    },
    highScores: [
      {
        date: '2024-02-16',
        score: '2:45',
        matches: 8,
        difficulty: 'Medium',
        player: 'Alex',
      },
      {
        date: '2024-02-15',
        score: '3:12',
        matches: 8,
        difficulty: 'Hard',
        player: 'Sam',
      },
      {
        date: '2024-02-14',
        score: '2:58',
        matches: 8,
        difficulty: 'Medium',
        player: 'Jordan',
      },
    ],
    reviews: [
      {
        user: 'MemoryPro',
        rating: 5,
        comment: 'Great for daily brain training!',
        date: '2024-02-15',
      },
      {
        user: 'GameMaster',
        rating: 4,
        comment: 'Love the different themes!',
        date: '2024-02-14',
      },
      {
        user: 'PuzzleFan',
        rating: 5,
        comment: 'Challenging but fun!',
        date: '2024-02-13',
      },
    ],
    relatedGames: [
      { id: 'puzzle-slide', title: 'Puzzle Slide', difficulty: 'Medium' },
      { id: 'quick-math', title: 'Quick Math', difficulty: 'Easy' },
      { id: 'word-scramble', title: 'Word Scramble', difficulty: 'Hard' },
    ],
  },
  // Add other games here...
};

const GamePage = ({ params }: { params: { id: string } }) => {
  const game = games[params.id as keyof typeof games];

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <main className='min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500 py-8'>
      <div className='container mx-auto px-4'>
        <Link
          href='/'
          className='inline-flex items-center text-gray-900 hover:text-gray-700 mb-8'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to Games
        </Link>

        <div className='grid gap-6'>
          {/* Main Game Info Card */}
          <Card>
            <CardHeader>
              <div className='flex justify-between items-start'>
                <div>
                  <CardTitle className='text-3xl'>{game.title}</CardTitle>
                  <div className='flex items-center gap-2 mt-2'>
                    {game.categories.map((category) => (
                      <Badge key={category} variant='secondary'>
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(game.rating)
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>
                    ({game.rating})
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img
                src='/placeholder.svg?height=400&width=800'
                alt={game.title}
                className='w-full h-[400px] object-cover rounded-lg mb-6'
              />
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
                <div className='flex items-center gap-2'>
                  <Clock className='h-4 w-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    {game.averagePlayTime}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='h-4 w-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    {game.totalPlays.toLocaleString()} plays
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Medal className='h-4 w-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    {game.difficulty}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Gamepad2 className='h-4 w-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    Updated {game.lastUpdated}
                  </span>
                </div>
              </div>
              <p className='text-lg text-muted-foreground whitespace-pre-line'>
                {game.longDescription}
              </p>
            </CardContent>
          </Card>

          {/* Game Controls */}
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Difficulty</CardTitle>
              </CardHeader>
              <CardContent>
                <Select defaultValue='medium'>
                  <SelectTrigger>
                    <SelectValue placeholder='Select difficulty' />
                  </SelectTrigger>
                  <SelectContent>
                    {game.settings.difficulties.map((diff) => (
                      <SelectItem key={diff} value={diff.toLowerCase()}>
                        {diff}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <Select defaultValue='classic'>
                  <SelectTrigger>
                    <SelectValue placeholder='Select theme' />
                  </SelectTrigger>
                  <SelectContent>
                    {game.settings.themes.map((theme) => (
                      <SelectItem key={theme} value={theme.toLowerCase()}>
                        {theme}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className='md:col-span-2'>
              <CardHeader>
                <CardTitle className='text-lg'>Quick Settings</CardTitle>
              </CardHeader>
              <CardContent className='flex gap-4'>
                <Button variant='outline' className='flex-1'>
                  <Settings className='mr-2 h-4 w-4' />
                  Game Settings
                </Button>
                <Button variant='outline' className='flex-1'>
                  <Share2 className='mr-2 h-4 w-4' />
                  Share Game
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue='scores' className='w-full'>
            <TabsList className='grid grid-cols-4 w-full md:w-[400px]'>
              <TabsTrigger value='scores'>Scores</TabsTrigger>
              <TabsTrigger value='achievements'>Achievements</TabsTrigger>
              <TabsTrigger value='help'>Help</TabsTrigger>
              <TabsTrigger value='reviews'>Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value='scores'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Trophy className='h-5 w-5' />
                    Latest High Scores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    {game.highScores.map((score, i) => (
                      <div
                        key={i}
                        className='flex items-center justify-between p-4 bg-muted rounded-lg'
                      >
                        <div>
                          <div className='font-medium'>{score.player}</div>
                          <div className='text-sm text-muted-foreground'>
                            Score: {score.score} | Matches: {score.matches}
                          </div>
                        </div>
                        <div className='text-right'>
                          <Badge>{score.difficulty}</Badge>
                          <div className='text-sm text-muted-foreground mt-1'>
                            {score.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='achievements'>
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>
                    Complete these challenges to earn badges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-4'>
                    {game.achievements.map((achievement) => (
                      <div
                        key={achievement.name}
                        className='flex items-center gap-4 p-4 bg-muted rounded-lg'
                      >
                        <div className='text-2xl'>{achievement.icon}</div>
                        <div>
                          <div className='font-medium'>{achievement.name}</div>
                          <div className='text-sm text-muted-foreground'>
                            {achievement.description}
                          </div>
                        </div>
                        <Progress value={33} className='ml-auto w-[100px]' />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='help'>
              <div className='grid gap-6 md:grid-cols-2'>
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Info className='h-5 w-5' />
                      How to Play
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className='list-decimal list-inside space-y-2'>
                      {game.howToPlay.map((step, i) => (
                        <li key={i} className='text-muted-foreground'>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pro Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2'>
                      {game.tips.map((tip, i) => (
                        <li key={i} className='flex items-start gap-2'>
                          <span className='text-primary'>💡</span>
                          <span className='text-muted-foreground'>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='reviews'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <MessageSquare className='h-5 w-5' />
                    Player Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    {game.reviews.map((review, i) => (
                      <div key={i} className='p-4 bg-muted rounded-lg'>
                        <div className='flex items-center justify-between mb-2'>
                          <div className='font-medium'>{review.user}</div>
                          <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-primary text-primary'
                                    : 'fill-muted text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className='text-muted-foreground'>
                          {review.comment}
                        </p>
                        <div className='text-sm text-muted-foreground mt-2'>
                          {review.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Games */}
          <Card>
            <CardHeader>
              <CardTitle>Related Games</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {game.relatedGames.map((relatedGame) => (
                  <Link key={relatedGame.id} href={`/games/${relatedGame.id}`}>
                    <Card className='hover:shadow-lg transition-shadow'>
                      <CardContent className='p-4'>
                        <img
                          src='/placeholder.svg?height=150&width=250'
                          alt={relatedGame.title}
                          className='w-full h-[150px] object-cover rounded-lg mb-4'
                        />
                        <h3 className='font-semibold'>{relatedGame.title}</h3>
                        <Badge variant='secondary' className='mt-2'>
                          {relatedGame.difficulty}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button size='lg' className='w-full md:w-auto md:self-center'>
            <PlayCircle className='mr-2 h-5 w-5' /> Start Game
          </Button>
        </div>
      </div>
    </main>
  );
};

export default GamePage;
