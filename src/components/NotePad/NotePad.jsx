import { PencilLine, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NotePad () {
const [isOpen, setIsOpen] = useState(false);
const [notes, SetNotes] = useState('');
const notepadRef = useRef(null);
const mailtoBody = encodeURIComponent(notes)

// Load Notes from local storage
useEffect(() => {
    const savedNotes = localStorage.getItem('VisitorNotes')
    savedNotes && SetNotes(savedNotes);
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

  return (
    <div ref={notepadRef} className={`notepad ${isOpen ? "notepad-open" : ""}`}>
      <div className={`notepad-header ${!isOpen ? "notepad-close" : ""}`}>
        <span className="notes-title text-dark bold">
          {!isOpen ? "" : "Notepad"}
        </span>

        <a
          onClick={() => {
            return setIsOpen(!isOpen);
          }}
          className={`notepad-button ${
            isOpen ? "notepad-button--close" : "notepad-button--open"
          }`}
        >

        {!isOpen ? (
            <>
              <PencilLine />{" "}
              <span className="text-dark">Open Notepad</span>
            </>
          ) : (
            <XIcon />
        )}

        </a>

      </div>

      {isOpen && (
        <div className="notepad-wrapper">
          <textarea
            className="notepad-textarea"
            value={notes}
            onChange={(e) => SetNotes(e.target.value)}
            placeholder="Type your notes..."
            autoFocus
          ></textarea>
        </div>
      )}

      {isOpen && (
        <div className="notepad-actions">
          <a
            href={`mailto:hugofelix.91@gmail.com?subject=Notes%20from%20Hugo%20Felix&body=${mailtoBody}`}
            className="btn btn-sm btn-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send by email
          </a>
        </div>
      )}
    </div>
  );
}