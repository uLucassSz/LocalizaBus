import { connect, set } from "mongoose"
set("strictQuery", true);

export default async () => {
    await connect("mongodb+srv://lucaix:CwEz5lja0dOsTUWd@cluster0.azpp5or.mongodb.net/DATABASE?retryWrites=true&w=majority")
        .then(() => console.log("Database Conectada"))
        .catch(console.log)
}