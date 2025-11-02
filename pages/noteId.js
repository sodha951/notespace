import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NotePage() {
  const router = useRouter();
  const { noteId } = router.query;
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (!noteId) return;
    fetch(`/api/notes/${noteId}`)
      .then((res) => res.json())
      .then(setNote);
  }, [noteId]);

  if (!note) return <p>Loading...</p>;

  return (
    <div style={{ padding: "16px" }}>
      <textarea
        value={note.content}
        readOnly={!note.editable}
        style={{
          width: "100%",
          height: "80vh",
          border: "1px solid #ddd",
          padding: "12px",
        }}
      />
    </div>
  );
}
