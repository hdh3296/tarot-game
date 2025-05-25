'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shuffleCards, generateReading, TAROT_CARDS, SelectedCard, ReadingArea } from '@/lib/tarot';

interface TarotGameProps {}

export default function TarotGame({}: TarotGameProps) {
  const [gameState, setGameState] = useState<'intro' | 'selecting' | 'reading'>('intro');
  const [shuffledCards, setShuffledCards] = useState<{ cardId: number; isReversed: boolean }[]>([]);
  const [selectedCards, setSelectedCards] = useState<{ cardId: number; isReversed: boolean }[]>([]);
  const [reading, setReading] = useState<SelectedCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // 카드 섞기
  const handleShuffle = async () => {
    setIsShuffling(true);
    
    // 섞는 애니메이션을 위한 지연
    setTimeout(() => {
      const newShuffledCards = shuffleCards();
      setShuffledCards(newShuffledCards);
      setGameState('selecting');
      setIsShuffling(false);
    }, 2000);
  };

  // 카드 선택
  const selectCard = (index: number) => {
    if (selectedCards.length >= 4) return;
    
    const cardInfo = shuffledCards[index];
    setSelectedCards(prev => [...prev, cardInfo]);
    
    if (selectedCards.length === 3) {
      // 4장 모두 선택됨
      setTimeout(() => {
        const newReading = generateReading([...selectedCards, cardInfo]);
        setReading(newReading);
        setGameState('reading');
      }, 1000);
    }
  };

  // 게임 재시작
  const resetGame = () => {
    setGameState('intro');
    setShuffledCards([]);
    setSelectedCards([]);
    setReading([]);
  };

  // 영역별 이름 표시
  const getAreaName = (area: ReadingArea): string => {
    const areaNames = {
      general: '전반적 운세',
      love: '연애운',
      career: '직업운',
      finance: '재물운'
    };
    return areaNames[area];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 게임 제목 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🔮 타로 운세 보기
          </h1>
          <p className="text-lg text-gray-300">마음을 비우고 카드 4장을 선택하세요</p>
        </motion.div>

        {/* 인트로 화면 */}
        {gameState === 'intro' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🌟 타로 카드 안내</h2>
              <div className="text-left space-y-3 text-gray-300">
                <p>• 마음을 편안하게 하고 질문을 생각해보세요</p>
                <p>• 직감을 믿고 끌리는 카드 4장을 선택하세요</p>
                <p>• 각 카드는 전반운, 연애운, 직업운, 재물운을 나타냅니다</p>
                <p>• 카드는 정방향 또는 역방향으로 해석됩니다</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShuffle}
              disabled={isShuffling}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg disabled:opacity-50"
            >
              {isShuffling ? '카드를 섞는 중...' : '🃏 카드 섞기 시작'}
            </motion.button>
          </motion.div>
        )}

        {/* 카드 선택 화면 */}
        {gameState === 'selecting' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="mb-6">
              <p className="text-xl mb-2">카드를 선택하세요 ({selectedCards.length}/4)</p>
              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i < selectedCards.length ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-11 gap-2 max-w-6xl mx-auto">
              {shuffledCards.map((cardInfo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => selectCard(index)}
                  className={`
                    relative cursor-pointer transition-all duration-300
                    ${selectedCards.some(card => card.cardId === cardInfo.cardId && card.isReversed === cardInfo.isReversed) 
                      ? 'opacity-30 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:shadow-purple-500/50'
                    }
                  `}
                >
                  <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-lg aspect-[2/3] flex items-center justify-center border-2 border-purple-400/30">
                    <div className="text-4xl">🃏</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 리딩 결과 화면 */}
        {gameState === 'reading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">🔮 당신의 운세</h2>
              <p className="text-gray-300">선택한 카드들이 전하는 메시지입니다</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {reading.map((selectedCard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                      {getAreaName(selectedCard.area)}
                    </h3>
                    <div className="text-2xl mb-2">
                      {selectedCard.isReversed ? '🔄' : '⬆️'} {selectedCard.card.name}
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      selectedCard.isReversed ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
                    }`}>
                      {selectedCard.isReversed ? '역방향' : '정방향'}
                    </span>
                  </div>
                  
                  <div className="text-gray-300 leading-relaxed">
                    {selectedCard.isReversed 
                      ? selectedCard.card.reversed[selectedCard.area]
                      : selectedCard.card.upright[selectedCard.area]
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg"
              >
                🔄 다시 보기
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
