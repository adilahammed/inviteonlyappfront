import react,{useState} from 'react'
import Invitedlist from './invitedlist/invitedlist'
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
            url:'http://localhost:9000/api/invite',
            method:"post",
            headers:{"Authorization":`Bearer ${token}`},
            data:{inviteemail}
        }).then((res)=>{
            if(res.data.status==="ok"){
                alert(res.data.msg)
                updateval()
            }else{
                alert(res.data.msg)
                // alert()
            }
            
        })
    }
    const updateval=()=>{
        setval(val+1)
    }
    return(
        <div>
            <div>
                <h1>this is a inviting app</h1>
            </div>
            <div>
                <Invitedlist val={val} token={token} />
            </div>
            <div className="invitepanel">
                <div>
                    <h3>invite friends</h3>
                        <input onChange={gettext} placeholder="enter emailid">
                    </input>
                    <button onClick={invite} className="button-2">
                        invite
                    </button>
                </div>
                <div onClick={()=>{tokenmanage("")}} className="buttdiv ">
                    <button className="button-2 hv">
                        logout
                    </button>
                </div>
            </div>
        </div>

    )

}

export default Home