import { PencilLine, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NotePad () {
const [isOpen, setIsOpen] = useState(false);
const [notes, SetNotes] = useState('');
const notepadRef = useRef(null);

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
            isOpen ? "close-button" : "open-button"
          }`}
        >
          {!isOpen ? (
            <>
              <PencilLine /> <span className="mobile-hide">Want to take some notes?</span>
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
          ></textarea>
        </div>
      )}

      {isOpen && (
        <div className="notepad-actions">
          <button href="#" className="btn btn-sm btn-yellow">
            Send by email
          </button>
        </div>
      )}
    </div>
  );
}