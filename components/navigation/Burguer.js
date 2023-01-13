import { useContext } from 'react'
import { AppContext } from '../context/AppContext'



export default function Burguer() {

    const {show, setShow}=useContext(AppContext)


  return (
    <button onClick={()=>setShow(!show)} className={`${show ? 'open' : ''}`} id="burgerMenu">
        <span className='burguer-svg'></span>
        <span className='burguer-svg middle-top'></span>
        <span className='burguer-svg middle-bottom'></span>
        <span className='burguer-svg'></span>
   </button>
  )
}
