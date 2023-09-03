import { sleep } from "https://deno.land/x/sleep/mod.ts";
// import { oakCors } from "https://deno.land/x/cors/mod.ts";
// import {
//   app,
//   get
// } from "https://denopkg.com/syumai/dinatra/mod.ts";

import { serve } from 'https://deno.land/std@0.178.0/http/server.ts'

type Query = {
  time: number
}

async function handler(request: Request) {
  let url = new URL(request.url)
  const time = url.searchParams.get("time") ?? "5"
  await sleep(Number(time))
  return new Response('Hello', {
  })
}

serve(handler)
