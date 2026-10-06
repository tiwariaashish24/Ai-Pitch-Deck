import {Inngest } from "inngest";

export type InngestEvents ={
    "deck/generate":{
        data:{
            dataId: string;
        };
    };
};


export const inngest = new Inngest ({id: "ai-pitch-deck-build"});
