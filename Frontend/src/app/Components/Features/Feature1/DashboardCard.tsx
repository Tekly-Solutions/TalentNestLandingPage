import React from "react";
import Card from "./Card";
import BarItem from "./BarItem";

// Permission Chip Component
const PermissionChip: React.FC<{ label: string; active: boolean }> = ({
  label,
  active,
}) => (
  <span
    style={{
      fontSize: "10px",
      padding: "4px 8px",
      borderRadius: "4px",
      background: active ? "#E8D4F0" : "#f0f0f0",
      color: active ? "#4B0150" : "#999",
      fontWeight: active ? 600 : 400,
      border: `1px solid ${active ? "#D4B5E0" : "#e0e0e0"}`,
      cursor: "pointer",
      transition: "all 0.2s ease",
    }}
  >
    {active && "✓ "}
    {label}
  </span>
);

interface DashboardCardProps {
  colorScheme?: {
    gradient: string;
    shadow: string;
  };
  title?: string;
  description?: string;
  imageSrc?: string;
  showPipeline?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  colorScheme,
  title = "Your face is your ID",
  description = "Secure attendance starts with a smile. Our advanced AI-powered face recognition verifies each employee's identity instantly, ensuring only authorized team members can punch in or out. No more buddy punching, shared IDs, or attendance fraud just fast, accurate, touchless verification that's uniquely yours.",
  imageSrc,
  showPipeline,
}) => {
  const defaultColors = {
    gradient: "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%)",
    shadow: "rgba(255,224,102,0.12)",
  };

  const colors = colorScheme || defaultColors;

  // decide whether to show the verification pipeline:
  // - if `showPipeline` is provided, respect it
  // - otherwise show pipeline only when there is NO colorScheme (attendance UI)
  const shouldShowPipeline =
    typeof showPipeline === "boolean" ? showPipeline : !colorScheme;

  const isOrgManagement = Boolean(colorScheme) && !imageSrc;

  return (
    <Card
      className="dashboard-card"
      style={{
        background: "#fff",
        border: "1px solid #ececec",
        borderRadius: "12px",

        padding: "24px 20px",
        margin: 0,
        position: "relative",
        width: "auto",
        minHeight: "unset",
        maxWidth: "100%",
      }}
    >
      {/* Arrow Button at top right */}
      <div
        style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}
      ></div>
      <h3
        style={{
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "14px",
          color: "#000",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        "{title}"
      </h3>
      <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
        {description}
      </p>
      <div style={{ marginTop: "30px", position: "relative" }}>
        {isOrgManagement ? (
          // Organization Management UI - Role Permissions Interface
          <div
            style={{
              width: "100%",
              maxWidth: "380px",
              margin: "0 auto",
              borderRadius: "16px",
              padding: "16px",
              background: "#f8f9fa",
              border: "1px solid #e0e0e0",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: "14px" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2c2c2c",
                  marginBottom: "4px",
                }}
              >
                Role: HR Manager
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#666",
                }}
              >
                Select permissions to assign
              </div>
            </div>

            {/* Search Bar */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #d0d0d0",
                borderRadius: "8px",
                padding: "8px 12px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "11px", color: "#aaa" }}>
                Search permissions...
              </span>
            </div>

            {/* Permission Categories */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {/* Category: Employee Management */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "10px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#4B0150",
                    }}
                  >
                    Employee Management
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      color: "#fff",
                      background: "#4B0150",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    5/8
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <PermissionChip label="View" active={true} />
                  <PermissionChip label="Edit" active={true} />
                  <PermissionChip label="Delete" active={false} />
                  <PermissionChip label="Export" active={true} />
                </div>
              </div>

              {/* Category: Leave & Attendance */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "10px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#4B0150",
                    }}
                  >
                    Leave & Attendance
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      color: "#fff",
                      background: "#6B0170",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    3/6
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <PermissionChip label="Approve" active={true} />
                  <PermissionChip label="Reject" active={true} />
                  <PermissionChip label="Override" active={false} />
                </div>
              </div>

              {/* Category: Reports */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "10px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#4B0150",
                    }}
                  >
                    Reports & Analytics
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      background: "#E8D4F0",
                      color: "#4B0150",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    2/4
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <PermissionChip label="View Reports" active={true} />
                  <PermissionChip label="Generate" active={true} />
                  <PermissionChip label="Customize" active={false} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "12px",
              }}
            >
              <button
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #d0d0d0",
                  background: "#fff",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#666",
                  cursor: "pointer",
                }}
              >
                Preview
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundImage:
                    "linear-gradient(90deg, #4B0150, #6B0170, #4B0150)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Save Role
              </button>
            </div>
          </div>
        ) : (
          // Original Attendance UI (only if pipeline should be shown)
          shouldShowPipeline ? (
            <div
              style={{
                width: "100%",
                maxWidth: "380px",
                margin: "0 auto",
                borderRadius: "24px 0 24px 0px",
                padding: "20px 15px 0",
                boxShadow: "none",
                position: "relative",
                backgroundImage: `${colors.gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
                backgroundBlendMode: "multiply, lighten",
                backgroundAttachment: "fixed",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  marginBottom: "15px",
                  color: "white",
                }}
              >
                Verification Pipeline
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  padding: "10px 10px 10px 10px",
                  borderRadius: "24px 0 24px 0px",
                  background: "#fff",

                  marginBottom: "18px",
                }}
              >
                <BarItem label="Face Detected" width={75} color="#ffd93d" />
                <BarItem label="Identity Verified" width={65} color="#ffb347" />
                <BarItem label="Access Granted" width={85} color="#a8e6cf" />
                <BarItem label="Attendance Marked" width={90} color="#90caf9" />
                <BarItem label="Error / Retry" width={60} color="#b39ddb" />
              </div>
            </div>
          ) : null
        )}

        {imageSrc ? (
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <img
              src={imageSrc}
              alt="Canvas preview"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "24px 0 24px 0px",
                display: "inline-block",
              }}
            />
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default DashboardCard;
