import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY; // Ensure API key is set securely



async function getResponse(question) {
    const genAI = new GoogleGenerativeAI("AIzaSyAgq0yvib3_NNgeliiaVeSJa8rN4deQUyo");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({ generationConfig, history: [] });
    const result = await chatSession.sendMessage(question);
    return result.response.text();
}
export default getResponse; // Export the function
