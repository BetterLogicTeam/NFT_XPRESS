import React, { useEffect, useState } from "react";
import { PagePath } from "../../Components";
import user3red from '../../assets/tree/tree_red.png'
import tree_image_medium from '../../assets/treeimg1new.png'
import Default from '../../assets/tree/tree_black.png'
import tree_image_large from '../../assets/treeimg2new.png'
import Active from '../../assets/tree/tree_green.png'
import './Matching-tree.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import tree_image_small from '../../assets/treeimgnew.png'
import { API } from '../../Redux/actions/API'
import { ListItemSecondaryAction } from "@material-ui/core";
import { Link } from "react-router-dom";
import './tree.css'
import { Dna } from 'react-loader-spinner';

let mouseStatus = 'out';
let mouseEnterNext = false;
var bol = true;
const Matching_Tree = () => {
    const user = localStorage?.getItem("user");

    const [Idnumer, setIdnumer] = useState(user)
    const [arrValue, setArrValue] = useState([])
    const [getValue, setgetValue] = useState("")
    const [loader, setloader] = useState(false)



    const [userdata, setuserdata] = useState(
        [
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '0',
                right_business: '',
                Sponsor: ''

            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
        ]

    )


    const handleClick = event => {
        event.preventDefault();

        // 👇️ value of input field
        console.log('handleClick 👉️', Idnumer);
    };


    const handleChange = event => {
        setgetValue(event.target.value);

        console.log('value is:', event.target.value);
    };

    const referral_API = async () => {
        try {

            setloader(true)



            let responce = await API?.post('/binary_tree', {
                "uid": Idnumer,
                "usersession_uid": "1"
            })
            responce = responce?.data?.data?.recordset;
            console.log("Res_API", responce);


            setuserdata([
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '0',
                    right_business: '',
                    Sponsor: ''

                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date: '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
            ])
            let arr = []
            responce.forEach((item, index) => {

                arr.push({
                    name: item.fname,
                    id: item.uid,
                    registration_date: item?.activationdate,
                    status: item.activationdate ? 'Active' : 'InActive',
                    total_left: item.left_count,
                    total_left_active: item.totalleft,
                    left_business: item.lbv,
                    package_amount: item.packageamount,
                    Activation_date: item.activationdate,
                    package: item.package,
                    total_right: item.right_count,
                    total_right_active: item.totalright,
                    right_business: item.rbv,
                    Sponsor: item.sid,
                    date: item?.packageName
                });



            }
            )
            console.log("responce", arr);

            setloader(false)

            setuserdata(arr)
            if (bol) {
                setArrValue([...arrValue, arr[0].id])
                bol = false;
            }




        } catch (e) {
        setloader(false)
            console.log("Error While calling Referrer API", e);
        }
    }

    const onhover = (x) => {

        let team_info_div_data = document.querySelectorAll('.team-info p')

        let team_info_div = document.querySelector('.team-info');

        let user_img = document.querySelectorAll('.user-img');
        let Sponsor = document.querySelector('.Sponsor');
        console.log("Data", userdata[x].Sponsor);
        team_info_div_data[0].innerHTML = 'Registration Date : ';
        team_info_div_data[1].innerHTML = 'Status : ';
        team_info_div_data[2].innerHTML = 'Total Left : ';
        team_info_div_data[3].innerHTML = 'Total Left Active : ';
        team_info_div_data[4].innerHTML = 'Left Business : ';
        team_info_div_data[5].innerHTML = 'Package Amount : ';
        team_info_div_data[6].innerHTML = 'Activation Date : ';
        team_info_div_data[7].innerHTML = 'Package : ';
        team_info_div_data[8].innerHTML = 'Total Right : ';
        // team_info_div_data[9].innerHTML = 'Total Right Active : ';
        team_info_div_data[10].innerHTML = 'Right BusinNameess : ';
        Sponsor.innerHTML = "Sponsor : ";
        team_info_div_data[0].innerHTML += userdata[x].registration_date;
        team_info_div_data[1].innerHTML += userdata[x].status;
        team_info_div_data[2].innerHTML += userdata[x].total_left;
        team_info_div_data[3].innerHTML += userdata[x].total_left_active;
        team_info_div_data[4].innerHTML += userdata[x].left_business;
        team_info_div_data[5].innerHTML += userdata[x].package_amount;
        team_info_div_data[6].innerHTML += userdata[x].Activation_date;
        team_info_div_data[7].innerHTML += userdata[x].package;
        team_info_div_data[8].innerHTML += userdata[x].total_right;
        team_info_div_data[9].innerHTML += userdata[x].total_right_active;
        team_info_div_data[10].innerHTML += userdata[x].right_business;
        Sponsor.innerHTML += userdata[x].Sponsor;

        team_info_div.classList.remove('d-none');
        team_info_div.setAttribute('style', `top:${user_img[x].getBoundingClientRect().top + 50}px; left:${(user_img[x].getBoundingClientRect().x + (user_img[x].getBoundingClientRect().width / 2)) - (team_info_div.getBoundingClientRect().width / 2)}px !important ;`);
    }
    const onhoverout = () => {
        if (mouseStatus == 'out') {
            let team_info_div_data = document.querySelectorAll('.team-info p')
            let Sponsor = document.querySelector('.Sponsor');
            let team_info_div = document.querySelector('.team-info');


            team_info_div_data[0].innerHTML = 'Registration Date :';
            team_info_div_data[1].innerHTML = 'Status :';
            team_info_div_data[2].innerHTML = 'Total Left :';
            team_info_div_data[3].innerHTML = 'Total Left Active :';
            team_info_div_data[4].innerHTML = 'Left Business :';
            team_info_div_data[5].innerHTML = 'Package Amount :';
            team_info_div_data[6].innerHTML = 'Activation Date: ';
            team_info_div_data[7].innerHTML = 'Package : ';
            team_info_div_data[8].innerHTML = 'Total Right : ';
            // team_info_div_data[9].innerHTML = 'Total Right Active : ';
            team_info_div_data[10].innerHTML = 'Right BusinNameess : ';
            team_info_div.classList.add('d-none');
            Sponsor.innerHTML = "Sponsor : ";

        }
    }
    useEffect(() => {
        referral_API()
        let idinput = document.querySelector('.idinput')
        idinput.value = Idnumer;

    }, [Idnumer])
    useEffect(() => {
        referral_API()
    }, [])
    function addValue(value) {
        setArrValue([...arrValue, value])
        // arrValue.push(value)
        // arrValue.push(value)
    }
    console.log('what is arrValue', arrValue)



    var a;
    function popoutvalue() {
        
        if (arrValue.length == 1) {
            setloader(true)
            arrValue.pop()
            arrValue.unshift('778899')
            bol = true;
            setloader(false)

        } else {
            setloader(true)
            a = arrValue.splice(arrValue.length - 2, 1);
            setIdnumer(a[0]);
            // console.log('what is popout value', a[0])
            setloader(false)

        }

    }

    console.log("userdata", userdata);

    return (
        <div className="row justify-content-center" style={{ height: "120vh" }}>
            {loader == true ? ( <div className='LoaderSpinner'>
               <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
        </div>): <></>}
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Matching Tree", page_path: "Team Details / Matching Tree" }} />
                <div className="col-12 row justify-content-center py-5" style={{ overflowY: "hidden" }}>

                    <div className="col-lg-6">
                        <div class="tree_icon" style={{ display: 'block' }}>
                            <input type="text" className="p-2 my-2 mx-3 profile-border  idinput"  defaultValue={Idnumer} onChange={(e) => setgetValue(e.target.value)} />
                            
                            <button className="btn btn-success btn-tree" onClick={() => setIdnumer(getValue)}>Submit</button>
                            <button className=" btn btn-danger btn-tree" onClick={popoutvalue}>Go Back</button>
                            <button className=" btn btn-danger btn-tree" onClick={()=>setIdnumer(user)} >Home</button>


                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div class="tree_icon py-4">
                            <div class="tree_name">
                                <img src={Active} width="40px" height="40px" />
                                Active
                            </div>
                            <div class="tree_name">
                                <img src={user3red} width="40px" height="40px" />
                                In-Active
                            </div>
                            <div class="tree_name">
                                <img src={Default} width="40px" height="40px" />
                                Not Registered
                            </div>
                        </div>
                    </div>


                </div>





                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="row bg-theme bg-theme4">
                            <div className="col-md-12">
                                {/* <div className="card"> */}
                                <div id="tree" className="treeview" style={{ margin: "40px auto" }}>
                                    <div className="treemember">
                                        <div className="dropdown">
                                            <button className="dropbtn">

                                                <img

                                                    src={userdata[0].package >= 1 ? Active  : userdata[0].id == "" ? Default : user3red }
                                                    onClick={() => (setIdnumer(userdata[0].id), addValue(userdata[0].id))}

                                                    className="abc" style={{ margin: "0 80px", cursor: "pointer", border: "2px solid Green" }} width="50" height="50" onclick="Image_Click(364734)" />
                                            </button>
                                           

                                            <div className="span" style={{ color: "#fff" }}>
                                                {userdata[0]?.name}  <br />

                                                {userdata[0]?.id}
                                            </div>
                                            <div className="dropdown-content ">
                                                <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                    <tbody>
                                                        {/* <tr className="fgtybmd" style={{ display: "none" }}>
                                                                    <td className="table_heading">Sponser Name:</td>
                                                                    <td colspan="3">
                                                                        Subham kumar
                                                                    </td>

                                                                </tr> */}
                                                        <tr className="fgtybmd">

                                                            <td className="table_heading">Sponsor :</td>
                                                            <td className="grtydfbc" colspan="3">
                                                                {userdata[0]?.Sponsor}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table_heading">Registration&nbsp;Date :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.registration_date}

                                                            </td>
                                                            <td className="table_heading">Activation &nbsp;Date :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.Activation_date}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table_heading">Status :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.status}

                                                            </td>
                                                            <td className="table_heading">Package :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.date}

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table_heading">Total Left :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.total_left}

                                                            </td>
                                                            <td className="table_heading">Total Right :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.total_right}

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table_heading">Total Left Active :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.total_left_active}

                                                            </td>
                                                            <td className="table_heading">Total Right Active :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.total_right_active}

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table_heading">Left Business :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.left_business}

                                                            </td>
                                                            <td className="table_heading">Right Business :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.right_business}

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table_heading">Package Amount :</td>
                                                            <td className="grtydfbc">
                                                                {userdata[0]?.package_amount}

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="connecter1">
                                        <img src={tree_image_small} style={{ width: "480px", height: "33px" }} />
                                    </div>

                                    <div className="tree_row">
                                        <div className="row_2_child">
                                            <div className="dropdown">
                                                <button className="dropbtn">
                                                    <img     src={userdata[1].package >= 1 ? Active  : userdata[1].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[1].id), addValue(userdata[1].id))} className="abc" style={{ margin: "0 25px", cursor: "pointer" }} width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[1]?.name}  <br />

                                                    {userdata[1]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            {/* <tr className="fgtybmd" style={{ display: "none" }}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3">

                                                                        </td>
                                                                    </tr> */}
                                                            <tr className="fgtybmd">
                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[1]?.Sponsor}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.total_left}


                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.total_right_active}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[1]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row_2_child">
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                  
                                                    <img     src={userdata[2].package >= 1 ? Active : userdata[2].id == "" ? Default : user3red }
                                                        onClick={() => (setIdnumer(userdata[2].id), addValue(userdata[2].id))} className="abc" style={{ margin: "0 25px", cursor: "pointer" }} width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[2]?.name}  <br />

                                                    {userdata[2]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            {/* <tr className="fgtybmd" style={{ display: "none" }}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3">

                                                                        </td>

                                                                    </tr> */}
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[2]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.total_right_active}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[2]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tree_row" style={{ height: "34px" }}>
                                        <div className="row_2_child" style={{ height: "34px" }}>
                                            <img src={tree_image_medium} style={{ width: "253px", height: "32px" }} />
                                        </div>
                                        <div className="row_2_child" style={{ height: "34px" }}>
                                            <img src={tree_image_medium} style={{ width: "253px", height: "32px" }} />
                                        </div>
                                    </div>

                                    <div className="tree_row">
                                        <div className="row_3_child">
                                            {/* <div className="span" style={{ color: "#fff" }}>
                                                        {userdata[3]?.name}  <br />

                                                        {userdata[3]?.id}
                                                    </div> */}
                                            <div className="dropdown">
                                                <button className="dropbtn">

                   
                                                    <img     src={userdata[3].package >= 1 ? Active :  userdata[3].id == "" ? Default : user3red }
                                                        onClick={() => (setIdnumer(userdata[3].id), addValue(userdata[3].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[3]?.name}  <br />

                                                    {userdata[3]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[3]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.total_right_active}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[3]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row_3_child">
                                            <div className="dropdown">
                                                <button className="dropbtn">


                                                    <img     src={userdata[4].package >= 1 ? Active  : userdata[4].id == "" ? Default : user3red }
                                                        onClick={() => (setIdnumer(userdata[4].id), addValue(userdata[4].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[4]?.name}  <br />

                                                    {userdata[4]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[4]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.total_right_active}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[4]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row_3_child">
                                            <div className="dropdown">
                                                <button className="dropbtn">
{
    console.log("Res_API",userdata[1]?.position)
}
                                                <img     src={userdata[5].package >= 1 ? Active  : userdata[5].id == "" ? Default : user3red }
                                                        onClick={() => (setIdnumer(userdata[5].id), addValue(userdata[5].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>

                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[5]?.name}  <br />

                                                    {userdata[5]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[5]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.total_right_active}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[5]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row_3_child">
                                            <div className="dropdown">
                                                <button className="dropbtn">
                                                <img     src={userdata[6].package >= 1 ? Default : userdata[6].id == "" ? Default : user3red }
                                                        onClick={() => (setIdnumer(userdata[6].id), addValue(userdata[6].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[6]?.name}  <br />

                                                    {userdata[6]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[6]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[6]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tree_row" style={{ height: "27px" }}>
                                        <div className="row_3_child" style={{ height: "27px" }}>
                                            <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                        </div>
                                        <div className="row_3_child" style={{ height: "27px" }}>
                                            <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                        </div>
                                        <div className="row_3_child" style={{ height: "27px" }}>
                                            <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                        </div>
                                        <div className="row_3_child" style={{ height: "27px" }}>
                                            <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                        </div>
                                    </div>
                                    <div className="tree_row">
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img     src={userdata[7].package >= 1 ? Default : userdata[7].id == "" ? Default : user3red }
                                                        onClick={() => (setIdnumer(userdata[7].id), addValue(userdata[7].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[7]?.name}  <br />

                                                    {userdata[7]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[7]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[7]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[8].package >= 1 ? Default : userdata[8].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[8].id), addValue(userdata[8].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[8]?.name}  <br />

                                                    {userdata[8]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[8]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[8]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[9].package >= 1 ? Default : userdata[9].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[9].id), addValue(userdata[9].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[9]?.name}  <br />

                                                    {userdata[9]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[9]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[9]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[10].package >= 1 ? Default : userdata[10].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[10].id), addValue(userdata[10].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[10]?.name}  <br />

                                                    {userdata[10]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[10]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[10]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[11].package >= 1 ? Default : userdata[11].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[11].id), addValue(userdata[11].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[11]?.name}  <br />

                                                    {userdata[11]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[11]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[11]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[12].package >= 1 ? Default : userdata[12].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[12].id), addValue(userdata[12].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[12]?.name}  <br />

                                                    {userdata[12]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[12]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[12]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[13].package >= 1 ? Default : userdata[13].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[13].id), addValue(userdata[13].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[13]?.name}  <br />

                                                    {userdata[13]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[13]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[13]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row_4_child" >
                                            <div className="dropdown">
                                                <button className="dropbtn">

                                                <img src={userdata[14].package >= 1 ? Default : userdata[14].id == "" ? Default : user3red }

                                                        onClick={() => (setIdnumer(userdata[14].id), addValue(userdata[14].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                </button>
                                                <div className="span" style={{ color: "#fff" }}>
                                                    {userdata[14]?.name}  <br />

                                                    {userdata[14]?.id}
                                                </div>
                                                <div className="dropdown-content">
                                                    <table className="tables dropdown_width" cellpadding="0px" cellspacing="0px">
                                                        <tbody>
                                                            <tr className="fgtybmd" style={{ display: "none" }}>
                                                                <td className="table_heading">Sponser Name:</td>
                                                                <td colspan="3">

                                                                </td>

                                                            </tr>
                                                            <tr className="fgtybmd">

                                                                <td className="table_heading">Sponsor :</td>
                                                                <td className="grtydfbc" colspan="3">
                                                                    {userdata[14]?.Sponsor}


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Registration&nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.registration_date}

                                                                </td>
                                                                <td className="table_heading">Activation &nbsp;Date :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.Activation_date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Status :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.status}

                                                                </td>
                                                                <td className="table_heading">Package :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.date}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.total_left}

                                                                </td>
                                                                <td className="table_heading">Total Right :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Total Left Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.total_left_active}

                                                                </td>
                                                                <td className="table_heading">Total Right Active :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.total_right}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Left Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.left_business}

                                                                </td>
                                                                <td className="table_heading">Right Business :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.right_business}

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table_heading">Package Amount :</td>
                                                                <td className="grtydfbc">
                                                                    {userdata[14]?.package_amount}

                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            {/* </div> */}
        </div>
    );
}

export default Matching_Tree;