import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:['/', "/api"]
});

export const config = {
  matcher: ["/dashboard"],
};