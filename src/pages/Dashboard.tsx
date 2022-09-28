import React from 'react'
import local from './../assets/local';
import earnig_svg from '../assets/svg/money-recive.svg'
import balance_svg from '../assets/svg/wallet-money.svg'
import sales_svg from '../assets/svg/bag.svg'
import arrow_up from '../assets/svg/arrow-up.svg'
import arrow_down from '../assets/svg/arrow-down.svg'
import '../scss/Dashboard.scss'

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
                <img src={earnig_svg} alt="earnig_svg" className='earnig_item_logo'/>
              </div>
              <div className="earning_content">
                <span className='earning_title'>Earning</span><br />
                <span className='earning_number'>$198k</span><br />
                <span className='earning_mount'><img src={arrow_up} alt="" /><span className='procent_green'>37.8%</span>{this_mouth}</span>
              </div>
              
          </div>
          <div className="balance_item">
            <div className="svg_div">
              <img src={balance_svg} alt="balance_svg" className='balance_item_logo'/>
            </div>
              <div className="balance_content">
                <span className='balance_title'>Balance</span><br />
                <span className='balance_number'>$2.4k</span><br />
                <span className='balance_mount'><img src={arrow_down} alt="" /><span className='procent_red'>2%</span>{this_mouth}</span>
              </div>
            
          </div>
          <div className="sales_item">
            <div className="svg_div">
              <img src={sales_svg} alt="sales_svg" className='sales_item_logo'/>
            </div>
              <div className="sales_content">
                <span className='sales_title'>Total Sales</span><br />
                <span className='sales_number'>$89k</span>
                <span className='sales_mount'><img src={arrow_up} alt="" /><span className='procent_green'>11%</span>{this_mouth}</span>
              </div>
            
          </div>
        </div>

      </div>

    <div  >

    </div>

    </div>
  )
}

export default Main