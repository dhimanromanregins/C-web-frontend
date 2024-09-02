const MobileHeader = () => {
  return (
    <div className="mobile-header mobile-haeder1 d-block d-lg-none">
      <div className="container-fluid">
        <div className="col-12">
          <div className="mobile-header-elements">
            <div className="mobile-logo">
              <a href="/">
                <img src="assets/img/logo/logo1.png" alt="" />
              </a>
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
