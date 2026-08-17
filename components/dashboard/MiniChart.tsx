export default function MiniChart() {
  return (
    <svg
      width="85"
      height="42"
      viewBox="0 0 85 42"
      fill="none"
      className="overflow-visible"
    >
      <path
        d="M2 35C8 30 8 34 13 28C18 22 19 31 25 23C31 15 31 25 37 20C43 15 45 19 50 11C55 4 59 18 64 13C69 8 73 12 83 2V42H2V35Z"
        fill="url(#chartGradient)"
        opacity=".13"
      />

      <path
        d="M2 35C8 30 8 34 13 28C18 22 19 31 25 23C31 15 31 25 37 20C43 15 45 19 50 11C55 4 59 18 64 13C69 8 73 12 83 2"
        stroke="#52c97d"
        strokeWidth="1.5"
        fill="none"
      />

      <defs>
        <linearGradient
          id="chartGradient"
          x1="42"
          y1="0"
          x2="42"
          y2="42"
        >
          <stop stopColor="#52c97d" />
          <stop offset="1" stopColor="#52c97d" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}