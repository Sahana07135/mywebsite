import React, { useState } from 'react';

interface MonogramLogoProps {
  className?: string;
  size?: number;
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({ className = 'h-8 w-auto', size = 32 }) => {
  const [imgError, setImgError] = useState(false);
  const imageUrl = "https://lh3.googleusercontent.com/aida/AEtjO1Up_1lNZMD1JkU66JpN5QU0s-KY_jVsGxwwpgYCDilbZ53hyCWKMTNNcMRROWMp2sIUAtZEbrmF1hnm-tULFjPaHZTpVNPRCovXWocFy1hq2WFAJaoHjDNuMgw8UHkwl8pwb9dt2kWwmqIr-5r5QJYPvLHCobsXjm2DNBfjdc20Gum3xrCYhzKMA1lQfH5CxWA9mfrhBKW7I_JIJKOzByGseqfKc5P5cyZWZhH5IxO8bw3YDntX09fEUA";

  if (!imgError) {
    return (
      <img
        src={imageUrl}
        alt="Sahana.N Monogram Logo"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
      />
    );
  }

  // High-fidelity SVG recreation matching the exact uploaded Image 2.svg+xml
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sahana.N Monogram Logo"
    >
      {/* Dashed outer orbit circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeDasharray="6 6"
        strokeOpacity="0.85"
      />
      {/* Inner circular avatar head */}
      <circle
        cx="50"
        cy="34"
        r="14"
        stroke="#38bdf8"
        strokeWidth="3.5"
      />
      {/* Node connecting wings */}
      <circle cx="34" cy="42" r="3.5" fill="#38bdf8" />
      <path d="M37 42 L47 48" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="66" cy="42" r="3.5" fill="#a7a9ff" />
      <path d="M63 42 L53 48" stroke="#a7a9ff" strokeWidth="2" />
      {/* Center node */}
      <circle cx="50" cy="49" r="4.5" fill="#38bdf8" />
      {/* Shoulder arc */}
      <path
        d="M32 68 C34 52, 66 52, 68 68"
        stroke="#818cf8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Monogram letters SN */}
      <text
        x="50"
        y="83"
        textAnchor="middle"
        fill="#dfe2f1"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="3"
      >
        S N
      </text>
    </svg>
  );
};
