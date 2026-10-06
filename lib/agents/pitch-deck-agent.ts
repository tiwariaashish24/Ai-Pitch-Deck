import {Agent } from "@openai/agents";

import { PitchDeckSchema } from "@/lib/schemas/pitch-deck";
import { pitchDeckQualityGuardrail, validProjectIdeaGuardrail } from "./guardrails";

const PITCH_DECK_INSTRUCTIONS = `You write startup pitch deck for investors.

    Given the project idea and create 7-8 slides in this order
    1. Title- catchy deck title + one-line tagline for content and explain the core value of the project. 
    2. Problem- the pain point your audience faces 
    3. Solution- how to product solve the problem
    4. Market- target customer and  market opportunity
    5. Product- Explain how the product works and how users use it add 3-4 featueres
    6. Buisness-model- how the company makes money
    7. Traction & Roadmap- current progress milestion and future plans
    8. Ask- funding amount or support needed (use a realistic placeholder)

    Field Rules
    -Content:  the content should be in 2-3 bullet Point as plain text each starting with "."
    -Imageprompt: a short description with professional slide illustration(no text in image and the image which you use it show the proper detailed)
    -Keep language clear and simple, confident and investor-friendly
    -Do not use placeholder filture like "TBD" or "lorem ipsum"`;

    //add example in this section 


    export const pitchDeckAgent = new Agent({
        name: "pitchDeckGenerator",
        model: "gpt-4.1-mini",
        instructions:PITCH_DECK_INSTRUCTIONS,
        outputType: PitchDeckSchema as never,
        inputGuardrails:[validProjectIdeaGuardrail],
        outputGuardrails:[pitchDeckQualityGuardrail],
    })

