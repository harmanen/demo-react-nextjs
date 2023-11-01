import type { NextApiRequest } from "next";
import { BASE_URL } from "../../constants";

export async function POST(req: NextApiRequest) {
  const body = await req.json();

  const response = await fetch(`${BASE_URL}v1/bakery`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return response;
  } else {
    return new Response(
      JSON.stringify({
        error: "Order placement failed!",
        status: 500,
      }),
      {
        status: 500,
        statusText: "Order placement failed!",
      },
    );
  }
}
