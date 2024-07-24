import app from "./app.js";
import { dbConnect } from "./config/db-connect.js";

const main = async () => {
  const PORT = process.env.PORT || 8080;
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  } catch (error) {
    throw error;
  }
};

main().catch((err) => {
  process.exit(1);
});
