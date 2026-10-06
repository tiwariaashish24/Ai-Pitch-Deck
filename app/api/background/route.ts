import { inngest } from "@/lib/inngest";

export async function POST() {
  await inngest.send({
    name: "demo/background.task",
    data: { message: "Hello from the AI Pitch app" },
  });

  return Response.json(
    { message: "Background task queued" },
    { status: 202 },
  );
}
