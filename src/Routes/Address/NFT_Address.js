import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { toast } from "react-toastify";

import { PagePath } from "../../Components";

const Coin_Address = () => {
    const [copyTest, setcopyTest] = useState(false)


    useEffect(() => {
        copyTest ? toast.success("Copied") : <></>
        setTimeout(() => {
            setcopyTest(false)
        }, 10);
    }, [copyTest])
    return (
        <div className="row justify-content-center border_right" style={{ height: "90vh" }} >
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "NFT Address", page_path: "Address / NFT Address" }} />
                <h5 className=" mt-5  copydata" style={{ color: 'rgb(0 0 0 / 85%)' }}>NFT Address : 
                {(<a href={`https://bscscan.com/address/0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58`} className="  copydata" target="_blank">{"0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58" || "Connect Wallet"}</a>)}

                    <div class="wdg-actions  ms-4 ">
                        <CopyToClipboard text={`https://bscscan.com/address/0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58`}
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

export default Coin_Address;