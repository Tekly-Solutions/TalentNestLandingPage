import React from "react";
import HeadButton from "@/app/Components/Sections/HeadButton";
import RoundedShadowButton from "@/app/Components/Sections/RoundedShadowButton";

interface BarItemProps {
  label: string;
  width: number;
  color: string;
}

const BarItem: React.FC<BarItemProps> = ({ label, width, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <div style={{ fontSize: "10px", width: "70px", color: "#666" }}>
      {label}
    </div>
    <div
      style={{
        flex: 1,
        height: "8px",
        background: "#f0f0f0",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: color,
          borderRadius: "10px",
        }}
      />
    </div>
  </div>
);

interface RatingCircleProps {
  score: number;
  label: string;
}

const RatingCircle: React.FC<RatingCircleProps> = ({ score, label }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "#ffd700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "36px",
        fontWeight: 700,
        color: "#000",
        margin: "0 auto 12px",
        border: "4px solid rgba(255, 215, 0, 0.3)",
        boxShadow: "0 4px 20px rgba(255, 215, 0, 0.4)",
      }}
    >
      {score.toFixed(1)}
    </div>
    <div style={{ fontSize: "13px", color: "white" }}>{label}</div>
  </div>
);

interface StatRowProps {
  icon: string;
  name: string;
  time: string;
  iconBg: string;
  iconColor: string;
}

const StatRow: React.FC<StatRowProps> = ({
  icon,
  name,
  time,
  iconBg,
  iconColor,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: 600,
          background: iconBg,
          color: iconColor,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: "15px", color: "white" }}>{name}</span>
    </div>
    <div style={{ fontSize: "32px", fontWeight: 700, color: "white" }}>
      {time}
    </div>
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const baseStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.35)",
    backdropFilter: "blur(40px)",
    borderRadius: "20px",
    padding: "35px",
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    ...style,
  };

  return (
    <div className={`card ${className}`} style={baseStyle}>
      {children}
    </div>
  );
};

const Feature1: React.FC = () => {
  return (
    <main
      className="w-full max-w-[1000px] bg-white text-slate-900 rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto mt-12 mb-8 p-6 sm:p-8 relative pb-28 overflow-hidden"
      style={{
        border: "4px solid transparent",
        borderImage: "linear-gradient(90deg, #2b0a3a, #000) 1",
      }}
    >
      <div className="flex justify-center">
        <HeadButton />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "#000",
              lineHeight: 1.1,
            }}
          >
            Built for demanding
            <br />
            businesses
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            Designed to meet the highest standards for seamless performance,
            scalability and reliability for businesses that need to stay ahead
            in a fast-paced market.
          </p>
        </div>

        {/* Row 1: Dashboard + Integrations */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <Card className="dashboard-card">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "14px",
                color: "#000",
              }}
            >
              Powerful reporting tools
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
              Get visibility into your work, your process, and your results with
              pre-built reporting. Share beautiful reports with your team to
              keep your business on track, or create custom automations using
              our API.
            </p>
            <div style={{ marginTop: "30px", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  margin: "0 auto",
                  background:
                    "linear-gradient(135deg, #4a5f4a 0%, #5a7055 50%, #6b8e6b 100%)",
                  borderRadius: "12px 12px 0 0",
                  padding: "20px 15px 0",
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "4px",
                    padding: "15px",
                    height: "240px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      marginBottom: "15px",
                      color: "#333",
                    }}
                  >
                    Hiring Pipeline
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      padding: "10px 0",
                    }}
                  >
                    <BarItem label="New Leads" width={75} color="#ffd93d" />
                    <BarItem label="Screening" width={65} color="#ffb347" />
                    <BarItem label="Interview" width={85} color="#a8e6cf" />
                    <BarItem label="Offer" width={90} color="#90caf9" />
                    <BarItem label="Hired" width={60} color="#b39ddb" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="integrations-card">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "14px",
                color: "#000",
              }}
            >
              270+ integrations
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
              Bring all of your favorite productivity tools. Connect to email,
              calendar, Slack, video conferencing, productivity suites,
              analytics platforms, and HR tech and assessments to payroll.
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                fontSize: "15px",
                color: "#000",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              <span>→</span>
            </a>
          </Card>
        </div>

        {/* Row 2: Mobile + Ratings */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <Card className="mobile-card">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "14px",
                color: "#000",
              }}
            >
              Mobile-first HR
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
              Empower on-the-go managers and employees with a simple,
              easy-to-deploy app for iOS and Android. Send timely information
              through push requests, time-tracking, and more from anywhere in
              your organization.
            </p>
            <div style={{ marginTop: "25px", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  width: "200px",
                  background:
                    "linear-gradient(135deg, #c8e0c8 0%, #d8ead8 50%, #e8f0e8 100%)",
                  borderRadius: "28px",
                  padding: "12px",
                  boxShadow:
                    "0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    height: "320px",
                    padding: "15px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      marginBottom: "15px",
                    }}
                  >
                    Time Off
                  </div>
                  <div
                    style={{ fontSize: "11px", color: "#666", lineHeight: 1.8 }}
                  >
                    <div style={{ marginBottom: "8px" }}>Your time off</div>
                    <div style={{ marginBottom: "8px" }}>
                      Total time off: <strong>2</strong>
                    </div>
                    <div style={{ marginBottom: "8px" }}>
                      Total hours: <strong>16</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    fontSize: "11px",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  🍎 App Store
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    fontSize: "11px",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  ▶ Google Play
                </div>
              </div>
            </div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "15px",
                fontSize: "15px",
                color: "#000",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Download on iOS or Android →
            </a>
          </Card>

          <Card className="ratings-card">
            <div
              style={{
                display: "inline-block",
                background: "#ffd700",
                color: "#000",
                padding: "8px 20px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "30px",
              }}
            >
              The best rated HR system
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <RatingCircle score={9.0} label="Ease of setup" />
              <RatingCircle score={9.1} label="Ease of use" />
              <RatingCircle score={9.3} label="Quality of support" />
            </div>
          </Card>
        </div>

        {/* Row 3: Response Times + Support */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <Card className="response-card">
            <div
              style={{
                display: "inline-block",
                background: "#90ee90",
                color: "#000",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "25px",
              }}
            >
              Average time to first reply
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                marginTop: "20px",
              }}
            >
              <StatRow
                icon="Chat"
                name="Chat"
                time="24s"
                iconBg="#ff6b9d"
                iconColor="white"
              />
              <StatRow
                icon="Phone"
                name="Phone"
                time="35s"
                iconBg="#ffd93d"
                iconColor="#333"
              />
              <StatRow
                icon="Email"
                name="Email"
                time="96m"
                iconBg="#ff6b9d"
                iconColor="white"
              />
            </div>
          </Card>

          <Card className="support-card">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "14px",
                color: "#000",
              }}
            >
              Outstanding support & training
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
              Access award-winning, 24/7 support and extensive training
              resources, from video courses to in-product help. Schedule
              one-on-one training or get assistance in your time zone from our
              global team.
            </p>
          </Card>
        </div>

        {/* Row 4: Security (Full Width) */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <Card className="security-card" style={{ gridColumn: "1 / -1" }}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "14px",
                color: "#000",
              }}
            >
              Enterprise-grade security & compliance
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
              Trust Workable with your data, backed by ISO 27001, 27017, SOC 2
              Type II, SOC 3 certifications. Compliant with GDPR, EEO and CCPA
              data privacy, automated policy toggles. Maintain transparency with
              backup and audit logging included.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Feature1;
