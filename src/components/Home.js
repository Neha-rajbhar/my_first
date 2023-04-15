

import {useRecoilValue} from 'recoil';
  import NoteAtom from './NoteAtom'
  import style from './Create.module.css';
  


function Home(){

    const notes = useRecoilValue(NoteAtom)
   

return (

    <div>

    {
        notes.map((note,index)=>{
return (
    
    <div className={style.main} key={index}>
    <h1>Id : {note.id}</h1>
    <h1>Title : {note.title}</h1>
    <h1>Author Name : {note.author}</h1>
    <h1>Description : {note.disc}</h1>
    </div>




)

        })
    }

      
    </div>

)


}

export default Home
