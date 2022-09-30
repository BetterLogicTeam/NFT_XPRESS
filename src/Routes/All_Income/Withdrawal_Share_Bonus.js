import React, { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Withdrawal_Share_Bonus = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const Withdrawal_Share_Bonus_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let responce = await API?.post("/CtoIncome", {
                "uid": user
            })
            responce = responce?.data?.data?.recordset;
            console.log("responce", responce);
            setreferralApi(responce)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        Withdrawal_Share_Bonus_API()
    }, [])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [Team_Bonus_API_income, set_Team_Bonus_API_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'RowNumber' },
            { Header: 'User ID', accessor: 'uid' },
            { Header: 'Pool', accessor: 'cto' },
            { Header: 'Net Income', accessor: 'income' },
            { Header: 'Date & Time', accessor: 'dd' },
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Withdrawal Share Bonus", page_path: "All Income / Withdrawal Share Bonus" }} />
                <Table
                    data={[...currentPost]}
                    columns={Team_Bonus_API_income.cols}
                    toolbar={false}


                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Withdrawal_Share_Bonus;