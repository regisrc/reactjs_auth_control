import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

const object = ({response}: {response: any},) => {
    response.status = 400
}

router.get("/", object)

export default router;