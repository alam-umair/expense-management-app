import "./barChart.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BarChart = ({ data }) => {
  // Find the maximum value for scaling
  const max = Math.max(...months.map((month) => data[month] || 0), 1);

  return (
    <div className="chart-container">
      {months.map((month) => {
        const value = data[month] || 0;
        const fillHeight = `${(value / max) * 100}%`;
        return (
          <div className="chart-container__bar" key={month}>
            <div
              className="chart-container__bar__fill"
              style={{
                height: fillHeight,
                backgroundColor: value > 0 ? "#4e73df" : "#e0e0e0",
                transition: "height 0.3s",
              }}
              title={value}
            ></div>
            <div className="chart-container__bar__label">{month}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
