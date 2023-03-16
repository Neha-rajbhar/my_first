import './sign.css';

export default function Form() {
    return (
        <>

            <form>
                <h2>Welcome!</h2>
                <h5>Log in your account</h5>
                <label>Email</label><br />
                <input className='form' type="text" /><br />
                <label>Password</label><br />
                <input className='form' type="password" /><br />
                <input id='cb' type="checkbox" /><h6 className='para'>Remember me</h6><a href=''>Forget Password</a><br />
                <button id='butt'>Submit</button>

                <div className='line'>

                    <hr />  <a id='l' href=''>Sign Up</a>

                </div>
            </form>
        </>
    );
}