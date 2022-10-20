import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { loadWeb3 } from "../../apis/api";
import {PagePath} from "../../Components";
import { API } from "../../Redux/actions/API";
import {AiFillCopy} from 'react-icons/ai'

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

    const [copyTest, setcopyTest] = useState(false)


  useEffect(() => {
      copyTest ? toast.success("Copied") : <></>
      setTimeout(() => {
          setcopyTest(false)
      }, 10);
  }, [copyTest])
    
    
    return ( 
        <div className="row justify-content-center" style={{height:"90vh"}} >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Self Address",page_path:"Address / Self Address"}} />  


                <h5 className=" mt-5  copydata" style={{ color: 'rgb(0 0 0 / 85%)' }}>Self Address : 
                { (<a href={`https://bscscan.com/tx/${address}`} className="  copydata" target="_blank">{ address ? (address?.substring(0, 15) + "..." + address?.substring(address?.length - 15)) : "Connect Wallet" }</a>)} 
                
                <div class="wdg-actions  ms-4 ">
              <CopyToClipboard text={`${address}`}
                onCopy={() => setcopyTest(true)}
              >
                <div class="wdg-actions ">
                  <button type="button" class="copy_btn_set3" >
                  <span className="fontdata">{<AiFillCopy className="aliIcon"/>}</span>


                  </button>

                </div>
              </CopyToClipboard>


            </div>
                
                 </h5>


            </div>
        </div>
     );
}
 
export default Self_Address;