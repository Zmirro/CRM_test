import React from 'react'
import local from './../assets/local';
import earnig_svg from '../assets/svg/money-recive.svg'
import balance_svg from '../assets/svg/wallet-money.svg'
import sales_svg from '../assets/svg/bag.svg'
import arrow_up from '../assets/svg/arrow-up.svg'
import arrow_down from '../assets/svg/arrow-down.svg'
import '../scss/Dashboard.scss'
import DashboardItemMoney from '../components/Dashboard_item_money';

const name = "{name}";
const this_mouth =" this mount";

const Main = () => {
  return (
    <div style={{flex:'2'}}>
      <div className="container_dashboard">
        <div className="header_dashboard">Hello {name} 👋🏼,</div>
        <div className="earnig_dashboard">
          <div className="earning_item">
              <div className="svg_div">
                <img src={earnig_svg} alt="earnig_svg" className='earnig_item_logo green'/>
              </div>
              <div className="earning_content">
                <span className='earning_title'>Earning</span>
                <span className='earning_number'>$198k</span>
                <div className='earning_mount'><img src={arrow_up} alt="" /><span className='procent_green'>37.8%</span>{this_mouth}</div>
              </div>
          </div>
          <div className="earning_item">
            <div className="svg_div">
              <img src={balance_svg} alt="balance_svg" className='earnig_item_logo blue'/>
            </div>
              <div className="earning_content">
                <span className='earning_title'>Balance</span>
                <span className='earning_number'>$2.4k</span>
                <div className='earning_mount'><img src={arrow_down} alt="" /><span className='procent_red'>2%</span>{this_mouth}</div>
              </div>
            
          </div>
          <div className="earning_item">
            <div className="svg_div">
              <img src={sales_svg} alt="sales_svg" className='earnig_item_logo red'/>
            </div>
              <div className="earning_content">
                <span className='earning_title'>Total Sales</span>
                <span className='earning_number'>$89k</span>
                <div className='earning_mount'><img src={arrow_up} alt="" /><span className='procent_green'>11%</span>{this_mouth}</div>
              </div>
          </div>
          {/* <DashboardItemMoney/> */}
        </div>
      </div>
    </div>
  )
}

export default Main