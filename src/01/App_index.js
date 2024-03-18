import logo from './logo.svg'; //이미지도 모듈처럼 가지고 온다.
import './App.css'; // 리소스를 가지고 온다.
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import MyClockimage from './01_1/MyClockimage';
import MyClockTime from './01_1/MyClockTime';

function App() { // 컴퍼넌트 명은 대문자로. 컴포넌트는 계층을 가진다 리턴은 오로지 하나 이기 때문에 최종적으로 하나로 싸야한다 
  return (
    // jsx문법 사용
    <> 
    <div className="App">
      <MainHeader/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      </div>
   
    </> // 프레그먼트 태그. div로 묶어서 리턴하기 싫을 때 
  ); //리턴 부모태그는 한개, 자식태그는 상관없다. 프레그멘트 
  //컴포넌트는 재사용성이 좋다. 컴포넌트는 최소단위로 짜른다.
}

export default App; 
//반드시 있어야함. 
//자바스크립트의 모듈형 함수이기 때문에 모듈을 외부에서 가져다 쓸려 가면 내보내줘야함 
//임포트 할려면 꼭 필요
//기본적인 앱 함수가 나간다 
//디포트는 중괄호를 안쓰고 나간다
//컴포넌트

//화살표 함수로 작성가능

// const App = () => {
//   return ();
// }