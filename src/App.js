import './App.css';
import { FaHome } from "react-icons/fa";

// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello'; 
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from './03_1/MyDiv1';
// import MyListMain from './04/MyListMain';
// import BoxOfficetb from './05_1/BoxOfficetb';
// import Lotto from './06/Lotto';
// import FoodCard2 from './07/FoodCard2';
// import Foodmain2 from './07/Foodmain2';
// import MyClock from './08/MyClock';
import Festival from './12/Festival';

function App() {

  return (
    <div className='flex flex-col 
                    w-full max-w-screen-xl 
                    h-screen
                    mx-auto
                    overscroll-y-auto
                    '>
      <header className='flex justify-between items-center
                         h-20 p-10 
                         text-xl font-bold text-blue-800
                         bg-slate-200
                        '>
        <div>리액트실습</div>
        <div><FaHome className='text-2xl text-black'/></div>
      </header>
      <main className='grow flex flex-col 
                            justify-center items-center 
                      '>
         <Festival/>
      </main>
      <footer className='flex justify-center items-center
                          h-20 bg-slate-800
                          text-base text-white'>
          ⓒ 2024 Ingyu_Choe. All right reserved. 
      </footer>
    </div>
  );
}


//화살표 함수로 작성가능
// const App = () => {

//   return ();
// }

export default App;