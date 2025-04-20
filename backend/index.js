import dotenv from "dotenv";
dotenv.config();
import PUBLIC_DATA from "./contant.js";

import app from "./src/app.js";

app.listen(PUBLIC_DATA.port, () => {
  console.log(`Server running on port ${PUBLIC_DATA.port}`);
});
