import React, { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
import './Style_for_all.css'
import './Style.css'

const My_Referral = () => {
    const [referralApi, setreferralApi] = useState([])
    const [referralApileft, setreferralApileft] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)

    const [positionfilter, setpositionfilter] = useState("0")
    const [StatusFilter, setStatusFilter] = useState("2")
    const [fromdatefilter, setfromdatefilter] = useState("")
    const [todateFilter, settodateFilter] = useState("")

    let arr = []

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let responce = await API?.post('/Direct', {
                "uid": user,
                "position": positionfilter,
                "status": StatusFilter,
                "fdate": fromdatefilter,
                "tdate": todateFilter
            })
            responce = responce?.data?.data?.recordset;
            console.log("responce",responce);
            // setreferralApi([])

            responce.forEach((item, index) => {
                arr.push({
                    sr: index + 1,
                    user_id: `${item?.user_id} `,
                    package: `$ ${item?.packageamount}  `,
                    date: item?.ee,
                    position: item?.pos,
                    remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                    activation_date: item.dd ? item.dd : "Null",
                    total_active_team: item.totalbusiness,
                    // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                    total_Business: `$ ${item?.packageamount}`
                })

                setreferralApi([...arr])

            })


        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [positionfilter, StatusFilter])

    // useEffect(() => {
    //     referral_API()
    // }, [])
    

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApileft.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft = referralApi.slice(indexOfFirstPage2, indexOfLastPost2)

    var [my_referral, set_my_referral] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Package', accessor: 'package' },
            { Header: 'Date & Time', accessor: 'date' },
            { Header: 'Status', accessor: 'remark' },
            { Header: 'Position', accessor: 'position' },
            { Header: 'Activation Date & Time', accessor: 'activation_date' },
            { Header: 'Total Business', accessor: 'total_Business' },
        ]
    });
    return (
        <div className=" row justify-content-center">
            <div className=" col-lg-11 " style={{ height: '70vh' }}>
                <PagePath data={{ page_name: "My Referral", page_path: "Team Details / My Referral" }} />

                <div class="row mt-3" style={{ marginLeft: "10px" }}>

                    <div class="col-md-2">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Choose Status</label>

                        <select class="floating-input form-control select_bg " data-val="true" data-val-required="Position is required" onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="" selected>Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Position</label>
                        <select class="floating-input form-control select_bg" data-val="true" data-val-required="Position is required" onChange={(e) => setpositionfilter(e.target.value)}>
                            <option selected style={{ color: 'white' }}>Select Position</option>
                            <option value="0" style={{ color: 'white' }}>All</option>
                            <option value="1">Left</option>
                            <option value="2">Right</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}> From Date</label>
                        <input type="date" placeholder="dd-mm-yyyy" name="from_date" id="from_date" class="select-system" onChange={(e) => setfromdatefilter(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}> To Date</label>
                        <input type="date" placeholder="dd-mm-yyyy" name="to_date" id="to_date" class="select-system" onChange={(e) => settodateFilter(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-2 mt-2">
                        <input type="button" name="to_date" value="Search" class="btn btn-primary mt_5" onClick={referral_API} />
                    </div>
                </div>
                <br />

                <div className="col-md-12 py-3 mt-2">
                    <Table
                        data={[...currentPostleft]}
                        columns={my_referral.cols}
                    />
                    <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={referralApi.length} listPerpage={listPerpage2} />
                </div>
            </div>
        </div>
    );
}

export default My_Referral;