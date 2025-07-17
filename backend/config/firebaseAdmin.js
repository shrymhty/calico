import admin from "firebase-admin";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Make sure the path matches where you placed the file
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;