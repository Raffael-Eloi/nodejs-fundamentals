import app from "./src/app.js";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});