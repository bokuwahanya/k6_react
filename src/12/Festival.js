import { useState, useEffect, useRef } from "react";
import FestivalCard from "./Festival.card";

export default function Festival() {
    const [tdata, setTdata] = useState();
    const [guname, setGuname] = useState();
    const [opTags, setOpTags] = useState();
    const [cardTags, setCardTags] =useState(); 

    //select 값
    const selRef = useRef();

    //slect 선택
    const handleSelGu = () => {
        console.log(selRef.current.value)
        let tm = tdata.filter(item => item.GUGUN_NM === selRef.current.value)
        let tmp = tm.map( item => 
            <FestivalCard imgUrl={item.MAIN_IMG_NORMAL}
                        title={item.TITLE}
                        ptitle={item.TRFC_INFO}
                        ktag={item.CNTCT_TEL}/>
                            );
        setCardTags(tmp);
    }
    //실제 fetch
    const getData = (url)=> {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.getFestivalKr.item))
        .catch(err => console.log(err))
    }
     //부산축제 데이터 fetch
    useEffect(()=>{
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`           
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&pageNo=1&numOfRows=40&resultType=json`;

        getData(url)
        console.log(url)
    }, []); // 따로 호출 안해도 실행

    // 구정보 만들기
    useEffect(()=>{
        if(!tdata) return;
        let tm = tdata.map(item => item.GUGUN_NM)
        tm = new Set(tm);
        tm = [...tm].sort();
        setGuname(tm);

    }, [tdata]);
    
    // 지역

    //구 데이터 
    useEffect(()=>{
        if(!guname) return;
       let tm = guname.map(item => 
        <option value={item} key={item}>
            {item}
        </option>);
        setOpTags(tm);
       },
    [guname]);
    

  return (
    <div className="w-full h-full flex flex-col
                    justify-start items-center">
        <form className="max-w-sm mx-auto flex
                        mt-10
                        justify-center items-center">
        <label htmlFor="gu" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">🚆</label>
        <select id="gu" 
            onChange={handleSelGu}
            ref={selRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0}>지역을 선택하세요</option>
        {opTags}
       
  </select>
</form>
     <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                      p-2
                      gap-2">
     {cardTags}
     </div>
    </div>
  )
}
