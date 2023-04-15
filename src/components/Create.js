import {useRef} from 'react';
import NoteAtom from './NoteAtom';
import {useRecoilState} from 'recoil'
import style from './Create.module.css';

function Create(){
    
    const sty = {
        textDecoration: 'none',
        color: 'orange',
        cursor: 'pointer',
        fontSize: '20px',
        marginTop: '60px',
        fontWeight: 'bold',

    }

    const title= useRef();
    const author= useRef();
    const disc= useRef();
    const ID= useRef();

    
    const [notes,setNotes] = useRecoilState(NoteAtom)





console.log(notes)

    const handelSubmit=()=>{

        const  obj={
            id:ID.current.value,
            title:title.current.value,
            author:author.current.value,
            disc:disc.current.value
            
        }

        setNotes(
            [
                ...notes,
                obj
            ]
        )





    }

    return(

        <div className={style.mainDiv}>
               
        <h1 className={style.head}> Create Notes !!!</h1>
        <div className={style.form}>

            <input className={style.u} ref={ID} type="text" placeholder="Enter Your ID" />
            <input ref={title} type="text" placeholder="Enter title" />
            <input ref={author} type="text" placeholder="enter author"/>
            <input ref={disc} type="text" placeholder="enter discription" />
            <button className={style.btn} onClick={handelSubmit}>Submit Notes</button>


</div>
        </div>
    )
}


export default Create