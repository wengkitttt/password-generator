/**
 * This file is the entrypoint for all Vercel Functions.
 */

import app from "../src";

export const config = { runtime: "edge" };

export default async function handler(request: Request) {
  return app.fetch(request);
}
