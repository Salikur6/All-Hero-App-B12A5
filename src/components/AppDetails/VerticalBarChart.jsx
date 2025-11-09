import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default function VerticalBarChart({ isAnimationActive = true, clickedData }) {
    // console.log(clickedData)
    const rating = clickedData.ratings
    // console.log(rating)
    return (
        <div className="w-full h-72">
            <ResponsiveContainer width='100%' height={300}>
                <BarChart
                    aspectRatio={1.618}
                    layout="vertical"
                    data={rating}
                    margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={60} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#F59E0B" isAnimationActive={isAnimationActive} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
