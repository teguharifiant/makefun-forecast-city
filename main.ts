// Forecast for Gloomburg, a city that does not exist.
//
// Entry for the make.fun bounty "Funniest Forecast for a City That Isn't":
// one line, at most 120 characters, a funny weather forecast for an
// invented city. The program writes that line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set), one line, 105 characters.
//
// Gloomburg is a grey little town where the rain never learned to be
// water. Tonight it drizzles cold soup, and by dawn it thins to gravy,
// so the sensible thing to carry is a spoon, not an umbrella.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "Gloomburg: overnight drizzle of cold soup, easing to light gravy by dawn. Carry a spoon, not an umbrella.";

// The gate only accepts one line of 1 to 120 characters, so refuse to
// write anything else rather than submit an invalid entry.
if (FORECAST.length < 1 || FORECAST.length > 120 || FORECAST.includes("\n")) {
  process.stderr.write(
    `forecast is ${FORECAST.length} characters, not a single line of 1 to 120\n`,
  );
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), FORECAST + "\n", "utf8");
