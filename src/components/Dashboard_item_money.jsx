import { React, useState } from "react";
import dashb from "../assets/dashb";
import '../scss/Dashboard.scss'

const DashboardItemMoney = () => {

    const this_mouth = " this mount";
    const logoDashb = dashb[0].logoSvgMoney.map((unit) => unit);

    // console.log(logoDashb);

    return (

        <div className="earnig_dashboard">
            {dashb[0].map((index) =>(
                <div className="earning_item">
                    <div className="svg_div">
                        <img src={dashb.logoSvgMoney[index]} alt="earnig_svg" className='earnig_item_logo'/>
                    </div>
                    <div className="earning_content">
                        <span className="earning_title">{dashb.title[index]}</span>
                        <span className='earning_number'>${dashb.money[index]}k</span>
                        <div className="earning_mouth"><img src={arrow_up} alt={index} /></div>
                    </div>
                </div>
            ))}
            
            
            {/* <div className="earning_item">
                <div className="svg_div">
                    <img src={earnig_svg} alt="earnig_svg" className='earnig_item_logo'/>
                </div>
                <div className="earning_content">
                    <span className='earning_title'>Earning</span><br />
                    <span className='earning_number'>$198k</span><br />
                    <span className='earning_mount'><img src={arrow_up} alt="" /><span className='procent_green'>37.8%</span>{this_mouth}</span>
                </div>
            </div> */}
        </div>
    );
};

export default DashboardItemMoney;