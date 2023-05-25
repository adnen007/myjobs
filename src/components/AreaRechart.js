import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AreaRechart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis width={window.screen.width >= 425 ? 35 : 20} padding={{ top: 45 }} tickCount={5} />
        <Tooltip />

        <Legend />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaRechart;
