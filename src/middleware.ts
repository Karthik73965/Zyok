import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:['/', "/api" , "/api/createuser" , '/api/testredis' ,'/api/CreateEndpoint' ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", ],
};