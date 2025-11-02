import dbConnect from "@/lib/dbConnect";
import Note from "@/models/Note";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const note = await Note.create(req.body);
    return res.status(201).json(note);
  }

  if (req.method === "GET") {
    const notes = await Note.find({});
    return res.status(200).json(notes);
  }

  res.status(405).end();
}
