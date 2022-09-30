import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Mint_Style.css'
import { Header } from "../../Routes/index";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { busdNftTokenAbi, busdNftTokenAddress, ULE_NFT_100, ULE_NFT_100_ABI, wireNftContractAbi, wireNftContractAddress, wireTokenAbi, wireTokenAddress } from '../../utilies/Bsc_contract';
import { loadWeb3 } from '../../apis/api';
import Web3 from 'web3'
import horse from '../../assets/22.png'
import Modal from 'react-bootstrap/Modal'
import { CloseButton } from 'react-bootstrap';
import { API } from '../../Redux/actions/API';
import moment from 'moment';
import Page_Path from '../PagePath/PagePath';
import Table from '../Table/Table';
import Table_Buttons from '../Table_Buttons/Table_Button';



export default function Mint() {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let user = ress?.uid;
            console.log("user",user);

            let responce = await API?.post("/MatchingLevel", {
                "uid": user,
                "level":"1"
            })
            responce = responce?.data?.data?.recordset;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    from_id: item?.user_id,
                    level: `${item?.leveltype} USD`,
                    on_amount: `${item?.package} USD`,
                    income_usd:`${item?.level_income} USD`,
                    date:moment(item?.edate).format("DD/MM/YYYY h:m:s A")
                });



            }
            )
            // console.log("responce", arr);


            setreferralApi(arr)





        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost=currentPage*listPerpage;
    const indexOfFirstPage=indexOfLastPost-listPerpage;
    const currentPost=referralApi.slice(indexOfFirstPage,indexOfLastPost)

    var [matching_level_income,set_matching_level_income]= new useState({
        cols:[
                {Header: 'S.Number',accessor:'sr'},
                {Header:'User ID',accessor:'from_id'},
                {Header:'Package Amount',accessor:'level'},
                {Header:'Remark',accessor:'on_amount'}, 
                // {Header:'Income(Wire)',accessor:'income_wire'}, 
                {Header:'Txn',accessor:'income_usd'}, 
                {Header:'Activate Date & Time',accessor:'date'}],
        rows:[
                {sr:'1',from_id:'419550',level:'$ 7',on_amount:'Active',income_usd:'View txn',date:'12/11/2021 1:40:08 PM'},
                {sr:'2',from_id:'419550',level:'$ 7',on_amount:'Active',income_usd:'View txn',date:'12/11/2021 1:40:08 PM'},
                {sr:'3',from_id:'419550',level:'$ 7',on_amount:'Active',income_usd:'View txn',date:'12/11/2021 1:40:08 PM'},
                {sr:'4',from_id:'419550',level:'$ 7',on_amount:'Active',income_usd:'View txn',date:'12/11/2021 1:40:08 PM'},
                {sr:'5',from_id:'419550',level:'$ 7',on_amount:'Active',income_usd:'View txn',date:'12/11/2021 1:40:08 PM'},
        ]});
   
    return (
        <>
        <div className="row justify-content-center" style={{height:'70vh'}}>
            <div className="col-md-11 py-3">
                <Page_Path data={{page_name:"Buy NFT",page_path:"Mint NFT / Buy NFT   "}} />
                {/* <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="number" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
                </div> */}
                <Table
                    data={matching_level_income.rows}
                    columns={matching_level_income.cols}
                />
                {/* <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} /> */}

            </div>
        </div>
        
        </>
        
    )
}
