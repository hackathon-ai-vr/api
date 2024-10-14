import 'module-alias/register';
import 'dotenv/config'
import { App } from "./src/config/App";

const app = new App()

app.server.listen(4000, () => {
  console.log('Listen on http://localhost:4000')
})
