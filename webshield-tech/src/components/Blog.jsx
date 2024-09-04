import { Link } from 'react-router-dom';
import Cta from './Cta';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(()=>{
    const closeMenu = document.getElementsByClassName('menu-close')[0];
    if (closeMenu){
      closeMenu.click();
    };
  }, []);

  return (
    <>
      <div
        className="about-header-area"
        style={{
          backgroundImage: "url(assets/img/bg/inner-header.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="assets/img/elements/elements1.png"
          alt=""
          className="elements1 aniamtion-key-1"
        />
        <img
          src="assets/img/elements/star2.png"
          alt=""
          className="star2 keyframe5"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Blogs</h1>
                <Link to="/">
                  Home <i className="fa-solid fa-angle-right"></i>{" "}
                  <span>Blogs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-top-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-top-boxarea">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="content-area heading2">
                      <div className="tags-area">
                        <ul>
                          <li>
                            <Link to="/">
                              <img src="assets/img/icons/contact1.svg" alt="" />
                              Ben Stokes
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <img
                                src="assets/img/icons/calender1.svg"
                                alt=""
                              />
                              16 August 2023
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h2>
                        The Power of PPC Advertising: How to Maximize Your ROI
                      </h2>
                      <div className="space8"></div>
                      <div className="btn-area">
                        <Link to="/blogs" className="header-btn1">
                          Read Full Story{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-5">
                    <div className="images image-anime">
                      <img src="assets/img/all-images/blog-img19.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog1-scetion-area sp1 bg2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img1.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    10 Essential SEO Tips to Boost Your Website's Ranking
                  </Link>
                  <p>
                    Are you looking to improve your website's visibility and
                    attract more organic traffic?{" "}
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img2.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    The Power of PPC Advertising: How to Maximize Your ROI
                  </Link>
                  <p>
                    Unlock the full potential of your digital marketing strategy
                    with the power of PPC.
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img3.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    The Importance of Responsive Web Design in the Mobile Age
                  </Link>
                  <p>
                    Where mobile devices dominate internet usage, responsive web
                    design more crucial.
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img15.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    The Power of Content Marketing: How to Drive Engagement...
                  </Link>
                  <p>
                    Are you looking to improve your website's visibility and
                    attract more organic traffic?{" "}
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img16.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    The Importance of SEO in Digital Marketing:A Comprehensive
                    Guide
                  </Link>
                  <p>
                    Unlock the full potential of your digital marketing strategy
                    with the power of PPC.
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img3.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    The Power of Social Media Marketing: How to Build Your...
                  </Link>
                  <p>
                    Where mobile devices dominate internet usage, responsive web
                    design more crucial.
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img15.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    Social Media Marketing Strategies to Drive Engagement
                    Conversions
                  </Link>
                  <p>
                    Are you looking to improve your website's visibility and
                    attract more organic traffic?{" "}
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img18.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    Content Marketing 101: How to Create Compelling Converts..
                  </Link>
                  <p>
                    Unlock the full potential of your digital marketing strategy
                    with the power of PPC.
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img17.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/">
                    The Importance of Responsive Web Design in the Mobile Age
                  </Link>
                  <p>
                    Where mobile devices dominate internet usage, responsive web
                    design more crucial.
                  </p>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="space30"></div>
            </div>

            <div className="col-lg-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        <i className="fa-solid fa-angle-left"></i>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" to="/">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        <i className="fa-solid fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta/>
    </>
  );
};

export default Blog;
