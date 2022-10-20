import React, { useEffect, useState } from 'react'
import Page_Path from '../PagePath/PagePath'
import horse3 from '../../assets/horse3.jpeg'
import horseboth4 from '../../assets/horseboth4.jpg'
import horseboth from '../../assets/horseboth.jpg'
import horse2 from '../../assets/horse2.jpeg'
import horse1 from '../../assets/horse1.jpeg'
import horse4 from '../../assets/horse4.jpg'
import './Mint_Style.css'

import horse from '../../assets/horse.jpeg'
import horseboth1 from '../../assets/horseboth1.jpg'
import horseboth2 from '../../assets/horseboth2.jpg'
import horseboth3 from '../../assets/horseboth3.jpg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { BUSD_Token, BUSD_Token_ABI, GLABA_NFT, GLABA_NFT_1000, GLABA_NFT_2500, GLABA_NFT_500, GLABA_NFT_5000, GLABA_NFT_ABI, GLABA_NFT_ABI_1000, GLABA_NFT_ABI_20_5000, GLABA_NFT_ABI_2500, GLABA_NFT_ABI_500, GLABA_NFT_ABI_5000, LaRace_Governance_Token, LaRace_Governance_Token_ABI, WIRE_Token, WIRE_Token_ABI } from '../../utilies/constant'
import { loadWeb3 } from '../../apis/api'
import Web3 from 'web3'
import video from '../../assets/video.mp4'
import Secondvideo from '../../assets/second_video.mp4'
import { API } from '../../Redux/actions/API'
import { useNavigate } from 'react-router-dom'


