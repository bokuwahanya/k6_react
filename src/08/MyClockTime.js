import { useState, useEffect } from "react";

function MyClockTime() {
    const [currentTime, setcurrentTime] = useState();
    // const [tm, setTm] = useState(0); //setter 가지고 바꿀 수 있다.

    //컴포넌트 생성시 최초 한번 찍히는거
    useEffect(()=>{
       const t= setInterval(() => {
            setcurrentTime(new Date()); //현재시간 갱신
        }, 1000); //인터벌 함수 1초에 한번 데이터 업데이트
        console.log("[]=>", currentTime)

        return () => {clearInterval(t)}; //클리어 인터벌도 콜백으로 // 변수로 받은 인터벌을 클리어 
    }, []);// 여 안에는 콜백 함수가 들어가야한다 두번째 인수가 있다 대괄호 앞에 쉼표찍으면 한번만 실행
    
    //특정상황마다 찍히는거 tm 변수가 바뀔 때 마다
    // useEffect(()=>{
    //     console.log("[tm]=>",currentTime)
    // }, [currentTime]); // 독립적 배열 사용 가능 //맨 처음 한번 실행 된다. //초기화 되도 tm이 바꼇다고 인식
   

    // //랜더링이 일어날 때마다 실행
    // useEffect(()=>{
    //     console.log("[]없는경우",currentTime)
    // });

    return (
        <>
      <h1 className="font-extrabold text-2xl">
        {currentTime && `현재 시각 : ${currentTime.toLocaleTimeString()}`}
      </h1>
      </>
    )
  }
  // 변수가 있어야 찍는다라는 것. 
  
  export default MyClockTime ;