// src/utils/gemini.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Get the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function callGeminiAPI(prompt) {
  try {
    // Generate content using the model
    const result = await model.generateContent(prompt);

    // Access the text from the response
    const response = await result.response;
    const text = response.text();

    return text || "No response received from the model.";
  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    throw new Error("Failed to fetch response from Gemini API");
  }
}

module.exports = callGeminiAPI;
