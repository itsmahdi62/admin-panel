import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./PieChartBox.scss"


const data = [
    {name:"JavaScript" , value : 400 , color: "blue"},
    {name:"Java" , value : 400 , color: "red"},
    {name:"python" , value : 200 , color: "yellow"},
    {name:"TypeScript" , value : 250 , color: "purple"},
]



const PieChartBox = () => {
    return ( <div className="pieChartBox">
            <h1>Leads by Source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart >
                        <Tooltip contentStyle={{background:"white",borderRadius:"5px"}}/>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map(item =>(
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor:item.color}} />
                            <span>{item.name}</span>
                        </div>
                            <span>{item.value}</span>
                    </div>
                ))
                }
            </div>
    </div> );
}
 
export default PieChartBox;