import React from 'react'
import fdata from './fooddata.json'
import FoodCard2 from './FoodCard2'
import TaillButton from '../UI/TaillButton';
import { useState } from 'react';

export default function Foodmain2() {
    let c1 = fdata.map(item => item["운영주체 분류"])
    c1 = new Set(c1); // 집합으로 중복 제거
    c1 =[...c1] ; // 집합을 어레이로 풀었음 전개연산자
     

    const [cards, setCards] = useState(); 

    const handleList = (citem) => {
        const tm = fdata.filter(item => item["운영주체 분류"] === citem) 
            .map(item =>
            <FoodCard2 fobj={item} key={item["사업장명"]}/>
            );
    setCards(tm);
    };
    

    
    const c1Bts = c1.map(item =>
        <TaillButton caption={item}
                    color="blue"
                    key={item}
                    handleClick={()=> handleList(item)}/>);
        

    
  return (
    <div className='h-full w-full'>
    <div className='bg-slate-100 m-2 flex justify-center'>
    {c1Bts}
    </div>
    <div className='flex justify-center items-center'>
    <div className="w-10/12 grid grid-cols-3
    max-md:grid-cols-2 
    max-xl:grid-cols-2
    gap-2 "> 
      {cards}
    </div>
    </div>
    
    </div>
   
  )
}
