import dbConnect from "@/lib/dbConnect";
import Note from "@/models/Note";

export default async function handler(req, res) {
  await dbConnect();
  const { noteId } = req.query;

  const note = await Note.findById(noteId);
  if (!note) return res.status(404).json({ message: "Note not found" });

  if (req.method === "GET") return res.json(note);

  if (req.method === "PUT") {
    const updated = await Note.findByIdAndUpdate(noteId, req.body, { new: true });
    return res.json(updated);
  }

  if (req.method === "DELETE") {
    await Note.findByIdAndDelete(noteId);
    return res.json({ success: true });
  }

  res.status(405).end();
}
