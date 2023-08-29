import { chartBoxUser ,chartBoxProduct  ,chartBoxRevenue ,chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } from "../../Data";
import BarChartBox from "../../components/BarChartBox/BarChartBox";
import ChartBox from "../../components/ChartBox/ChartBox";
import TopBox from "../../components/TopBox/TopBox";
import "./Home.scss"

const Home = () => {
    return ( <div className="home">
        <div className="box box1">
            <TopBox />
        </div>
        <div className="box box2"><ChartBox {...chartBoxUser}/></div>
        <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
        <div className="box box4"></div>
        <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
        <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
        <div className="box box7">Box7</div>
        <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
        <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div> );
}
 
export default Home;