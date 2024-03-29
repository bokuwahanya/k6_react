import React from 'react';
import TailBall from "./TailBall";

export default function Randomnum() {
    const uniqueNumbers = [];
    let plusInserted = false;

    while (uniqueNumbers.length < 7) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
        }
    }

    const balls = uniqueNumbers.map((num, index) => (
        (index === 6 && !plusInserted) ?
            (plusInserted = true, [
                <span key="plus" className="flex items-center justify-center font-extrabold mx-5">
                    <h1>+</h1>
                </span>,
                <TailBall key={index} n={num} />
            ])
            :
            <TailBall key={index} n={num} />
    )).flat();

    return (
        <>
            {balls}
        </>
    );
}


