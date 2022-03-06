import "./App.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
const pdata = [
  {
    name: "Madhumati",
    score: 35,
    previousscore: 34,
  },
  {
    name: "swapnil",
    score: 50,
    previousscore: 75,
  },
  {
    name: "Nirula",
    score: 99,
    previousscore: 35,
  },
  {
    name: "Tanvee",
    score: 40,
    previousscore: 90,
  },
  {
    name: "Venkat ",
    score: 80,
    previousscore: 75,
  },
  {
    name: "Hariharan",
    score: 61,
    previousscore: 61,
  },
  {
    name: "Vihaan",
    score: 54,
    previousscore: 35,
  },
  {
    name: "tanmayi ",
    score: 95,
    previousscore: 84,
  },
  {
    name: "Varuna ",
    score: 35,
    previousscore: 35,
  },
  {
    name: "paada ",
    score: 51,
    previousscore: 41,
  },
  {
    name: "meru ",
    score: 87,
    previousscore: 80,
  },
  {
    name: "kanth",
    score: 97,
    previousscore: 99,
  },
  {
    name: "Hiranmayi ",
    score: 63,
    previousscore: 36,
  },
];

function App() {
  return (
    <>
      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="previousscore" fill="orange" />
          <Bar dataKey="score" fill="lightblue" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
