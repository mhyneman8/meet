import React, { useEffect, useState} from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import './App.css';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular JS'];
    const COLORS = ['#342a21', '#61a0af', '#FF715b', '#592e83', '#679436'];

    const getData = () => {
        // const { events } = this.useState;
        let data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;

            return { name: genre, value: value };
        });
        data = data.filter(data => data.value)
        return data;
    };

    
    useEffect(() => { setData(() => getData()) }, [events] );
    

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    innerRadius={30}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={90}
                    // fill="#ff715b"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

    );
}

export default EventGenre;