import db from "../db";
import { advocates } from "../db/schema";

export const getAdvocatesDB = async () => {
  const data = await db.select().from(advocates);
  return Response.json({ data });
}

export const getAdvocates = async () => {
  try {
    const response = await getAdvocatesDB();

    if (!response.ok) {
      throw new Error('Failed to fetch advocates');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching advocates:', error);
    return [];
  }
}
