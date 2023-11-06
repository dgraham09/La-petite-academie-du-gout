//define function that contains server-side code
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://dgraham09:${encodeURIComponent(
        "Tokyo_2050"
      )}@cluster0.nwerivo.mongodb.net/?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });
    console.log(result);

    //close db connection
    client.close();

    res.status(201).json({ message: "Contact saved!" });
  }
}

export default handler;
