import { Room, Amenity } from './types';

export const APP_NAME = "더조은 펜션";
export const APP_ENG_NAME = "The Joeun Pension";

// Creative Copywriting for Slogans
export const SLOGANS = [
  {
    main: "산의 품에서, 바다를 꿈꾸다.",
    sub: "하늘과 바다가 맞닿은 곳, 오직 당신만을 위한 프라이빗 오션.",
  },
  {
    main: "구름 위의 휴식, 파도의 속삭임.",
    sub: "숲의 고요함 속에 스며드는 바다의 윤슬을 만나보세요.",
  },
  {
    main: "완벽한 고립, 가장 우아한 자유.",
    sub: "방해받지 않는 시간, 더조은 펜션이 선사하는 럭셔리 힐링.",
  },
];

export const CTA_TEXT = "당신의 가장 아름다운 휴식 예약하기";

// Creative Copywriting for Rooms
export const ROOMS: Room[] = [
  {
    id: "suite-sunrise",
    name: "선라이즈 스위트",
    engName: "Sunrise Ocean Suite",
    summary: "아침 해가 가장 먼저 닿는 곳",
    description: "침대에 누워 떠오르는 태양과 붉게 물드는 바다를 마주하는 경험을 선사합니다. 높은 층고와 통유리창을 통해 산과 바다의 파노라마 뷰가 펼쳐지며, 화이트 톤의 모던한 인테리어가 차분함을 더합니다. 프라이빗 테라스에서 즐기는 모닝 커피는 당신의 하루를 특별하게 시작하게 해줍니다.",
    features: ["킹사이즈 프리미엄 침대", "오션뷰 자쿠지", "프라이빗 테라스", "다이슨 헤어드라이어"],
    imageUrl: "https://picsum.photos/id/1036/800/600",
    price: "450,000원 ~"
  },
  {
    id: "villa-moonlight",
    name: "문라이트 빌라",
    engName: "Moonlight Forest Villa",
    summary: "별빛과 파도 소리가 머무는 밤",
    description: "숲속 가장 깊은 곳에 위치하여 완벽한 프라이버시를 자랑합니다. 해가 지면 바다 위로 쏟아지는 별빛과 달빛이 객실을 은은하게 비춥니다. 따뜻한 우드 톤의 인테리어와 넓은 거실은 연인과 함께 로맨틱한 저녁 시간을 보내기에 최적화되어 있습니다.",
    features: ["개별 인피니티 풀 (온수)", "독립형 바비큐 다이닝", "빔프로젝터 시네마", "고급 어메니티"],
    imageUrl: "https://picsum.photos/id/164/800/600",
    price: "650,000원 ~"
  }
];

// Creative Copywriting for Amenities (Original + 3 New Proposals)
export const AMENITIES: Amenity[] = [
  {
    id: "infinity-pool",
    title: "프라이빗 인피니티 풀",
    engTitle: "Private Infinity Pool",
    description: "숲속에서 바다로 이어지는 듯한 환상적인 뷰. 사계절 온수풀로 운영되어 언제든 따뜻하게 유영할 수 있습니다.",
    icon: "pool",
    imageUrl: "https://picsum.photos/id/296/600/400"
  },
  {
    id: "welcome-dinner",
    title: "셰프의 웰컴 디너",
    engTitle: "Chef's Welcome Dinner",
    description: "특급 호텔 출신 셰프가 제철 식재료로 준비한 코스 요리를 룸 서비스로 제공해 드립니다.",
    icon: "chef",
    imageUrl: "https://picsum.photos/id/493/600/400"
  },
  {
    id: "forest-spa",
    title: "포레스트 히노끼 스파",
    engTitle: "Forest Hinoki Spa",
    description: "피톤치드 가득한 편백나무 욕조에서 즐기는 반신욕. 숲의 향기와 바다의 바람을 동시에 느끼며 진정한 힐링을 경험하세요.",
    icon: "spa",
    imageUrl: "https://picsum.photos/id/401/600/400"
  },
  {
    id: "starry-campfire",
    title: "별빛 불멍 캠프파이어",
    engTitle: "Starry Night Fire Pit",
    description: "객실 앞 전용 정원에서 즐기는 프라이빗 불멍 서비스. 장작 세트와 마시멜로, 따뜻한 뱅쇼가 함께 제공됩니다.",
    icon: "fire",
    imageUrl: "https://picsum.photos/id/352/600/400"
  },
  {
    id: "lazy-breakfast",
    title: "인룸 브런치 바스켓",
    engTitle: "In-Room Brunch Basket",
    description: "느긋한 아침을 위해 갓 구운 빵, 신선한 샐러드, 프리미엄 커피로 구성된 피크닉 바스켓을 문 앞까지 배달해 드립니다.",
    icon: "coffee",
    imageUrl: "https://picsum.photos/id/425/600/400"
  }
];