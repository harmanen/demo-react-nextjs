import type { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const id = req.nextUrl.searchParams.get("id");

  const response = await fetch(
    `https://bakery-3c739d39.digi.loikka.dev/v1/bakery?customerNumber=${id}`,
  );

  const { data, metadata } = await response.json();

  // Return data if there is any...
  if (data.length > 0) {
    return new Response(JSON.stringify({ data, metadata, user: id }), {
      status: 200,
    });
  }

  // ...otherwise return 404 to display a snackbar
  return new Response(
    JSON.stringify({
      error: "Customer Number not found!",
      status: 404,
      user: false,
    }),
    {
      status: 404,
      statusText: "Customer Number not found!",
    },
  );
}
