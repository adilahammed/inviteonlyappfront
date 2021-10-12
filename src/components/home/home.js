import react,{useState} from 'react'
import Invitedlist from './invitedlist/invitedlist'
import Profile from './profile/profile'
import axios from 'axios'
import './home.css'
function Home ({token,tokenmanage}){
    const [inviteemail, setinviteemail] = useState("")
    const [val, setval] = useState(0)

    const gettext=(e)=>{
        setinviteemail(e.target.value)
        // console.log(inviteemail);
    }

    const invite=()=>{
        axios({
            url:'http://localhost:9000/api/invite/invite',
            method:"post",
            headers:{"Authorization":`Bearer ${token}`},
            data:{inviteemail}
        }).then((res)=>{
            if(res.data.status==="ok"){
                // alert(res.data.msg)
                updateval()
            }else{
                alert(res.data.msg)
                // alert()
            }
            
        })
        setinviteemail("")
    }
    const updateval=()=>{
        setval(val+1)
    }
    return(
        <div>
            <div>
                <h1>this is a inviting app</h1>
            </div>
            <div className="middle">
                <div>
                     <Invitedlist val={val} token={token} />
                </div>
                <div>
                    <Profile token={token} />
                </div>
            </div>
            <div className="invitepanel">
                <div>
                    <h3>invite friends</h3>
                        <input onChange={gettext} value={inviteemail} placeholder="enter emailid">
                    </input>
                    <button onClick={invite} className="button-2">
                        invite
                    </button>
                </div>
            </div>
                <div onClick={()=>{tokenmanage("")}} className="buttdiv ">
                    <button className="button-2 hv">
                        logout
                    </button>
                </div>
        </div>

    )

}

export default Home