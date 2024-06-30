import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function authUserSession() {
    const session = await getServerSession(authOption)
    return session?.user
}