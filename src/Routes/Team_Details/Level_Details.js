import React, { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
import axios from "axios";
import './Lavel.css';

const Level_Details = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [filterValue, setFilterValue] = useState("");
    const [filterDate, setfilterDate] = useState("")
    const [FilterRight, setFilterRight] = useState("")

    const [positionfilter, setpositionfilter] = useState("0")
    const [StatusFilter, setStatusFilter] = useState("2")
    const [LevelFilter, setLevelFilter] = useState("0")



    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            console.log("user0",user);

            let responce = await API.post('/level_details', {
                "uid": user,
                "level": LevelFilter,
                "position": positionfilter,
                "status": StatusFilter              
            })
            responce = responce?.data?.data;
            console.log("Level", responce);
            // setreferralApi([])

            let arr = []
            responce.forEach((item, index) => {
                arr.push({
                    sr: item.row,
                    user_id: `${item?.user_id} `,
                    level: item.Leveltype,
                    package: `$ ${item?.pp}  `,
                    // date: `${item?.ee} `,
                    id_type: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                    activation_date: item.top_update || "Null",
                    reg_date: item.date1 || "Null",
                    position: item.position
                    // date: item?.dd
                })

                setreferralApi(arr)

            })



        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])
    useEffect(() => {
        referral_API()
    }, [LevelFilter, positionfilter, StatusFilter])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [level_details, set_level_details] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Level', accessor: 'level' },
            { Header: 'Reg.Date & Time', accessor: 'reg_date' },
            { Header: 'Activation Date & Time', accessor: 'activation_date' },
            { Header: 'Status', accessor: 'id_type' },
            { Header: 'Position', accessor: 'position' },

            { Header: 'Package', accessor: 'package' },
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Level Details", page_path: "Team Details / Level Details" }} />

                <div class="row mt-4">
                    <div class="col-md-3">
                        <label>Select Level</label>
                        <select class="floating-input form-control select_bg select_contol" onChange={(e) => setLevelFilter(e.target.value)}>
                            <option value="">Select Level</option>
                            <option value="0">All Level</option>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                            <option value="6">Level 6</option>
                            <option value="7">Level 7</option>
                            <option value="8">Level 8</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Choose Status</label>

                        <select class="floating-input form-control select_bg select_contol " data-val="true" data-val-required="Position is required" onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="" selected>Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Position</label>


                        <select class="floating-input form-control select_bg" data-val="true" data-val-required="Position is required" onChange={(e) => setpositionfilter(e.target.value)}>
                            <option selected style={{ color: 'white' }}>Select Position</option>
                            <option value="0" style={{ color: 'white' }}>All</option>
                            <option value="1">Left</option>
                            <option value="2">Right</option>
                        </select>
                    </div>
                </div>
                <Table
                    data={currentPost}
                    columns={level_details.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
            </div>
        </div>
    );
}

export default Level_Details;