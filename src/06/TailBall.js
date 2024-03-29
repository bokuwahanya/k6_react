import React from 'react'

export default function TailBall({n}) {
    const bcolor =[
        'bg-blue-600',
        'bg-yellow-500',
        'bg-orange-600',
        'bg-gray-400',
        'bg-lime-400'
    ];

    const colorIndex = parseInt(n / 10); // 숫자를 10으로 나누어 색상 인덱스를 결정합니다.
    const ballColor = `${bcolor[colorIndex]} 
    w-16 h-16 m-2 rounded-full 
    flex justify-center items-center 
    font-bold text-xl text-white`;

    return (
        <div className={ballColor}> 
            {n} 
        </div>
    );
}
