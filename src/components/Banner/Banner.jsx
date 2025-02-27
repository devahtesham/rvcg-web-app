import Header from "./Header/Header";
import BANNER_VIDEO from "../../assets/vedios/banner-vedio.mp4"


export default function Banner() {
  return (
    <section className="main-banner">
      <Header />
      <div className="bg-overlay"></div>
      <video preload="auto" playsInline autoPlay muted loop>
        <source src={BANNER_VIDEO} />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content text-white">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3">
              <div>
                <h5>Welcome to</h5>
                <h1 className="mb-3">Realty Vision <br /> Capital Group</h1>
                <p className="mb-3">Your Source For Premium Real Estate Services</p>
                <button className="custom-btn primary-btn">REQUEST YOUR OFFER NOW</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="banner-wavy-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
        </svg>
      </div>


    </section>
  )
}