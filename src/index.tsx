import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import Layout from "./components/Layout";
import App from "./views/App";
import {
  generateAllowedCharacters,
  generatePassword,
} from "./services/password-generator";
import { PasswordGenerationOptions } from "./models/password-generate.model";
import staticPlugin from "@elysiajs/static";

const app = new Elysia();

app.use(html());
app.use(staticPlugin());

app.get("/", () => (
  <Layout>
    <App />
  </Layout>
));

app.post("/generate-password", ({ body }: any) => {
  const { passwordLengthInput, checkbox }: PasswordGenerationOptions = body;
  const allowedCharacters = generateAllowedCharacters({ checkbox });
  const password = generatePassword(allowedCharacters, passwordLengthInput);
  return (
    <input
      type="text"
      class="input input-bordered w-full max-w-s pointer-events-none"
      value={password}
      id="passwordField"
    />
  );
});

export default app;
