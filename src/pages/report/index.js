import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View,
  } from "react-native";
  import React, { Component } from "react";
  import Text from "../../components/Text";
  import IMAGES from "../../assets/images";
  import { COLORS, SIZES, STYLES } from "../../styles";
  import ButtonNilai from "../../components/ButtonNilai";
  import ICONS from "../../assets/icons";
  import { LineChart } from "react-native-chart-kit";
  
  export default class ReportScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableData: [
          { semester: "GASAL 2021/2022", ip: 3.9, sks: 24 },
          { semester: "GENAP 2021/2022", ip: 3.8, sks: 24 },
          { semester: "GASAL 2022/2023", ip: 3.85, sks: 24 },
          { semester: "GENAP 2022/2023", ip: 3.95, sks: 24 },
          { semester: "GENAP 2023/2024", ip: 3.1, sks: 24 },
          { semester: "GENAP 2023/2024", ip: 3.67, sks: 24 },
          { semester: "GENAP 2024/2025", ip: 3.45, sks: 24 },
          { semester: "GENAP 2024/2025", ip: 4.0, sks: 24 },
        ],
        labels: [
          "2021-1",
          "2021-2",
          "2022-1",
          "2022-2",
          "2023-1",
          "2023-2",
          "2024-1",
          "2024-2",
        ],
        selectedData: null,
      };
    }
  
    renderProgressBar(ip) {
      const Percent = (ip / 4) * 100 + "%";
      return (
        <View style={LOKAL_STYLES.progressBarBackground}>
          <View style={[LOKAL_STYLES.progressBarFill, { width: Percent }]}>
            <Text style={LOKAL_STYLES.progressText}>{ip.toFixed(2)}</Text>
          </View>
        </View>
      );
    }
  
    renderTableRow(item, index) {
      return (
        <View key={index} style={LOKAL_STYLES.tableRow}>
          <View style={LOKAL_STYLES.semesterContainer}>
            <Text>{item.semester}</Text>
          </View>
          <View style={LOKAL_STYLES.progressContainer}>
            {this.renderProgressBar(item.ip)}
            <View style={LOKAL_STYLES.sksContainer}>
              <View style={LOKAL_STYLES.sksBadge}>
                <Text style={LOKAL_STYLES.sksText}>{item.sks} sks</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  
    handleDataPointClick = (data) => {
      const { labels, tableData } = this.state;
      this.setState({
        selectedData: {
          label: labels[data.index],
          ip: tableData[data.index].ip,
        },
      });
    };
  
    renderChart(labels, ip) {
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
          yAxisInterval={1}
          segments={10}
          yAxisMax={4}
          chartConfig={chartConfig}
          bezier={false}
          style={LOKAL_STYLES.chartStyle}
          onDataPointClick={(data) => this.handleDataPointClick(data)}
        />
      );
    }
  
    render() {
      const { tableData, labels } = this.state;
      const ipData = tableData.map((item) => item.ip);
  
      console.log("Labels:", labels);
      console.log("IP Data:", ipData);
  
      return (
        <ScrollView>
          <ImageBackground source={IMAGES.bgDefault} style={STYLES.container}>
            <Text fontsize={SIZES.LargeText} bold space>
              Data Akademik
            </Text>
            <ButtonNilai
              value="KHS/ Hasil Studi"
              next
              backgroundColor
              color
              space
              margin
            />
            <ButtonNilai
              value="Daftar Nilai"
              next
              backgroundColor
              color
              space
              margin
            />
  
            {/* Table */}
            <View style={LOKAL_STYLES.tableCons}>
              <View style={LOKAL_STYLES.titleCons}>
                <Image
                  source={ICONS.bookmark}
                  style={{ width: 27, height: 27 }}
                  resizeMode="contain"
                />
                <Text
                  fontsize={SIZES.mediumText}
                  color={COLORS.white}
                  paddingHorizontal={SIZES.padding2}
                >
                  PERKEMBANGAN IP & SKS SEMESTER
                </Text>
              </View>
              <View style={LOKAL_STYLES.container}>
                {tableData.map((item, index) => this.renderTableRow(item, index))}
              </View>
            </View>
  
            {/* Line Chart */}
            <View style={LOKAL_STYLES.tableCons}>
              <View style={LOKAL_STYLES.titleCons}>
                <Image
                  source={ICONS.bookmark}
                  style={{ width: 27, height: 27 }}
                  resizeMode="contain"
                />
                <Text
                  fontsize={SIZES.mediumText}
                  color={COLORS.white}
                  paddingHorizontal={SIZES.padding2}
                >
                  PERKEMBANGAN IP & SKS SEMESTER
                </Text>
              </View>
              <View style={LOKAL_STYLES.container}>
                {Array.isArray(labels) &&
                Array.isArray(ipData) &&
                ipData.length > 0 ? (
                  this.renderChart(labels, ipData)
                ) : (
                  <Text>No data available for chart</Text>
                )}
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      );
    }
  }
  
  const LOKAL_STYLES = StyleSheet.create({
    tableCons: {
      width: SIZES.full,
      borderWidth: 1,
      borderRadius: SIZES.radius,
      borderColor: COLORS.primary,
      backgroundColor: COLORS.secondary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 24,
    },
    titleCons: {
      width: SIZES.full,
      paddingLeft: SIZES.padding2,
      backgroundColor: COLORS.primary,
      paddingVertical: "5",
      borderRadius: SIZES.radius,
      flexDirection: "row",
      alignItems: "center",
    },
    container: {
      width: SIZES.full,
      padding: SIZES.padding,
      backgroundColor: COLORS.secondary,
    },
    progressBarBackground: {
      height: 34,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.radius,
      justifyContent: "center",
      borderWidth: 1,
      borderColor: COLORS.gray,
    },
    progressBarFill: {
      height: 34,
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.radius,
      justifyContent: "center",
      alignItems: "center",
    },
    progressText: {
      color: COLORS.white,
      fontSize: SIZES.extraSmallText,
    },
    tableRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    semesterContainer: {
      flex: 1,
      paddingRight: SIZES.padding,
    },
    progressContainer: {
      flex: 4,
      justifyContent: "center",
    },
    sksContainer: {
      alignItems: "flex-start",
      paddingVertical: 5,
      width: 35,
      height: 45,
      resizeMode:"contain",
    },
    sksBadge: {
      backgroundColor: COLORS.gray,
      paddingHorizontal: 4,
      borderRadius: SIZES.radius,
    },
    sksText: {
      color: COLORS.white,
      fontSize: SIZES.extraSmallText,
    },
    chartStyle: {
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  