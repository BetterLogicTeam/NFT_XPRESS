import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { AiFillCopy } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { PagePath } from '../../Components'

export default function Governance_Token_Address() {
  const [copyTest, setcopyTest] = useState(false)


  useEffect(() => {
    copyTest ? toast.success("Copied") : <></>
    setTimeout(() => {
      setcopyTest(false)
    }, 10);
  }, [copyTest])
  return (
    <div>
      <div className="row justify-content-center border_right" style={{ height: "90vh" }} >
        <div className="col-md-11 py-3">
          <PagePath data={{ page_name: "Governance Token Address", page_path: "Address / Governance Token Address" }} />
          <h5 className=" mt-5  copydata" style={{ color: 'rgb(0 0 0 / 85%)' }}>Governance Token Address :
            {(<a href={`https://bscscan.com/address/0x052775cf897b3ec894f26b8d801c514123c305d1`} className="  copydata" target="_blank">{"0x052775cf897b3e...4123c305d1" || "Connect Wallet"}</a>)}

            <div class="wdg-actions ms-4 ">
              <CopyToClipboard text={`0x052775cf897b3ec894f26b8d801c514123c305d1`}
                onCopy={() => setcopyTest(true)}
              >
                  <span className="fontdata">{<AiFillCopy className="aliIcon"/>}</span>
               
              </CopyToClipboard>


            </div>

          </h5>

        </div>
      </div>
    </div>
  )
}
