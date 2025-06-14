import { NextResponse } from "next/server";

const headers = {
  Authorization: `Bearer ${process.env.NOTION_TO_DO_LIST_API_KEY}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-02-22",
};

const notionDatabaseUrl = `https://api.notion.com/v1/databases/${process.env.TO_DO_LIST_DATABASE_KEY}/query`;

export async function POST() {
  try {
    const response = await fetch(notionDatabaseUrl, {
      method: "POST",
      headers,
    });

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    return NextResponse.json({ error: "Failed to fetch data from Notion" }, { status: 500 });
  }
}
