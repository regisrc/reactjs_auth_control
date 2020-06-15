import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./router.ts";

const app = new Application();

app.use(
    oakCors({
      origin: /^.+localhost:(1234|3000)$/,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    }),
  );

  app.use(router.allowedMethods());
  app.use(router.routes());

  await app.listen({ port: 5000 }); 