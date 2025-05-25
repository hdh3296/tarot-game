// 타로 카드 데이터 타입 정의
export interface TarotCard {
  id: number;
  name: string;
  upright: {
    general: string;
    love: string;
    career: string;
    finance: string;
  };
  reversed: {
    general: string;
    love: string;
    career: string;
    finance: string;
  };
}

// 메이저 아르카나 22장 타로 카드 데이터
export const TAROT_CARDS: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    upright: {
      general: "새로운 시작, 모험심, 순수함을 나타냅니다. 용기를 내어 새로운 길에 도전해보세요.",
      love: "새로운 만남의 가능성이 높습니다. 열린 마음으로 사랑을 받아들여보세요.",
      career: "새로운 직업이나 프로젝트를 시작하기 좋은 시기입니다. 창의적인 아이디어를 실행해보세요.",
      finance: "모험적인 투자보다는 신중한 계획이 필요합니다. 새로운 수입원을 찾아보세요."
    },
    reversed: {
      general: "무모함, 경솔함을 경고합니다. 신중하게 생각하고 행동하세요.",
      love: "성급한 결정을 피하고, 상대방을 더 잘 알아가는 시간이 필요합니다.",
      career: "충분한 준비 없이 큰 변화를 시도하지 마세요. 기초를 단단히 하세요.",
      finance: "충동적인 지출을 조심하고, 장기적인 계획을 세우세요."
    }
  },
  {
    id: 1,
    name: "The Magician",
    upright: {
      general: "의지력과 창조력이 강한 시기입니다. 목표를 향해 적극적으로 행동하세요.",
      love: "적극적인 접근과 자신감이 좋은 결과를 가져올 것입니다.",
      career: "뛰어난 능력과 리더십을 발휘할 수 있는 시기입니다. 새로운 프로젝트를 주도해보세요.",
      finance: "투자나 사업에서 좋은 성과를 거둘 수 있습니다. 적극적으로 기회를 잡으세요."
    },
    reversed: {
      general: "속임수나 조작에 주의하세요. 진실을 추구하고 정직하게 행동하세요.",
      love: "상대방의 진심을 의심해볼 필요가 있습니다. 표면적인 매력에 속지 마세요.",
      career: "동료들과의 신뢰 관계에 문제가 생길 수 있습니다. 정직한 소통이 필요합니다.",
      finance: "사기나 위험한 투자에 노출될 수 있습니다. 신중하게 검토하세요."
    }
  },
  {
    id: 2,
    name: "The High Priestess",
    upright: {
      general: "직감과 내면의 지혜를 따르세요. 조용한 성찰의 시간이 필요합니다.",
      love: "감정의 깊이와 직관적인 이해가 중요합니다. 상대의 마음을 들여다보세요.",
      career: "멘토의 도움이나 새로운 학습 기회가 올 수 있습니다. 경험을 쌓으세요.",
      finance: "재정 상황을 비밀로 유지하고, 직감을 믿고 투자 결정을 내리세요."
    },
    reversed: {
      general: "직감을 무시하고 있거나 내면의 목소리를 듣지 못하고 있습니다.",
      love: "소통 부족으로 오해가 생길 수 있습니다. 솔직한 대화가 필요합니다.",
      career: "중요한 정보를 놓치고 있을 수 있습니다. 주변 상황을 자세히 살펴보세요.",
      finance: "모든 정보를 파악하지 못한 상태에서 결정을 내리지 마세요."
    }
  },
  {
    id: 3,
    name: "The Empress",
    upright: {
      general: "풍요로움과 창조성이 넘치는 시기입니다. 자연과 조화를 이루며 살아가세요.",
      love: "안정적이고 따뜻한 관계를 형성할 수 있습니다. 결혼이나 임신의 가능성도 있습니다.",
      career: "창의적인 프로젝트에서 성공할 수 있습니다. 팀워크를 중시하세요.",
      finance: "풍족한 재정 상황과 관대한 마음으로 다른 사람들을 도울 수 있습니다."
    },
    reversed: {
      general: "독립성을 회복하고 자신을 돌보는 시간이 필요합니다.",
      love: "의존적인 관계에서 벗어나 균형을 찾아야 합니다.",
      career: "답답하고 성장이 멈춘 느낌이 들 수 있습니다. 새로운 도전이 필요합니다.",
      finance: "재정적 불안감을 느낄 수 있지만, 책임감 있게 관리하면 극복할 수 있습니다."
    }
  },
  {
    id: 4,
    name: "The Emperor",
    upright: {
      general: "권위와 질서, 체계적인 접근이 필요한 시기입니다. 리더십을 발휘하세요.",
      love: "전통적이고 안정적인 관계를 추구합니다. 책임감 있는 파트너십이 중요합니다.",
      career: "규칙과 체계를 잘 따르며 성실하게 일하면 성공할 수 있습니다.",
      finance: "예산을 세우고 체계적으로 관리하면 안정적인 재정 상태를 유지할 수 있습니다."
    },
    reversed: {
      general: "권력 남용이나 통제욕에 주의하세요. 융통성을 발휘해야 합니다.",
      love: "지나친 통제나 경직된 관계에서 벗어나야 합니다.",
      career: "경직된 조직 문화나 상사와의 갈등이 있을 수 있습니다.",
      finance: "재정 관리에 대한 통제력을 잃었을 수 있습니다. 전문가의 도움을 받으세요."
    }
  },
  {
    id: 5,
    name: "The Hierophant",
    upright: {
      general: "전통과 관습을 존중하며, 기존의 방법을 따르는 것이 좋습니다.",
      love: "사회적으로 인정받는 안정적인 관계를 추구합니다. 결혼을 고려해볼 시기입니다.",
      career: "전통적인 방법과 기존 시스템을 활용하여 성공할 수 있습니다.",
      finance: "안전하고 전통적인 투자 방법을 선택하는 것이 좋습니다."
    },
    reversed: {
      general: "기존의 틀에서 벗어나 자신만의 길을 찾아야 할 시기입니다.",
      love: "관습에 얽매이지 않는 자유로운 관계를 원합니다.",
      career: "혁신과 창의성이 필요합니다. 기존 방식에 의문을 제기해보세요.",
      finance: "새로운 투자 방법이나 수입원을 모색해볼 필요가 있습니다."
    }
  },
  {
    id: 6,
    name: "The Lovers",
    upright: {
      general: "조화로운 관계와 중요한 선택의 시기입니다. 가치관이 일치하는 것이 중요합니다.",
      love: "깊은 사랑과 완벽한 조화를 이룬 관계를 경험할 수 있습니다.",
      career: "동료와의 파트너십이나 협업에서 좋은 결과를 얻을 수 있습니다.",
      finance: "중요한 재정 결정을 내려야 할 시기입니다. 신중하게 선택하세요."
    },
    reversed: {
      general: "관계의 불균형이나 가치관의 충돌이 있을 수 있습니다.",
      love: "소통 부족이나 약속에 대한 두려움이 관계를 어렵게 만들 수 있습니다.",
      career: "동료와의 갈등이나 불균형한 업무 분담으로 어려움을 겪을 수 있습니다.",
      finance: "충동적인 재정 결정으로 장기적인 안정성이 위협받을 수 있습니다."
    }
  },
  {
    id: 7,
    name: "The Chariot",
    upright: {
      general: "강한 의지력과 결단력으로 목표를 달성할 수 있는 시기입니다.",
      love: "적극적인 행동과 자신감이 사랑을 성공으로 이끌 것입니다.",
      career: "야심찬 목표를 향해 전진할 수 있습니다. 집중력을 유지하세요.",
      finance: "재정적 어려움을 극복하고 안정을 되찾을 수 있습니다."
    },
    reversed: {
      general: "방향성을 잃거나 통제력을 상실할 수 있습니다. 균형을 찾으세요.",
      love: "사랑에 너무 집착하거나 다른 영역을 소홀히 할 수 있습니다.",
      career: "목표가 불분명하거나 너무 공격적인 접근으로 문제가 생길 수 있습니다.",
      finance: "성급한 결정을 피하고 신중하게 접근하세요."
    }
  },
  {
    id: 8,
    name: "Strength",
    upright: {
      general: "내면의 힘과 인내심으로 어려움을 극복할 수 있습니다.",
      love: "열정적이면서도 온화한 사랑으로 관계가 깊어집니다.",
      career: "열정과 결단력으로 큰 성취를 이룰 수 있습니다.",
      finance: "절제와 규율로 재정 상황이 개선됩니다."
    },
    reversed: {
      general: "자신감 부족이나 감정 조절의 어려움이 있을 수 있습니다.",
      love: "질투나 의존적인 관계로 어려움을 겪을 수 있습니다.",
      career: "자신감 부족으로 기회를 놓칠 수 있습니다.",
      finance: "충동적인 소비나 재정 관리 부족으로 어려움이 있을 수 있습니다."
    }
  },
  {
    id: 9,
    name: "The Hermit",
    upright: {
      general: "내면의 지혜를 찾기 위한 성찰의 시간이 필요합니다.",
      love: "혼자만의 시간을 통해 진정한 사랑이 무엇인지 깨달을 수 있습니다.",
      career: "새로운 방향을 찾기 위해 깊이 생각해볼 시기입니다.",
      finance: "물질적인 것보다 정신적인 풍요로움을 추구하게 됩니다."
    },
    reversed: {
      general: "고립감이나 지나친 내향성으로 어려움을 겪을 수 있습니다.",
      love: "외로움을 느끼지만 새로운 만남의 준비를 해야 합니다.",
      career: "혼자 해결하려 하지 말고 다른 사람들과 소통하세요.",
      finance: "재정 조언을 구하고 외부의 도움을 받아들이세요."
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    upright: {
      general: "운명의 전환점에 서 있습니다. 긍정적인 변화가 올 것입니다.",
      love: "관계에 중요한 변화가 올 수 있습니다. 적응하고 함께 성장하세요.",
      career: "새로운 기회가 찾아올 것입니다. 변화를 받아들이세요.",
      finance: "재정 상황의 변화에 대비하고 기회를 잡으세요."
    },
    reversed: {
      general: "어려운 시기이지만 일시적입니다. 인내심을 갖고 기다리세요.",
      love: "외부 요인으로 인한 관계의 어려움이 있을 수 있습니다.",
      career: "급작스런 변화에 적응하기 어려울 수 있습니다.",
      finance: "예상치 못한 지출에 대비한 비상금을 준비하세요."
    }
  },
  {
    id: 11,
    name: "Justice",
    upright: {
      general: "공정함과 균형이 중요한 시기입니다. 올바른 선택을 하세요.",
      love: "상호 존중과 공평한 관계가 중요합니다.",
      career: "정직하고 공정한 행동이 좋은 결과를 가져올 것입니다.",
      finance: "공정한 거래와 정직한 재정 관리가 필요합니다."
    },
    reversed: {
      general: "불공정한 상황이나 편견에 주의하세요.",
      love: "관계에서 불균형이나 불평등이 있을 수 있습니다.",
      career: "부당한 대우를 받거나 공정하지 못한 상황에 처할 수 있습니다.",
      finance: "재정 관리에서 정직함을 잃지 않도록 주의하세요."
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    upright: {
      general: "현재 상황을 받아들이고 다른 관점에서 바라보세요.",
      love: "기다림과 희생이 필요하지만 그만한 가치가 있을 것입니다.",
      career: "급하게 서두르지 말고 때를 기다리는 것이 좋습니다.",
      finance: "관점을 바꾸면 재정 상황을 개선할 방법을 찾을 수 있습니다."
    },
    reversed: {
      general: "기다림의 시간이 끝나고 행동할 때가 되었습니다.",
      love: "소극적인 태도에서 벗어나 적극적으로 행동하세요.",
      career: "결단을 내리고 다음 단계로 나아가야 할 시기입니다.",
      finance: "망설이지 말고 계획을 실행에 옮기세요."
    }
  },
  {
    id: 13,
    name: "Death",
    upright: {
      general: "끝과 새로운 시작을 의미합니다. 변화를 받아들이세요.",
      love: "관계의 중요한 변화나 새로운 단계로 접어들 수 있습니다.",
      career: "직업의 전환이나 새로운 분야로의 도전이 필요할 수 있습니다.",
      finance: "재정 관리 방식의 변화가 필요합니다."
    },
    reversed: {
      general: "변화에 저항하고 있지만 받아들여야 할 시기입니다.",
      love: "낡은 관계 패턴에서 벗어나지 못하고 있습니다.",
      career: "변화를 회피하고 있지만 더 이상 미룰 수 없습니다.",
      finance: "재정적 변화를 받아들이기 어려워하고 있습니다."
    }
  },
  {
    id: 14,
    name: "Temperance",
    upright: {
      general: "조화와 균형을 통해 안정을 찾을 수 있습니다.",
      love: "인내심과 이해심으로 관계가 더욱 조화로워집니다.",
      career: "꾸준함과 인내심으로 목표를 달성할 수 있습니다.",
      finance: "절제와 균형 잡힌 소비로 안정적인 재정을 유지할 수 있습니다."
    },
    reversed: {
      general: "극단적인 행동이나 불균형으로 문제가 생길 수 있습니다.",
      love: "극단적인 감정이나 행동으로 관계가 어려워질 수 있습니다.",
      career: "업무와 사생활의 균형을 잃고 있을 수 있습니다.",
      finance: "과도한 절약이나 과소비로 균형을 잃고 있습니다."
    }
  },
  {
    id: 15,
    name: "The Devil",
    upright: {
      general: "유혹이나 중독에 주의하세요. 자신을 통제할 필요가 있습니다.",
      love: "육체적 욕망이 강하지만 진정한 사랑인지 생각해보세요.",
      career: "물질적인 성공에만 매몰되지 않도록 주의하세요.",
      finance: "과도한 물질욕이나 도박성 투자를 조심하세요."
    },
    reversed: {
      general: "구속에서 벗어나 자유를 되찾을 수 있습니다.",
      love: "불건전한 관계에서 벗어날 수 있습니다.",
      career: "제약적인 상황에서 벗어나 독립할 수 있습니다.",
      finance: "나쁜 재정 습관에서 벗어날 수 있습니다."
    }
  },
  {
    id: 16,
    name: "The Tower",
    upright: {
      general: "급작스런 변화나 충격적인 사건이 일어날 수 있습니다.",
      love: "관계에 큰 변화나 충격이 올 수 있지만 더 나은 방향으로 나아갈 것입니다.",
      career: "직장에서 급작스런 변화가 있을 수 있지만 새로운 기회로 이어질 것입니다.",
      finance: "예상치 못한 지출이나 손실에 대비하세요."
    },
    reversed: {
      general: "변화를 피하려 하지만 결국 받아들여야 합니다.",
      love: "관계의 문제를 해결하지 않고 미루고 있습니다.",
      career: "직장에서의 문제를 직면하고 해결해야 합니다.",
      finance: "재정 문제를 더 이상 미룰 수 없습니다."
    }
  },
  {
    id: 17,
    name: "The Star",
    upright: {
      general: "희망과 치유의 시기입니다. 미래에 대한 낙관적인 전망을 가지세요.",
      love: "사랑에 대한 희망과 긍정적인 에너지가 넘치는 시기입니다.",
      career: "꿈과 목표를 향한 희망찬 전진이 시작됩니다.",
      finance: "재정적 목표 달성에 대한 희망과 신념을 가지세요."
    },
    reversed: {
      general: "희망을 잃고 실망감에 빠져 있을 수 있습니다.",
      love: "사랑에 대한 자신감을 잃었을 수 있습니다.",
      career: "목표에 대한 확신을 잃고 방향을 잃었을 수 있습니다.",
      finance: "재정적 불안감으로 부정적인 생각에 빠져 있습니다."
    }
  },
  {
    id: 18,
    name: "The Moon",
    upright: {
      general: "직감과 무의식의 메시지에 귀를 기울이세요. 혼란스러운 시기일 수 있습니다.",
      love: "감정이 복잡하고 상황이 불분명할 수 있습니다.",
      career: "불확실한 상황에서 신중한 판단이 필요합니다.",
      finance: "재정 상황이 불분명하니 충분한 정보를 수집하세요."
    },
    reversed: {
      general: "혼란에서 벗어나 명확성을 찾게 됩니다.",
      love: "관계의 진실이 드러나고 명확해집니다.",
      career: "불확실했던 상황이 명확해지고 방향을 찾게 됩니다.",
      finance: "재정 상황에 대한 명확한 이해를 갖게 됩니다."
    }
  },
  {
    id: 19,
    name: "The Sun",
    upright: {
      general: "기쁨과 성공, 활력이 넘치는 시기입니다. 모든 일이 순조롭게 진행될 것입니다.",
      love: "행복하고 따뜻한 사랑을 경험할 수 있습니다.",
      career: "성공과 인정을 받는 시기입니다. 자신감을 가지세요.",
      finance: "재정적으로 풍요롭고 안정적인 시기입니다."
    },
    reversed: {
      general: "일시적인 어려움이 있지만 긍정적인 마음을 유지하세요.",
      love: "관계에서 작은 어려움이 있지만 극복할 수 있습니다.",
      career: "성과가 예상보다 낮을 수 있지만 포기하지 마세요.",
      finance: "재정적 목표 달성이 지연될 수 있지만 희망을 잃지 마세요."
    }
  },
  {
    id: 20,
    name: "Judgement",
    upright: {
      general: "새로운 각성과 깨달음의 시기입니다. 과거를 돌아보고 미래를 계획하세요.",
      love: "관계를 다시 평가하고 새로운 출발을 할 수 있습니다.",
      career: "자신의 진정한 소명을 발견하고 새로운 방향을 찾을 수 있습니다.",
      finance: "재정 관리 방식을 재평가하고 개선할 수 있습니다."
    },
    reversed: {
      general: "자기 반성이 부족하거나 과거에 얽매여 있을 수 있습니다.",
      love: "과거의 상처나 실수를 용서하지 못하고 있습니다.",
      career: "자신의 능력을 제대로 평가하지 못하고 있습니다.",
      finance: "과거의 재정 실수를 반복하고 있을 수 있습니다."
    }
  },
  {
    id: 21,
    name: "The World",
    upright: {
      general: "완성과 성취의 시기입니다. 모든 것이 조화롭게 이루어집니다.",
      love: "완벽한 조화와 만족스러운 관계를 경험할 수 있습니다.",
      career: "모든 노력이 결실을 맺고 큰 성취를 이룰 수 있습니다.",
      finance: "재정적 목표를 달성하고 안정적인 상태를 유지할 수 있습니다."
    },
    reversed: {
      general: "목표 달성이 지연되거나 불완전한 상태일 수 있습니다.",
      love: "관계에서 완전한 만족을 얻지 못하고 있습니다.",
      career: "성취가 예상보다 부족하거나 지연될 수 있습니다.",
      finance: "재정적 목표 달성이 미완성 상태일 수 있습니다."
    }
  }
];

// 타로 리딩 영역 타입
export type ReadingArea = 'general' | 'love' | 'career' | 'finance';

// 선택된 카드 정보 타입
export interface SelectedCard {
  card: TarotCard;
  area: ReadingArea;
  isReversed: boolean;
}

// 카드를 섞는 함수
export function shuffleCards(): { cardId: number; isReversed: boolean }[] {
  const shuffledCards = [];
  
  for (let i = 0; i < 22; i++) {
    shuffledCards.push({
      cardId: i,
      isReversed: Math.random() < 0.5 // 50% 확률로 역방향
    });
  }
  
  // Fisher-Yates 셔플 알고리즘
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  
  return shuffledCards;
}

// 리딩 결과 생성 함수
export function generateReading(selectedCards: { cardId: number; isReversed: boolean }[]): SelectedCard[] {
  const areas: ReadingArea[] = ['general', 'love', 'career', 'finance'];
  
  return selectedCards.slice(0, 4).map((cardInfo, index) => ({
    card: TAROT_CARDS[cardInfo.cardId],
    area: areas[index],
    isReversed: cardInfo.isReversed
  }));
}
