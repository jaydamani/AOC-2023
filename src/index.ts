import "module-alias/register.js";
import { readFileSync } from "fs";
import { getDayAndPart } from "@utils";

getDayAndPart()
  .then(([day, part]: [string, number]) => {
    console.log(`Finding solution for day ${day} part ${part}`);
    const input = readFileSync(`./input/day${day}.txt`).toString();

    console.log("Starting execution...");

    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const run = require(`./days/d${day}`)[`solvePart${part}`] as (
        input: string
      ) => string;
      const start = Date.now();
      const res = run(input);
      const time = Date.now() - start;

      console.log(`Solution: ${res}`);
      console.log(`Calculated in ${time} ms`);
    } catch (err) {
      console.log("Error during execution:");
      console.error(err);
    } finally {
      console.log("Completed Execution");
    }
  })
  .catch(console.error);
