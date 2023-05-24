import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarRechart = ({ data: real }) => {
  console.log(real);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart maxBarSize={80} data={real} barCategoryGap="10%">
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis padding={{ top: 45 }} tickCount={5} />
        <Tooltip />

        <Bar dataKey="count" fill="#8884d8" />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

//remmeber the order of putting the component matters like you should keep the <Bar/> component
// after the <Tooltip/> component

export default BarRechart;
