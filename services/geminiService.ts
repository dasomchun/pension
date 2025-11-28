import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ROOMS, AMENITIES } from '../constants';

// Initialize the API client
// Note: We assume process.env.API_KEY is available.
// In a real production app, this should be proxied through a backend to protect the key,
// but for this client-side demo structure, we implement as requested.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const systemInstruction = `
당신은 '더조은 펜션(The Joeun Pension)'의 인공지능 지배인(Concierge)입니다.
당신의 임무는 잠재 고객의 질문에 친절하고 품격 있는 어조로 답변하여 예약을 유도하는 것입니다.

**펜션 정보:**
- 위치: 산속에 위치하지만 모든 객실에서 바다가 보이는 독채 펜션.
- 주요 타겟: 30대 신혼부부, 연인, 조용한 힐링을 원하는 고객.
- 객실 정보:
  ${ROOMS.map(r => `- ${r.name} (${r.engName}): ${r.summary}. 가격: ${r.price}`).join('\n  ')}
- 주요 부대시설:
  ${AMENITIES.map(a => `- ${a.title}: ${a.description}`).join('\n  ')}

**응대 가이드라인:**
1. 항상 정중하고 따뜻한 말투(해요체, 합쇼체 혼용)를 사용하세요. 고급 호텔 지배인 같은 느낌을 주세요.
2. 고객이 구체적인 추천을 원하면 상황(기념일, 휴식 등)에 맞춰 객실이나 서비스를 추천하세요.
3. 답변은 300자 이내로 간결하게 핵심만 전달하세요.
4. 예약 관련 질문에는 "홈페이지 상단의 '예약하기' 버튼을 통해 실시간 예약이 가능합니다."라고 안내하세요.
5. 펜션과 관련 없는 질문에는 정중히 답변을 거절하고 펜션 이야기로 화제를 돌리세요.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "죄송합니다. 현재 AI 상담 서비스를 이용할 수 없습니다. (API Key Missing)";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "죄송합니다. 일시적인 오류로 답변을 드릴 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 연결 상태가 좋지 않아 답변을 드리기 어렵습니다.";
  }
};