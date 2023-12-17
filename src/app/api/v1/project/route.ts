import { NextRequest, NextResponse } from "next/server";
import repo from "@/repositories/projects/main";

export async function GET(request: NextRequest) {
  const data = {
    status: 200,
    data: repo.getAllProject(),
  };
  console.log(repo.getAllProject());

  return NextResponse.json(data);
}
