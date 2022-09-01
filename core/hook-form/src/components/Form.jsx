import React, {useState} from "react";

const Form =()=>{
    //created state variable to keep track of form info
    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword]=useState("");
    let [confpassword, setconfPassword]=useState("");

    //more complex version of showing error messages
    function showError(){
        if(password.length == 0){
            return <p className="text-danger">Password required</p>
        }else if(password.length<8){
            return <p className="text-danger">Password must be atleast 8 characters</p>
        }else{
            return null
        }
    }

    
    return(
        <div className="container">
            <h1>Your Form Data</h1>
            <form>

                <div className="form-group">
                    <label>First Name:</label>
                    {/* attached an onChange event listener for the input */}
                    <input onChange={(e)=>setFName(e.target.value)} type="text" className="form-control" />
                    {
                    fname.length<2 && fname.length>0 ?
                    <p className="text-danger">First Name must be at least 2 characters</p> : ""
                    }
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange={(e)=>setLName(e.target.value)} type="text" className="form-control" />
                    {
                    lname.length<2 ?
                    <p className="text-danger">Last Name must be at least 2 characters</p> : ""
                    }
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" />
                    {
                    email.length<5 ?
                    <p className="text-danger">Last Name must be at least 5 characters</p> : ""
                    }
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
                    {
                        showError()
                    }
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange={(e)=>setconfPassword(e.target.value)} type="password" className="form-control" />
                </div>
            </form>

        </div>
    )
}

export default Form;

