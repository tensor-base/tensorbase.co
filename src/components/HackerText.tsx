"use client";

import { useEffect, useRef, useState } from "react";

export default function HackerText() {
  const finalText = "aGFwcHkgYnVpbGRpbmc=";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const [display, setDisplay] = useState("");
  const frame = useRef(0);

  useEffect(() => {
    let running = true;
    const scrambleDuration = 20; // frames per character before locking

    function animate() {
      if (!running) return;

      let output = "";
      for (let i = 0; i < finalText.length; i++) {
        if (frame.current < i * scrambleDuration) {
          // random placeholder char
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          // lock to final base64 char
          output += finalText[i];
        }
      }

      setDisplay(output);

      if (frame.current < finalText.length * scrambleDuration) {
        frame.current++;
        requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      running = false;
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "20px",
        whiteSpace: "pre",
        display: "inline-block",
      }}
    >
      {display}
      <span className="cursor">_</span>
      <style jsx>{`
        .cursor {
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
