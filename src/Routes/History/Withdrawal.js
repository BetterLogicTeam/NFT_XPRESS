import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import { loadWeb3 } from "../../apis/api";
import { PagePath, Table } from "../../Components";
import { API } from "../../Redux/actions/API";
import { LaRace_Governance_Token, LaRace_Governance_Token_ABI, LAR_withdrowal, LAR_withdrowal_ABI } from "../../utilies/constant";

const Withdrawal = () => {
    const user = localStorage.getItem("user");
    const [Dash_Board_Array, setDash_Board_Array] = useState("")
    const [LAR_live, setLAR_live] = useState("")
    const [get_Value, setget_Value] = useState("")
    const [Connect, setConnect] = useState("wallet is not connected..!..Wait...")
    const [spinner, setspinner] = useState(false)
    let [loading, setLoading] = useState(false);

    const Get_Withdrawal_Value = async () => {
        try {

            let res = await API.get(`/getDashboardValues?id=${user}`)
            res = res.data.data[0]
            console.log("res", res);
            setDash_Board_Array(res)


        } catch (e) {
            console.log("Error While Get Value_Withdrawal", e);
        }
    }

    const Live_Rate_LAR = async () => {
        try {
            let res = await API.get(`/live_rate_LAR`)
            res = res.data.data[0].usdperunit
            setLAR_live(1 / res * get_Value)
            console.log("LIve_Rate", res);


        } catch (e) {
            console.log("Error Whole calling Live Rate API CAlling", e);
        }
    }


    const Connect_Wallet = async () => {
        try {

            let acc = await loadWeb3();

            if (acc == "No Wallet") {
                setConnect("No Wallet Connected")
                // toast.error("No Wallet Connected")
            }
            else if (acc == "Wrong Network") {
                setConnect("Wrong Newtwork please connect to Binance smart chain network")

                // toast.error("Wrong Newtwork please connect to Binance smart chain network")

            } else {
                setConnect("Wallet is connected..!")

            }



        } catch (e) {
            console.log("Error While connect Wallet", e);
        }
    }




    const Withdrawal_contract = async () => {
        try {
            setspinner(true)
            let acc = await loadWeb3();

            if (acc == "No Wallet") {

                toast.error("No Wallet Connected")
                setspinner(false)

            }
            else if (acc == "Wrong Network") {
                setspinner(false)


                toast.error("Wrong Newtwork please connect to Binance smart chain network")

            } else {
                console.log("Withdrawal_contract");

                if (Dash_Board_Array.address == acc) {

                    const web3 = window.web3;
                    let withdrawal_La_Race = new web3.eth.Contract(LAR_withdrowal_ABI, LAR_withdrowal);
                    let nftTokenOf_La_Race = new web3.eth.Contract(LaRace_Governance_Token_ABI, LaRace_Governance_Token);
                    let LAR_Race = web3.utils.toWei(LAR_live.toString())

                    await nftTokenOf_La_Race.methods.approve(LAR_withdrowal, LAR_Race).send({
                        from: acc
                    })
                    toast.success("Approve Confirmed LaRace Governance Token")
                    await withdrawal_La_Race.methods.multisendToken([acc], [LAR_Race]).send({
                        from: acc
                    })
                    toast.success("Transaction Confirmed")
                    setspinner(false)


                } else {
                    toast.error("Address MissMatch")
                    setspinner(false)

                }


            }




        } catch (e) {
            console.log("Error While Calling MultiToken ", e);
            setspinner(false)

        }
    }













    useEffect(() => {
        Get_Withdrawal_Value()

        setInterval(() => {
            Connect_Wallet()
        }, 1000);
    }, [])

    useEffect(() => {
        Live_Rate_LAR()

    }, [get_Value])


    return (
        <>

            <div className="row justify-content-center">
                <div className="col-md-11 py-3">
                {
                    Dash_Board_Array =="" ? <>
                        <div className="Main_loding">
                            {/* <RiseLoader  loading={loading}  color="rgb(11, 22, 149)" size={80}  className="Loadingstyle" /> */}
                            <BallTriangle
                                height={100}
                                width={100}
                                radius={5}
                                color="#4fa94d"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                                className="Loadingstyle"
                            />

                        </div>
                    </>
                        :
                        <></>

                }

                    <div className="col-12 d-flex justify-content-center py-5">
                        <div className="col-md-6 col-lg-7 col-xxl-6 col-sm-10">
                            <div className="d-flex flex-column align-items-center profile-border profile-login  py-4 shadow-withdraw">
                                <h4 className="h-color col-12 py-2 px-4 border_bottom pb-3">Main Wallet Withdrawal</h4>
                                {
                                    Connect == "Wallet is connected..!" ? <p className="text-success col-11"> {Connect}</p> : <p className="text-danger col-11"> {Connect}</p>
                                }

                                <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Wallet Net USD Amount</p>
                                    <input type="text" className="p-2 profile-border col-7" value={Dash_Board_Array.withdrawal} />
                                </div>
                                <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Enter USD Amount</p>
                                    <input type="number" className="p-2 profile-border col-7 text-dark" placeholder="Enter USD Amount" onChange={(e) => setget_Value(e.target.value)} />
                                </div>
                                <div className="col-11 mt-3 row align-items-center">
                                    <p className="col-5 m-0 p-0 text-white">Withdrawal LAR Token</p>
                                    <input type="text" className="p-2 profile-border col-7" value={LAR_live} />
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-5"></div>
                                    <div class="col-md-3" >
                                        <button class="btn btn-success " onClick={() => Withdrawal_contract()}>
                                            {
                                                spinner ? <>
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </>
                                                    : "Withdraw"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Withdrawal;