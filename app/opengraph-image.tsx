import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Arnold & Finlay — Accountants & Planners, Southport QLD";

/**
 * Social share card. Built from the real logo plus the "outside the square"
 * motif, using system fonts so there's no external font fetch at build time.
 */
export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public/images/logo-main.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fffdf7",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* the escaping idea, cropped top-right */}
        <div
          style={{
            position: "absolute",
            top: -90,
            right: -70,
            width: 320,
            height: 320,
            borderRadius: 9999,
            background: "#ffdd00",
            opacity: 0.9,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 140,
            right: 250,
            width: 70,
            height: 70,
            borderRadius: 9999,
            background: "#ffdd00",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 226,
            right: 356,
            width: 34,
            height: 34,
            borderRadius: 9999,
            background: "#ffdd00",
            display: "flex",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={430} height={113} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#1a1717",
              lineHeight: 1.05,
              letterSpacing: -1.5,
              display: "flex",
            }}
          >
            It&rsquo;s accountancy.
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#1a1717",
              lineHeight: 1.05,
              letterSpacing: -1.5,
              display: "flex",
            }}
          >
            Just not as you know it.
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 27,
              color: "#6b6763",
              display: "flex",
            }}
          >
            Accountants &amp; Planners &middot; Southport, QLD &middot; (07) 5532 7244
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 14,
            background: "#1a1717",
            display: "flex",
          }}
        />
      </div>
    ),
    size
  );
}
