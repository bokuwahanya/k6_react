import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'
import { useState } from 'react';

export default function FoodCard2({fobj}) {
    
    const [key, setKey] = useState(false); 

    const handleClick = () => {
        setKey(!key); 
    };
    // const fobj={
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    //   };

    const fimg = fobj["구분"] === "기초푸드뱅크" ? bank :
                fobj["구분"] === "기초푸드마켓" ? market : busan;

                
    

    return (
    <>
    <div className='w 8/9 flex justify-center items-center' onClick={handleClick}>
        <div className='w-1/5 maxflex justify-center items-center'>
        <img src={fimg} alt={fimg} className='size-8/9'/>
      </div>
      <div className='w-4/5 m-1 size-8/9'>
        <h1 className='text-2xl font-extrabold '>
            {fobj.사업장명}
        </h1>
        <h2 className='text-xl font-bold'>
            {fobj.운영주체명}
        </h2>
        <p className='font-semibold text-gray-400'> 
            {fobj['사업장 소재지']}
        </p>
        <p  className='bg-purple-400'>
            {key && `Tell : ${fobj['연락처(대표번호)']}`}
        </p>
        </div>
    </div> 
    </>
  )
}
