import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Team_Bonus = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const Team_Bonus_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let responce = await API?.post("/MatchingBonus", {
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
        Team_Bonus_API()
    }, [])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [Team_Bonus_API_income, set_Team_Bonus_API_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'RowNumber' },
            { Header: 'User ID', accessor: 'uid' },
            { Header: 'Matching Business', accessor: 'paidpv' },
            { Header: '$ Net Income', accessor: 'binaryincome' },
            { Header: 'Date & Time', accessor: 'dd' },
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Team Bonus", page_path: "All Income / Team Bonus" }} />
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

export default Team_Bonus;