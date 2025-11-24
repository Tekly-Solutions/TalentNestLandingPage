import React, { useState, useEffect } from "react";
import { Camera, MapPin, Clock, Check, Zap } from "lucide-react";

type ScanPoint = {
  x: number;
  y: number;
  id: number;
};

const FaceRecognitionUI = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanPoints, setScanPoints] = useState<ScanPoint[]>([]);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanComplete(true);
            setTimeout(() => {
              setIsScanning(false);
              setScanProgress(0);
              setScanComplete(false);
            }, 2000);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      // Generate random scan points
      const pointInterval = setInterval(() => {
        if (scanProgress < 100) {
          setScanPoints((prev) =>
            [
              ...prev,
              {
                x: Math.random() * 160 + 20,
                y: Math.random() * 160 + 40,
                id: Date.now() + Math.random(),
              },
            ].slice(-15)
          );
        }
      }, 150);

      return () => {
        clearInterval(interval);
        clearInterval(pointInterval);
      };
    }
  }, [isScanning, scanProgress]);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
    setScanPoints([]);
  };

  return (
    <div>
      <div style={{ width: "375px", margin: "0 auto" }}>
        <div
          style={{
            background: "#0d1117",
            borderRadius: "24px",
            height: "900px",
            padding: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Status Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              fontSize: "11px",
              color: "#fff",
            }}
          >
            <span style={{ fontWeight: 600 }}>9:41</span>
            <div style={{ display: "flex", gap: "4px" }}>
              <div
                style={{
                  width: "15px",
                  height: "11px",
                  border: "1px solid #fff",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0px",
              }}
            >
              Face Recognition
            </h2>
          </div>

          {/* Face Recognition Area */}
          <div
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              margin: "0 auto 24px",
              borderRadius: "50%",
              background: isScanning
                ? "linear-gradient(135deg, rgba(0, 188, 212, 0.2) 0%, rgba(38, 166, 154, 0.2) 100%)"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
              border: isScanning
                ? "3px solid #00bcd4"
                : "3px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              transition: "all 0.3s ease",
              padding: "10px",
            }}
          >
            {/* Scanning effect */}
            {isScanning && (
              <>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #00bcd4",
                    animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent 0%, #00bcd4 50%, transparent 100%)",
                    animation: "scan 2s linear infinite",
                    boxShadow: "0 0 20px #00bcd4",
                  }}
                />
                {/* Scan points */}
                {scanPoints.map((point) => (
                  <div
                    key={point.id}
                    style={{
                      position: "absolute",
                      left: point.x,
                      top: point.y,
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#00bcd4",
                      boxShadow: "0 0 8px #00bcd4",
                      animation: "fadeIn 0.5s ease-out",
                    }}
                  />
                ))}
              </>
            )}

            {/* Icon */}
            {!scanComplete ? (
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Face"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  filter: isScanning ? "drop-shadow(0 0 20px #00bcd4)" : "none",
                  transition: "all 0.3s ease",
                }}
              />
            ) : (
              <Check
                size={64}
                color="#4caf50"
                strokeWidth={3}
                style={{
                  filter: "drop-shadow(0 0 20px #4caf50)",
                  animation: "scaleIn 0.3s ease-out",
                }}
              />
            )}
          </div>

          {/* Progress Bar */}
          {isScanning && (
            <div
              style={{
                width: "180px",
                height: "6px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "3px",
                margin: "0 auto 24px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${scanProgress}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #00bcd4 0%, #26a69a 100%)",
                  borderRadius: "3px",
                  transition: "width 0.3s ease",
                  boxShadow: "0 0 10px #00bcd4",
                }}
              />
            </div>
          )}

          {/* Status Text */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
              minHeight: "40px",
            }}
          >
            {!isScanning && !scanComplete && (
              <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.5 }}>
                Position your face in the frame
                <br />
                <span style={{ color: "#00bcd4" }}>
                  and tap the button below
                </span>
              </p>
            )}
            {isScanning && !scanComplete && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#00bcd4",
                  fontWeight: 600,
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              >
                Analyzing facial features...
                <br />
                <span style={{ fontSize: "11px", color: "#888" }}>
                  {scanProgress}% complete
                </span>
              </p>
            )}
            {scanComplete && (
              <p
                style={{
                  fontSize: "14px",
                  color: "#4caf50",
                  fontWeight: 700,
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                ✓ Verified Successfully!
                <br />
                <span style={{ fontSize: "11px", color: "#888" }}>
                  Attendance marked
                </span>
              </p>
            )}
          </div>

          {/* Info Cards */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            <div
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                padding: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Clock
                size={14}
                color="#00bcd4"
                style={{ marginBottom: "4px" }}
              />
              <div style={{ fontSize: "10px", color: "#888" }}>Time</div>
              <div style={{ fontSize: "12px", color: "#fff", fontWeight: 600 }}>
                09:15 AM
              </div>
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                padding: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <MapPin
                size={14}
                color="#ffb347"
                style={{ marginBottom: "4px" }}
              />
              <div style={{ fontSize: "10px", color: "#888" }}>Location</div>
              <div style={{ fontSize: "12px", color: "#fff", fontWeight: 600 }}>
                Office HQ
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={startScan}
            disabled={isScanning}
            style={{
              width: "100%",
              background: isScanning
                ? "linear-gradient(135deg, #555 0%, #333 100%)"
                : scanComplete
                ? "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)"
                : "linear-gradient(135deg, #00bcd4 0%, #00897b 100%)",
              border: "none",
              borderRadius: "16px",
              padding: "16px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#fff",
              cursor: isScanning ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: isScanning
                ? "none"
                : "0 8px 24px rgba(0, 188, 212, 0.4)",
              transition: "all 0.3s ease",
              opacity: isScanning ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isScanning) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0, 188, 212, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isScanning) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0, 188, 212, 0.4)";
              }
            }}
          >
            {scanComplete ? (
              <>
                <Check size={20} />
                <span>Punch In Complete</span>
              </>
            ) : (
              <>
                <Zap size={20} />
                <span>{isScanning ? "Scanning..." : "Tap to Punch In"}</span>
              </>
            )}
          </button>

          <style>{`
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.5;
              }
              50% {
                transform: scale(1.05);
                opacity: 0.8;
              }
            }

            @keyframes ping {
              75%, 100% {
                transform: scale(2);
                opacity: 0;
              }
            }

            @keyframes scan {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: scale(0);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes scaleIn {
              0% {
                transform: scale(0);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognitionUI;
