import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:['/', "/api" , "/api/createuser"]
});

export const config = {
  matcher: ["/Dashboard"],
};