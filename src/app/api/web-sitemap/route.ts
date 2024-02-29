import { NextResponse } from "next/server";
import fs from "fs";
export async function GET() {
  //export  sitemap.xml from public folder
  return new Response(fs.readFileSync("public/sitemap.xml"), {
    headers: {
      "Content-Type": "application/xml",
    },
  });

  return await fetch("https://k6cysl7xua9ovkxs.public.blob.vercel-storage.com/ftth-sitemap.xml").then((res) => {
    return new Response(res.body, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  });
}
