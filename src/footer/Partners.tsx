import './partners.css';
import data from './data.json';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <section id='partnerWrapper'>
      <div className="partnerWrapperHeader">
        <h2>OUR PARTNERS</h2>
      </div>
      <main className="topPartner">
        {
          data.map((item)=>(
            <div className="partnerInfo">
                <div className="partnerInfoStart">
                    <img src={item.img} alt=""  className='partnerInfoStartImg'/>
                </div>
                <div className="partnerInfoCenter">
                    <div className="partnerInfoCenterLine"></div>
                    <h4>{item.text}</h4>
                </div>
                <div className="partnerInfoEnd">
                    <button className="partnerInfoEndBtn">
                        <Link to={item.link}>MORE</Link>
                    </button>
                </div>
            </div>
          ))
        }
     
        {/* <div className="leftBottomPartner"></div> */}
      
      </main>
      {/* <main className="bottomPartner">
      <div className="leftBottomPartner"></div>
        <div className="leftBottomPartner"></div>
      </main> */}
    </section>
  )
}

export default Partners