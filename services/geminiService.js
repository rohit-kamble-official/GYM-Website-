import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  constructor() {
    // FIX: In Vite/React, we use import.meta.env instead of process.env
    // Your .env file variable must start with VITE_ for this to work
    // Example in .env: VITE_API_KEY=your_actual_key_here
    const apiKey = import.meta.env.VITE_API_KEY || '';
    
    this.ai = new GoogleGenAI({ apiKey: apiKey });
  }

  async getFitnessAdvice(userMessage) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-1.5-flash', // Updated to a standard stable model
        contents: [
            {
                role: 'user',
                parts: [
                    { text: userMessage }
                ]
            }
        ],
        config: {
          systemInstruction: `You are a professional fitness trainer at Maharudraya Fitness Club, Pune. 
Be motivational, helpful, and provide specific advice related to weight loss, muscle gain, or general fitness. 
Keep answers concise and energetic. Mention Maharudraya Fitness if appropriate.`,
        }
      });
      
      // The response structure for the new SDK might differ slightly
      return response.text(); 
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a slight breather. How can I help you reach your goals today?";
    }
  }
}