import Hello_css from "./02/Hello_css";
import logo from "./logo.svg"
import { RiHomeHeartFill } from "react-icons/ri";
import go from "./02/Goyang";
import Goyang from "./02/Goyang";
function App() { 
  const apikey = process.env.REACT_APP_MV_API ; 
  console.log(apikey)
  return (
    <div className='flex flex-col 
                    w-full max-w-screen-xl
                    h-screen
                    mx-auto
                    overscroll-y-auto
                    ' > 
   <header className="flex justify-between 
                      items-center
                      h-20
                      p-10
                      text-xl font-bold text-sky-500
                      bg-slate-200
                      ">
    <div>리액트실습</div>
    <div><RiHomeHeartFill/></div>
    
   </header>
   <main className="grow flex justify-center items-center">
    <div className=" flex justify-center 
                    items-center w-full
                    mx-auto">
      <Goyang/>
      <img src={logo} className="helloimg" alt='logo'/>
      
     
    </div>
   </main>
   <footer className="flex justify-center items-center
                       text-gray-50 bg-black
                        h-20" >
    @ 2024 ingyu choe. All right reserved.
   </footer>
    </div> 
  )
}

export default App; 
