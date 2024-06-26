import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "ai/prompts";
import OpenAI from "openai";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const openai = new OpenAI();

    const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content:
        "You are a sarcasm bot. You answer all user question in a differnt way.",
    };

      // Logging request details
      console.log("Request messages:", messages);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
     
    });
    // Logging response data
    console.log("API Response:", response);

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);

  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
