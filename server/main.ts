import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import { supabaseLogin } from './utils/supabaseLogin.ts'

export const app = new Application();
const router = new Router();

router.get("/test", ({ response }) => {
  response.body = "Hello World";
})
router.get("/login", async ({ response }) => {
  const auth = await supabaseLogin()
  response.body = auth.data
})

app.use(router.routes());

if (import.meta.main) {
  console.log("Server listening on port http://localhost:8000");
  await app.listen({ port: 8000 });
}
