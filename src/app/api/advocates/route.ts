import { getAdvocatesDB } from "@/lib/getAdvocates";

export async function GET() {
  const data = await getAdvocatesDB();
  return data;
}
