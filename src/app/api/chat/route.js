import { NextResponse } from "next/server";
const callGeminiAPI = require("@/utils/gemini");

export async function POST(request) {
  try {
    const { message } = await request.json();
    console.log("Received message:", message);

    if (!message) {
      return NextResponse.json({ reply: "Please provide a message." });
    }

    const reply = await callGeminiAPI(message);
    console.log("Reply from Gemini API:", reply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error processing chat message:", error.message);
    return NextResponse.json(
      { reply: "Sorry, something went wrong." },
      { status: 500 }
    );
  }
}
