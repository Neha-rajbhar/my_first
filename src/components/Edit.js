import {useRef} from 'react'
import { useRecoilState } from 'recoil';
import  NoteAtom  from './NoteAtom';
import style from './Create.module.css';


function Edit(){

    const sty = {
        textDecoration: 'none',
        color: 'orange',
        cursor: 'pointer',
        fontSize: '20px',
        marginTop: '60px',
        fontWeight: 'bold',

    }

    const [data,setData] = useRecoilState(NoteAtom)
    const ID= useRef();
    const title= useRef();
    const author= useRef();
    const disc= useRef();
    


    const handleupdate=()=>{
        

        const newData = data.map((ele)=>{

            if(ele.id == ID.current.value){
                let obj={
                    id:ele.id,
                    title:title.current.value,
                    author:author.current.value,
                    disc:disc.current.value

                }
               
                return obj;
                
            }else{
                return ele
            } 

        })
        console.log(newData)

        setData(
            [...newData]
        )

    }



    return(

        <div className={style.mainDiv}>
               
        <h1 className={style.head}> Edit Notes</h1>
        <div className={style.form}>
            <input className={style.u} ref={ID} type ="text" placeholder="Enter ID which you want delete"  />
            <input ref={title} type ="text" placeholder="Enter titel "  />
            <input ref={author} type ="text" placeholder="Enter author "  />
            <input ref={disc} type ="text" placeholder="Enter Disc "  />
            <button className={style.btn} onClick={handleupdate}>Update Data</button>


          </div>
          </div>  
        
    )
}


export default Edit