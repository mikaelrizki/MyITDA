import { Dimensions, StyleSheet,} from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { COLORS, SIZES } from "../../styles";

export default function Chart({ labels, ip }) {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundColor: COLORS.secondary,
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      stroke: "#cccccc",
      strokeDasharray: "",
    },
    propsForVerticalLabels: {
      fontSize: SIZES.extraSmallText,
    },
    propsForHorizontalLabels: {
      fontSize: SIZES.extraSmallText,
    },
  };

  handleDataPointClick = () => {
    console.log("harus e keluar ip dan semester");
  };

  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: ip,
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
            strokeWidth: 3,
          },
        ],
      }}
      width={screenWidth * 0.83}
      height={300}
      fromZero={true}
      withShadow={false}
      yAxisSuffix=""
      yAxisInterval={0.5}
      segments={8}
      yAxisMax={4.0}
      chartConfig={chartConfig}
      bezier={false}
      style={LOKAL_STYLES.chartStyle}
      onDataPointClick={() => this.handleDataPointClick()}
    />
  );
}

const LOKAL_STYLES = StyleSheet.create({
  chartStyle: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
