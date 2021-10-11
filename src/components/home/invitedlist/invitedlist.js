import react,{useEffect,useState} from 'react'
import axios from 'axios'

function Invitedlist({token,val}){
    const [invited, setinvited] = useState([])
    const [joined, setjoined] = useState([]);
    ;
    useEffect(() => {
        axios({
            url:'http://localhost:9000/api/invited',
            method:"get",
            headers:{"Authorization":`Bearer ${token}`},
        }).then((res)=>{
            console.log(res.data.msg);
            if(res.data.status==="ok"){
                setinvited(res.data.msg.invited)
                setjoined(res.data.msg.joined)
            }
        })
    }, [val])

    

    return(
        <div>
            <div className="inbl">
                <div>
                    <h1>
                        invited:
                    </h1>
                </div>
                {invited.map((a)=>{
                        return(
                            <h2>
                                {a}
                            </h2>
                            )
                    })}
            </div>
            <div className="inbl joined">
                <h1>
                    joined:
                </h1>
                {/* <h2>
                </h2> */}
                    {joined.map((a)=>{
                        return(
                            <h2>
                                {a}
                            </h2>
                            )
                    })}
            </div>
        </div>
    )

}

export default Invitedlist