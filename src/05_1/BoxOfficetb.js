import BoxOfficeData from "./BoxOffice.json";
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOFficeThead from "./BoxOFficeThead";
import BoxOfficeinfo from "./BoxOfficeinfo";
export default function BoxOfficeTb() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList ;
  console.log("boxList=", boxList)

  //state 변수
  const [selMv, setSelMv] = useState() ;
  // 자식에서 부모의 state 변수를 바꿔줘야한다
  
  return (
    <div className="w-full flex flex-col 
                    justify-center items-center">
      <table className="w-4/5 border">
        <BoxOFficeThead/>
          <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv}/>
        {/* <tfoot>
          <tr>
            <td colSpan={5} className="bg-slate-200">footer</td>
          </tr>
        </tfoot> */}
      </table>
      <BoxOfficeinfo selMv={selMv}/> 
    </div>
  )
};

//변수 전달할 때 같은 이름 쓰면 편하다.
//부모에서 스테이트 변수를 다 공유해서 쓸 수 있다.
// 변수 ={변수명} // 프롭스로 전달 하는 것. 하지만 프롭스를 쓰지 않고 구조분해 할당으로 중괄호.
// 잘 쪼개야 합니다.