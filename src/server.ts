import app from "./app";
let port = process.env.PORT || "3000";

app.listen(parseInt(port),'localhost', () => {
    console.log('Express server listening on port ' );
})