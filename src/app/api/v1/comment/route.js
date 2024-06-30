import prisma from "@/libs/prisma";

export async function POST(request) {
  const {
    anime_mal_id,
    anime_title,
    user_email,
    profile_image,
    username,
    comment,
  } = await request.json();
  const data = {
    anime_mal_id,
    anime_title,
    user_email,
    profile_image,
    username,
    comment,
  };
  const createComment = await prisma.comment.create({ data });
  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
