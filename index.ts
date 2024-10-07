import 'module-alias/register';
import { App } from "./src/config/App";

const app = new App()

app.server.listen(4000, () => {
  console.log('Listen on http://localhost:4000')
})
