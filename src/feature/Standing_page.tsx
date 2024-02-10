import Table from 'react-bootstrap/Table';
import './standing.css'
import OTTASOLO_FC from '../assets/OTTASOLO_FC.jpg';
import BEYOND_LIMIT_FA_1 from '../assets/BEYOND-LIMIT-FA-1.jpg';
import Frame from '../assets/Frame.jpg';
import willbro from '../assets/willbro.jpg'
import SEPTAGON_FC from '../assets/SEPTAGON-FC.jpg'
import nlo_logo_small from '../assets/nlo_logo_small.png'
import GOMBE_WARRIORS_FC from '../assets/GOMBE-WARRIORS-FC.jpg'
import super_pillars_fc from '../assets/super-pillars-fc.png'
import MAKWAD_WARRIORS_FC from '../assets/MAKWADA-WARRIORS-FC.jpg'
import THE_KINGS_FC from '../assets/THE-KINGS-FC.png'
import MAIKUNKELE_UTDFC from '../assets/MAIKUNKELE_UTDFC.jpg'
import FC_BASIRA from '../assets/FC-BASIRA.jpg'
import BUSSDOR_UTD_FC from '../assets/BUSSDOR-UTD-FC.png'
import kun_kahalifat from '../assets/kun-kahalifat.jpg'
import STANDARD_FC from '../assets/STANDARD-FC.jpg'
import ZAKI_MAI_RIGA_FC from '../assets/ZAKI-MAI-RIGA-FC.jpg'
import JEDO_FC from '../assets/JEDO-FC.png'


const Standing_page = () => {

  const stand =  [
        {
            id : 1,
            name: 'AC MIDLANDS ',
            logo : Frame,
            p: 12,                    
            W: 15,
            D: 15,
            L: 15,
            F: 15,
            A: 15,
            GD: 48,  
            pts :12,  
            last_game_W: ["W","W","W"],
            last_game_L: ["L"],
            last_game_D: ["D"],
            
        },
        {
            id : 2,
            name: 'WILLBROS FC ',
            logo : willbro,
            p: 12,                    
            W: 15,
            D: 15,
            L: 15,
            F: 15,
            A: 15,
            GD: 33,  
            pts :22,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 3,
            name: 'OTTA S FC ',
            logo : OTTASOLO_FC,
            p: 12,                    
            W: 15,
            D: 15,
            L: 15,
            F: 15,
            A: 15,
            GD: 22,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L","L"],
            last_game_D: ["D"],
              
        },
    
        {
            id : 4,
            name: 'BEYOND FA ', 
            logo : BEYOND_LIMIT_FA_1,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W","W"],
            // last_game_L: [""],
            last_game_D: ["D","D"],
              
        },
        {
            id : 5,
            name: 'SEPTAGON FC ', 
            logo : SEPTAGON_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W","W"],
            last_game_L: ["L"],
            last_game_D: ["D"],
              
        },
        {
            id : 6,
            name: 'GOMBE WARRIORS FC ', 
            logo : GOMBE_WARRIORS_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W"],
            last_game_L: ["L"],
            last_game_D: ["D","D","D"],
              
        },
        {
            id : 7,
            name: 'SUPER PILLARS FC ', 
            logo : super_pillars_fc,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        



        {
            id : 8,
            name: 'THE KINGS FC ', 
            logo : THE_KINGS_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 9,
            name: 'MAIKUNKELE_UTD FC', 
            logo : MAIKUNKELE_UTDFC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 10,
            name: 'FC BASIRAC', 
            logo : FC_BASIRA,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },     
        {
            id : 11,
            name: 'BUSSDOR UTD FC ', 
            logo : BUSSDOR_UTD_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 12,
            name: 'JEDO FC ', 
            logo : JEDO_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 13,
            name: 'ZAKI-MAI-RIGA-FC ', 
            logo : ZAKI_MAI_RIGA_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 14,
            name: 'STANDARD FC ', 
            logo : STANDARD_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 15,
            name: 'kun kahalifat', 
            logo : kun_kahalifat,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
        {
            id : 16,
            name: 'MAKWAD WARRIORS FC ', 
            logo : MAKWAD_WARRIORS_FC,           
            p: 12,                    
            W: 15,
            D: 11,
            L: 15,
            F: 15,
            A: 15,
            GD: 19,  
            pts :12,  
            last_game_W: ["W","W"],
            last_game_L: ["L"],
            last_game_D: ["D","D"],
              
        },
      
    ]
  
    
  return (
   <div className="standingWrapperMother">
     <section id='standingWrapper '>
        <div className="standingHeader nlo_logo_small_header">
                <div>
                <img src={nlo_logo_small} alt="" />
                <span>National League One</span>
                </div>
        </div>
   
      <div className="standingCenter">
            

    <Table striped bordered hover className='allT'>
      <thead>
        <tr>
          <th className='align'>Pos</th>
          <th  style={{textTransform: 'uppercase'}}>Team</th>          
          <th className='align'>P</th>
          <th className='align'>W</th>
          <th className='align'>D</th>
          <th className='align'>L</th>
          <th className='align'>F</th>
          <th className='align'>A</th>
          <th className='align'>GD</th>
          <th className='align'>Pts</th>
          <th className='Last_gamesHeader'>Last 5 games</th>         
               
        </tr>
      </thead>
      <tbody>
       {
        stand.map((item)=>(
            <tr>
            <td className='align'>{item.id++}</td>
            <td className='allTName'><img src={(item.logo && item.logo)} alt=""  className='standingLogo allTLogo'/> {item.name}</td>            
            <td className='align aligns'>{item.p}</td>
            <td className='align aligns'>{item.W}</td>
            <td className='align aligns'>{item.D}</td>
            <td className='align aligns'>{item.L}</td>
            <td className='align aligns'>{item.F}</td>
            <td className='align aligns'>{item.A}</td>
            <td className='align aligns'>{item.GD}</td>
            <td className='align aligns'>{item.pts}</td>
       
            <td id='last_games'>
              <div>
              {item?.last_game_W?.map((wg,index)=>(
                <div className='win' key={index}>{wg}</div>
            ))}
                </div>  
            <div>
            {item?.last_game_D?.map((d,index)=>(
                <div className='draw' key={index}>{d}</div>
            ))}
            </div>
            <div>
            {item?.last_game_L?.map((l,index)=>(
                <div className='loose' key={index}>{l}</div>
            ))}
            </div>
            </td>
          
            
          </tr>
        ))
       }        
      </tbody>
    </Table>
      </div>
     
     
    </section>
   </div>
  )
}

export default Standing_page
