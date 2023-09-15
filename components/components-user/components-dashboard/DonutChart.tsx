import React, { Component, ReactNode } from "react";
import Chart from "react-apexcharts";

interface DonutProps {
  options?: object;
  data: {
    series: number[];
    labels: string[];
  };
  width: string;
}

interface DonutState {
  options: object;
  series: number[];
  labels: string[];
}

class Donut extends Component<DonutProps, DonutState> {
  constructor(props: DonutProps) {
    super(props);

    this.state = {
      options: props.options || {},
      series: props.data.series || [],
      labels: props.data.labels || [],
    };
  }

  render(): ReactNode {
    const { width } = this.props;
    return (
      <div className="donut" style={{ width }}>
        {typeof window !== "undefined" && (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="100%"
          />
        )}
      </div>
    );
  }
}

export default Donut;
