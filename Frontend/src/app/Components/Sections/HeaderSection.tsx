import React from 'react';

const HeaderSection = () => {
  return (
    <section 
      className="relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,128,128,0.35) 0%, rgba(32,178,170,0.35) 50%, rgba(72,209,204,0.35) 100%), radial-gradient(circle at 60% 30%, rgba(72, 209, 204, 0.25) 0%, rgba(72, 209, 204, 0.08) 40%, transparent 0%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='heroNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.5' numOctaves='8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heroNoise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply, lighten, multiply",
        backgroundColor: "#fff",
      }}
    >
      <style>{`
        @property --_i {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @property --_j {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .avatar-container {
          --s: 120px;
          --g: 14px;
          
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px auto;
        }

        .avatar-container img {
          position: absolute;
          width: var(--s);
          height: var(--s);
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .avatar-container img:hover {
          transform: scale(1.2) !important;
          z-index: 10;
        }

        .avatar-container img:nth-child(1) {
          transform: rotate(0deg) translate(180px) rotate(0deg);
        }
        .avatar-container img:nth-child(2) {
          transform: rotate(45deg) translate(180px) rotate(-45deg);
        }
        .avatar-container img:nth-child(3) {
          transform: rotate(90deg) translate(180px) rotate(-90deg);
        }
        .avatar-container img:nth-child(4) {
          transform: rotate(135deg) translate(180px) rotate(-135deg);
        }
        .avatar-container img:nth-child(5) {
          transform: rotate(180deg) translate(180px) rotate(-180deg);
        }
        .avatar-container img:nth-child(6) {
          transform: rotate(225deg) translate(180px) rotate(-225deg);
        }
        .avatar-container img:nth-child(7) {
          transform: rotate(270deg) translate(180px) rotate(-270deg);
        }
        .avatar-container img:nth-child(8) {
          transform: rotate(315deg) translate(180px) rotate(-315deg);
        }

        .avatar-container.reverse img:nth-child(1) {
          transform: rotate(0deg) translate(180px) rotate(0deg);
        }
        .avatar-container.reverse img:nth-child(2) {
          transform: rotate(60deg) translate(180px) rotate(-60deg);
        }
        .avatar-container.reverse img:nth-child(3) {
          transform: rotate(120deg) translate(180px) rotate(-120deg);
        }
        .avatar-container.reverse img:nth-child(4) {
          transform: rotate(180deg) translate(180px) rotate(-180deg);
        }
        .avatar-container.reverse img:nth-child(5) {
          transform: rotate(240deg) translate(180px) rotate(-240deg);
        }
        .avatar-container.reverse img:nth-child(6) {
          transform: rotate(300deg) translate(180px) rotate(-300deg);
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20 gap-8">
        <div className="avatar-container">
          <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=10" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=9" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=8" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=25" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" />
        </div>
        
        <div className="avatar-container reverse">
          <img src="https://i.pravatar.cc/150?img=45" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=18" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=23" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=8" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=19" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=34" alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;