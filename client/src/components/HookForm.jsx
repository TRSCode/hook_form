import React, {useState} from 'react'
// this is destructured for props
// const HookForm = (firstName,lastName,email,password) => {}

// --------------------option 2 state in object
const HookForm = () => {

    
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const changeHandler = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.name);
        setUser({...user, [e.target.name]:e.target.value})
    }

    // ---------------option 1 - multiple states
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const handleLastName = (e) => {
    //     setLastName(e.target.value);
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    // }    
    
    return (
        <div>

            <div className="row mt-3 bg-primary ">
                <form action="" className="col-md-4 offset-1">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control mt-1" name = "firstName" id="firstName" onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control mt-1" name = "lastName" id="lastName" onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control mt-1" name = "email" id="email" onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control mt-1" name = "password" id="password" onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Password</label>
                        <input type="password" className="form-control mt-1" name = "confirmPassword" id="password" onChange={changeHandler}/>
                    </div>
                    {/* <button className="btn-primary mt-3" onClick={handleClick}>Submit</button> */}
                    <button className="btn-primary mt-3" onClick={ () => alert("This button has been clicked!")}>Submit</button>
                </form>
                <div className="col-md">
                    <h3>First Name: {user.firstName}</h3>
                    <h3>Last Name: {user.lastName}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Password: {user.password}</h3>
                    <h3>Confirme Password: {user.confirmPassword}</h3>
                </div>
            </div>
        </div>
    )
}

export default HookForm