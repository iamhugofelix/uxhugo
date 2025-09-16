import { useState } from "react";

export default function CopyToClipboard ({text}) {
    const [copied, setCopied] = useState(false)

    function copyText (getText) {
        navigator.clipboard.writeText(getText)
        .then(() => setCopied(true))
    }

  return (
    <div className="copy-button text-md">
        <span>hey@uxhugo.com</span>
        <div className="divider"></div>
        <a className='text-md' onClick={() => {copyText(text)}}>
            {copied ? 'Copied' : 'Copy email'}
        </a>

    </div>
  );
}