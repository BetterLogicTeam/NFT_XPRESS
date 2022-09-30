import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../../apis/api";
import {PagePath} from "../../Components";
import { API } from "../../Redux/actions/API";

const Self_Address = () => {
    const [address, setaddress] = useState()
    const user = localStorage.getItem("user");

    const userAddress=async()=>{
        let res=await API.get(`/getDashboardValues?id=${user}`)
        res=res.data.data[0]
        console.log("RES",res);
        // let acc =await loadWeb3()
        // console.log("ACC",acc);
        setaddress(res.address)
    }

    useEffect(() => {
        userAddress()
    }, [])
    
    
    return ( 
        <div className="row justify-content-center" style={{height:"90vh"}} >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Self Address",page_path:"Address / Self Address"}} />  


                <h5 className=" mt-5 border_right" style={{ color: 'rgb(0 0 0 / 85%)' }}>Self Address : { (<a href={`https://bscscan.com/tx/${address}`} className=" border_right" target="_blank">{address || "Connect Wallet" }</a>)}  </h5>


            </div>
        </div>
     );
}
 
export default Self_Address;