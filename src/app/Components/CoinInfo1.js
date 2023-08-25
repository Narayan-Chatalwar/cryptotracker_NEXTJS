// import React, { useEffect, useState } from "react";
// import { AppState } from "../Context/AppContext";
// import axios from "axios";
// import { HistoricalChart } from "../config/api";
// import styles from "../Styles/CoinInfo.module.css";
// import { CircularProgress } from "@mui/material";
// import { Line } from "react-chartjs-2";
// import faker from "faker";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// const CoinInfo = ({ coin }) => {
//   const [historicalData, setHistoricalData] = useState();
//   const [days, setDays] = useState(1);

//   const { currency, symbol } = AppState();

//   const fetchHistoricalData = async () => {
//     const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
//     setHistoricalData(data.prices);
//   };
//   useEffect(() => {
//     // fetchHistoricalData();
//   }, [currency, days]);

//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//   ];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: labels.map(() =>
//           faker.datatype.number({ min: -1000, max: 1000 })
//         ),
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//       {
//         label: "Dataset 2",
//         data: labels.map(() =>
//           faker.datatype.number({ min: -1000, max: 1000 })
//         ),
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Line Chart",
//       },
//     },
//   };
//   return (
//     <div className={styles.container}>
//       {/* {!historicalData ? (
//         <CircularProgress style={{ color: "gold" }} size={250} thickness={1} />
//       ) : ( */}
//       <>
//         <Line data={data} options={options} />
//       </>
//       {/* )} */}
//     </div>
//   );
// };

// export default CoinInfo;
