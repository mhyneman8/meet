import React, { useEffect, useState} from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import './App.css';

const EventGenre = ({ events }) => {
    
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular JS'];
    const COLORS = ['#342a21', '#61a0af', '#FF715b', '#FFFFFF'];

    const getData = () => {
        // const { events } = this.useState;
        let data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;

            return { name: genre, value };
        });
        data = data.filter(data => data.value)
        return data;
    };

    
    useEffect(() => { setData(() => getData()) }, [events] );
    const [data, setData] = useState([]);

    return (
        <ResponsiveContainer height={400}>
            <PieChart >
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    innerRadius={30}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

    );
}

export default EventGenre;