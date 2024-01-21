import './news.css'
import GridExample from './Cards';
import BasicExample from './Cards_2';
const News = () => {
  return (
   <section id="newsCon">
    <div className="leftCon">
      <BasicExample />
    </div>
    <div className="rightCon">
    <GridExample />
    </div>
   </section>
  )
}

export default News;