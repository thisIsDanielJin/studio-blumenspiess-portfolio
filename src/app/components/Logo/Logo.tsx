export const Logo = ({ size = 80 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 80 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top trapezoid */}
      <polygon points="32,0 48,0 52,8 28,8" fill="black" />
      {/* Oval */}
      <ellipse cx="40" cy="16" rx="10" ry="8" fill="black" />
      {/* Stem */}
      <rect x="36" y="24" width="8" height="16" fill="black" />
      {/* Main body */}
      <rect x="20" y="40" width="40" height="40" fill="black" />
      {/* White cutout - center vertical */}
      <rect x="36" y="40" width="8" height="24" fill="white" />
      {/* White cutout - left block */}
      <rect x="20" y="40" width="16" height="16" fill="black" />
      {/* White zigzag at bottom */}
      <polygon points="20,80 28,68 36,80 44,68 52,80 60,68 60,80" fill="white" />
    </svg>
  );
};
