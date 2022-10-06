import moment from "moment";
import React, { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Roi_Income = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.get(`/ROIIncome?id=${user}`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce.forEach((item, index) => {

                arr.push({
                    sr: index + 1,
                    id: `${item?.user_id} `,
                    token: `$ ${item?.packageamount} `,
                    income_usd: `${item?.am}`,
                    date: `${item.dd}`

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

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)


    var [roi_income, set_roi_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Package', accessor: 'token' },
            { Header: 'LAG Token', accessor: 'income_usd' },
            { Header: 'Date & Time', accessor: 'date' }],
        rows: [
            { sr: '1', id: '101495', token: '338.846169456626', income_usd: '12345 $', date: '20/07/2022' },
            { sr: '2', id: '101495', token: '338.846169456626', income_usd: '12345 $', date: '20/07/2022' },
            { sr: '3', id: '101495', token: '338.846169456626', income_usd: '12345 $', date: '20/07/2022' },
            { sr: '4', id: '101495', token: '338.846169456626', income_usd: '12345 $', date: '20/07/2022' },
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "LAG Token", page_path: "All Income / LAG Token" }} />
                <Table
                    data={[...currentPost]}
                    columns={roi_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Roi_Income;