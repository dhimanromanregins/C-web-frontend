import { Link } from "react-router-dom";

const MobileHeader = () => {
  return (
    <div className="mobile-header mobile-haeder1 d-block d-lg-none">
      <div className="container-fluid">
        <div className="col-12">
          <div className="mobile-header-elements">
            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/img/logo/main-logo.png" alt="" style={{width: '50%', filter: 'brightness(0.8)'}} />
              </Link>
            </div>
            <div className="mobile-nav-icon dots-menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
