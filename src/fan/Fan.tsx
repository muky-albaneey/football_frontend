import { AiOutlineArrowRight } from "react-icons/ai"; 
import './fan.css'

const Fan = () => {
  return (
    <section className='fanWrapper'>
      <section className="topFanImage">
        <div className="top">
            <h1>
            “FOOTBALL IS NOTHING WITHOUT <br />
            FANS. <br />
            <span className='bayo'>-BAYO YINKA</span>
            </h1>
        </div>
        <div className="bottom">
            <button className="btnBottom">
            JOIN THE FAMILY
            </button>
        </div>
      </section>
      <section className="topFanText">
            <h1>2024/24 FAN ENGAGEMENT STATEMENT</h1>
            <div className="content">
                <div className="contentLeft"></div>
                <div className="contentRight">
                    <div className="contentInner">
                    <h2>  Lorem ipsum lorem ipsum 
                    ipsum lorem lorem</h2>
                    <button className='topFanBtn'>READ OUR COMMITMENT TO FANS</button>
                    </div>
                </div>
            </div>
      </section>
      <section className="topFanImage center">
      <div className="tops top">
            <h1>
            JOIN YOUR LOCAL <span style={{color: 'red'}}>SUPPORTERS </span><br />
            CLUB
            </h1>
        </div>
        <div className="bottom">
            <button className="btnBottom">
            FIND OUT MORE
            </button>
        </div>
      </section>
      <section className="fanStory">
        <h1>
         FANS STORIES 
        </h1>
        <hr />
        <section className="topNews">
            <div className="topItems topItems_1">
              <div className="newsRed"></div>
                    <div className="innerNews">
                        <h2>FROM ATHLETIC CLUB MIDLANDS TO THE WORLD</h2>
                        <h3>VIEW GALLERY <AiOutlineArrowRight className='arrow'/></h3>
                    </div>
                <div className="time">
                4d |  Social
                  </div>    
            </div>
            <div className="topItems topItems_2">
            <div className="newsRed_1 newsRed"></div>
                    <div className="innerNews innerNews_2">
                        <h2>FROM ATHLETIC CLUB MIDLANDS TO THE WORLD</h2>
                        <h3>VIEW GALLERY <AiOutlineArrowRight className='arrow'/></h3>
                    </div>
                <div className="time">
                4d |  Social
                  </div>  
            </div>
            <div className="topItems topItems_3">
            <div className="newsRed"></div>
                    <div className="innerNews">
                        <h2>FROM ATHLETIC CLUB MIDLANDS TO THE WORLD</h2>
                        <h3>VIEW GALLERY <AiOutlineArrowRight className='arrow'/></h3>
                    </div>
                <div className="time">
                4d |  Social
                  </div>  
            </div>
        </section>
        
      </section>
      <div className="reds"></div>
    </section>
  )
}

export default Fan
