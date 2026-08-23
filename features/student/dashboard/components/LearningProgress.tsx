import ProgressSummary from "./ProgressSummary";

const chartData = [
  { date: "06/05", value: 60 },
  { date: "07/05", value: 68 },
  { date: "08/05", value: 72 },
  { date: "09/05", value: 66 },
  { date: "10/05", value: 77 },
  { date: "11/05", value: 81 },
  { date: "12/05", value: 88 },
];

const CHART_WIDTH = 760;
const CHART_HEIGHT = 320;
const PADDING_LEFT = 58;
const PADDING_RIGHT = 38;
const PADDING_TOP = 24;
const PADDING_BOTTOM = 52;
const yAxisValues = [100, 75, 50, 25, 0];

export default function LearningProgress() {
  const usableWidth = CHART_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const usableHeight = CHART_HEIGHT - PADDING_TOP - PADDING_BOTTOM;
  const chartBottom = CHART_HEIGHT - PADDING_BOTTOM;
  const chartRight = CHART_WIDTH - PADDING_RIGHT;

  const getYPosition = (value: number) => {
    return chartBottom - (value / 100) * usableHeight;
  };

  const points = chartData.map((item, index) => {
    const x = PADDING_LEFT + (index * usableWidth) / (chartData.length - 1);
    const y = getYPosition(item.value);
    return { ...item, x, y };
  });

  const polylinePoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const areaPoints = [
    `${points[0].x},${chartBottom}`,
    polylinePoints,
    `${points[points.length - 1].x},${chartBottom}`,
  ].join(" ");

  return (
    <section className="flex h-full min-h-[700px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Tiêu đề */}
      <div className="mb-6 flex shrink-0 items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          Tiến độ học tập
        </h2>

        <div className="relative">
          <select
            defaultValue="week"
            className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2 pl-4 pr-10 text-sm font-semibold text-slate-600 outline-none transition-all hover:bg-slate-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          >
            <option value="week">Tuần này</option>
            <option value="month">Tháng này</option>
          </select>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
        </div>
      </div>

      {/* Biểu đồ tự giãn để lấp không gian còn lại */}
      <div className="relative flex min-h-[400px] flex-1 overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
        <svg
          className="block h-full min-h-[400px] w-full"
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Biểu đồ tiến độ học tập"
        >
          <defs>
            <linearGradient
              id="progressAreaGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Trục phần trăm và đường kẻ ngang */}
          {yAxisValues.map((value) => {
            const y = getYPosition(value);
            return (
              <g key={value}>
                <text
                  x={PADDING_LEFT - 16}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fill="#94A3B8"
                  fontSize="12"
                  fontWeight="600"
                >
                  {value}%
                </text>
                <line
                  x1={PADDING_LEFT}
                  x2={chartRight}
                  y1={y}
                  y2={y}
                  stroke="#F1F5F9"
                  strokeWidth="1.5"
                  strokeDasharray={value === 0 ? undefined : "6 6"}
                />
              </g>
            );
          })}

          {/* Vùng màu phía dưới đường biểu đồ */}
          <polygon points={areaPoints} fill="url(#progressAreaGradient)" />

          {/* Đường biểu đồ */}
          <polyline
            fill="none"
            points={polylinePoints}
            stroke="#10B981"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#glow)"
          />

          {/* Các chấm và ngày */}
          {points.map((point, index) => {
            const isLast = index === points.length - 1;
            return (
              <g key={point.date}>
                {isLast && (
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="12"
                    fill="#10B981"
                    opacity="0.2"
                    className="animate-ping"
                    style={{ transformOrigin: `${point.x}px ${point.y}px` }}
                  />
                )}

                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isLast ? 6 : 4}
                  fill="#FFFFFF"
                  stroke={isLast ? "#10B981" : "#34D399"}
                  strokeWidth={isLast ? 4 : 3}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-300 hover:r-8 hover:stroke-emerald-600 cursor-pointer"
                />

                <text
                  x={point.x}
                  y={chartBottom + 28}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isLast ? "#1E293B" : "#94A3B8"}
                  fontSize="12"
                  fontWeight={isLast ? "700" : "500"}
                >
                  {point.date}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Nhãn tiến độ hiện tại */}
        <div className="absolute right-4 top-4 rounded-xl border border-emerald-300 bg-emerald-50/90 px-3 py-1.5 text-xs font-bold tracking-wide text-emerald-700 shadow-sm backdrop-blur-sm">
          Tiến độ: <span className="text-emerald-600">85%</span>
        </div>
      </div>

      {/* Các ô tổng tiến độ */}
      <div className="shrink-0 mt-6">
        <ProgressSummary />
      </div>
    </section>
  );
}
