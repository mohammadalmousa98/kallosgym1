// server.js
// server.js
const express = require("express");
const path = require("path");

const app = express();
const buildPath = path.join(__dirname, "dist");

app.use(express.static(buildPath));

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
