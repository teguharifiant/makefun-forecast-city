# Funniest Forecast for a City That Isn't — Gloomburg

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/teguharifiant/makefun-forecast-city/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/teguharifiant/makefun-forecast-city/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

Entry for the make.fun bounty
[Funniest Forecast for a City That Isn't](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf):
one line, at most 120 characters, a funny weather forecast for a city
that does not exist.

## The forecast

> Gloomburg: overnight drizzle of cold soup, easing to light gravy by dawn. Carry a spoon, not an umbrella.

105 characters. Gloomburg is a grey little town where the rain never
learned to be water: tonight it drizzles cold soup, and by dawn it thins
to gravy, so the sensible thing to carry is a spoon, not an umbrella.

## How it runs

`main.ts` (Node 22, standard library only) writes the forecast line to
`/output/entry.txt` — or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that is
set, for example when testing locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```
