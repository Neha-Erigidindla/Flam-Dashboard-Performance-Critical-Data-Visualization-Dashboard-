import { NextResponse } from "next/server";

// Generate mock dataset (your existing function)
function generateInitialDataset(count: number) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: `Employee ${i + 1}`,
      performance: Math.floor(Math.random() * 100),
      attendance: Math.floor(Math.random() * 100),
      satisfaction: Math.floor(Math.random() * 100),
    });
  }
  return data;
}

// ✅ Next.js requires you to export an HTTP method
export async function GET() {
  const dataset = generateInitialDataset(10);
  return NextResponse.json(dataset);
}
