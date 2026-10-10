/** @format */

import React from "react";

const ServiceIcon = ({ color = "#934AC9" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="339"
      height="80"
      viewBox="0 0 339 80"
      fill="none"
      className="max-w-full"
    >
      <g filter="url(#filter0_g_191_733)">
        <rect x="7.66663" y="8" width="324" height="64" fill={color} />
      </g>
      <defs>
        <filter
          id="filter0_g_191_733"
          x="0.366626"
          y="0.7"
          width="338.6"
          height="78.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.10752687603235245 0.10752687603235245"
            numOctaves="3"
            seed="1799"
          />
          <feDisplacementMap
            in="shape"
            scale="14.600000381469727"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect1_texture_191_733">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export function ReasonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M3.39131 6.31792C1.80952 8.34124 0.738595 10.7159 0.269212 13.2409C-0.200171 15.7659 -0.0541845 18.3668 0.69481 20.8234H11.7667L3.39131 6.31792ZM1.16848 22.1568C2.13607 24.5355 3.65983 26.6476 5.61201 28.3161C7.56418 29.9845 9.88789 31.1606 12.3883 31.7458L17.9245 22.1568H1.16848ZM28.6087 25.9956C30.1905 23.9723 31.2614 21.5976 31.7308 19.0726C32.2002 16.5476 32.0542 13.9467 31.3052 11.4901H20.2333L28.6087 25.9956ZM22.1583 17.4901L13.78 32.002C16.3242 32.3588 18.9169 32.0967 21.3382 31.2381C23.7596 30.3795 25.9382 28.9496 27.6892 27.0696L22.1583 17.4901ZM9.84149 14.8234L18.2202 0.311573C15.676 -0.0452367 13.0832 0.216787 10.6618 1.07542C8.24046 1.93406 6.06186 3.36398 4.31082 5.24392L9.84149 14.8234ZM19.6117 0.56774L14.0755 10.1568H30.8315C29.8639 7.77802 28.3402 5.6659 26.388 3.99748C24.4358 2.32905 22.1121 1.15294 19.6117 0.56774Z"
        fill="url(#paint0_linear_29_123)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_29_123"
          x1="-4"
          y1="16"
          x2="38"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0226" stopColor="#dc0205" />
          <stop offset="0.9054" stopColor="#261f0c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ServiceIcon;
