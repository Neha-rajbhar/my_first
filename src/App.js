
import './App.css';
import Heading from './component/Heading';
import InputField from './component/input';
import Button from './component/Button';

function App() {
  return (
 <div className="App">
  {/*
  <h1>Register here ...</h1>
<input type="text" placeholder='mobile ...'></input>
<br></br>
<br></br>
<input type="text" placeholder='password ...'></input>
<br></br>
<br></br>
<button>Submit</button>
  */}
<Heading headings={"Register here ..."}/>
  <InputField/>
  <br></br>
  <br></br>
  <Button text={"Submit"}/>
    </div>
  );
}

export default App;
