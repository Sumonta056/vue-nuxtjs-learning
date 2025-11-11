// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

const runtimeConfig = useRuntimeConfig();

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: "Ov23liPOBCdUiE0EIhzE",
      clientSecret: "74850af169cc0b6cd164bc49406c1f3633208687",
    }),
  ],
});

