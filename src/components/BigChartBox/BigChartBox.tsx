import { Area, AreaChart, CartesianGrid, ResponsiveContainer, YAxis , XAxis, Tooltip} from "recharts";
import "./BigChartBox.scss"
const data = [
    {
      name: 'Sun',
      books: 400,
      clothes: 400,
      electronic: 740,
    },
    {
      name: 'Mon',
      books: 600,
      clothes: 5400,
      electronic: 200,
    },
    {
      name: 'Tue',
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: 'Wed',
      books: 2000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: 'Thu',
      books: 4000,
      clothes: 8400,
      electronic: 7000,
    },
    {
      name: 'Fri',
      books: 400,
      clothes: 2800,
      electronic: 2100,
    },
    {
      name: 'Sat',
      books: 4200,
      clothes: 5000,
      electronic: 800,
    },
  ];
const BigChartBox = () => {
    return ( <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="electronic" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div> );
}
 
export default BigChartBox;