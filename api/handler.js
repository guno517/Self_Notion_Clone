const API_END_POINT = process.env.API_END_POINT;

export const handler = async (request, response) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...option,
      headers: {
        "Content-type": "application/json",
        "x-username": "guno",
      },
    });
    if (res.ok) {
      return await res.json();
    }
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });

    throw new Error("API 오류");
  } catch (e) {
    console.log(e.message);
  }
};
