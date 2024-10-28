'use client'
import { useEffect, useRef, useState } from "react";

export default function InteractiveDots() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [dots, setDots] = useState<Array<{ x: number; y: number; vx: number; vy: number; tx: number; ty: number }>>([]);
    const [isMouseNear, setIsMouseNear] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Настройки canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const imgWidth = 200;
        const imgHeight = 200;
        const offsetX = (canvas.width - imgWidth) / 2;
        const offsetY = (canvas.height - imgHeight) / 2;

        const image = new Image();
        image.src = "/face-with-stuck-out-tongue-and-winking-eye_1f61c.png";
        image.onload = () => {
            ctx.drawImage(image, offsetX, offsetY, imgWidth, imgHeight);
            const imageData = ctx.getImageData(offsetX, offsetY, imgWidth, imgHeight);
            const data = imageData.data;

            const dotArray: Array<{ x: number; y: number; vx: number; vy: number; tx: number; ty: number }> = [];
            for (let y = 0; y < imgHeight; y += 8) {
                for (let x = 0; x < imgWidth; x += 8) {
                    const index = (y * imgWidth + x) * 4;
                    // Проверка альфа-канала: точка создается, если пиксель непрозрачный
                    if (data[index + 3] > 128) {
                        dotArray.push({
                            x: offsetX + x + Math.random() * 2, // Начальная позиция
                            y: offsetY + y + Math.random() * 2,
                            vx: Math.random() * 2 - 1, // Случайные начальные скорости
                            vy: Math.random() * 2 - 1,
                            tx: offsetX + x, // Целевая позиция
                            ty: offsetY + y,
                        });
                    }
                }
            }
            setDots(dotArray);
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                const dx = dot.x - mousePos.x;
                const dy = dot.y - mousePos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Если мышь в радиусе 50 пикселей, точки разлетаются
                if (isMouseNear && distance < 100) {
                    dot.vx += dx / distance * 0.5;
                    dot.vy += dy / distance * 0.5;
                } else {
                    // Точки возвращаются к своим целевым координатам
                    dot.vx += (dot.tx - dot.x) * 0.01;
                    dot.vy += (dot.ty - dot.y) * 0.01;
                }

                dot.x += dot.vx;
                dot.y += dot.vy;
                dot.vx *= 0.9; // Демпфирование скорости для плавного замедления
                dot.vy *= 0.9;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "red";
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }, [dots, isMouseNear, mousePos]);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
        setIsMouseNear(true);
    };

    const handleMouseLeave = () => {
        setIsMouseNear(false);
    };

    return (
        <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            }}
        />
    );
}
