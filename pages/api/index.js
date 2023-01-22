// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { projects } from "./projects";

export default function handler(req, res) {
  res.status(200).json(projects);
}
