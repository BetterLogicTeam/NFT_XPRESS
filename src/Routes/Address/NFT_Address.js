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
                {(<a href={`https://bscscan.com/address/0x9c745c6df1de64a022800f4a675c62e3799b3adb`} className="  copydata" target="_blank">{"0x9c745c6df1de64a...e3799b3adb" || "Connect Wallet"}</a>)}

                    <div class="wdg-actions  ms-4 ">
                        <CopyToClipboard text={`0x9c745c6df1de64a022800f4a675c62e3799b3adb`}
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