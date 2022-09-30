import moment from "moment";
import React, { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import './MyTeam.css';

const My_Team = () => {

    const [referralApi, setreferralApi] = useState([])
    const [leftreferralApi, setleftreferralApi] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [getuerid, setgetuerid] = useState("")
    const [filterValue, setFilterValue] = useState(2);
    const [getuseriddata, setgetuseriddata] = useState("")

    const [positionfilter, setpositionfilter] = useState("0")
    const [StatusFilter, setStatusFilter] = useState("2")
    const [fromdatefilter, setfromdatefilter] = useState("")
    const [todateFilter, settodateFilter] = useState("")


    // const [FilterRight, setFilterRight] = useState("")
    let arr = []
    let arrayLeft = []


    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");
            let responceRight = await API?.post('/MyLeftDownline', {
                "uid": user,
                "position": positionfilter,
                "status": StatusFilter,
                "fdate": fromdatefilter,
                "tdate": todateFilter
            })
            console.log("My_Team",responceRight);
            responceRight = responceRight?.data?.data?.recordset;
            setleftreferralApi([])
   

            responceRight.forEach((item, index) => {
                arrayLeft.push({
                    sr: index + 1,
                    id: `${item?.uid} `,
                    // Position: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
                    Position: item?.pos,
                    date_time: `${item?.edate} `,
                    remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                    // activation_date: "Null",
                    activation_date: item.top_update || "Null",
                    staking: `$ ${item.packageamount}`,
                    // date: item?.dd

                })

                setleftreferralApi(arrayLeft)
            })

        } catch (e) {
            console.log("Error While calling Myteam API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [positionfilter, StatusFilter])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft = leftreferralApi.slice(indexOfFirstPage2, indexOfLastPost2)


    var [my_team, set_my_team] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'User ID', accessor: 'id' },
            //{ Header: 'Country', accessor: 'country' },
            { Header: 'Position', accessor: 'Position' },
            { Header: 'Reg.Date & Time', accessor: 'date_time' },
            { Header: 'Status', accessor: 'remark' },
            { Header: 'Activation Date & Time ', accessor: 'activation_date' },
            { Header: 'Package', accessor: 'staking' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-lg-11" style={{ height: '70vh' }}>
                <PagePath data={{ page_name: "My Team", page_path: "Team Details / My Team" }} />

                <div class="row mt-3" style={{ marginLeft: "10px" }}>

                    <div class="col-md-2">
                        <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Choose Status</label>

                        <select class="floating-input form-control select_bg select_contol " data-val="true" data-val-required="Position is required" onChange={(e) => setStatusFilter(e.target.value)}>
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
                        <label> From Date</label>
                        <input type="date" name="from_date" id="from_date" class="select-system" onChange={(e) => setfromdatefilter(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3">
                        <label> To Date</label>
                        <input type="date" name="to_date" id="to_date" class="select-system" onChange={(e) => settodateFilter(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-2 mt-2">
                        <input type="button" name="to_date" value="Search" class="btn btn-primary mt_5" onClick={referral_API} />
                    </div>
                </div>
                <br />

                <div className="col-md-12 py-3 ">
                    <Table
                        data={currentPostleft}
                        columns={my_team.cols}
                    />

                    <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={leftreferralApi.length} listPerpage={listPerpage2} />

                </div>
            </div>

        </div>
    );
}

export default My_Team;