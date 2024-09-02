const Preloader = () => {
  return (
    <div className="preloader" style={{display: 'none'}}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="assets/img/logo/preloader.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
