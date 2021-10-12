import react,{useEffect,useState} from "react";
import axios from "axios";
import './profile.css'
function Profile({token}){
    const [profileval, setprofileval] = useState("")
    useEffect(() => {
        axios({
            url:'http://localhost:9000/api/profile/view',
            method:"get",
            headers:{"Authorization":`Bearer ${token}`},
        }).then((res)=>{
            setprofileval(res.data.msg)
        })
    }, [])
    // alert(profileval)
    console.log(profileval);
    if(profileval!==""){
        return(
            <div className="profile">
                <h1>Profile</h1>
                <h2>username:{profileval.username}</h2>
                <h2>email:{profileval.email}</h2>
                <h2>invited by:{profileval.invitedby}</h2>
            </div>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
    
}

export default Profile