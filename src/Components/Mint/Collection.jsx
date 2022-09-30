import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../apis/api';
import { GLABA_NFT, GLABA_NFT_1, GLABA_NFT_1000, GLABA_NFT_20_1000, GLABA_NFT_20_2500, GLABA_NFT_20_500, GLABA_NFT_20_5000, GLABA_NFT_2500, GLABA_NFT_500, GLABA_NFT_5000, GLABA_NFT_ABI, GLABA_NFT_ABI_1, GLABA_NFT_ABI_1000, GLABA_NFT_ABI_20_1000, GLABA_NFT_ABI_20_2500, GLABA_NFT_ABI_20_500, GLABA_NFT_ABI_20_5000, GLABA_NFT_ABI_2500, GLABA_NFT_ABI_500, GLABA_NFT_ABI_5000 } from '../../utilies/constant';
import Page_Path from '../PagePath/PagePath';

export default function Collection() {
    let [imageArray, setImageArray] = useState([]);

    const allImagesNfts = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            console.log("wallet");
            toast.error("No Wallet")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Network")

        }
        else {
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1, GLABA_NFT_1);
            let nftContractOf_fiest = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
            let nftContractOf_20_500 = new web3.eth.Contract(GLABA_NFT_ABI_20_500, GLABA_NFT_20_500);
            let nftContractOf500 = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
            let nftContractOf_20_1000 = new web3.eth.Contract(GLABA_NFT_ABI_20_1000, GLABA_NFT_20_1000);
            let nftContractOf1000 = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);
            let nftContractOf_20_2500 = new web3.eth.Contract(GLABA_NFT_ABI_20_2500, GLABA_NFT_20_2500);
            let nftContractOf2500 = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
            let nftContractOf_20_5000 = new web3.eth.Contract(GLABA_NFT_ABI_20_5000, GLABA_NFT_20_5000);
            let nftContractOf5000 = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);




            let simplleArray = [];
            let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call()
            let walletLength = walletOfOwner.length

            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength", walletOfOwner);
            for (let i = 0; i < walletLength; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "100" }]
                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }

            let walletOfOwner100 = await nftContractOf_fiest.methods.walletOfOwner(acc).call()
            let walletLength100 = walletOfOwner100.length

            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletOfOwner100", walletOfOwner100);
            for (let i = 0; i < walletLength100; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner100[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner100[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "100" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }


            // Collection 500 contract-------------------------------------------------------------
            let walletOfOwner_20_500 = await nftContractOf_20_500.methods.walletOfOwner(acc).call()
            let MinitngPricein_token = await nftContractOf_20_500.methods.MinitngPricein_token().call()

            let walletLength_20_500 = walletOfOwner_20_500.length

            console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_20_500", walletLength_20_500);
            for (let i = 0; i < walletLength_20_500; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_20_500[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_20_500[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "500" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }





            // Collection 500 contract------------------------------------------------------------
            let walletOfOwner_500 = await nftContractOf500.methods.walletOfOwner(acc).call()
            let walletLength_500 = walletOfOwner_500.length

            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_500", walletLength_500);
            for (let i = 0; i < walletLength_500; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_500[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_500[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "500" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }



            // Collection 1000 contract-------------------------------------------------------------
            let walletOfOwner_20_1000 = await nftContractOf_20_1000.methods.walletOfOwner(acc).call()


            let walletLength_20_1000 = walletOfOwner_20_1000.length

            console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_20_1000", walletLength_20_1000);
            for (let i = 0; i < walletLength_20_1000; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_20_1000[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_20_1000[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "1000" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }
            //   Collection 1000 Contract-----------------

            let walletOfOwner_1000 = await nftContractOf1000.methods.walletOfOwner(acc).call()
            let walletLength_1000 = walletOfOwner_1000.length

            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletOfOwner_1000", walletOfOwner_1000);
            for (let i = 0; i < walletLength_1000; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_1000[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_1000[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "1000" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }




            // Collection 1000 contract-------------------------------------------------------------
            let walletOfOwner_20_2500 = await nftContractOf_20_2500.methods.walletOfOwner(acc).call()


            let walletLength_20_2500 = walletOfOwner_20_2500.length

            console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_20_2500", walletLength_20_2500);
            for (let i = 0; i < walletLength_20_2500; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_20_2500[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_20_2500[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "2500" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }
            //   Collection 1000 Contract-----------------

            let walletOfOwner_2500 = await nftContractOf2500.methods.walletOfOwner(acc).call()
            let walletLength_2500 = walletOfOwner_2500.length

            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_2500", walletLength_2500);
            for (let i = 0; i < walletLength_2500; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_2500[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_2500[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "2500" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }




            
            // Collection 5000 contract-------------------------------------------------------------
            let walletOfOwner_20_5000 = await nftContractOf_20_5000.methods.walletOfOwner(acc).call()


            let walletLength_20_5000 = walletOfOwner_20_5000.length

            console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_20_5000", walletLength_20_5000);
            for (let i = 0; i < walletLength_20_5000; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_20_5000[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_20_5000[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "5000" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }
            //   Collection 1000 Contract-----------------

            let walletOfOwner_5000 = await nftContractOf5000.methods.walletOfOwner(acc).call()
            let walletLength_5000 = walletOfOwner_5000.length

            // console.log("walletOfOwner", walletOfOwner);
            console.log("walletLength_5000", walletLength_5000);
            for (let i = 0; i < walletLength_5000; i++) {
                console.log("check", i);


                try {
                    let res = await axios.get(`https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${walletOfOwner_5000[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    // console.log("check",res);
                    let tokenid = walletOfOwner_5000[i]
                    let title
                    if (tokenid == 0) {
                        title = "Male"
                    }
                    else if ((tokenid % 2) == 0) {
                        title = "Male"
                    } else {
                        title = "Female"

                    }

                    simplleArray = [...simplleArray, { imageUrl: imageUrl, tokenid: tokenid, title: title, token_value: "5000" }]

                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }

        }
    }


    useEffect(() => {
        allImagesNfts()
    }, []);

    return (
        <div>
            <div class="page-wrapper" style={{ height: '100vh' }}>
                <div class="page-content">
                    <Page_Path data={{ page_name: "Mint NFT", page_path: "Mint NFT / Collection" }} />

                    <div class="row">
                        {
                            imageArray.map((items, index) => {
                                return (<>
                                    <div class="col-lg-3 d-flex justify-content-center align-items-center mt-5 ">
                                        <div className="card card_div_collection">
                                            <h6 className='text-center pt-3'>Mint with {items.token_value}</h6>

                                            <div class="nft-thumb">
                                                <img src={items.imageUrl} alt="Metamax NFT" width="100%" class="img_nft" />
                                            </div>
                                            <div className="bootom_div ">
                                                <p>Token ID : {items.tokenid}</p>
                                                <p>Gender :   {items.title}</p>

                                            </div>
                                        </div>

                                    </div>
                                </>)
                            })
                        }
                        {/* <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                            <div class="nft-thumb">
                                <img src="assets3/1.png" alt="Metamax NFT" width="100%" class="img_nft" /></div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                            <div class="nft-thumb">
                                <img src="assets3/3.png" class="img_nft" alt="Metamax NFT" width="100%" /></div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                            <div class="nft-thumb">
                                <img src="assets3/4.png" class="img_nft" alt="Metamax NFT" width="100%" /></div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                            <div class="nft-thumb">
                                <img src="assets3/5.png" class="img_nft" alt="Metamax NFT" width="100%" /></div>
                        </div> */}

                    </div>
                </div>

            </div>
        </div>
    )
}
