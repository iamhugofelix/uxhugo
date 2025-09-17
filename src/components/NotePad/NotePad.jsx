import { PencilLine, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NotePad () {
const [isOpen, setIsOpen] = useState(false);
const [notes, setNotes] = useState('');
const notepadRef = useRef(null);

// Load Notes from local storage
useEffect(() => {
    const savedNotes = localStorage.getItem('VisitorNotes')
    savedNotes && setNotes(savedNotes);
}, [] )

// Save the content of the textarea to localstorage
useEffect(() => {
    const save = localStorage.setItem('VisitorNotes', notes)
}, [notes])

// Close when click outside
useEffect (() => {
    function checkClickOutside(event) {
        if ( isOpen && 
            notepadRef.current &&
            !notepadRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }
    document.addEventListener("mousedown", checkClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };

}, [isOpen])

// Handling email sending
// const sendToEmail = () => {
//   const subject = encodeURIComponent("Notes from Hugo Felix Portfolio");
//   const body = encodeURIComponent(notes);
//   const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

//   window.location.href = mailtoLink;
// }

const downloadNotes = () => {
  const blob = new Blob([notes], {type: 'text/plain'})
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "hugo-felix-portfolio-notes.txt";
  link.click();

  URL.revokeObjectURL(url);
}



  return (
    <div ref={notepadRef} className={`notepad ${isOpen ? "notepad-open" : ""}`}>
      <div className={`notepad-header ${!isOpen ? "notepad-close" : ""}`}>
        <span className="notes-title text-dark bold">
          {!isOpen ? "" : "Notepad"}
        </span>

        <button
          onClick={() => {
            return setIsOpen(!isOpen);
          }}
          className={`notepad-button ${
            isOpen ? "notepad-button--close" : "notepad-button--open"
          }`}
        >
          {!isOpen ? (
            <>
              <PencilLine /> <span className="text-dark">Open Notepad</span>
            </>
          ) : (
            <XIcon />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="notepad-wrapper">
          <textarea
            className="notepad-textarea"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Type your notes..."
            autoFocus
          ></textarea>
        </div>
      )}

      {isOpen && (
        <div className="notepad-actions">
          <button
            onClick={downloadNotes}
            className="btn btn-sm btn-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Notes
          </button>
        </div>
      )}
    </div>
  );
}