import { sleep } from "https://deno.land/x/sleep/mod.ts";
import {
  app,
  get
} from "https://denopkg.com/syumai/dinatra/mod.ts";

app(
  get("/", () => "helth ok"),
  get("/:time", async ({ params }) =>{
    const num = params.time ?? 5 // デフォルト5s
    await sleep(num)
    return "ok"
  }),
);
