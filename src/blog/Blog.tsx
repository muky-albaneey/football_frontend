import './blog.css';
import BlogItems from './BlogItems';

const Blog = () => {
  return (
    <section className='blogWrapper'>
       <h1>Editor’s choice</h1>
       <main className="topBlog">
        <div className="bogLeft">
            <div className="blogItems blogItem_1">                                
                <div className="innerBlogsLeft ">
                    
                </div>
                <article className="innerBlogsRight">
                    <span className="blogTextTop">Tech</span>
                    <p>
                        This is just a place holder text
                        This is just a placeholder text
                    </p>
                    <span className="blogAuthor">By Nancy Offor</span>
                    <span className="blogTime">12th of Juanuary 2024</span>
                </article>
            </div>
            <div className="blogItems blogItem_2">
            <div className="innerBlogsLeft innerBlogsLeft_2">
                    
                    </div>
                    <article className="innerBlogsRight">
                        <span className="blogTextTop">Tech</span>
                        <p>
                            This is just a place holder text
                            This is just a placeholder text
                        </p>
                        <span className="blogAuthor">By Nancy Offor</span>
                        <span className="blogTime">12th of Juanuary 2024</span>
                    </article>
            </div>
            <div className="blogItems blogItem_3">
            <div className="innerBlogsLeft innerBlogsLeft_3">
                    
                    </div>
                    <article className="innerBlogsRight">
                        <span className="blogTextTop">Tech</span>
                        <p>
                            This is just a place holder text
                            This is just a placeholder text
                        </p>
                        <span className="blogAuthor">By Nancy Offor</span>
                        <span className="blogTime">12th of Juanuary 2024</span>
                    </article>
            </div>
        </div>
        <aside className="bogRight">
        
        </aside>
       </main>
       <main className="bottomBlog">
            <div className="bottomBlogLeft">
                <div className="imgBlogBottom"></div>
            </div>
            <div className="bottomBlogRight">
                <div>
                <BlogItems />
                </div>
            </div>
       </main>

    </section>
  )
}

export default Blog
