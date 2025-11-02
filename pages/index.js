"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [noteId, setNoteId] = useState(null);

  // Create note on mount
  useEffect(() => {
    async function createNote() {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: "" }),
      });
      const data = await res.json();
      setNoteId(data._id);
    }
    createNote();
  }, []);

  // Auto-save every 3 seconds
  useEffect(() => {
    if (!noteId) return;
    const timer = setTimeout(async () => {
      await fetch(`/api/notes/${noteId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [text, noteId]);

  return (
    <textarea
      placeholder="Start typing..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{
        width: "100%",
        height: "100%",
        padding: "16px",
        border: "none",
        outline: "none",
        fontSize: "15px",
        resize: "none",
        fontFamily: "monospace",
        color: "#333",
      }}
    />
  );
}
