import  NoteAtom  from "./NoteAtom";
import { useRecoilState } from "recoil";
import{useRef} from 'react'
import style from './Create.module.css';


function Delete(){
    const sty = {
        textDecoration: 'none',
        color: 'orange',
        cursor: 'pointer',
        fontSize: '20px',
        marginTop: '60px',
        fontWeight: 'bold',

    }

    const ID= useRef()

    const [data,setData]= useRecoilState(NoteAtom)

    const handleDelete=()=>{
        

        const newData=data.filter((ele)=>ele.id != ID.current.value)

    setData(
        [
            
            ...newData
        ]
    )



    }



    return(

        <div>

        <input className={style.u} ref={ID} type="text" placeholder="enter ID" />
        <button className={style.btn} onClick={handleDelete}>Delete Note</button>

        </div>
    )
}


export default Delete