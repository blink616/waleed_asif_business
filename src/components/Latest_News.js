import React from "react";

export const Latest_News = () =>{
  return (
    <section className="latest-news sec-mar">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <a href="#">Web Design</a>
              </div>
              <div className="post-img">
                <a href="#">
                  <img src="img/post/post-1.jpg" alt="" />
                </a>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <img src="img/author/author-1.jpg" alt="" />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Alen Jodge</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
                <h3>
                  <a href="#">
                    Donec a porttitor phari sod tellus Nunc quis erosn.
                  </a>
                </h3>
                <p>
                  Aptent taciti sociosqu ad litora torquent pi himenaeos.
                  Praesent nec neque at dolor ti venenatis consectetur eu quis
                  ex.
                </p>
                <div className="view-btn">
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <a href="#">Software</a>
              </div>
              <div className="post-img">
                <a href="#">
                  <img src="img/post/post-2.jpg" alt="" />
                </a>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <img src="img/author/author-2.jpg" alt="" />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Kim karden</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
                <h3>
                  <a href="#">
                    Mekusa a porttitor phari sod tellus algo quis ksro.
                  </a>
                </h3>
                <p>
                  Aptent taciti sociosqu ad litora torquent pi himenaeos.
                  Praesent nec neque at dolor ti venenatis consectetur eu quis
                  ex.
                </p>
                <div className="view-btn">
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="title black">
              <span>Blog</span>
              <h2>Latest news And Article modern design.</h2>
              <div className="cmn-btn">
                <a href="#">View All Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


