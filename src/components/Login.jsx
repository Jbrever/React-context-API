import React , {useContext, useState} from "react";
import userContext from "../context/userContext";

function Login(){
const [userName , setUserName] = useState('');
const [password , setPassword] = useState('');  

const {setUser} = useContext(userContext);
const submitData = (e) =>{
   e.preventDefault();
   setUser({userName , setPassword});
}
  return(
    <>
        <input type="text" 
               placeholder="enter username"
               value={userName}
               onChange={(e)=>setUserName(e.target.value)}
        />
        <input type="password" 
                placeholder="enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={submitData}>submit</button>
    </>
  )
}

export default Login;