import { NextRequest, NextResponse } from "next/server";
import repo from "@/repositories/projects/main";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const data = {
    status: 200,
    data: repo.getProjectBySlug(slug),
  };

  return NextResponse.json(data);
}
