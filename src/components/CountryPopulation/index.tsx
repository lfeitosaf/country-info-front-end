import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PopulationChartProps {
    populationData: { year: number; value: number }[];
}

export const PopulationChart = ({ populationData }: PopulationChartProps): JSX.Element => {
    const chartData = {
        labels: populationData.map((data) => data.year),
        datasets: [
            {
                label: 'Population Over Time',
                data: populationData.map((data) => data.value),
                borderColor: 'aqua',
                fill: true,
                tension: 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Population Growth Over Time',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};
