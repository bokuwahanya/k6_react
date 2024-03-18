import React from 'react';
import BoxOfficeData from "./BoxOffice.json";
import { FaCaretSquareUp } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";
import { TbLayoutAlignMiddle } from "react-icons/tb";
import { useState } from 'react';

function BoxOfficeItem({rank, movieNm, salesAmt, audiCnt, rankInten }) {
  return (
    <tr className='hover:bg-purple-200'>
      <td>{rank}</td>
      <td>{movieNm}</td>
      <td className='text-right'>{parseInt(salesAmt).toLocaleString()}원</td>
      <td className='text-right'>{parseInt(audiCnt).toLocaleString()}명</td>
      <td className='flex justify-center items-center'>
        {parseInt(rankInten) === 0 ?  <span />
        : parseInt(rankInten) > 0 ? <FaCaretSquareUp className='text-red-600'/>
        : <FaCaretSquareDown className='text-blue-600'/>}
        {parseInt(rankInten) !== 0 && Math.abs(rankInten)}
      </td>
    </tr>
  );
}

export default function BoxOfficetb() {
  const Boxlist = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(item =>
    <BoxOfficeItem
      key={item.movieCd}
      rank={item.rank}
      movieNm={item.movieNm}
      salesAmt={item.salesAmt}
      audiCnt={item.audiCnt}
      rankInten={item.rankInten}
    />
  );

  const [selMv, setSelMv] = useState();
  const handleClick = (mv) => {
    console.log(mv);
    setSelMv(mv);
  };
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
        <thead>
          <tr className="text-center bg-black text-white h-10">
            <th className="w-10">순위</th>
            <th>영화명</th>
            <th className="w-1/5">매출액</th>
            <th className="w1/5">관객수</th>
            <th className="w-20">증감율</th>
          </tr>
        </thead>
        <tbody>
          {Boxlist.map(item => (
            <tr key={item.key} onClick={() => handleClick(item)} className='hover:bg-purple-200'>
              <td>{item.props.rank}</td>
              <td>{item.props.movieNm}</td>
              <td className='text-right'>{parseInt(item.props.salesAmt).toLocaleString()}원</td>
              <td className='text-right'>{parseInt(item.props.audiCnt).toLocaleString()}명</td>
              <td className='flex justify-center items-center'>
                {parseInt(item.props.rankInten) === 0 ? < TbLayoutAlignMiddle/>
                : parseInt(item.props.rankInten) > 0 ? <FaCaretSquareUp className='text-red-600'/>
                : <FaCaretSquareDown className='text-blue-600'/>}
                {parseInt(item.props.rankInten) !== 0 && Math.abs(item.props.rankInten)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-4/5 h-10 flex justify-center items-center text-bord text-center bg-black text-white">
        {selMv === undefined && '영화를 선택해주세요' }
        {selMv && <h1>[{selMv.key}] {selMv.props.movieNm}</h1>}
      </div>
    </div>
  );
};