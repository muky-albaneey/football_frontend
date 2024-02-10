import OTTASOLO_FC from '../assets/OTTASOLO_FC.jpg';
// import BEYOND_LIMIT_FA_1 from '../assets/BEYOND-LIMIT-FA-1.jpg';
import Frame from '../assets/Frame.jpg';
import willbro from '../assets/willbro.jpg'
import nlo_logo_small from '../assets/nlo_logo_small.png'
import GOMBE_WARRIORS_FC from '../assets/GOMBE-WARRIORS-FC.jpg'
import super_pillars_fc from '../assets/super-pillars-fc.png'
import MAKWAD_WARRIORS_FC from '../assets/MAKWADA-WARRIORS-FC.jpg'
import THE_KINGS_FC from '../assets/THE-KINGS-FC.png'
import MAIKUNKELE_UTDFC from '../assets/MAIKUNKELE_UTDFC.jpg'
import BUSSDOR_UTD_FC from '../assets/BUSSDOR-UTD-FC.png'


const Features_page = () => {
    const data = {
        feb: [
            {
                id: 1,
                imgHome: Frame,
                imgAway: GOMBE_WARRIORS_FC,
                nameHome: 'AC MIDLANDS',
                nameAway: 'BEYOND LIMIT FA',
                time: '17:30',
                date : 'Sun 11 Feb',
            },
            {
                id: 2,
                imgHome: willbro,
                imgAway: BUSSDOR_UTD_FC,
                nameHome: 'willbro',
                nameAway: 'AC MIDLANDS',
                time: '12:30',
                date : 'Sat 18 Feb',
            },
            {
                id: 3,
                imgHome: Frame,
                imgAway: OTTASOLO_FC,
                nameAway: 'OTTASOLO FC',
                nameHome: 'AC MIDLANDS',
                time: '14:30',
                date : 'Sat 24 Feb',
            },           
        ],
        march: [
            {
                id: 1,
                imgHome: Frame,
                imgAway: nlo_logo_small,
                nameAway: 'nlo logo small FC',
                nameHome: 'AC MIDLANDS',
                time: '15:45',
                date : 'Sun 03 Mar',
            },
            {
                id: 2,
                imgHome: GOMBE_WARRIORS_FC,
                imgAway: Frame,
                nameHome: 'GOMBE WARRIORS FC FC',
                nameAway: 'AC MIDLANDS',
                time: '09:00',
                date : 'Sat 09 Mar',
            },
            {
                id: 3,
                imgHome: super_pillars_fc,
                imgAway: Frame,
                nameHome: 'super pillars fc FC',
                nameAway: 'AC MIDLANDS',
                time: '18:45',
                date : 'Sat 16 Mar',
            },
            {
                id: 4,
                imgHome: Frame,
                imgAway: THE_KINGS_FC,
                nameAway: 'THE KINGS FC FC',
                nameHome: 'AC MIDLANDS',
                time: '16:00',
                date : 'Sat 30 Mar',
            }
        ],
        april: [
            {
                id: 1,
                imgHome: MAKWAD_WARRIORS_FC,
                imgAway: Frame,
                nameHome: 'MAKWAD WARRIORS FC FC',
                nameAway: 'AC MIDLANDS',
                time: '15:45',
                date : 'Wed 03 Apr',
            },
            {
                id: 2,
                imgHome: Frame,
                imgAway: MAIKUNKELE_UTDFC,
                nameAway: 'MAIKUNKELE UTDFC FC',
                nameHome: 'AC MIDLANDS',
                time: '09:00',
                date : 'Sat 06 Apr',
            },
           
        ],

    };
  return (
    
   <main id='allMatches'>
     <section id="featureAllStandingWrapper">
        <h1>FEBRUARY  2024</h1>
            {
                data.feb.map((item)=>(
                    <div className="featureAllStandingCon">
                <div className="featureAllStandingConHeader">
                <span>{item.date}</span><span></span>|<span>National League One</span>
                </div>
                <div className="featureAllStandingConBody">
                    <div className="featureAllStandingConBodyLeft">
                       <span>{item.nameHome}</span> <img src={item.imgHome} alt="" />
                    </div>
                    <button className="featureAllStandingConBodyCenterBtn">{item.time}</button>
                    <div className="featureAllStandingConBodyRight">
                    <img src={item.imgAway} alt="" />   <span>{item.nameAway}</span> 
                    </div>
                </div>
            </div>
                ))
            }
    </section>
    <section id="featureAllStandingWrapper">
        <h1>MARCH  2024</h1>
            {
                data.march.map((item)=>(
                    <div className="featureAllStandingCon">
                <div className="featureAllStandingConHeader">
                <span>{item.date}</span><span></span>|<span>National League One</span>
                </div>
                <div className="featureAllStandingConBody">
                    <div className="featureAllStandingConBodyLeft">
                       <span>{item.nameHome}</span> <img src={item.imgHome} alt="" />
                    </div>
                    <button className="featureAllStandingConBodyCenterBtn">{item.time}</button>
                    <div className="featureAllStandingConBodyRight">
                    <img src={item.imgAway} alt="" />   <span>{item.nameAway}</span> 
                    </div>
                </div>
            </div>
                ))
            }
    </section>
    <section id="featureAllStandingWrapper">
        <h1>APRIL 2024</h1>
            {
                data.april.map((item)=>(
                    <div className="featureAllStandingCon">
                <div className="featureAllStandingConHeader">
                <span>{item.date}</span><span></span>|<span>National League One</span>
                </div>
                <div className="featureAllStandingConBody">
                    <div className="featureAllStandingConBodyLeft">
                       <span>{item.nameHome}</span> <img src={item.imgHome} alt="" />
                    </div>
                    <button className="featureAllStandingConBodyCenterBtn">{item.time}</button>
                    <div className="featureAllStandingConBodyRight">
                    <img src={item.imgAway} alt="" />   <span>{item.nameAway}</span> 
                    </div>
                </div>
            </div>
                ))
            }
    </section>
   </main>
  )
}

export default Features_page
