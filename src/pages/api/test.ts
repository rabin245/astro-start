import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      message: "This was a POST!",
      body,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
