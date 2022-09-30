import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Referral_Income = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let responce = await API?.post("/DirectIncome", {
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
        referral_API()
    }, [])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [referral_income, set_referral_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'RowNumber' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'From ID', accessor: 'from_id' },
            { Header: 'Date & Time', accessor: 'dd' },
            { Header: 'Package', accessor: 'amount' },
            { Header: 'Income', accessor: 'income' },
            //{ Header: 'Sports Bonus', accessor: 'Sports_Bonus' },
            // { Header: 'Token', accessor: 'token' },
            //{ Header: 'Net Income', accessor: 'amount' },
        ],
        rows: [

            { sr: '1', from_id: '667179', package: '300 USD', token: '7578.49198027245', amount: '30', date: '18/06/2022' },

        ]

    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Referral Income", page_path: "All Income / Referral Income" }} />
                <Table
                    data={[...currentPost]}
                    columns={referral_income.cols}
                    toolbar={false}


                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Referral_Income;