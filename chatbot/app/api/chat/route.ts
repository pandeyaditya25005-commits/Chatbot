import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
} // <---- Add the FAQ object below here

const collegeFAQ: Record<string, string> = {
  "Where can I get the timetable?": "Download your timetable here: https://college.edu/timetable.pdf",
  "How to pay fees?": "Fee payment link: https://college.edu/feepayment",
  // Add more questions and document/URL answers as needed
};

