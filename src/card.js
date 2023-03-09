
import './card.css';
export default function Card(props){
    return(
        <div className="card">
<img src={props.user.image} style={{width:'50px', height:'50px'}}/>
<h5>{props.user.designation}</h5>
<h3>{props.user.name}</h3>
<p>{props.user.description}</p>


        </div>
    )
}