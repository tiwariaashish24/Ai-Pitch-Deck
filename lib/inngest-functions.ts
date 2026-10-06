import { inngest } from "@/lib/inngest";

export const runBackgroundTask = inngest.createFunction(
  {
    id: "run-background-task",
    triggers: [{ event: "demo/background.task" }],
  },
  async ({ event, step }) => {
    await step.run("process-background-task", async () => {
      console.log("Background task completed:", event.data.message);
    });
  },
);
