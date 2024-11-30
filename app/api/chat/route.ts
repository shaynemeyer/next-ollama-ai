import { ollama } from 'ollama-ai-provider';
import { streamText, tool } from 'ai';
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const model = ollama('llama3.2');

  const result = streamText({
    model,
    messages,
  });

  return result.toDataStreamResponse();
}
