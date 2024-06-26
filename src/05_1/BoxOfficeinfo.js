
export default function BoxOfficeinfo({selMv}) {
  return(
        <div className= "w-4/5 h-10 flex justify-center items-center text-bold text-center bg-purple-900 text-yellow-100">
    { selMv === undefined && '영화를 선택해 주세요.'}
    { selMv &&  
    `[${selMv.movieCd}] ${selMv.movieNm} - 
    누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명
    누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원` 
    }
    </div>                    
  )
}
