import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "High Plains Raceway — Colorado's Premier Amateur Racing Facility";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #050505 0%, #1a0000 50%, #050505 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#dc2626",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            High Plains Raceway
          </div>

          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#dc2626",
              borderRadius: "2px",
            }}
          />

          <div
            style={{
              fontSize: "24px",
              color: "#a3a3a3",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Colorado&apos;s Premier Amateur Racing Facility
          </div>

          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "24px",
            }}
          >
            {[
              { value: "2.55 mi", label: "Full Course" },
              { value: "15", label: "Turns" },
              { value: "300+", label: "ft Elevation" },
              { value: "4", label: "Configurations" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#dc2626" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "14px", color: "#737373", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "14px",
            color: "#525252",
          }}
        >
          highplainsraceway.com • Deer Trail, CO
        </div>
      </div>
    ),
    { ...size }
  );
}
