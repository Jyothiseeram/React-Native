import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./App.css";

function App() {
  // Data setup
  const [data] = useState({
    incomeExpenseSeries: [
      {
        name: "Income",
        data: [5000, 7000, 8000, 6500, 9000, 12000],
      },
      {
        name: "Expenses",
        data: [4000, 6000, 7000, 5500, 8000, 9500],
      },
    ],
    incomeExpenseOptions: {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
      },
      colors: ["#00E396", "#FF4560"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      title: {
        text: "Income vs Expense (Monthly)",
        align: "center",
      },
    },

    expenseCategorySeries: [35, 25, 15, 10, 15],
    expenseCategoryOptions: {
      chart: { type: "pie" },
      labels: ["Food", "Rent", "Travel", "Shopping", "Others"],
      colors: ["#FEB019", "#008FFB", "#00E396", "#775DD0", "#FF4560"],
      title: {
        text: "Expense Breakdown by Category",
        align: "center",
      },
    },

    categoryBarSeries: [
      {
        name: "Amount Spent",
        data: [1200, 3000, 800, 2200, 500],
      },
    ],
    categoryBarOptions: {
      chart: { type: "bar", height: 350 },
      plotOptions: {
        bar: { horizontal: true, borderRadius: 8 },
      },
      colors: ["#008FFB"],
      xaxis: {
        categories: ["Food", "Rent", "Travel", "Shopping", "Others"],
      },
      title: {
        text: "Category-wise Spending",
        align: "center",
      },
    },
  });

  const totalIncome = 5000 + 7000 + 8000 + 6500 + 9000 + 12000;
  const totalExpense = 4000 + 6000 + 7000 + 5500 + 8000 + 9500;
  const balance = totalIncome - totalExpense;

  return (
    <div className="dashboard">
      <h1 className="title">💰 Expense Tracker Dashboard</h1>

      <div className="cards">
        <div className="card income">
          <h3>Total Income</h3>
          <p>₹{totalIncome.toLocaleString()}</p>
        </div>
        <div className="card expense">
          <h3>Total Expense</h3>
          <p>₹{totalExpense.toLocaleString()}</p>
        </div>
        <div className="card balance">
          <h3>Balance</h3>
          <p>₹{balance.toLocaleString()}</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-item">
          <ReactApexChart
            options={data.incomeExpenseOptions}
            series={data.incomeExpenseSeries}
            type="area"
            height={350}
          />
        </div>

        <div className="chart-item">
          <ReactApexChart
            options={data.expenseCategoryOptions}
            series={data.expenseCategorySeries}
            type="pie"
            height={350}
          />
        </div>

        <div className="chart-item full">
          <ReactApexChart
            options={data.categoryBarOptions}
            series={data.categoryBarSeries}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

export default App;