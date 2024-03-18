import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 태그 종류 태그가 반듯이 있어야함.
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //가상돔 생성 컴포넌트의 확장자 js
root.render( // 가상돔에 붙인다
  // <React.StrictMode>
    <App /> 
  // </React.StrictMode>
); // 루트에다가 앱을 가따끼움, 리액트 돔에 크리에이티브 앱 만든다.
//실제 html 태그 : 소문자. 컴퍼넌트 : 대문자 굼하기 위함 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);


//리엑트 함수형 컴퍼넌트 훅이 나오면서 함수형으로 넘어옴 -> 자바스크립트 함수 
//함수로 짤꺼다 그것을 태그 해야한다. 
//app
