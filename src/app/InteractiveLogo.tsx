"use client"

import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

export const InteractiveLogo = () => {
    const [points, setPoints] = useState([
        { x: 200, y: 100, radius: 5 },
        { x: 150, y: 200, radius: 5 },
        { x: 250, y: 200, radius: 5 },
        { x: 200, y: 300, radius: 5 }
    ]);

    const handleMouseEnter = () => {
        setPoints(points.map(point => ({
            ...point,
            x: point.x + (Math.random() - 0.5) * 50,
            y: point.y + (Math.random() - 0.5) * 50
        })));
    };

    const handleMouseLeave = () => {
        setPoints(points.map(point => ({
            ...point,
            x: 200 + (point.x - 200) * 0.1,
            y: 200 + (point.y - 200) * 0.1
        })));
    };

    return (
        <Stage width={400} height={400} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Layer>
                {points.map((point, index) => (
                    <Circle key={index} x={point.x} y={point.y} radius={point.radius} fill="blue" />
                ))}
            </Layer>
        </Stage>
    );
};

