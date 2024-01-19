import './about.css';
import Group from '../assets/Group.jpg'
import Frame_about from '../assets/Frame_about.jpg'
import Group_1 from '../assets/Group_1.jpg'
import Group_2 from '../assets/Group_2.jpg'
import Frame_7 from '../assets/Frame_7.jpg'

const About = () => {
  return (
    <section className="aboutWrapper">
        <main className="topImage">
            <div className="textCenter">
                <h1>About Us</h1>
                <span>Lorem ipsum</span><br />
                <button className="aboutBtn">See More</button>
            </div>
        </main>
        <main className="mainaboutCenter">
        <h2>Preparing Players to Achieve Success</h2>
        <div className="centerAbout center_1">
            <div className="centerAboutLeft center_inner ">
                <div className="upperText">
                <h1>Developing Confident and
                    Successful Players</h1>
                    <div className="line"></div>
                </div>
                    <article>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                    </article>
                    <button className="button"><span>View More</span></button>
            </div>
            <div className="centerAboutRight center_inner imgInnerCon">
            <img src={Group_1} alt="" className='inner_img' />
            </div>
        </div>
        <div className="centerAbout center_2">
            <div className="centerAboutLeft center_inner imgInnerCon">
            <img src={Group_2} alt="" className='inner_img' />
            </div>
            <div className="centerAboutRight center_inner">
            <div className="upperText upperTextRight">
                <h1>      Enjoy playing with a Unique Field Experience</h1>
                    <div className="line"></div>
                </div>
                    <article>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                    </article>
                    <button className="button"><span>View More</span></button>
            </div>
        </div>
        <div className="centerAbout center_3">
            <div className="centerAboutLeft center_inner">
            <div className="upperText">
                <h1>Passionate Staff That
                        Make a Difference</h1>
                    <div className="line"></div>
                </div>
                    <article>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                    </article>
                    <button className="button"><span>View More</span></button>
            </div>
            <div className="centerAboutRight center_inner imgInnerCon">
            <img src={Group} alt="" className='inner_img' />
            </div>
        </div>
        </main>
        <main className="aboutTeam">
        <img src={Frame_about} alt="" />
        </main>
        <main className="aboutWhy">
        <img src={Frame_7} alt="" />
        </main>
    </section>
  )
}

export default About
