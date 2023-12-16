import Home from './component/Home'
import About  from './component/About' 
import NotFound from './component/NotFound'
import Contact from './component/ContactUs'
import { Routes } from 'react-router-dom'
import {Route} from 'react-router-dom'
// const App = () => {
//     <h1><Home /></h1>
//     const {allValue , setValue} = userState({counter:0})

//     const onChangeValue = () => {
//         let newVal = 0;
//         newVal = allValue.counter + 1
//         setValue({...allValue , counter:newVal})

//     }

//     return (
        
//         <div className="bg-container">
//         <h1 className="heading">{allValue.counter}</h1>
//         <button type="button" onClick={onChangeValue}>Increament</button> 
//         <button type="button" onClick={onChangeValue}>Decreament</button>
//         </div> 
            
            

//     )
//     (
//     <Routes>
//         <Route path = "/" element={<Home/>}>

//     </Routes>
//     )
// }

const App = () => (

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
)

export default App;
















