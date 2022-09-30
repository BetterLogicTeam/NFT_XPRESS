import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const QuickStarterBonus = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const QuickStarterBonus_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let responce = await API?.post("/QuickStarterBonus", {
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
        QuickStarterBonus_API()
    }, [])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [quickStarterBonus_income, set_quickStarterBonus_income] = new useState({
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
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Quick Starter Bonus", page_path: "All Income / Quick Starter Bonus" }} />
                <Table
                    data={[...currentPost]}
                    columns={quickStarterBonus_income.cols}
                    toolbar={false}


                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default QuickStarterBonus;