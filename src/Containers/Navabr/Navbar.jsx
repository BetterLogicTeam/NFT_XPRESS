import React, { useState } from 'react';
import './Navbar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHomeCircle, BiLineChart, BiBook, BiMessageSquareEdit } from 'react-icons/bi';
import { TbAtom } from 'react-icons/tb';
import { MdOutlineGroup } from 'react-icons/md';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { FaLock } from 'react-icons/fa'
import id_red from '../../assets/id_red.png'
import { Activate_History, Buy_NFT, Coin_Address, Direct_Leg_Business, Home, Level_Details, Matching_Income, Matching_Level_Income, Matching_Tree, My_Referral, My_Team, NFT_Address, Profile, Referral_Income, Reward_Income, Roi_Income, Self_Address, Staking_Details, Withdrawal, Withdrawal_History } from '../../Routes';
import Change_Password from '../../Components/Change_password/Change_Password';
import Mint from '../../Components/Mint/Mint';
import Forgat_Password from '../../Components/Forgat_Password/Forgat_Password';
import ChangePasswor_eamil from '../../Components/Change_password/ChangePasswor_eamil';
import Varify_email_change_password from '../../Components/Change_password/Varify_email_change_password';
import Update_profile_email from '../../Routes/Activation/Update_profile_email';
import { API } from '../../Redux/actions/API';
import id_green from '../../assets/id_green.png'
import Minting_History from '../../Components/Mint/Minting_History';
import Quick_Starter_Bonus from '../../Routes/All_Income/Quick_Starter_Bonus';
import Team_Bonus from '../../Routes/All_Income/Team_Bonus';
import Sports_Bonus from '../../Routes/All_Income/Sports_Bonus';
import Withdrawal_Share_Bonus from '../../Routes/All_Income/Withdrawal_Share_Bonus';
import Airdrop_Token from '../../Routes/History/Airdrop_Token';
import Airdrop_Token_History from '../../Routes/History/Airdrop_Token_History';
import Governance_Token_Address from '../../Routes/Address/Governance_Token_Address';
import { AiOutlineMenu } from 'react-icons/ai'
import Mint_nft from '../../Components/Mint/Mint_nft';
import Collection from '../../Components/Mint/Collection';
const Navbar = () => {
    const user = localStorage?.getItem("user");
    const [packegeid, setpackegeid] = useState(0)

    const history = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("user", null);
        history("/Login_main");
        window.location.reload();
    };

    const onClick_DNone = () => {
        let expand_list_MD = document.querySelectorAll('.expand-nav');
        for (let y = 0; y < 6; y++) {
            expand_list_MD[y].classList.forEach((class_item) => {
                if (class_item == 'd-flex') {
                    expand_list_MD[y].classList.remove('d-flex');
                    expand_list_MD[y].classList.add('d-none');
                }
            })
        }
    }

    const dashbord = async () => {
        let res = await API.get(`/getDashboardValues?id=${user}`)
        res = res.data.data[0]
        setpackegeid(res.package)

    }
    const sm_nav_dnone = () => {
        let nav_panel = document.querySelector('.nav-panel')
        if (nav_panel.classList.contains('d-none')) {
            nav_panel.classList.remove('d-none');
            nav_panel.classList.add('d-flex');
        }
        else {
            nav_panel.classList.remove('d-flex');
            nav_panel.classList.add('d-none');
        }
    }
    React.useEffect(() => {

        let nav_btn_expand = document.querySelectorAll('.nav-btn-expand');
        let nav_btn = document.querySelector('.nav-btn');
        let nav_panel = document.querySelector('.nav-panel')
        let expand_list = document.querySelectorAll('.expand-nav');
        let expand_list_sm = document.querySelectorAll('.expand-nav-sm');
        console.log('nav', expand_list_sm.length)
        nav_btn.addEventListener('click', () => {
            console.log('NAv Clicked');
            if (nav_panel.classList.contains('d-none')) {
                nav_panel.classList.remove('d-none');
                nav_panel.classList.add('d-flex');
            }
            else {
                nav_panel.classList.remove('d-flex');
                nav_panel.classList.add('d-none');
            }
        })
        for (let x = 0; x < 7; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 7; y++) {
                    if (x != y) {
                        expand_list[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list[y].classList.remove('d-flex');
                                expand_list[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list[x].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list[x].classList.remove('d-flex');
                    expand_list[x].classList.add('d-none');
                }
                else {
                    expand_list[x].classList.remove('d-none');
                    expand_list[x].classList.add('d-flex');
                }
            })
        }
        for (let x = 7; x < 13; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 6; y++) {
                    if ((x - 7) != y) {
                        expand_list_sm[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list_sm[y].classList.remove('d-flex');
                                expand_list_sm[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list_sm[(x - 7)].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list_sm[(x - 7)].classList.remove('d-flex');
                    expand_list_sm[(x - 7)].classList.add('d-none');
                }
                else {
                    expand_list_sm[(x - 7)].classList.remove('d-none');
                    expand_list_sm[(x - 7)].classList.add('d-flex');
                }
            })
        }

        dashbord()
    }, [])
    return (
        <div className=''>
            <div className='col-13'>
                <nav class="navbar navbar-expand-lg navbar-light row d-flex flex-column">
                    <div className='row justify-content-between brand-bar m-0 p-0'>
                        <header class="d_none ">
                            <div class="topbar justify-content-center mb-2">
                                <nav class=" navtop">
                                    <div class="">
                                        <img src={Logo} width="12%" alt="logo icon" />
                                    </div>

                                    <div class="probileseix">
                                        <h6 class="probileseix m-0">

                                            <span style={{ color: 'black' }} className="me-1"> ID:-</span>
                                            {/* <img src="assets3/images/id_green.png" class=""/> */}
                                            {
                                                packegeid > 0 ?
                                                    <>
                                                        <img src={id_green} width="13%" />
                                                    </> :
                                                    <>
                                                        <img src={id_red} width="13%" />

                                                    </>
                                            }
                                            &nbsp;
                                            <span style={{ color: 'black' }}>{user}</span>
                                        </h6>
                                        {/* &nbsp;&nbsp;&nbsp;&nbsp;<a href="#"> */}

                                        {/* <li style={{listStyleType:"none;"}}> */}
                                        <div>
                                            <button className='btn12  nav-btn-expand '> <img src={profile} width="40px" /></button>
                                            <div className='expand-nav  d-none flex-column' style={{ marginLeft: "-4%" }}>
                                                <Link onClick={onClick_DNone} to="/dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                                <Link onClick={onClick_DNone} to="/dashboard/Change_Password"><BsArrowRightShort /> Change Password </Link>
                                            </div>
                                        </div>
                                        {/* </li> */}
                                        {/* </a> */}

                                    </div>


                                </nav>
                            </div>
                        </header>

                        <div class="row m-0 d-none d-lg-flex">
                            <ul class=" navbar-nav-lg py-2">
                                <li class="nav-item active ms-4">
                                    <Link to="/dashboard">
                                        <button className='btn12 '><BiHomeCircle className="me-1 mb-1 fs-6 fs-5 " /> Dashboard</button>
                                    </Link>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn12  nav-btn-expand '><BiBook className="me-1 mb-1 fs-6 fs-5 " /> Mint NFT</button>
                                        <div className='expand-nav  d-none flex-column'>
                                        <Link onClick={onClick_DNone} to="/dashboard/Mint_nft"><BsArrowRightShort /> Mint</Link>
                                        <Link onClick={onClick_DNone} to="/dashboard/Collection"><BsArrowRightShort /> Collection &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Mint"><BsArrowRightShort /> Mint NFT</Link> */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Minting_History"><BsArrowRightShort /> Minting History&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn12  nav-btn-expand '><MdOutlineGroup className="me-1 mb-1 fs-6 fs-5" /> Team Details</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            <Link onClick={onClick_DNone} to="/dashboard/My_Referral"><BsArrowRightShort /> My Referral &nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/My_Team"><BsArrowRightShort /> My Team</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Level_Details"><BsArrowRightShort /> Level Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn12  nav-btn-expand '> <BiLineChart className="me-1 mb-1 fs-6 fs-5" /> All Income</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            <Link onClick={onClick_DNone} to="/dashboard/Referral_Income"><BsArrowRightShort /> Referral Income </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Quick_Starter_Bonus"><BsArrowRightShort /> Quick Starter Bonus </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Team_Bonus"><BsArrowRightShort /> Team Bonus </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Matching Level Income</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Sports_Bonus"><BsArrowRightShort /> Sports Bonus </Link>/ */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Withdrawal_Share_Bonus"><BsArrowRightShort /> Withdrawal Share Bonus </Link>




                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link> */}
                                            <Link onClick={onClick_DNone} to="/dashboard/LAG"><BsArrowRightShort /> LAG Token</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/withdrawal_Income"><BsArrowRightShort /> Reward Income</Link> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn12  nav-btn-expand '><BiBook className="me-1 mb-1 fs-6 fs-5" /> Withdrawal</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            {/* <Link  onClick={onClick_DNone} to="/dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link>  */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Withdrawal"><BsArrowRightShort /> Main Wallet </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Withdrawal_History"><BsArrowRightShort /> Main Wallet History</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/LAG_Token"><BsArrowRightShort />LAG Token</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/LAG_Token_History"><BsArrowRightShort />LAG Token History</Link>



                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <button className='btn12  nav-btn-expand '><BiMessageSquareEdit className="me-1 mb-1 fs-6 fs-5" /> Address</button>
                                        <div className='expand-nav  d-none flex-column'>

                                            <Link onClick={onClick_DNone} to="/dashboard/Self_Address"><BsArrowRightShort /> Self</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Governance_Token_Address"><BsArrowRightShort /> Governance Token</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Coin_Address"><BsArrowRightShort /> In Game Reward Token </Link>

                                            <Link onClick={onClick_DNone} to="/dashboard/NFT_Address"><BsArrowRightShort /> NFT</Link>
                                            {/* <Link  onClick={onClick_DNone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link>  */}

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className='btn12 fs-5 fs-6' onClick={() => handleLogout()}><FaLock className="me-1 mb-1 fs-6 fs-5" /> Logout</button>
                                </li>
                                <li>
                                    {/* <TbAtom className="me-1 mb-1 fs-6 fs-4" /> Activation */}
                                    <div>
                                        <button className='btn12  nav-btn-expand '></button>
                                        <div className='expand-nav  d-none flex-column'>
                                            {/* <Link to="/dashboard/Activate_History" onClick={onClick_DNone}><a><BsArrowRightShort /> Activate History</a></Link>

                                            <Link to="/dashboard/Profile" onClick={onClick_DNone}><a><BsArrowRightShort /> Profile</a></Link>
                                            <Link to="/dashboard/Change_Password" onClick={onClick_DNone}><a><BsArrowRightShort /> Change Password</a></Link> */}

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex w-100 mobile-view d-lg-none align-items-center bg_navtopSM justify-content-between">
                            {/* <img src={Logo} width="10%" alt="logo icon" style={{}} /> */}
                            <button class="navbar-toggler mobile-nav nav-btn col-md-1 col-2 me-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <span class="navbar-toggler-icon" style={{ width: "100%"}}></span> */}
                                <AiOutlineMenu style={{ fontSize: '3rem' }} />
                            </button>
                        </div>
                    </div>
                    <div className='nav-panel d-none bg_sm col-10'>
                        <ul class="row p-0 justify-content-center list-unstyled">
                            <li class="col-xl-10 col-10 border_bottom">
                                <Link to="/dashboard" onClick={sm_nav_dnone}>
                                    <button className='btn12 col-12 text-start fs-1'>
                                        <BiHomeCircle className="me-1 mb-1" /> Dashboard</button>
                                </Link>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn12 nav-btn-expand col-12 text-start fs-1'><BiBook className="me-1 mb-1" /> Mint NFT</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                    <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Mint_nft"><BsArrowRightShort /> Mint</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Collection"><BsArrowRightShort /> Collection</Link>
                                        {/* <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Mint"><BsArrowRightShort /> Mint NFT</Link> */}
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Minting_History"><BsArrowRightShort /> Minting History</Link>
                                    </div>
                                </div>
                            </li>

                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn12 nav-btn-expand col-12 text-start fs-1'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/My_Referral"><BsArrowRightShort /> My Referal</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/My_Team"><BsArrowRightShort /> My Team</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link>
                                        {/* <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn12 nav-btn-expand col-12 text-start fs-1'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Referral_Income"><BsArrowRightShort /> Referral Income</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Team_Bonus"><BsArrowRightShort /> Team Bonus </Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Quick_Starter_Bonus"><BsArrowRightShort /> Quick Starter Bonus </Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Matching Level Income</Link>
                                        {/* <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Sports_Bonus"><BsArrowRightShort /> Sports Bonus </Link> */}
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Withdrawal_Share_Bonus"><BsArrowRightShort /> Withdrawal Share Bonus </Link>



                                        {/* <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link> */}
                                        {/* <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link> */}
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/withdrawal_Income"><BsArrowRightShort /> Reward Income</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn12 nav-btn-expand col-12 text-start fs-1'><BiBook className="me-1 mb-1" /> Withdrawal</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        {/* <Link  onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link> */}


                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Withdrawal"><BsArrowRightShort /> Main Wallet </Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Withdrawal_History"><BsArrowRightShort /> Main Wallet History</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/LAG_Token"><BsArrowRightShort />LAG Token</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/LAG_Token_History"><BsArrowRightShort />LAG Token History</Link>
                                    </div>
                                </div>
                            </li>

                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn12 nav-btn-expand col-12 text-start fs-1'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Self_Address"><BsArrowRightShort /> Self</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Governance_Token_Address"><BsArrowRightShort /> Governance Token</Link>
                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Coin_Address"><BsArrowRightShort /> In Game Reward Token </Link>

                                        <Link onClick={sm_nav_dnone} className="fs-1" to="/dashboard/NFT_Address"><BsArrowRightShort /> NFT</Link>
                                        {/* <Link  onClick={sm_nav_dnone} className="fs-1" to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link> */}

                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <button className='btn12 col-12 text-start fs-1' onClick={() => handleLogout()}><FaLock className="me-1 mb-1" /> Logout</button>
                            </li>
                            {/* <TbAtom className="me-1 mb-1" /> Activation */}
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn12 nav-btn-expand col-12 text-start fs-1'></button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        {/* <Link onClick={sm_nav_dnone} to="/dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Change_Password"><BsArrowRightShort /> change Password</Link> */}

                                    </div>
                                </div>
                            </li>




                        </ul>
                    </div>
                </nav>
            </div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/dashboard/Activate_History' element={<Activate_History />} />
                <Route path='/dashboard/Staking_Details' element={<Staking_Details />} />
                <Route path='/dashboard/Profile' element={<Profile />} />
                <Route path='/dashboard/Referral_Income' element={<Referral_Income />} />
                <Route path='/dashboard/Matching_Income' element={<Matching_Income />} />
                <Route path='/dashboard/withdrawal_Income' element={<Reward_Income />} />
                <Route path='/dashboard/LAG' element={<Roi_Income />} />
                <Route path='/dashboard/Matching_Level_Income' element={<Matching_Level_Income />} />
                <Route path='/dashboard/Buy_NFT' element={<Buy_NFT />} />
                <Route path='/dashboard/Withdrawal_History' element={<Withdrawal_History />} />
                <Route path='/dashboard/Withdrawal' element={<Withdrawal />} />
                <Route path='/dashboard/Direct_Leg_Business' element={<Direct_Leg_Business />} />
                <Route path='/dashboard/Level_Details' element={<Level_Details />} />
                <Route path='/dashboard/Matching_Tree' element={<Matching_Tree />} />
                <Route path='/dashboard/My_Referral' element={<My_Referral />} />
                <Route path='/dashboard/My_Team' element={<My_Team />} />
                <Route path='/dashboard/Coin_Address' element={<Coin_Address />} />
                <Route path='/dashboard/NFT_Address' element={<NFT_Address />} />
                <Route path='/dashboard/Self_Address' element={<Self_Address />} />
                <Route path='/dashboard/Change_Password' element={<Change_Password />} />
                <Route path='/dashboard/Mint' element={<Mint />} />
                <Route path='/dashboard/Forgat_Password' element={<Forgat_Password />} />
                <Route path='/dashboard/ChangePasswor_eamil' element={<ChangePasswor_eamil />} />
                <Route path='/dashboard/Varify_email_change_password' element={<Varify_email_change_password />} />
                <Route path='/dashboard/Update_profile_email' element={<Update_profile_email />} />
                <Route path='/dashboard/Minting_History' element={<Minting_History />} />


                <Route path='/dashboard/Quick_Starter_Bonus' element={<Quick_Starter_Bonus />} />
                <Route path='/dashboard/Team_Bonus' element={<Team_Bonus />} />
                <Route path='/dashboard/Sports_Bonus' element={<Sports_Bonus />} />
                <Route path='/dashboard/Withdrawal_Share_Bonus' element={<Withdrawal_Share_Bonus />} />
                <Route path='/dashboard/LAG_Token' element={<Airdrop_Token />} />
                <Route path='/dashboard/LAG_Token_History' element={<Airdrop_Token_History />} />
                <Route path='/dashboard/Governance_Token_Address' element={<Governance_Token_Address />} />
                 <Route path='/dashboard/Mint_nft' element={<Mint_nft  />} />
                <Route path='/dashboard/Collection' element={<Collection  />} />











            </Routes>
            <Outlet />
        </div>
    );
}

export default Navbar;