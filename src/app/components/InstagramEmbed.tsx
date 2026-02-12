import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  maxWidth?: number;
  hideCaption?: boolean;
}

export function InstagramEmbed({ url, maxWidth = 540, hideCaption = false }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Instagram oEmbed API
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Load the embed
    const loadEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    script.onload = loadEmbed;
    if (window.instgrm) {
      loadEmbed();
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: `${maxWidth}px`,
          minWidth: "326px",
          padding: "0",
          width: "99.375%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={url}
            style={{
              background: "#FFFFFF",
              lineHeight: "0",
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: "0",
                  height: "40px",
                  marginRight: "14px",
                  width: "40px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: "1",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: "0",
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: "0",
                    height: "14px",
                    width: "60px",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "19% 0" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "4px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: "0",
                  height: "20px",
                  marginBottom: "0",
                  marginRight: "8px",
                  width: "100px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: "0",
                  height: "20px",
                  width: "60px",
                }}
              />
            </div>
          </a>
          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: "0",
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
            }}
          >
            <a
              href={url}
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View this post on Instagram
            </a>
          </p>
        </div>
      </blockquote>
      <div ref={containerRef} />
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
