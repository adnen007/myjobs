import StatusStats from "../StatusStats";
import AreaRechart from "../AreaRechart";
import BarRechart from "../BarRechart";
import { useEffect, useContext, useState } from "react";
import { context } from "../../contexts/mainContext";

import S from "../../css/Stats.module.css";

const Stats = () => {
  const { state, dispatch } = useContext(context);
  const [chartType, setChartType] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const pendindRes = await fetch("http://127.0.0.1:8000/api-v2");

      const { data } = await pendindRes.json();

      dispatch({ type: "STATS", playload: data });
    };
    getData();
  }, [dispatch]);

  return (
    <div className={S.stats}>
      <div className="container">
        <StatusStats data={state.stats.jobStats} />
        <div className={S.title}>Monthly Applications</div>
        <div onClick={() => setChartType(!chartType)} className={S.chart_type}>
          {chartType ? "Area Chart" : "Bar Chart"}
        </div>
        <div className={S.chart}>{chartType ? <BarRechart data={state.stats.monthlyStats} /> : <AreaRechart data={state.stats.monthlyStats} />}</div>
      </div>
    </div>
  );
};

export default Stats;

// when you render the components any variable you declarit inside the component
// you lost the ability to change it cause the component (function) already get excueted
// and the dom took the result and display it. and all the varibale you declare already
// converted to their value.

// so if you want to make a change in the dom you can do that with the old way by changing the
//orignial dom and that will make all the dom object(page) rerender but with react we want to
// avoid that we just want to rerender new element and to do that we should use the state to
//rerendert the component and react dom will take the new result and only change that in react dom
//
// so how can we make our component interactive i mean how can we change things like(variables )
// in the compnonent after rendreed
// there isn't any way to do that the only way is every time you want to change some data you
// rerender the component again
// and that is the reason why state created state created for the data that you want them to
// be able to change. state work with a simple concept it give you the ability to store data
//and use them in the component and it will give you method that allow you to change that data
// and then rerender the component with the new data.
