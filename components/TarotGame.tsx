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
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* 게임 제목 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🔮 타로 운세 보기
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">마음을 비우고 카드 4장을 선택하세요</p>
        </motion.div>

        {/* 인트로 화면 */}
        {gameState === 'intro' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-yellow-400">🌟 타로 카드 안내</h2>
              <div className="text-left space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <p>• 마음을 편안하게 하고 질문을 생각해보세요</p>
                <p>• 직감을 믿고 끌리는 카드 4장을 선택하세요</p>
                <p>• 각 카드는 전반운, 연애운, 직업운, 재물운을 나타냅니다</p>
                <p className="hidden sm:block">• 카드는 정방향 또는 역방향으로 해석됩니다</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShuffle}
              disabled={isShuffling}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 shadow-lg disabled:opacity-50"
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
            <div className="mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl mb-2">카드를 선택하세요 ({selectedCards.length}/4)</p>
              <div className="flex justify-center gap-2 mb-3 sm:mb-4">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                      i < selectedCards.length ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              {/* 선택된 카드들 미리보기 */}
              {selectedCards.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 max-w-xs sm:max-w-md mx-auto"
                >
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">선택된 카드들:</p>
                  <div className="grid grid-cols-4 gap-1 sm:gap-2">
                    {[0, 1, 2, 3].map((i) => {
                      const areaNames = ['전반운', '연애운', '직업운', '재물운'];
                      return (
                        <div key={i} className="text-center">
                          <div className={`w-8 h-12 sm:w-12 sm:h-16 rounded border-2 flex items-center justify-center text-xs transition-all duration-300 ${
                            i < selectedCards.length 
                              ? 'border-yellow-400 bg-yellow-400/20 text-yellow-300' 
                              : 'border-gray-600 bg-gray-800/50 text-gray-500'
                          }`}>
                            {i < selectedCards.length ? '🃏' : '?'}
                          </div>
                          <p className="text-xs mt-1 text-gray-400 truncate">{areaNames[i]}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-11 gap-1 sm:gap-2 max-w-7xl mx-auto px-2">
              {shuffledCards.map((cardInfo, index) => {
                const isSelected = selectedCards.some(card => card.cardId === cardInfo.cardId && card.isReversed === cardInfo.isReversed);
                const selectedIndex = selectedCards.findIndex(card => card.cardId === cardInfo.cardId && card.isReversed === cardInfo.isReversed);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: isSelected ? -8 : 0,
                      scale: isSelected ? 1.05 : 1
                    }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    whileHover={!isSelected ? { scale: 1.03, y: -5 } : {}}
                    whileTap={!isSelected ? { scale: 0.98 } : {}}
                    onClick={() => selectCard(index)}
                    className={`
                      relative transition-all duration-300
                      ${isSelected 
                        ? 'cursor-default' 
                        : 'cursor-pointer hover:shadow-lg hover:shadow-purple-500/50'
                      }
                    `}
                  >
                    <div className={`
                      bg-gradient-to-br from-indigo-800 to-purple-800 rounded-md sm:rounded-lg 
                      aspect-[2/3] flex items-center justify-center border-2 transition-all duration-300
                      ${isSelected 
                        ? 'border-yellow-400 shadow-lg shadow-yellow-400/50 bg-gradient-to-br from-yellow-600/20 to-orange-600/20' 
                        : 'border-purple-400/30'
                      }
                    `}>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">🃏</div>
                      
                      {/* 선택됨 표시 */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-400 text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg"
                        >
                          {selectedIndex + 1}
                        </motion.div>
                      )}
                      
                      {/* 빛나는 효과 */}
                      {isSelected && (
                        <motion.div
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-md sm:rounded-lg"
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* 리딩 결과 화면 */}
        {gameState === 'reading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-yellow-400">🔮 당신의 운세</h2>
              <p className="text-sm sm:text-base text-gray-300 px-4">선택한 카드들이 전하는 메시지입니다</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 px-2">
              {reading.map((selectedCard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-purple-400/30"
                >
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">
                      {getAreaName(selectedCard.area)}
                    </h3>
                    <div className="text-xl sm:text-2xl mb-2">
                      {selectedCard.isReversed ? '🔄' : '⬆️'} {selectedCard.card.name}
                    </div>
                    <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full ${
                      selectedCard.isReversed ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
                    }`}>
                      {selectedCard.isReversed ? '역방향' : '정방향'}
                    </span>
                  </div>
                  
                  <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {selectedCard.isReversed 
                      ? selectedCard.card.reversed[selectedCard.area]
                      : selectedCard.card.upright[selectedCard.area]
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 shadow-lg"
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
