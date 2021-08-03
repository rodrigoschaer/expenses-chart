import ChartBar from "./ChartBar";
import "./Chart.scss";

type DataPointType = {
  label: string;
  value: number;
};

type ChartProps = {
  dataPoints: DataPointType[];
};

const Chart = (props: ChartProps) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: DataPointType) => dataPoint.value
  );

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
