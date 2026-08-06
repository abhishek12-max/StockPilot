const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MODEL = "gemini-3.5-flash";

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const cleanJSON = (text) => {
  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
};

const generateAIResponse = async (prompt) => {
  let lastError = null;

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: MODEL,
        contents: prompt,
      });

      const text = response.text;

      if (!text) {
        throw new Error("Empty response from Gemini.");
      }

      const cleaned = cleanJSON(text);

      try {
        return JSON.parse(cleaned);
      } catch {
        console.log("⚠ Invalid JSON returned by Gemini.");

        return {
          type: "text",
          message: cleaned,
        };
      }
    } catch (error) {
      lastError = error;

      console.log(
        `Gemini Attempt ${attempt} Failed`
      );

      console.log(error.message);

      if (attempt < 2) {
        await sleep(1000);
      }
    }
  }

  console.error("Gemini AI Service Error:", lastError);

  return {
  type: "text",
  message:
    "Our AI assistant is currently experiencing high demand. Please try again in a few moments.",
};
};

module.exports = {
  generateAIResponse,
};