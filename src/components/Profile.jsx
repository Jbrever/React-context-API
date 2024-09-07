import React, { useContext } from "react";
import userContext from "../context/userContext";
function Profile(){
    const {user} = useContext(userContext);
    if(!user)
         return <div>user not fount</div>
    else  
         return <div>hey {user.userName}</div>
}

export default Profile;