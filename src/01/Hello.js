import './Hello.css'
function Hello() {
    let n = Math.floor(Math.random() * 30) + 1;

    const st1 = {
        backgroundColor: "black",
        color: "white"
    }//오브젝트는 중괄호 열고 닫고 오브젝트는 세미클론 쓰면 안된다 쉼표

    const f1 = {
        color: "blue"
    }

    const f2 = {
        color: "red"
    }

    const currentTime = new Date();
    // let s = '';
    // if(n % 2 == 0) 
    // s="짝수"
    // else
    // s="홀수"
    let x;
    return ( //리턴문에 들어가는 jsx문법
        <h1>
            <span style={st1}>Hello </span>
            <span style={{ display: "inline-flex", margin: "10px" }}>
                {/* { n < 10 && '0' }
                {n} */}
                {n < 10 ? `0${n}` : n } 
            </span>
            {/* { n % 2 === 0 ? "짝" : "홀"} */}
            {n % 2 === 0 && "🧙‍♂️"}
            {n % 2 === 1 && "🧝‍♂️"}
            {n % 2 === 0
                ? <span style={f1}>짝</span>
                : <span style={f2}>홀</span>
            }
            <p>
                {currentTime.toLocaleTimeString()}
            </p>
            {/* 리엑트는 이프문을 잘 안쓰기 때문에 삼항연산으로 간다 */}
        </h1> //안족 괄호는 오브젝트 기호 바깥은 스타일 기호
    ); // 리턴문 안에는 html 태그가 들어간다
};

export default Hello;

