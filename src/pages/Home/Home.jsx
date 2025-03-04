import Banner from "../../components/Banner/Banner";
import BROCHER_IMG from "../../assets/img/home-page-sec-2.webp"
import MAN_IMG from "../../assets/img/Invisible-Man.png"
import SearchProperty from "../../components/SearchProperty/SearchProperty";
import { SERVICES2_FEATURES_LIST, SERVICES_FEATURES_LIST } from "../../utils/utils";
import CityListing from "../../components/CityListing/CityListing";
import Clients from "../../components/Clients/Clients";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Banner />
      <section className="py-5">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-xl-6">
              <div className="">
                <h2 className="main-heading mb-3">Why our company is the perfect partner for you?</h2>
                <p>Realty Vision Capital Group offers a cutting-edge software designed to help real estate investors increase their wholesale property deal flow and investments. Our platform features a range of tools allowing investors to track income and expenses, generate leads, analyze potential wholesale deals, and streamline the investment lifecycle. Originally designed for wholesalers, our software is also marketed to house flippers, real estate professionals, and property investors seeking to maximize their investment opportunities.</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="partner-box-container">
                <div className="partner-box">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 64 64" width="64" height="64"><g transform="matrix(2.6666666666666665,0,0,2.6666666666666665,0,0)"><path d="M11.379 5.871L2.893 14.357 0.772 12.235" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M2.893 10.114L5.015 12.235" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M13.5,6.75a3,3,0,1,1,2.123-5.121,3.029,3.029,0,0,1,.478.621" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M11.25,18v3.75a1.5,1.5,0,0,0,1.5,1.5h6a1.5,1.5,0,0,0,1.5-1.5V18" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M23.25,17.25l-6.5-5.847a1.5,1.5,0,0,0-2.006,0L8.25,17.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M21.75 15.9L21.75 12" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M13.5,3.75h0A2.25,2.25,0,0,1,15.75,6v9" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                  </span>
                  <span>Turnkey delivery</span>
                </div>
                <div className="partner-box">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 64 64" width="64" height="64"><g transform="matrix(2.6666666666666665,0,0,2.6666666666666665,0,0)"><path d="M10.248,21.1a7.532,7.532,0,0,1-7.531-7.532C2.717,2.645,15.861,8.252,22.189,3a.466.466,0,0,1,.479-.048.5.5,0,0,1,.3.378C24.9,14.643,16.572,21.1,10.248,21.1Z" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M13.261,11.554A24.984,24.984,0,0,0,4.652,15.84L.75,19.17" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                  </span>
                  <span>Turnkey delivery</span>
                </div>
                <div className="partner-box">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 64 64" width="64" height="64"><g transform="matrix(2.6666666666666665,0,0,2.6666666666666665,0,0)"><path d="M19.025,15.375a9,9,0,0,0-14.05,0" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M3.000 9.750 A9.000 9.000 0 1 0 21.000 9.750 A9.000 9.000 0 1 0 3.000 9.750 Z" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M12 18.75L12 23.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M7.5 23.25L16.5 23.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M7.5,13.205V7a3.006,3.006,0,0,0-.6-1.8L5.582,3.443" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M16.5,13.205V7a3.006,3.006,0,0,1,.6-1.8l1.319-1.757" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                  </span>
                  <span>Turnkey delivery</span>
                </div>
                <div className="partner-box">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 140 140" width="140" height="140"><g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)"><path d="M12 2.251L12 0.751" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M18.364 4.888L19.425 3.827" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M21 11.251L22.5 11.251" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M18.364 17.615L19.425 18.676" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M5.636 4.888L4.575 3.827" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M3 11.251L1.5 11.251" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M5.636 17.615L4.575 18.676" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M9,16.449v2.3a3,3,0,0,0,6,0v-2.3" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M6.000 11.251 A6.000 6.000 0 1 0 18.000 11.251 A6.000 6.000 0 1 0 6.000 11.251 Z" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M12 21.751L12 23.251" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                  </span>
                  <span>Turnkey delivery</span>
                </div>
                <div className="partner-box">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 64 64" width="64" height="64"><g transform="matrix(2.6666666666666665,0,0,2.6666666666666665,0,0)"><path d="M.75,23.25H5.571a1.966,1.966,0,0,0,1.929-2v-2a1.966,1.966,0,0,0-1.929-2H.75" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M5.641,23.25H21.75a1.5,1.5,0,0,0,1.5-1.5v-3a1.5,1.5,0,0,0-1.5-1.5H5.641" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M20.25 17.25L20.25 23.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M17.25 17.25L17.25 23.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M14.25 17.25L14.25 23.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M11.25 17.25L11.25 23.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M4.5 20.25L0.75 20.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M16.2,17.25V16a.549.549,0,0,0-.388-.513A3.743,3.743,0,0,1,13.2,11.75c0-3.789,4.651.945,4.8-10.435A.586.586,0,0,0,17.4.75H6.6a.586.586,0,0,0-.6.565c.148,11.38,4.8,6.646,4.8,10.435a3.743,3.743,0,0,1-2.614,3.741A.548.548,0,0,0,7.8,16V17.25Z" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M6.023,2.25H3.55A.536.536,0,0,0,3,2.826c.131,1.379.774,4.752,3.925,4.673" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M17.977,2.25h2.542a.535.535,0,0,1,.547.576c-.132,1.389-.783,4.8-3.992,4.67" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                  </span>
                  <span>Turnkey delivery</span>
                </div>
                <div className="partner-box">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 64 64" width="64" height="64"><g transform="matrix(2.6666666666666665,0,0,2.6666666666666665,0,0)"><path d="M14.96,17.22l-.633,5.241a.666.666,0,0,0,1.127.591l1.823-1.822L19.1,23.052a.667.667,0,0,0,1.128-.591l-.641-5.277" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M13.500 14.250 A3.750 3.750 0 1 0 21.000 14.250 A3.750 3.750 0 1 0 13.500 14.250 Z" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M10.5,20.25h-6A1.5,1.5,0,0,1,3,18.75V2.25A1.5,1.5,0,0,1,4.5.75H15.129a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V8.25" fill="none" stroke="#16bfbf" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                  </span>
                  <span>Turnkey delivery</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST BROCHER */}
      <section className="container-fluid">
        <div className="row">
          <div className="col-6 p-0">
            <div>
              <img src={BROCHER_IMG} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-5 p-0">
            <div className="bg-primary-clr h-100 d-flex justify-content-center align-items-center">
              <div className="brocher-sec-content text-white p-5">
                <h1 className="main-heading">PropTech: Revolutionizing Real Estate</h1>
                <p className="mb-4">In today's dynamic real estate landscape, the convergence of technology and industry expertise has ushered in a new era of innovation and efficiency. As the digital age transforms every facet of our lives, the real estate sector is no exception, witnessing a paradigm shift driven by the emergence of Real Estate Technology, commonly referred to as PropTech. PropTech encompasses a diverse array of online tools, platforms, and software solutions meticulously designed to revolutionize how real estate professionals, investors, and property owners navigate the complexities of the market. From comprehensive property analysis to sophisticated market research, from seamless deal sourcing to efficient transaction management, and from expansive investor networking to strategic advisory services, the capabilities of PropTech are as vast as they are transformative. In this exciting realm, businesses like ours stand at the forefront, empowering stakeholders with invaluable resources and insights to navigate the intricacies of real estate with confidence and precision. Join us on a journey where innovation meets expertise, where technology unlocks untold opportunities, and where the future of real estate is redefined. Welcome to the world of Real Estate Technology and Consulting Excellence.</p>

                <button className="custom-btn primary-btn" onClick={() => navigate('/contact-us')}>REQUEST OUR BROCHURE</button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <SearchProperty />

      <section className="vimeo-vedio-section">
        <div className="banner-wavy-shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
          </svg>
        </div>
        <iframe
          loading="lazy"
          className="elementor-video-iframe"
          allowFullScreen={true}
          title="vimeo Video Player"
          src="https://player.vimeo.com/video/809955961?color&autopause=0&dnt=true&loop=0&muted=0&title=0&portrait=0&byline=0#t="
        ></iframe>
      </section>

      <section className="services-with-create-listing">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="card p-5 border-0 rounded-1 my-5">
                <h1 className="main-card-heading">SERVICES WITH <br /> CREATING LISTINGS</h1>
                <h5 className="text-golden-clr">Sell your property with us with many other services.</h5>
                <p>Experience the power of Realty Vision Capital Group, where it’s not just about posting properties—it’s about harnessing the full potential of our advanced tools and resources. Our platform offers a comprehensive suite of services tailored to investors, sellers, buyers, wholesalers, and agents alike. From cutting-edge analytics and customizable dashboards to our expansive referral network, we provide the ultimate toolkit for success in the dynamic world of real estate. Join us and discover why Realty Vision Capital Group is the go-to destination for anyone seeking to maximize their real estate ventures. With us, your listings are not just showcased; they’re strategically positioned for unparalleled success.</p>
                <div className="features my-4">
                  <h5 className="fw-bolder text-decoration-underline mb-1">FEATURES</h5>
                  <ul className="features-list mt-3 ps-3">
                    {
                      SERVICES_FEATURES_LIST.map(feature => (
                        <li className="mb-2" key={feature.id}>{feature.id}. &nbsp;{feature.name}</li>
                      ))
                    }
                  </ul>
                </div>
                <button className="custom-btn primary-btn w-50" onClick={() => navigate('/contact-us')}>LIST YOUR PROPERTY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityListing />

      <section className="services-with-create-listing services-with-create-listing-2 ">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-6">
              <div className="card p-5 border-0 rounded-1 my-2">
                <h1 className="main-card-heading">Become a Referral Associate With Many Services.</h1>
                <h5 className="text-golden-clr">Let's work together.</h5>
                <p>As a buyer, seller, agent, investor, wholesaler we understand that your time is valuable. That’s why we work tirelessly to identify properties that meet your investment criteria and provide you with the information and resources you need to make informed decisions.</p>
                <div className="features my-4">
                  <h5 className="fw-bolder text-decoration-underline mb-1">FEATURES</h5>
                  <ul className="features-list mt-3 ps-3">
                    {
                      SERVICES2_FEATURES_LIST.map(feature => (
                        <li className="mb-2" key={feature.id}>{feature.id}. &nbsp;{feature.name}</li>
                      ))
                    }
                  </ul>
                </div>
                <button className="custom-btn primary-btn w-50" onClick={() => navigate('/contact-us')}>BECOME REFERRAL</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bordered-section ">
        <div className="row justify-content-between">
          <div className="col-6 p-0">
            <div className=" h-100 d-flex justify-content-center align-items-center">
              <div className="brocher-sec-content px-5 mt-5">
                <h1 className="main-card-heading">Introducing "PropertyPro" (aka Invisible Mega Man)</h1>
                <h5 className="text-golden-clr mb-5">by RVCG: Your Real Estate Navigator in the Digital Age</h5>
                <p className="mb-4">Meet PropertyPro, the charismatic trailblazer and property virtuoso representing Realty Vision Capital Group in the world of NFTs. PropertyPro, also known as Invisible Mega Man, is passionate about showcasing the extraordinary in real estate, making him the ultimate choice for your NFT journey.</p>
                <p className="fw-bold mb-4">Why PropertyPro?</p>
                <p className="mb-3">Masterful Marketer: PropertyPro (Invisible Mega Man) crafts captivating property narratives, turning every listing into a digital masterpiece for buyers and investors. Property Whisperer: With an eye for hidden gems, PropertyPro unveils properties that align with your unique vision.</p>
                <p className="mb-3">NFT Maestro: Your guide to the world of property-backed NFTs, PropertyPro ensures you’re always one step ahead.</p>
                <p className="mb-3">Community Builder: Joining PropertyPro means exclusive insights, networking, and a supportive community of real estate enthusiasts. Innovation Evangelist: Backed by Realty Vision Capital Group, PropertyPro pioneers innovations, from virtual property tours to NFT auctions, transforming your real estate journey into an adventure.</p>
                <p className="mb-4">Say goodbye to conventional real estate and embrace an exhilarating journey with PropertyPro (aka Invisible Mega Man). Join us, and let’s redefine real estate together with Realty Vision Capital Group. Your digital ally awaits!</p>
                <button className="custom-btn primary-btn w-25 rounded-2 mb-5" onClick={() => navigate('/about-us')}>LEARN MORE</button>
              </div>

            </div>
          </div>
          <div className="col-6 p-0">
            <div className="h-100">
              <img src={MAN_IMG} alt="" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <section className="explore-premium-listing position-relative">
        <div className="explore-premium-listing-background-overlay"></div>
        <div className="explore-premium-listing banner-wavy-shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
          </svg>
        </div>
        <div className="explore-premium-listing-content">
          <div className="text-center">
            <h1 className="main-heading text-center text-white pt-5 mb-3">Explore Our Exclusive <span className="text-dark-green-clr">Premium Listings</span></h1>
            <p className="text-white">Discover unparalleled opportunities and luxury with our exclusive premium listings. Unlock the finest properties and investment prospects today!</p>
            <button className="custom-btn primary-btn mt-4" onClick={() => navigate('/our-listing')}>VIEW PREMIUM LISTINGS</button>
          </div>
        </div>
      </section>
    </>
  )
}
