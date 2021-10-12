import react,{useEffect,useState} from 'react'
import axios from 'axios'
import './invitedlist.css'
function Invitedlist({token,val}){
    const [invited, setinvited] = useState([])
    const [joined, setjoined] = useState([]);
    ;
    useEffect(() => {
        fetchinv()
    }, [val])

    const fetchinv=()=>{
        axios({
            url:'http://localhost:9000/api/invite/invited',
            method:"get",
            headers:{"Authorization":`Bearer ${token}`},
        }).then((res)=>{
            console.log(res.data.msg);
            if(res.data.status==="ok"){
                setinvited(res.data.msg.invited)
                setjoined(res.data.msg.joined)
            }
        })
    }

    const removeinv=(a)=>{
        // alert(a)
        axios({
            url:'http://localhost:9000/api/invite/remove',
            method:"post",
            headers:{"Authorization":`Bearer ${token}`},
            data:{removename:a}
        }).then((res)=>{
            if(res.data.status==="ok"){
                fetchinv()
            }
        })
    }

    return(
        <div className="fl">
            <div className=" invited">
                <div className="invhead">
                    <h1>
                        invited:
                    </h1>
                    
                </div>
                <div className="invlis">
                    {invited.map((a,i)=>{
                            return(
                                <div key={i}>
                                    <h2 className="inbl invname">
                                        {a}
                                    </h2>
                                    <button className="ml5"  onClick={()=>{removeinv(a)}}>
                                        x
                                    </button>
                                </div>
                                )
                        })}
                </div>
            </div>
            <div className=" joined">
                <div className="invhead">
                    <h1>
                        joined:
                    </h1>
                </div>
                <div className="invlis">
                    {joined.map((a,i)=>{
                        return(
                            <h2 key={i}>
                                {a}
                            </h2>
                            )
                    })}
                </div>
            </div>
        </div>
    )

}

export default Invitedlist