
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getMyReferralReport } from "../../Redux/actions/dailyYield";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
// import './Style_for_all.css'
import { Filter } from "@material-ui/icons";

export default function Sports_Bonus() {
    

    const [referralApi, setreferralApi] = useState([])
    const [referralApileft, setreferralApileft] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [filterValue, setFilterValue] = useState("");
    const [FilterRight, setFilterRight] = useState(2)
    const [getuseriddata, setgetuseriddata] = useState("")
    let arr = []
    let leftArray = []

    const changecontrol = async (item, index) => {
        arr.push({
            sr: index + 1,
            user_id: `${item?.user_id} `,
            package: `${item?.packageamount} USD  `,
            date: item?.ee,
            remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
            activation_date: item.dd,
            total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
            // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
            // date: item?.dd 
        })
        setreferralApi([...arr])

    }


    const change_Right = (item, index) => {
        leftArray.push({
            sr: index + 1,
            user_id: `${item?.user_id} `,
            package: `${item?.packageamount} USD  `,
            date: item?.ee,
            remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
            activation_date: item.dd,
            total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
            // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
            // date: item?.dd 
        })
        setreferralApileft([...leftArray])

    }



    const referral_API = async () => {
        try {


            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
            let status = ress?.status

            // console.log("status", user);



            let responce = await API?.post('/Direct', {
                "uid": user,
                "position": 1,
                "status": FilterRight
            })
            responce = responce?.data?.data?.recordset;
            console.log("responce", responce);


            let responceRight = await API?.post('/Direct', {
                "uid": user,
                "position": 2,
                "status": FilterRight
            })
            responceRight = responceRight?.data?.data?.recordset;

            console.log("responceRight", responceRight);

            responce.forEach((item, index) => {



                if (getuseriddata.length == 0) {
                    setTimeout(() => {
                        // console.log("UserId", getuseriddata);
                        changecontrol(item, index)
                    }, 2000);

                } else if (getuseriddata == item?.user_id) {
                    arr.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        // date: item?.dd 
                    })
                }



                setreferralApi([...arr])

            }
            )

            responceRight.forEach((item, index) => {


                if (getuseriddata.length == 0) {
                    // console.log("UserId", getuseriddata);

                    setTimeout(() => {
                        // console.log("UserId", getuseriddata);
                        change_Right(item, index)
                    }, 2000);

                    // leftArray?.push({
                    //     sr: index + 1,
                    //     user_id: `${item?.user_id} `,
                    //     package: `${item?.packageamount} USD  `,
                    //     date: item?.ee,
                    //     remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                    //     activation_date: item.dd,
                    //     total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                    //     // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                    //     // date: item?.dd 
                    // })

                } else if (getuseriddata == item?.user_id) {

                    leftArray.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        // date: item?.dd 
                    })
                }




                setreferralApileft([...leftArray])



            }
            )


        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [getuseriddata, FilterRight, filterValue])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;

    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApileft.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft = referralApi.slice(indexOfFirstPage2, indexOfLastPost2)



    var [my_referral, set_my_referral] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'Date', accessor: 'date' },
            { Header: ' ID', accessor: 'user_id' },
            { Header: 'Token', accessor: 'package' },
            { Header: '$Income', accessor: 'total_active_team' },
            // { Header: 'Activation Date Time', accessor: 'activation_date' },
            // { Header: 'Total Active Team', accessor: 'total_active_team' },
        ],
        rows: [
            { sr: '1', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '2', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '3', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
             ]
    });
  return (
    <div>
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Sports Bonus", page_path: "All Income / Sports Bonus" }} />
                {/* <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-4 col-lg-4 col-8">
                        <p className="p-color p-0 m-0 mt-1" style={{ color: 'rgb(0 0 0 / 85%)' }}>Select Level</p>
                        <select className=" input bg-color ps-4 mt-3" defaultValue={filterValue}
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="0">All Levels</option>
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
                    <div className="col-md-4 col-lg-4 col-8 mt-n5">
                        <p className="p-color mt-1" style={{ color: 'rgb(0 0 0 / 85%)' }} >Choose Status :</p>
                        <select className=" input bg-color ps-4"
                            defaultValue={FilterRight}
                            value={FilterRight}
                            onChange={(e) => setFilterRight(e.target.value)}
                        >
                            <option value="">Select Status</option>

                            <option value="0">All</option>
                            <option value="1">Active</option>
                            <option value="2">In-Active</option>

                        </select>
                    </div>
                </div> */}


                <Table
                    data={my_referral.rows}
                    columns={my_referral.cols}
                />

                {/* <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} /> */}
            </div>
        </div>
    </div>
  )
}
