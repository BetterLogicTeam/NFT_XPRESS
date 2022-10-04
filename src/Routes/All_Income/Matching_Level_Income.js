import moment from "moment";
import React, { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'

const Matching_Level_Income = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [levelFilter, setLevelFilter] = useState(0);

    const referral_API = async () => {
        try {
            const user = localStorage?.getItem("user");

            let responce = await API?.post("/MatchingLevel", {
                "uid": user,
                "level": levelFilter
            })
            responce = responce?.data?.data?.recordset;
            console.log("Matching_level",responce);
            setreferralApi([])

            let arr = []
            responce.forEach((item, index) => {

                arr.push({
                    sr: index + 1,
                    from_id: item?.user_id,
                    user_id: item?.sid,

                    level: `${item?.leveltype}`,
                    on_amount: ` $ ${item?.package} `,
                    income_usd: `$ ${item?.level_income} `,
                    date: moment(item?.edate).format("DD/MM/YYYY h:m:s A")
                });

            })

            setreferralApi(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [levelFilter])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)

    var [matching_level_income, set_matching_level_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'From ID', accessor: 'from_id' },
            { Header: 'Level', accessor: 'level' },
            { Header: 'On Amount', accessor: 'on_amount' },
            // {Header:'Income(Wire)',accessor:'income_wire'}, 
            { Header: 'Income', accessor: 'income_usd' },
            //{ Header: 'Sports Bonus', accessor: 'Sports_Bonus' },
            // { Header: 'Net Income', accessor: 'Net_Income' },
            { Header: 'Date & Time', accessor: 'date' },
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Matching Level Income", page_path: "All Income / Matching Level Income" }} />

                <div class="row mt-3" style={{ marginLeft: "10px" }}>
                    <div class="col-md-3">
                        <label>Select Level</label>
                        <select class="form-control" id="level" onChange={(e) => setLevelFilter(e.target.value)}>
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
                        <label> From Date</label>
                        <input type="date" name="from_date" id="from_date" class="form-control" placeholder="Enter From Date" />
                    </div><br /><br />
                    <div class="col-md-3">
                        <label> To Date</label>
                        <input type="date" name="to_date" id="to_date" class="form-control" />
                    </div><br /><br />
                    <div class="col-md-3 mt-2">
                        <input type="submit" name="to_date" value="Search" class="btn btn-primary mt_5" />
                    </div>
                </div>
                <Table
                    data={[...currentPost]}
                    columns={matching_level_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Matching_Level_Income;