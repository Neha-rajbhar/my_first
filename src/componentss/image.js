import { useState } from 'react';
import './image.css';


export default function Image() {

    const arr = [
        'https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg',
        'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
        'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80'

    ]
    let [img, setImg] = useState(0);
    function HandleClick() {
        let pi = 0
        setImg((pi) => (pi + 1) % arr.length);
        console.log(setImg);
    }


    return (
        <div className='main'>

            <div className='image'><img src={arr[img]} style={{ width: '500px', height: '500px' }} /></div>
            <div className='btn'>
                <button id='imgButton' onClick={HandleClick}>Change pic</button>
            </div>
        </div>
    );
}