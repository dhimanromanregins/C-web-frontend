import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="error-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="heading2 text-center">
              <img src="assets/img/all-images/error-img1.png" alt="" />
              <div className="space50"></div>
              <h2> Sorry! Page Not Found!</h2>
              <div className="space16"></div>
              <p>
                Sorry, the page you are looking for doesn’t exist or has{" "}
                <br className="d-lg-block d-none" /> been moved. Here are some
                helpful links.
              </p>
              <div className="space24"></div>
              <div className="btn-area1">
                <Link to="/" className="header-btn1">
                  Back To Home{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
