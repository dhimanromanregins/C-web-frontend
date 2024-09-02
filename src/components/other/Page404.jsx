import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div class="error-section-area sp1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 m-auto">
            <div class="heading2 text-center">
              <img src="assets/img/all-images/error-img1.png" alt="" />
              <div class="space50"></div>
              <h2> Sorry! Page Not Found!</h2>
              <div class="space16"></div>
              <p>
                Sorry, the page you are looking for doesn’t exist or has{" "}
                <br class="d-lg-block d-none" /> been moved. Here are some
                helpful links.
              </p>
              <div class="space24"></div>
              <div class="btn-area1">
                <Link to="/" class="header-btn1">
                  Back To Home{" "}
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
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
