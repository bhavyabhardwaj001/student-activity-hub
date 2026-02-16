const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server is running fine");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