export default function Mint_nft() {
    let navigate = useNavigate()

    let [value, setValue] = useState(1)
    let [btnOne, setButtonOne] = useState("Mint With Dual");
    let [btnTwo, setButtonTwo] = useState("Mint With LAR");
    let [btnThress, setButtonThree] = useState("Mint With BNB");
    const [btnFour, setbtnFour] = useState("Mint With BUSD")


    const [inputdatahere, setinputdatahere] = useState("100")
    const [Token_Value_1, setToken_Value_1] = useState(0)
    const [Token_Value_2, setToken_Value_2] = useState(0)
    const [Token_Value_3, setToken_Value_3] = useState(0)
    const [image, setimage] = useState(horse3)
    const [minting_counter, setminting_counter] = useState(1)
    const [selected, setselected] = useState(false)
    const [contract_select, setcontract_select] = useState(100)
    const [Token_Value_BNB, setToken_Value_BNB] = useState(0)
    const [Token_Value_BUSD, setToken_Value_BUSD] = useState(0)



    const user = localStorage.getItem("user");




    const increaseValue = () => {
        if (value < 5) {
            setValue(++value)
            console.log("setValue", value)
        }

    }

    const decreaseValue = () => {
        if (value > 1) {
            setValue(--value)
            console.log("setValue", value)
        }

    }

    const MintwithDual = async () => {

        let acc = await loadWeb3();

        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")

        } else {
            try {

                let res = await API.get(`/getDashboardValues?id=${user}`)
                res = res.data.data[0]
                let own_Address = res.address
                console.log("res_Mint", own_Address == acc);
                // res = res.data.data;
                if (own_Address == "") {
                    toast.error("Please Update Your Profile")
                    navigate('/dashboard/Profile')

                } else if (own_Address == acc) {
                    try {

                        setButtonOne("Please Wait While Processing")
                        const web3 = window.web3;
                        let nftTokenOf_La_Race = new web3.eth.Contract(LaRace_Governance_Token_ABI, LaRace_Governance_Token);
                        let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token);
                        let nftContractOf
                        let increment_each_data
                        if (contract_select == 100) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
                            increment_each_data = 0.00365946
                        } else if (contract_select == 500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
                            increment_each_data = 0.0109232
                        } else if (contract_select == 1000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);
                            increment_each_data = 0.0182093
                        } else if (contract_select == 2500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
                            increment_each_data = 0

                        } else if (contract_select == 5000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);
                            increment_each_data = 0.0910139
                        }

                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken().call()
                            mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                            mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
                            let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1) + 0.0001
                            console.log("totalMintingPriceToken_2", totalMintingPriceToken_1);


                            totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())



                            let mintingbnbPrice_Toke_2 = await nftContractOf.methods.ValueinToken1().call()
                            mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2);
                            mintingbnbPrice_Toke_2 = parseFloat(mintingbnbPrice_Toke_2)
                            let totalMintingPriceToken_2 = Number(value * mintingbnbPrice_Toke_2) + increment_each_data
                            // if (minting_counter == 1) {

                            //     totalMintingPriceToken_2 = value * mintingbnbPrice_Toke_2
                            //     console.log("totalMintingPriceToken_2", totalMintingPriceToken_2);
                            // } else if (minting_counter == 2) {
                            //     totalMintingPriceToken_2 = value * mintingbnbPrice_Toke_2 * 2
                            //     console.log("totalMintingPriceToken_2", totalMintingPriceToken_2);


                            // }
                            totalMintingPriceToken_2 = web3.utils.toWei(totalMintingPriceToken_2.toString())


                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {

                                        // console.log("totalMintingPriceToken_2", totalMintingPriceToken_2);
                                        console.log("Parameter", value, totalMintingPriceToken_1, totalMintingPriceToken_2);

                                        if (contract_select == 100) {
                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")



                                        } else if (contract_select == 500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_500, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        }
                                        else if (contract_select == 1000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        } else if (contract_select == 2500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        } else if (contract_select == 5000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        }


                                        let hash = await nftContractOf.methods.mint_with_token(value, totalMintingPriceToken_1, totalMintingPriceToken_2).send({
                                            from: acc,


                                        })

                                        setButtonOne("Mint With Dual")
                                        console.log("hash", hash.transactionHash);
                                        hash = hash.transactionHash
                                        totalMintingPriceToken_1 = web3.utils.fromWei((totalMintingPriceToken_1).toString())
                                        console.log("Ammount", acc);
                                        let postapi = await axios.post('https://taraus-nft-api.herokuapp.com/activation', {

                                            "uid": user,
                                            "sid": "0",
                                            "transaction": hash,
                                            "amount": contract_select,
                                            "useraddress": acc,
                                            "tokenamount": "0",
                                            "type": "Without Referral ID",
                                            "quantity": value,
                                            "horseType": minting_counter == 1 ? "SINGLE" : "DUAL"
                                        })
                                        toast.success("Transaction Confirmed")
                                        console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonOne("Mint With Dual")

                                    }
                                } else {
                                    toast.error("Paused is True")
                                    setButtonOne("Mint With Dual")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonOne("Mint With Dual")

                            }

                        }

                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setButtonOne("Mint With Dual")

                    }
                } else {
                    toast.error("Wrong Metamask Address")
                    setinputdatahere(" ")


                }


            } catch (e) {
                setinputdatahere(" ")


            }

        }
    }




    const MintwithLaRace = async () => {
        // console.log("res",inputValue)
        // setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {
            try {

                let res = await API.get(`/getDashboardValues?id=${user}`)
                res = res.data.data[0]
                let own_Address = res.address
                console.log("res_Mint", own_Address == acc);
                // res = res.data.data;
                if (own_Address == "") {
                    toast.error("Please Update Your Profile")
                    navigate('/dashboard/Profile')

                } else if (own_Address == acc) {
                    try {

                        setButtonTwo("Please Wait While Processing")
                        const web3 = window.web3;



                        let nftTokenOf_La_Race = new web3.eth.Contract(LaRace_Governance_Token_ABI, LaRace_Governance_Token);
                        let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token);
                        let nftContractOf
                        let increment_each_data
                        if (contract_select == 100) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
                            increment_each_data = 0.00365946
                        } else if (contract_select == 500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
                            increment_each_data = 0.0109232
                        } else if (contract_select == 1000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);
                            increment_each_data = 0.0182093
                        } else if (contract_select == 2500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
                            increment_each_data = 0

                        } else if (contract_select == 5000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);
                            increment_each_data = 0.0910139
                        }

                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken_single().call()
                            mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                            mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
                            let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1) + increment_each_data
                            console.log("Change_price", totalMintingPriceToken_1);


                            // if (minting_counter == 1) {

                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1
                            // } else if (minting_counter == 2) {
                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1 * 2

                            // }
                            totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())




                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {

                                        if (contract_select == 100) {
                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 1000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        }
                                        else if (contract_select == 2500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 5000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        }


                                        toast.success("Approve Confirmed LaRace Governance Token")


                                        let hash = await nftContractOf.methods.mint_with_single(value, totalMintingPriceToken_1).send({
                                            from: acc,
                                        })
                                        setButtonTwo("Mint With LAR")
                                        hash = hash.transactionHash
                                        // console.log("hash", hash);
                                        // console.log("APIDATA", user,contract_select,acc,totalMintingPriceToken_1,value);

                                        // mintingbnbPrice=web3.utils.fromWei((mintingbnbPrice).toString())
                                        let postapi = await axios.post('https://taraus-nft-api.herokuapp.com/activation', {
                                            "uid": user,
                                            "sid": "0",
                                            "transaction": hash,
                                            "amount": contract_select,
                                            "useraddress": acc,
                                            "tokenamount": "0",
                                            "type": "Without Referral ID",
                                            "quantity": value,
                                            "horseType": minting_counter == 1 ? "SINGLE" : "DUAL"

                                        })
                                        toast.success("Transaction Confirmed")

                                        console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonTwo("Mint With LAR")

                                    }
                                } else {
                                    toast.error("Paused is True")
                                    setButtonTwo("Mint With LAR")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonTwo("Mint With LAR")

                            }

                        }

                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setButtonTwo("Mint With LAR")

                    }
                } else {
                    toast.error("Wrong Metamask Address")
                    setinputdatahere(" ")


                }


            } catch (e) {
                setinputdatahere(" ")


            }

        }
    }

    const MintwithBNB = async () => {
        // console.log("res",inputValue)
        // setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {
            try {

                let res = await API.get(`/getDashboardValues?id=${user}`)
                res = res.data.data[0]
                let own_Address = res.address
                console.log("res_Mint", own_Address == acc);
                // res = res.data.data;
                if (own_Address == "") {
                    toast.error("Please Update Your Profile")
                    navigate('/dashboard/Profile')

                } else if (own_Address == acc) {
                    try {

                        setButtonThree("Please Wait While Processing")
                        const web3 = window.web3;



                        let nftTokenOf_La_Race = new web3.eth.Contract(LaRace_Governance_Token_ABI, LaRace_Governance_Token);
                        let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token);
                        let nftContractOf
                        let increment_each_data
                        if (contract_select == 100) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
                            increment_each_data = 0.00365946
                        } else if (contract_select == 500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
                            increment_each_data = 0.0109232
                        } else if (contract_select == 1000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);
                            increment_each_data = 0.0182093
                        } else if (contract_select == 2500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
                            increment_each_data = 0

                        } else if (contract_select == 5000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);
                            increment_each_data = 0.0910139
                        }

                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice_Toke_1 = await nftContractOf.methods.Valueinbnb().call()
                            mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                            mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
                            let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1) + increment_each_data
                            console.log("Change_price", totalMintingPriceToken_1);


                            // if (minting_counter == 1) {

                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1
                            // } else if (minting_counter == 2) {
                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1 * 2

                            // }
                            totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())




                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {




                                        let hash = await nftContractOf.methods.mint_with_bnb(value).send({
                                            from: acc,
                                            value: totalMintingPriceToken_1.toString()
                                        })
                                        setButtonThree("Mint With BNB")
                                        hash = hash.transactionHash
                                        // console.log("hash", hash);
                                        // console.log("APIDATA", user,contract_select,acc,totalMintingPriceToken_1,value);

                                        // mintingbnbPrice=web3.utils.fromWei((mintingbnbPrice).toString())
                                        let postapi = await axios.post('https://taraus-nft-api.herokuapp.com/activation', {
                                            "uid": user,
                                            "sid": "0",
                                            "transaction": hash,
                                            "amount": contract_select,
                                            "useraddress": acc,
                                            "tokenamount": "0",
                                            "type": "Without Referral ID",
                                            "quantity": value,
                                            "horseType": minting_counter == 1 ? "SINGLE" : "DUAL"

                                        })
                                        toast.success("Transaction Confirmed")

                                        console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonThree("Mint With BNB")


                                    }
                                } else {
                                    toast.error("Paused is True")
                                    setButtonThree("Mint With BNB")


                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonThree("Mint With BNB")


                            }

                        }

                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setButtonThree("Mint With BNB")


                    }
                } else {
                    toast.error("Wrong Metamask Address")
                    setinputdatahere(" ")


                }


            } catch (e) {
                setinputdatahere(" ")


            }

        }
    }

    const MintwithBUSD = async () => {
        // console.log("res",inputValue)
        // setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {
            try {

                let res = await API.get(`/getDashboardValues?id=${user}`)
                res = res.data.data[0]
                let own_Address = res.address
                console.log("res_Mint", own_Address == acc);
                // res = res.data.data;
                if (own_Address == "") {
                    toast.error("Please Update Your Profile")
                    navigate('/dashboard/Profile')

                } else if (own_Address == acc) {
                    try {

                        setbtnFour("Please Wait While Processing")
                        const web3 = window.web3;



                        let nftTokenOf_BUSD = new web3.eth.Contract(BUSD_Token_ABI, BUSD_Token);
                        let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token);
                        let nftContractOf
                        let increment_each_data
                        if (contract_select == 100) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
                            increment_each_data = 0.00365946
                        } else if (contract_select == 500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
                            increment_each_data = 0.0109232
                        } else if (contract_select == 1000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);
                            increment_each_data = 0.0182093
                        } else if (contract_select == 2500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
                            increment_each_data = 0

                        } else if (contract_select == 5000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);
                            increment_each_data = 0.0910139
                        }

                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice_Toke_1 = await nftContractOf.methods.MinitngPricein_busd().call()
                            mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                            mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
                            let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1) 
                            console.log("Change_price", totalMintingPriceToken_1);


                            // if (minting_counter == 1) {

                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1
                            // } else if (minting_counter == 2) {
                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1 * 2

                            // }
                            totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())




                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {

                                        if (contract_select == 100) {
                                            await nftTokenOf_BUSD.methods.approve(GLABA_NFT, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 500) {

                                            await nftTokenOf_BUSD.methods.approve(GLABA_NFT_500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 1000) {

                                            await nftTokenOf_BUSD.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        }
                                        else if (contract_select == 2500) {

                                            await nftTokenOf_BUSD.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 5000) {

                                            await nftTokenOf_BUSD.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        }


                                        toast.success("Approve Confirmed BUSD Token")


                                        let hash = await nftContractOf.methods.mint_with_BUSD(value, totalMintingPriceToken_1).send({
                                            from: acc,
                                        })
                                        setbtnFour("Mint With BUSD")
                                        hash = hash.transactionHash
                                        // console.log("hash", hash);
                                        // console.log("APIDATA", user,contract_select,acc,totalMintingPriceToken_1,value);

                                        // mintingbnbPrice=web3.utils.fromWei((mintingbnbPrice).toString())
                                        let postapi = await axios.post('https://taraus-nft-api.herokuapp.com/activation', {
                                            "uid": user,
                                            "sid": "0",
                                            "transaction": hash,
                                            "amount": contract_select,
                                            "useraddress": acc,
                                            "tokenamount": "0",
                                            "type": "Without Referral ID",
                                            "quantity": value,
                                            "horseType": minting_counter == 1 ? "SINGLE" : "DUAL"

                                        })
                                        toast.success("Transaction Confirmed")

                                        console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setbtnFour("Mint With BUSD")

                                    }
                                } else {
                                    toast.error("Paused is True")
                                    setbtnFour("Mint With BUSD")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setbtnFour("Mint With BUSD")

                            }

                        }

                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setbtnFour("Mint With BUSD")

                    }
                } else {
                    toast.error("Wrong Metamask Address")
                    setinputdatahere(" ")


                }


            } catch (e) {
                setinputdatahere(" ")


            }

        }
    }

    const getVAlues = async () => {
        // console.log("res",inputValue)
        // setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {



            try {


                const web3 = window.web3;
                let nftContractOf
                let increment_each_data
                if (contract_select == 100) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
                    increment_each_data = 0.00365946

                } else if (contract_select == 500) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
                    increment_each_data = 0.0109232

                } else if (contract_select == 1000) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);
                    increment_each_data = 0.0182093
                } else if (contract_select == 2500) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
                    increment_each_data = 0
                } else if (contract_select == 5000) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);
                    increment_each_data = 0.0910139
                }

                let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken().call()
                // mintingbnbPrice_Toke_1 = web3.utils.toWei(mintingbnbPrice_Toke_1);

                mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                // mintingbnbPrice_Toke_1=mintingbnbPrice_Toke_1.Fixed(3)
                mintingbnbPrice_Toke_1 = Number(mintingbnbPrice_Toke_1) + increment_each_data
                mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1).toFixed(4)

                if (minting_counter == 1) {
                    mintingbnbPrice_Toke_1 = mintingbnbPrice_Toke_1 * value
                    setToken_Value_1(mintingbnbPrice_Toke_1)
                } else if (minting_counter == 2) {
                    // mintingbnbPrice_Toke_1 = mintingbnbPrice_Toke_1 * value
                    setToken_Value_1(mintingbnbPrice_Toke_1 * 2)

                } else {
                    mintingbnbPrice_Toke_1 = mintingbnbPrice_Toke_1 * value
                    setToken_Value_1(mintingbnbPrice_Toke_1)
                }

                let mintingbnbPrice_Toke_2 = await nftContractOf.methods.ValueinToken1().call()
                mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2);
                mintingbnbPrice_Toke_2 = Number(mintingbnbPrice_Toke_2) + Number(increment_each_data)

                mintingbnbPrice_Toke_2 = parseFloat(mintingbnbPrice_Toke_2).toFixed(4)
                if (minting_counter == 1) {
                    mintingbnbPrice_Toke_2 = mintingbnbPrice_Toke_2 * value
                    setToken_Value_2(mintingbnbPrice_Toke_2)
                } else if (minting_counter == 2) {
                    // mintingbnbPrice_Toke_2 = mintingbnbPrice_Toke_2 * value

                    setToken_Value_2(mintingbnbPrice_Toke_2 * 2)

                }




                let mintingbnbPrice_Toke_3 = await nftContractOf.methods.ValueinToken_single().call()

                mintingbnbPrice_Toke_3 = web3.utils.fromWei(mintingbnbPrice_Toke_3);
                mintingbnbPrice_Toke_3 = Number(mintingbnbPrice_Toke_3) + Number(increment_each_data)
                // console.log("value1", mintingbnbPrice_Toke_3);
                mintingbnbPrice_Toke_3 = parseFloat(mintingbnbPrice_Toke_3).toFixed(4)
                if (minting_counter == 1) {
                    mintingbnbPrice_Toke_3 = mintingbnbPrice_Toke_3 * value

                    setToken_Value_3(mintingbnbPrice_Toke_3)
                } else if (minting_counter == 2) {
                    // mintingbnbPrice_Toke_3 = mintingbnbPrice_Toke_3 * value
                    setToken_Value_3(mintingbnbPrice_Toke_3 * 2)

                } else {
                    mintingbnbPrice_Toke_3 = mintingbnbPrice_Toke_3 * value

                    setToken_Value_3(mintingbnbPrice_Toke_3)

                }






                let mintingPriceBNB = await nftContractOf.methods.Valueinbnb().call()

                // mintingPriceBNB=Number(mintingPriceBNB)+0.07
                mintingPriceBNB = web3.utils.fromWei(mintingPriceBNB);
                mintingPriceBNB = Number(mintingPriceBNB) + Number(increment_each_data)

                mintingPriceBNB = parseFloat(mintingPriceBNB).toFixed(4)

                if (minting_counter == 1) {
                    mintingPriceBNB = mintingPriceBNB * value

                    setToken_Value_BNB(mintingPriceBNB)
                } else if (minting_counter == 2) {
                    // mintingPriceBNB = mintingPriceBNB * value
                    // console.log("mintingPriceBNB", mintingPriceBNB*2);

                    setToken_Value_BNB(mintingPriceBNB * 2)

                } else {
                    mintingPriceBNB = mintingPriceBNB * value
                    // mintingPriceBNB=Number(mintingPriceBNB)+

                    setToken_Value_BNB(mintingPriceBNB)

                }


                
                let mintingPriceBUSD = await nftContractOf.methods.MinitngPricein_busd().call()

                // mintingPriceBNB=Number(mintingPriceBNB)+0.07
                mintingPriceBUSD = web3.utils.fromWei(mintingPriceBUSD);
                console.log("Value_1", mintingPriceBUSD);

                // mintingPriceBUSD = Number(mintingPriceBUSD) + Number(increment_each_data)

                mintingPriceBUSD = parseFloat(mintingPriceBUSD).toFixed(4)

                if (minting_counter == 1) {
                    mintingPriceBUSD = mintingPriceBUSD * value

                    setToken_Value_BUSD(mintingPriceBUSD)
                } else if (minting_counter == 2) {
                    // mintingPriceBUSD = mintingPriceBUSD * value
                    // console.log("mintingPriceBUSD", mintingPriceBUSD*2);

                    setToken_Value_BUSD(mintingPriceBUSD * 2)

                } else {
                    mintingPriceBUSD = mintingPriceBUSD * value
                    // mintingPriceBUSD=Number(mintingPriceBUSD)+

                    setToken_Value_BUSD(mintingPriceBUSD)

                }




            } catch (e) {
                console.log("Error while Get Vale ", e)



            }





        }
    }


    useEffect(() => {
        getVAlues()
    }, [minting_counter, contract_select, value])






    return (
        <div>
            <div className="page-wrapper">
                <div className="page-content">
                    <Page_Path data={{ page_name: "Mint NFT", page_path: "Mint NFT / Mint" }} />

                    <div className="row">


                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 first_col ">

                            <h3 className='text-dark '  > Single NFT</h3>
                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horse} alt="Metamax NFT" width="100%" className="img_nft" /></div><br />
                            <h3 id="number1" className='btn_value' onClick={() => (setValue(1), setcontract_select(100), setselected(true), setimage(horse), setminting_counter(1))} > $ 100 GLEBA</h3>
                        </div>
                        <div className="col-lg-2 col-12  justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horse3} className="img_nft" alt="Metamax NFT" width="100%" /></div><br />

                            <h3 id="number1" className='btn_value' onClick={() => (setValue(1), setcontract_select(500), setselected(true), setminting_counter(1), setimage(horse3))} > $ 500 WASSER</h3>
                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horse2} className="img_nft" alt="Metamax NFT" width="100%" /></div><br />
                            <h3 id="number1" className='btn_value' onClick={() => (setValue(1), setcontract_select(1000), setselected(true), setminting_counter(1), setimage(horse2))} > $ 1000 ZRAK</h3>

                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horse1} className="img_nft" alt="Metamax NFT" width="100%" /></div><br />
                            <h5 id="number1" className='btn_value' onClick={() => (setValue(1), setcontract_select(2500), setselected(true), setminting_counter(1), setimage(horse1))} > $ 2500 BRANNBIL</h5>
                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <video autoplay="true" controls loop className="img_nft" alt="Metamax NFT" width="100%" >
                                    <source src={video} type="video/mp4" />
                                </video>

                            </div><br />


                            <h3 id="number1" className='btn_value' style={{ marginTop: '-0.5rem' }} onClick={() => (setValue(1), setcontract_select(5000), setselected(true), setminting_counter(1), setimage(video))} > $ 5000 FOUDRE</h3>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 first_col ">

                            <h3 className='text-dark' > Couple NFT</h3>
                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horseboth3} alt="Metamax NFT" width="100%" className="img_nft" />
                            </div><br />
                            <h3 id="number1" className='btn_value' onClick={() => (setValue(2), setselected(true), setcontract_select(100), setimage(horseboth3), setminting_counter(2))}> $ 200 GLEBA</h3>
                        </div>
                        <div className="col-lg-2 col-12  justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horseboth} className="img_nft" alt="Metamax NFT" width="100%" /></div><br />

                            <h3 id="number1" className='btn_value' onClick={() => (setValue(2), setselected(true), setcontract_select(500), setminting_counter(2), setimage(horseboth))}> $ 1000 WASSER</h3>
                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horseboth1} className="img_nft" alt="Metamax NFT" width="100%" /></div><br />
                            <h3 id="number1" className='btn_value' onClick={() => (setValue(2), setselected(true), setcontract_select(1000), setminting_counter(2), setimage(horseboth1))}> $ 2000 ZRAK</h3>

                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <img src={horseboth2} className="img_nft" alt="Metamax NFT" width="100%" />
                            </div>
                            <br />
                            <h5 id="number1" className='btn_value' onClick={() => (setValue(2), setselected(true), setcontract_select(2500), setminting_counter(2), setimage(horseboth2))}> $ 5000 BRANNBIL</h5>
                        </div>
                        <div className="col-lg-2 col-12 justify-content-center align-items-center mt-5 ">
                            <div className="nft-thumb">
                                <video autoplay="true" controls loop className="img_nft" alt="Metamax NFT" width="100%" >
                                    <source src={Secondvideo} type="video/mp4" />
                                </video>
                            </div><br />
                            <h3 id="number1" className='btn_value' style={{ marginTop: '-0.5rem' }} onClick={() => (setValue(2), setselected(true), setcontract_select(5000), setminting_counter(2), setimage(Secondvideo))}> $ 10000 FOUDRE</h3>
                        </div>


                    </div>


                    {
                        contract_select == 100 ?
                            <>
                                <div className="row ">
                                    {/* <h1 className='text-dark text-center'>Mint With 100</h1> */}
                                    <div className="col-lg-6 mt-5  ">

                                        <img src={image} className="" alt="Metamax NFT" width="100%" style={{ borderRadius: '50px' }} />
                                        {
                                            selected ? <>

                                                <p className='text-dark btn_value text-center mt-4' id="number1" >Selected NFT</p>
                                            </> :
                                                <></>
                                        }

                                    </div>
                                    <div className=" col-lg-6 col-12 d-flex flex-column  align-items-left  mint_bottom">

                                        <div className="mybtnclass">
                                            <button id="decrease" onClick={() => decreaseValue()} value="Decrease Value">-</button>
                                            <input type="text " readonly="" value={value} id="number" />
                                            <button id="increase" onClick={() => increaseValue()} value="Increase Value">+</button>
                                        </div>
                                        <div className="btnallhere">

                                            <div className="d-flex mt-lg-5 mt-3 me-3 btnandP">
                                                <button onClick={() => MintwithDual()} className="btn mintbtn1"><span className="cstbtn text-white" id="cstbtn">{btnOne}</span></button>
                                                {/* <p className="stakepageP text-white ms-4 mt-2 fs-5  fw-3"><span classNameName='stakepageP'>Price :</span> <span id="Metamaxmint" classNameName='stakepageP'>1</span> <span classNameName='stakepageP'>Dual</span></p> */}
                                                <p className="stakepageP  ms-4 mt-2   fw-3">(LAR : {Token_Value_1} ) (<span>WIRE :</span>    <span>{Token_Value_2}</span> ) </p>


                                            </div>
                                            <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                <button onClick={() => MintwithLaRace()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnTwo}</span></button>
                                                <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>LAR :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_3}</span>) </p>

                                            </div>
                                            <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                <button onClick={() => MintwithBNB()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnThress}</span></button>
                                                <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BNB :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BNB}</span>) </p>

                                            </div>
                                            <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                <button onClick={() => MintwithBUSD()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnFour}</span></button>
                                                <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BUSD :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BUSD}</span>) </p>

                                            </div>


                                        </div>



                                    </div>
                                </div>

                            </> :
                            contract_select == 500 ?


                                <>
                                    <div className="row ">
                                        {/* <h1 className='text-dark text-center'>Mint With 500</h1> */}

                                        <div className="col-lg-6 mt-5  ">

                                            <img src={image} className="" alt="Metamax NFT" width="100%" style={{ borderRadius: '50px' }} />
                                            {
                                                selected ? <>

                                                    <p className='text-dark btn_value text-center mt-4' id="number1" >Selected NFT</p>
                                                </> :
                                                    <></>
                                            }

                                        </div>
                                        <div className=" col-lg-6 col-12 d-flex flex-column  align-items-left  mint_bottom">

                                            <div className="mybtnclass">
                                                <button id="decrease" onClick={() => decreaseValue()} value="Decrease Value">-</button>
                                                <input type="text " readonly="" value={value} id="number" />
                                                <button id="increase" onClick={() => increaseValue()} value="Increase Value">+</button>
                                            </div>
                                            <div className="btnallhere">

                                                <div className="d-flex mt-lg-5 mt-3 me-3 btnandP">
                                                    <button onClick={() => MintwithDual()} className="btn mintbtn1"><span className="cstbtn text-white" id="cstbtn">{btnOne}</span></button>
                                                    {/* <p className="stakepageP text-white ms-4 mt-2 fs-5  fw-3"><span classNameName='stakepageP'>Price :</span> <span id="Metamaxmint" classNameName='stakepageP'>1</span> <span classNameName='stakepageP'>Dual</span></p> */}
                                                    <p className="stakepageP  ms-4 mt-2   fw-3">(LAR : {Token_Value_1} ) (<span>WIRE :</span>    <span>{Token_Value_2}</span> ) </p>


                                                </div>
                                                <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                    <button onClick={() => MintwithLaRace()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnTwo}</span></button>
                                                    <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>LAR :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_3}</span>) </p>

                                                </div>
                                                <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                    <button onClick={() => MintwithBNB()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnThress}</span></button>
                                                    <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BNB :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BNB}</span>) </p>

                                                </div>
                                                <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                    <button onClick={() => MintwithBUSD()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnFour}</span></button>
                                                    <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BUSD :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BUSD}</span>) </p>

                                                </div>


                                            </div>



                                        </div>
                                    </div>
                                </>
                                :
                                contract_select == 1000 ?


                                    <>
                                        <div className="row ">
                                            {/* <h1 className='text-dark text-center'>Mint With 1000</h1> */}

                                            <div className="col-lg-6 mt-5  ">

                                                <img src={image} className="" alt="Metamax NFT" width="100%" style={{ borderRadius: '50px' }} />
                                                {
                                                    selected ? <>

                                                        <p className='text-dark btn_value text-center mt-4' id="number1" >Selected NFT</p>
                                                    </> :
                                                        <></>
                                                }

                                            </div>
                                            <div className=" col-lg-6 col-12 d-flex flex-column  align-items-left  mint_bottom">

                                                <div className="mybtnclass">
                                                    <button id="decrease" onClick={() => decreaseValue()} value="Decrease Value">-</button>
                                                    <input type="text " readonly="" value={value} id="number" />
                                                    <button id="increase" onClick={() => increaseValue()} value="Increase Value">+</button>
                                                </div>
                                                <div className="btnallhere">

                                                    <div className="d-flex mt-lg-5 mt-3 me-3 btnandP">
                                                        <button onClick={() => MintwithDual()} className="btn mintbtn1"><span className="cstbtn text-white" id="cstbtn">{btnOne}</span></button>
                                                        {/* <p className="stakepageP text-white ms-4 mt-2 fs-5  fw-3"><span classNameName='stakepageP'>Price :</span> <span id="Metamaxmint" classNameName='stakepageP'>1</span> <span classNameName='stakepageP'>Dual</span></p> */}
                                                        <p className="stakepageP  ms-4 mt-2   fw-3">(LAR : {Token_Value_1} ) (<span>WIRE :</span>    <span>{Token_Value_2}</span> ) </p>


                                                    </div>
                                                    <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                        <button onClick={() => MintwithLaRace()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnTwo}</span></button>
                                                        <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>LAR :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_3}</span>) </p>

                                                    </div>
                                                    <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                        <button onClick={() => MintwithBNB()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnThress}</span></button>
                                                        <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BNB :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BNB}</span>) </p>

                                                    </div>
                                                    <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                        <button onClick={() => MintwithBUSD()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnFour}</span></button>
                                                        <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BUSD :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BUSD}</span>) </p>

                                                    </div>


                                                </div>



                                            </div>
                                        </div>
                                    </> :
                                    contract_select == 2500 ?


                                        <>
                                            <div className="row ">
                                                {/* <h1 className='text-dark text-center'>Mint With 2500</h1> */}

                                                <div className="col-lg-6 mt-5  ">

                                                    <img src={image} className="" alt="Metamax NFT" width="100%" style={{ borderRadius: '50px' }} />
                                                    {
                                                        selected ? <>

                                                            <p className='text-dark btn_value text-center mt-4' id="number1" >Selected NFT</p>
                                                        </> :
                                                            <></>
                                                    }

                                                </div>
                                                <div className=" col-lg-6 col-12 d-flex flex-column  align-items-left  mint_bottom">

                                                    <div className="mybtnclass">
                                                        <button id="decrease" onClick={() => decreaseValue()} value="Decrease Value">-</button>
                                                        <input type="text " readonly="" value={value} id="number" />
                                                        <button id="increase" onClick={() => increaseValue()} value="Increase Value">+</button>
                                                    </div>
                                                    <div className="btnallhere">

                                                        <div className="d-flex mt-lg-5 mt-3 me-3 btnandP">
                                                            <button onClick={() => MintwithDual()} className="btn mintbtn1"><span className="cstbtn text-white" id="cstbtn">{btnOne}</span></button>
                                                            {/* <p className="stakepageP text-white ms-4 mt-2 fs-5  fw-3"><span classNameName='stakepageP'>Price :</span> <span id="Metamaxmint" classNameName='stakepageP'>1</span> <span classNameName='stakepageP'>Dual</span></p> */}
                                                            <p className="stakepageP  ms-4 mt-2   fw-3">(LAR : {Token_Value_1} ) (<span>WIRE :</span>    <span>{Token_Value_2}</span> ) </p>


                                                        </div>
                                                        <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                            <button onClick={() => MintwithLaRace()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnTwo}</span></button>
                                                            <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>LAR :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_3}</span>) </p>

                                                        </div>
                                                        <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                            <button onClick={() => MintwithBNB()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnThress}</span></button>
                                                            <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BNB :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BNB}</span>) </p>

                                                        </div>
                                                        <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                            <button onClick={() => MintwithBUSD()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnFour}</span></button>
                                                            <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BUSD :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BUSD}</span>) </p>

                                                        </div>


                                                    </div>



                                                </div>
                                            </div>
                                        </>
                                        :
                                        contract_select == 5000 ?


                                            <>
                                                <div className="row ">


                                                    <div className="col-lg-6 mt-5  ">

                                                        <video src={image} autoplay="true" controls loop width="100%" className='Video_height' ></video>


                                                        {/* {
                                                            image == "second_video.9247a2c4.mp4" ?
                                                                <>
                                                                    <video autoplay="true" controls loop className="img_nft" alt="Metamax NFT" width="100%" style={{ height: "15rem" }}>
                                                                        <source src={image} type="video/mp4" width="100%" />
                                                                    </video>
                                                                </> :
                                                                
                                                                    <>
                                                                        <video autoplay="true" controls loop className="img_nft" alt="Metamax NFT" width="100%" style={{ height: "15rem" }}>
                                                                            <source src={image} type="video/mp4" width="100%" />
                                                                        </video>

                                                                    </>
                                                                   

                                                        } */}


                                                        {
                                                            selected ? <>

                                                                <p className='text-dark btn_value text-center mt-4' id="number1" >Selected NFT</p>
                                                            </> :
                                                                <></>
                                                        }

                                                    </div>
                                                    <div className=" col-lg-6 col-12 d-flex flex-column  align-items-left  mint_bottom">

                                                        <div className="mybtnclass">
                                                            <button id="decrease" onClick={() => decreaseValue()} value="Decrease Value">-</button>
                                                            <input type="text " readonly="" value={value} id="number" />
                                                            <button id="increase" onClick={() => increaseValue()} value="Increase Value">+</button>
                                                        </div>
                                                        <div className="btnallhere">

                                                            <div className="d-flex mt-lg-5 mt-3 me-3 btnandP">
                                                                <button onClick={() => MintwithDual()} className="btn mintbtn1"><span className="cstbtn text-white" id="cstbtn">{btnOne}</span></button>
                                                                {/* <p className="stakepageP text-white ms-4 mt-2 fs-5  fw-3"><span classNameName='stakepageP'>Price :</span> <span id="Metamaxmint" classNameName='stakepageP'>1</span> <span classNameName='stakepageP'>Dual</span></p> */}
                                                                <p className="stakepageP  ms-4 mt-2   fw-3">(LAR : {Token_Value_1} ) (<span>WIRE :</span>    <span>{Token_Value_2}</span> ) </p>


                                                            </div>
                                                            <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                                <button onClick={() => MintwithLaRace()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnTwo}</span></button>
                                                                <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>LAR :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_3}</span>) </p>

                                                            </div>
                                                            <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                                <button onClick={() => MintwithBNB()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnThress}</span></button>
                                                                <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BNB :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BNB}</span>) </p>

                                                            </div>
                                                            <div className="d-flex  mt-lg-5 mt-3 btnandP ">
                                                                <button onClick={() => MintwithBUSD()} className="btn mintbtn" ><span id="bnbbtnhere" className="cstbtn" >{btnFour}</span></button>
                                                                <p className="stakepageP  ms-4 mt-2   fw-3">(<span classNameName='stakepageP'>BUSD :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_BUSD}</span>) </p>

                                                            </div>


                                                        </div>



                                                    </div>
                                                </div>
                                            </> :
                                            <></>
                    }


                </div>
            </div>


        </div>
    )
}
