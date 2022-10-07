import React, { useEffect } from 'react';
import { useState } from 'react';
import { All_Participates, Joining, Total_Earning, All_Income, Earned_Wire, Earned_USD, Id_Number, Profit } from '../../Components';
import './Dashboard.css'
import { API } from "../../Redux/actions/API";
import {
  getWalletAddress,
  getAllParticipants,

} from "../../Redux/actions/dashboard";
import './bootstrap.min.css'
import './bootstrap-extended.css'
import Chart from 'react-apexcharts';
import './app.css'
import './CustomNav.css'
import './icons.css'

import { useDispatch, useSelector } from 'react-redux';
import Affiliate from '../../Components/Affiliate_Link/Affiliate';
import axios from 'axios';
import Withdraw_bouns from '../../Components/Varify-OTP/Withdraw_Bouns/Withdraw_bouns';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';


let valueran = 0
const Dashboard = () => {
  const dashboard = useSelector((state) => state?.dashboard);
  const user = localStorage.getItem("user");

  const dispatch = useDispatch();
  const getAllData = () => {
    if (user) {
      // let ress = JSON.parse(user);
      // let uId = ress?.uid;

      dispatch(getAllParticipants(user));

    }
  };
  useEffect(() => {

    getAllData();
  }, []);
  let [earn, setearn] = useState()
  const [netBalance, setnetBalance] = useState()
  const [withdrawal, setwithdrawal] = useState()
  const [uID, setuID] = useState()
  const [referral, setReferral] = useState(0)
  const [matchingicome, setmatchingicome] = useState(0)
  const [roiIncome, setroiIncome] = useState(0)
  const [earnAmount, setearnAmount] = useState(0)
  const [TotalAmount, setTotalAmount] = useState(0);
  const [MaxIncome, setMaxIncome] = useState(0);
  const [allParticipants, setallParticipants] = useState(0)
  const [joined_last_24_hour, setjoined_last_24_hour] = useState()
  let [participantEarned, setparticipantEarned] = useState(0)
  const [earendUSD, setearendUSD] = useState(0)
  const [particioatEarnd, setparticioatEarnd] = useState(0)
  const [EarnAmount, setEarnAmount] = useState(0)
  const [machingLevel, setmachingLevel] = useState(0)
  const [joinhere, setjoinhere] = useState()
  const [packegeid, setpackegeid] = useState(0)
  const [gamedata, setgamedata] = useState(0)
  const [copyTest, setcopyTest] = useState(false)
  const [Timer_data, setTimer_data] = useState()

  const [ctoincom, setctoincom] = useState(0)
  const [totalactivationamount, settotalactivationamount] = useState(0)

  const [LeftActiveDirect, setLeftActiveDirect] = useState(0)
  const [RightActiveDirect, setRightActiveDirect] = useState(0)
  const [RightDirect, setRightDirect] = useState(0)
  const [LeftDirect, setLeftDirect] = useState(0)

  const [LeftActiveDownline, setLeftActiveDownline] = useState(0)
  const [RightActiveDownline, setRightActiveDownline] = useState(0)
  const [LeftDownline, setLeftDownline] = useState(0)
  const [RightDownline, setRightDownline] = useState(0)

  const [TeamBonus, setTeamBonus] = useState(0)
  const [Bonus7DayTimer, setBonus7DayTimer] = useState(0)
  const [Bonus30DayTimer, setBonus30DayTimer] = useState(0)
  const [leftbusiness, setleftbusiness] = useState(0)
  const [rightbusiness, setrightbusiness] = useState(0)
  const [TotalAirdropToken, setTotalAirdropToken] = useState(0)
  const [ReceivedAirdropToken, setReceivedAirdropToken] = useState(0)

  const [Days_here, setDays_here] = useState(0)
  const [Hours_here, setHours_here] = useState(0)
  const [Munits_here, setMunits_here] = useState(0)
  const [Seconds, setSeconds] = useState(0)
  const [Days_here2, setDays_here2] = useState(0)
  const [Hours_here2, setHours_here2] = useState(0)
  const [Munits_here2, setMunits_here2] = useState(0)
  const [Seconds2, setSeconds2] = useState(0)
  const [TopupDate, setTopupDate] = useState(new Date());

  const [yesterdaycto, setyesterdaycto] = useState(0);
  const [todaycto, settodaycto] = useState(0);
  const [tt, settt] = useState(0);
  const [GlobalPosition, setGlobalPosition] = useState()





  // let earn=0
  const DashboardAPI = async () => {


    try {



      let res = await API.get(`/getDashboardValues?id=${user}`)
      res = res.data.data[0]
      console.log("res", res);
      setTimer_data(res.Bonus7DayTimer)
      localStorage.setItem("Timer1", res.Bonus7DayTimer);
      localStorage.setItem("Timer2", res.Bonus30DayTimer);

setGlobalPosition(res.GlobalPosition)

      setTopupDate(res.quickStarterBonusTime)
      setTotalAirdropToken(res.TotalAirdropToken)
      setReceivedAirdropToken(res.ReceivedAirdropToken)
      setrightbusiness(res.rightbusiness)
      setleftbusiness(res.leftbusiness)
      setLeftDirect(res.LeftDirect)
      setBonus30DayTimer(res.Bonus30DayTimer)

      setTeamBonus(res.TeamBonus)

      setRightActiveDownline(res.RightActiveDownline)
      setLeftActiveDownline(res.LeftActiveDownline)
      setRightDownline(res.RightDownline)
      setLeftDownline(res.LeftDownline)

      setRightDirect(res.RightDirect)
      setLeftDirect(res.LeftDirect)
      setRightActiveDirect(res.RightActiveDirect)
      setLeftActiveDirect(res.LeftActiveDirect)

      settotalactivationamount(res.totalactivationamount)
      setctoincom(res.cto_income)
      setparticipantEarned(res.totalincome)
      // console.log("Data", valueran);
      valueran = res.totalincome
      localStorage.setItem("ID", res.totalincome);
      setpackegeid(res.package)
      setearn(res?.totalincome)
      //  Net Balance-----------
      setnetBalance(res.netbal)
      //  Total Withdrawal-----------
      setwithdrawal(res.withdrawal)
      //  UID-----------
      setuID(res.uid)
      //  Referral Income-----------------------
      setReferral(res.directIncome)
      // Matching Income------------------------
      setmatchingicome(res.binary)
      // ROI Income---------------------
      setroiIncome(res.roiincome)
      // Your total earning----------------------
      setearnAmount(res.MaxIncome)
      // out of ---------------------------------
      setTotalAmount(res.tt)
      setjoinhere(res.totalactivationamount)
      setEarnAmount(res.EarnAmount)

      setMaxIncome(res.MaxIncome)
      setmachingLevel(res.levelincome)
      let earned_wire = res.ParticipantEarnedWire
      setparticioatEarnd(earned_wire)
      setearendUSD(res?.ParticipantEarnedUSD)

      // console.log("ParticipantEarnedWire",earned_wire);
      setyesterdaycto(res.yesterdaycto)
      settodaycto(res.todaycto)
      settt(res.tt);
      setallParticipants(res?.TotalMembers)
      setjoined_last_24_hour(res?.NewToday)
      // {dashboard?.allParticipants?.all_participants
      //   ? dashboard?.allParticipants?.all_participants
      //   : 0}



      let response = await API.get(`GameWalletData?id=${user}`)

      // console.log("response",response.data.data[0].total);
      setgamedata(response.data.data[0].total)



    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  }


  const Timer1 = localStorage.getItem("Timer1");
  const Timer2 = localStorage.getItem("Timer2");



  const timer = async () => {
    try {

      // console.log("Timeree",Timer1);

      var currentDateTime = new Date();
      let resultInSeconds = currentDateTime.getTime() / 1000;
      let topupInSeconds = new Date(Timer1).getTime() / 1000;
      let Time_here = topupInSeconds - resultInSeconds
      let TimeFinal = parseInt(Time_here)
      if (TimeFinal <= 0 || Timer1 == "" || Timer1 == "Stop 7 Day Timer") {
        setDays_here(0)
        setHours_here(0)
        setMunits_here(0)
        setSeconds(0)
      } else {
        let days = parseInt(TimeFinal / 86400)
        setDays_here(days)
        TimeFinal = TimeFinal % (86400)
        let hours = parseInt(TimeFinal / 3600)
        setHours_here(hours)
        TimeFinal %= 3600
        let munites = parseInt(TimeFinal / 60)
        setMunits_here(munites)
        TimeFinal %= 60
        let second_here = parseInt(TimeFinal)
        setSeconds(second_here)
      }
    } catch (e) {
      console.log("Error While Timer", e);
    }
  }



  const timer2 = async () => {
    try {

      // console.log("Timeree",res.Bonus7DayTimer);

      var currentDateTime = new Date();
      let resultInSeconds = currentDateTime.getTime() / 1000;
      let topupInSeconds = new Date(Timer2).getTime() / 1000;
      let Time_here = topupInSeconds - resultInSeconds
      let TimeFinal = parseInt(Time_here)
      if (TimeFinal <= 0 || Timer2 == "" || Timer2 == "Stop 7 Day Timer") {
        setDays_here2(0)
        setHours_here2(0)
        setMunits_here2(0)
        setSeconds2(0)
      } else {
        let days = parseInt(TimeFinal / 86400)
        setDays_here2(days)
        TimeFinal = TimeFinal % (86400)
        let hours = parseInt(TimeFinal / 3600)
        setHours_here2(hours)
        TimeFinal %= 3600
        let munites = parseInt(TimeFinal / 60)
        setMunits_here2(munites)
        TimeFinal %= 60
        let second_here = parseInt(TimeFinal)
        setSeconds2(second_here)
      }
    } catch (e) {
      console.log("Error While Timer", e);
    }
  }

  useEffect(() => {

    setInterval(() => {
      timer()
      timer2()
    }, 1000);
  }, [])



  useEffect(() => {
    DashboardAPI()

  }, [])



  let [joining, setjoining] = new useState({
    series: [{
      name: "STOCK ABC",
      data: [[1, 34], [3, 54], [5, 23], [15, 43]]
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF']
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0,
        }
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      }
    },
  });

  const IDHERE = localStorage.getItem("ID");
  // console.log("totalEarning", valueran);

  let [earning, setearning] = new useState({

    series: [IDHERE],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            colors: "#293450"
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '90%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: "#fff",
              fontSize: "1.5rem"
            },
            value: {
              show: false
            }
          }
        }
      },
      fill: {
        type: "solid",
      },
      colors: ['#ffffff'],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE],
    },
  });
  let [earned_wire, setearned_wire] = new useState({
    series: [{
      name: "STOCK ABC",
      data: [[1, 34], [3, 54], [5, 23], [15, 43]]
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF']
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        }
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      }
    },
  });
  let [id_number, setid_number] = new useState({
    series: [{
      data: [{
        x: 'category A',
        y: 10
      }, {
        x: 'category B',
        y: 18
      }, {
        x: 'category C',
        y: 13
      },
      {
        x: 'category D',
        y: 10
      }, {
        x: 'category E',
        y: 18
      }, {
        x: 'category F',
        y: 13
      },
      {
        x: 'category G',
        y: 10
      }, {
        x: 'category H',
        y: 18
      }, {
        x: 'category I',
        y: 13
      }]
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF']
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'solid',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        }
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          borderRadius: 0,
          columnWidth: 7,
          barHeight: '70%',

        }
      }
    },
  });
  let [profit, setprofit] = new useState({
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            colors: "#293450"
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '97%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 10,
              color: "#fff",
              fontSize: "2.5rem"
            }
          }
        }
      },
      fill: {
        type: "solid",
      },
      colors: ['#2cd719'],
      stroke: {
        curve: 'smooth',
        lineCap: "round",
      },
      labels: ['300%'],
    },
  });

  useEffect(() => {
    copyTest ? toast.success("Copied") : <></>
    setTimeout(() => {
      setcopyTest(false)
    }, 10);
  }, [copyTest])





  return (

    <>
      <div class="page-wrapper " >
        <div class="page-content">
          <div class="row mt-3">
            <div class="col-12 col-lg-6 col-xl-6">
              <div class="row">
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10">
                    <div class="card-body card1">
                      <p>My NFT Package</p>
                      <h3 className='dash-h3'>$ {totalactivationamount}</h3>
                      {/* <!-- <p class="mb-0">Active Participate<span class="float-end">500k</span></p> --> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div class="card radius-10">
                    <div class="card-body card1">
                      <p>My Referral</p>
                      <div class="Left_Right">
                        <h6 className='dash-h3'>
                          Total : {LeftDirect}<br />
                          Active : {LeftActiveDirect}<br />
                          Left
                        </h6>
                        <h6 className='dash-h3'>
                          Total : {RightDirect}<br />
                          Active : {RightActiveDirect}<br />
                          Right
                        </h6>
                      </div>

                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div class="card radius-10">
                    <div class="card-body card1">
                      <p>LAG Token</p>
                      <div class="Left_Right">
                        <h6 className='dash-h3'>
                          {TotalAirdropToken}<br />
                          Total
                        </h6>
                        <h6 className='dash-h3'>
                          {ReceivedAirdropToken}<br />
                          Received
                        </h6>
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10">
                    <div class="card-body card1 text-center px-0 pb-5">
                      <p>Total Earning</p>
                      <div class="chart-container-10 d-flex align-items-center justify-content-center">
                        <div id="">
                          <Chart
                            className='dash-h3'
                            options={earning.options}
                            series={earning.series}
                            type="radialBar"
                            height={'350'}
                          />
                        </div>
                      </div>

                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      <div class="row align-items-center text-center">
                        <div class="col">
                          <h5 class="mb-0 dash-h3">{withdrawal}</h5>
                          <small class="extra-small-font">Total Withdrawal</small>
                        </div>
                        <div class="col border-end">
                          <h5 class="mb-0 dash-h3">{netBalance}</h5>
                          <small class="extra-small-font">Net Balance</small>
                        </div>

                      </div>
                    </div>

                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>

                  </div>

                </div>


              </div>



            </div>


            <div class="col-12 col-lg-6 col-xl-6">
              <div class="row">
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 height_styke_team" >
                    <div class="card-body card1">
                      <p>Team Size</p>
                      <div class="Left_Right">
                        <h6 className='dash-h3'>
                          Total : {LeftDownline}<br />
                          Active : {LeftActiveDownline}<br />
                          Left
                        </h6>
                        <h6 className='dash-h3'>
                          Total : {RightDownline}<br />
                          Active : {RightActiveDownline}<br />
                          Right
                        </h6>
                      </div>


                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>
                  </div>

                </div><div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10  height_styke_team" >
                    <div class="card-body card1">
                      <p>Team Business</p>
                      <div class="Left_Right">
                        <h6 className='dash-h3'>
                          {leftbusiness}<br />
                          Left
                        </h6>
                        <h6 className='dash-h3'>
                          {rightbusiness}<br />
                          Right
                        </h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-12 col-xl-12">
                  <div class="card radius-10">
                    <div class="card-body card1">
                      <p>Quick Starter Bonus</p>
                      <div class="Left_Right">

                        <h6>
                          <p className='dash-h3 ' id="demo1" style={{ marginBottom: "0px" }}>{`${Days_here}d ${Hours_here}h ${Munits_here}m ${Seconds}s`}</p>
                          <span className='fontsize'>  Time to Qualify</span>
                        </h6>
                        <h6>
                          <p className='dash-h3 ' id="demo1" style={{ marginBottom: "0px" }}>{`${Days_here2}d ${Hours_here2}h ${Munits_here2}m ${Seconds2}s`}</p>

                          <span className='fontsize'>   Time to Earn QSB</span>
                        </h6>
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10">
                    <div class="card-body card1">
                      <p>Affiliate Link Left</p>
                      <div class=" copy_btn_set">

                        <div class="wdg-box bxset primary">
                          <input type="text" class="wdg-input-box" id="myInput" readonly="" value={`https://nftxpress.club/Register_main?referrallink=${user}&position=Right`} />
                          <div class="fast-msg-box"></div>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;

                        <CopyToClipboard text={`https://nftxpress.club/Register_main?referrallink=${user}&position=Left`}
                          onCopy={() => setcopyTest(true)}  >
                          <div class="wdg-actions copy_btn_set2">
                            <button type="button" class="copy_btn_set3" >
                              <span className="fontdata">Copy</span>
                            </button>

                          </div>
                        </CopyToClipboard>

                      </div>

                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10">
                    <div class="card-body card1">
                      <p>Affiliate Link Right</p>
                      <div class="copy_btn_set">

                        <div class="wdg-box bxset primary">
                          <input type="text" class="wdg-input-box" id="myInput" readonly="" value={`https://nftxpress.club/Register_main?referrallink=${user}&position=Right`} />
                          <div class="fast-msg-box"></div>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="wdg-actions copy_btn_set2">
                          <CopyToClipboard text={`https://nftxpress.club/Register_main?referrallink=${user}&position=Right`}
                            onCopy={() => setcopyTest(true)}  >
                            <div class="wdg-actions ">
                              <button type="button" class="copy_btn_set3" >
                                <span className="fontdata">Copy</span>
                              </button>

                            </div>
                          </CopyToClipboard>


                        </div>
                      </div>

                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: "7px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>







          <div class="row">

            <div class="col-12 col-lg-3 col-xl-3">
              <div class="card radius-10 height_manage " >
                <div class="card-body ">
                  <p class="text-center  " >Withdrawal Share Bonus</p>
                  <div class="row mt-3 me-1">
                    <div class="col-md-6">
                      <h6 class="text-center dash-h3 ms-3" >Yesterday</h6>
                      <div class="Prg_container mt-3">
                        <div class="barcontainer">
                          <div class="bar" style={{ height: "25%" }}>
                            <p className='dash-h3' style={{ marginLeft: '1.9rem' }}>{yesterdaycto}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h6 class="text-center dash-h3 ms-3">Today</h6>
                      <div class="Prg_container mt-3">
                        <div class="barcontainer">
                          <div class="bar" style={{ height: "25%" }}>

                            <div className='me-5' style={{ marginLeft: '1.9rem' }}>
                              <p>{todaycto}</p>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                {/* <div class="progress-wrapper">
                  <div class="progress" style={{ height: "7px" }}>
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }}></div>
                  </div>
                </div> */}
              </div>
            </div>

            <div class="col-12 col-lg-5 col-xl-5">
              <div class="card radius-10 height_manage" >
                <div class="card-body card1">
                  <div class="d-flex align-items-center mt-3" style={{ justifyContent: 'center' }}>
                    <div class="income_set" style={{ textAlign: "center !important ", }}>
                      <p class="mb-0 text-center">All Income</p>

                    </div>

                  </div>
                  <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4 id='income-h4'>Referral Income</h4>
                      <h4 id='income-h4'>{`$ ${referral}`}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "44%" }}></div>
                    </div>
                  </div>
                  <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4 id='income-h4'>Quick Starter Bonus</h4>
                      <h4 id='income-h4'>{`$ ${TeamBonus}`}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4 id='income-h4'>Team Bonus</h4>
                      <h4 id='income-h4'>${matchingicome}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4 id='income-h4'>Matching Level Income</h4>
                      <h4 id='income-h4'>{`$ ${machingLevel}`}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div class="mt-1 mb_1">
                    <div class="income_name">
                      {/* ROI Income */}
                      <h4 id='income-h4'>Withdrawal Share Bonus</h4>
                      <h4 id='income-h4'>{`$ ${ctoincom}`}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div class="mt-1 mb_1">
                    <div class="income_name">
                      {/* Withdrawal Income */}
                      <h4 id='income-h4'>LAG Token</h4>

                      <h4 id='income-h4'>{`$ ${roiIncome}`}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  {/* <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4>Sports Bonus</h4>
                      <h4>$125</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "70%" }}></div>
                    </div>
                  </div> */}
                  {/* <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4>Reward Income</h4>
                      <h4>$123</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "80%" }}></div>
                    </div>
                  </div> */}

                </div>
                <div class="progress-wrapper">
                  <div class="progress" style={{ height: "7px" }}>
                    <div class="progress-bar" role="progressbar" style={{ width: "100" }}></div>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-12 col-lg-4 col-xl-4">
              <div class="card radius-10 ">
                <div class="card-body card1 pb-3">
                  <div class="Global_Position">
                    <h6 className='dash-h3'> Global Position</h6>
                    <div class="Left_Right">
                      <h6 className='dash-h3'>
                        {GlobalPosition}
                      </h6>

                    </div>
                  </div>
                  {/* <!-- <div id="bounce-rate"></div> --> */}
                </div>
                <div class="progress-wrapper">
                  <div class="progress" style={{ height: "7px" }}>
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>

              {/* <div class="col-12 col-lg-12 col-xl-12"> */}
              <div class="card radius-10">
                <div class="card-body card1 pack_heading">
                  <p className='dash-h3'> Gold</p>
                  <div class="Left_Right ddto">
                    <h6 className='dash-h3'>
                      Current Rank
                    </h6>
                    <h6 className='dash-h3' >
                      12345
                    </h6>
                  </div>

                  <div class="progress custum_color" style={{ height: '10px' }}>
                    <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                  </div>
                  <div class="prog_per mt-3">
                    <h6 className='dash-h3'>100%</h6>
                  </div>
                </div>

                <div class="progress-wrapper">
                  <div class="progress" style={{ height: "7px" }}>
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
              {/* </div> */}

              {/* <div class="col-12 col-lg-12 col-xl-12"> */}
              <div class="card radius-10">
                <div class="card-body card1 pack_heading">
                  <p> Double Gold</p>
                  <div class="Left_Right ddto">
                    <h6 className='dash-h3'>
                      Next Rank
                    </h6>
                    <h6 className='dash-h3'>
                      12345
                    </h6>
                  </div>

                  <div class="progress custum_color" style={{ height: '10px' }}>
                    <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                  </div>
                  <div class="prog_per mt-3">
                    <h6 className='dash-h3'>100%</h6>
                  </div>
                </div>
                <div class="progress-wrapper">
                  <div class="progress" style={{ height: "7px" }}>
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>

            </div>



          </div>

          <div class="row">

            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="col-md-12">

                <div class="prgs">
                  <img src="assets3/images/horse_green.png" id="dynamicwidth" style={{ marginLeft: ((MaxIncome / 400) * 100).toFixed(0) + "%" }} />

                  <div id="myProgress">
                    <div className='dash-h3' id="myBar" style={{ width: ((MaxIncome / 400) * 100).toFixed(0) + "%", backgroundColor: "green" }}></div>
                  </div>
                </div>
                <div class="text_color dash-h3" style={{ fontSize: "medium" }}>
                  {/* You have earned a total {EarnAmount} USD out of {tt} USD (Your earned {MaxIncome}% out of 400% of your investment ) */}
                  You have earned a total $ {EarnAmount}  out of $ {tt}  ({MaxIncome}% out of your total 400% of your investment)

                </div>

                <br />




              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  );
}

export default Dashboard;