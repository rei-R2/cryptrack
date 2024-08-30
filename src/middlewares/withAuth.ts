import {
  NextMiddleware,
  NextFetchEvent,
  NextRequest,
  NextResponse,
} from "next/server";
import { getToken } from "next-auth/jwt";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const checkPath = requireAuth.filter((path) => pathname.includes(path))[0];
    if (checkPath) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.set("callbackURL", decodeURI(req.url));
        return NextResponse.redirect(url);
      }
    }

    return middleware(req, next);
  };
}
