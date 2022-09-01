import React, {useState} from "react";

const Form =()=>{
    //created state variable to keep track of form info
    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword]=useState("");
    let [confpassword, setconfPassword]=useState("");


    return(
        <div className="container">
            <h1>Your Form Data</h1>
            <form>
                <div className="form-group">
                    <label>First Name:</label>
                    {/* attached an onChange event listener for the input */}
                    <input onChange={(e)=>setFName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange={(e)=>setLName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange={(e)=>setconfPassword(e.target.value)} type="password" className="form-control" />
                </div>
            </form>
            <hr />
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confpassword}</p>

        </div>
    )
}

export default Form;