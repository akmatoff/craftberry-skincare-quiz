import type { ReactNode } from "react";

type Props = {
  size?: number;
  strokeWidth?: number;
  progress: number;
  label?: string | ReactNode;
};

export default function CircularProgressBar({
  size = 102,
  strokeWidth = 5,
  progress,
  label,
}: Props) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = (circumference * (100 - progress)) / 100;

  return (
    <svg width={size} height={size}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="var(--muted-content)"
        strokeWidth={strokeWidth}
        fill="none"
      />

      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="var(--primary-darker)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />

      {label && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={size * 0.2}
          fill="var(--foreground-color)"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
