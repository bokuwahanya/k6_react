import logo from '../logo.svg'

function MainHeader() { //펑션은 리턴이 있어야한다
    return(
    <header className="App-header">  
        <img src={logo} className="App-logo" alt="logo" />
    </header> //jsx 문서를 사용한다. html과 js를 함께 사용할 수 있는 것.
    );
}

export default MainHeader; // export로 송출
