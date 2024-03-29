import TaillButton from "../UI/TaillButton";
import Randomnum from "./Randomnum";
import { useState } from "react";

export default function Lotto() {
    const [key, setKey] = useState(0); // 키 상태 추가

    const handleLottoClick = () => {
        setKey(prevKey => prevKey + 1); // 키 업데이트하여 Randomnum 컴포넌트를 리렌더링
    };

    return (
        <div>
            <div className="flex m-8">
                <Randomnum key={key} /> {/* 키를 변경하여 Randomnum 컴포넌트를 리렌더링 */}
            </div>
            <div className="flex justify-center m-8">
                <TaillButton caption="로또번호생성" handleClick={handleLottoClick} color='blue' />
            </div>
        </div>
    );
}
