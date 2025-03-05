import MEMBER_01 from "../../assets/img/m1.png"
import MEMBER_02 from "../../assets/img/m2.png"
import MEMBER_03 from "../../assets/img/m3.png"
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import InputComp from "../../components/UI/InputComp/InputComp";
import DropDownComp from "../../components/UI/DropDownComp/DropDownComp";
import MultiImageUpload from "../../components/MultiImageUploader/MultiImageUploader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EvaluateProperty, FileUpload, GetAllCities, GetPropertyFeatures, GetPropertyStatuses, GetPropertyTypes } from "../../store/slices/propertyManagementSlice/propertyManagementSlice";
import { moveToTop, OWNERSHIP_TYPE } from "../../data/global";
import { errorNotify, successNotify } from "../../Toastify/Toastify";


export default function AboutUS() {


  const dispatch = useDispatch()
  const { cities, propertyTypes } = useSelector((state) => state.PropertyMangementReducer)
  const [details, setDetails] = useState({
    title: '',
    address: '',
    city: '',
    country: '',
    property_type: '',
    price: '',
    square_foot: '',
    bedrooms: '',
    bathrooms: '',
    owner_name: '',
    owner_age: '',
    ownership_type: '',
    owner_email: '',
    govt_id_proof: '',
    owner_contact: '',
  })
  const [propertyImages, setPropertyImages] = useState([])

  useEffect(() => {
    moveToTop()
  }, [])

  useEffect(() => {
    dispatch(GetAllCities())
    dispatch(GetPropertyTypes())
  }, [])

  const propertyDetailsHandler = (e) => {
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value
    })

  }
  const handleMultiImgSelect = (files) => {
    files.map(file => {
      let formData = new FormData();
      formData.append('file', file);
      dispatch(FileUpload(formData))
        .then((res) => {
          console.log('[res]', res)
          setPropertyImages((prev) => [...prev, res.payload.id])
        })
    });

  }

  const submitHandler = (e) => {
    e.preventDefault()

    const payload = {
      ...details,
      image_ids: propertyImages
    }

    dispatch(EvaluateProperty(payload))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          successNotify("Details has been Submitted !")
          setDetails({
            title: '',
            address: '',
            city: '',
            country: '',
            property_type: '',
            price: '',
            square_foot: '',
            bedrooms: '',
            bathrooms: '',
            owner_name: '',
            owner_age: '',
            ownership_type: '',
            owner_email: '',
            govt_id_proof: '',
            owner_contact: '',
          })
        } else {
          errorNotify(response?.payload)

        }
      })
      .catch((error) => {
        console.log(error)
        errorNotify(error)
      })
  }




  return (
    <>
      <section className="main-banner about-bg">
        <div className="bg-overlay"></div>
        <div className="banner-content text-white h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-6">
                <div className="about-us-banner">
                  <h1 className="mb-3 text-center main-card-heading">About Us</h1>
                  <p className="mb-3 text-center">Committed to Helping your Achieve your Home-Buying and Selling Goals</p>
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

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7 py-4">
              <h1 className="main-heading text-center">Who we are</h1>
              <h3 className="text-dark-green-clr text-center">About Reality Vision Capital Group</h3>
            </div>
            <div className="col-6 mt-3">
              <p className="mb-3">
                Realty Vision Capital Group, we are a team of seasoned and dedicated real estate enthusiasts committed to supporting our clients in reaching their home-buying and selling goals. With years of collective experience and a genuine passion for real estate, we take pride in being one of the leading groups in the field.
              </p>
              <p className="mb-3">
                We understand that navigating the real estate market can be complex and emotionally charged, especially without a license. That’s why we prioritize providing you with the highest level of support and assistance. We take the time to understand your unique needs and preferences, tailoring our services accordingly to help you achieve your specific goals.
              </p>
              <p className="mb-3">
                Backed by a team of experts with a profound understanding of the real estate market, we offer valuable insights and advice at every step of the home buying or selling process. From guiding yo
              </p>
              <p className="mb-3">
                Our team of experts has a deep knowledge of the real estate market and can provide you with valuable insights and advice throughout the home buying or selling process. We’ll help you navigate the market, negotiate the best deal, and handle all the details to ensure a successful transaction.
              </p>
            </div>

            <div className="col-6 mt-3">
              <p className="mb-3">
                Our journey began with a clear mission: to offer exceptional service, expert guidance, and a seamless experience throughout the home buying and selling process. Whether you’re a first-time homebuyer, an experienced investor, or someone looking to sell your property, we are here to guide you toward success.
              </p>
              <p className="mb-3">
                through market trends to negotiating optimal deals and managing all transactional details, we are committed to ensuring a successful outcome.
              </p>
              <p className="mb-4">
                Realty Vision Capital Group, we believe in empowering our clients to achieve their dreams, all while adhering to legal and ethical standards. Contact us today to learn more about our services and how we can assist you in realizing your home-buying or selling aspirations.
              </p>
              <p>
                Realty Vision Capital Group, we’re not just in the business of selling homes – we’re in the business of helping our clients achieve their dreams. Contact us today to learn more about our services and how we can help you achieve your home-buying or selling goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-2">
              <div className="count-box d-flex flex-column align-items-center">
                <h1 className="mb-1">250+</h1>
                <h6 className="text-light-green-clr">Realized Projects</h6>
              </div>
            </div>
            <div className="col-2">
              <div className="count-box d-flex flex-column align-items-center">
                <h1 className="mb-1">150+</h1>
                <h6 className="text-light-green-clr">Staff Members</h6>
              </div>
            </div>
            <div className="col-2">
              <div className="count-box d-flex flex-column align-items-center">
                <h1 className="mb-1">50+</h1>
                <h6 className="text-light-green-clr">Offices</h6>
              </div>
            </div>
            <div className="col-2">
              <div className="count-box d-flex flex-column align-items-center">
                <h1 className="mb-1">450+</h1>
                <h6 className="text-light-green-clr">Local Experts</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-section pt-5 pb-4 mt-4 ">
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="">
                  <h1 className="text-center">Why Choose Realty Vision Capital Group? Why Are We Different?</h1>
                  <p className="text-center mb-3">
                    Embark on a transformative journey with Realty Vision Capital Group, where innovation, expertise, and commitment converge to redefine the landscape of real estate consulting. Unlike conventional services, we transcend boundaries, offering a comprehensive suite of solutions meticulously crafted to maximize your investment potential and propel your success in the dynamic real estate realm.
                  </p>
                  <p className="text-center">Here’s why we stand out:</p>
                  <p className="mt-4 mb-3">
                    1. <strong>Holistic Solutions</strong>: Beyond mere advice, we provide holistic strategies meticulously tailored to every facet of your real estate journey. From uncovering lucrative opportunities to streamlining operations, our solutions encompass the entire spectrum of real estate investment and management.
                  </p>
                  <p className="mb-3">
                    2. <strong>Cutting-Edge Tools</strong>: Our arsenal of proprietary tools and technologies goes beyond the ordinary, delivering advanced analytics, predictive modeling, and customizable dashboards to empower you with actionable insights and fuel informed decision-making.
                  </p>
                  <p className="mb-3">
                    3. <strong>Strategic Collaborations</strong>: We believe in the power of partnerships. Through our extensive network of industry professionals and strategic alliances, we facilitate connections, foster collaborations, and forge synergies that amplify your success in the market.
                  </p>
                  <p className="mb-3">
                    4. <strong>Digital Pioneering</strong>: Embracing the digital frontier, we harness the potential of innovative technologies such as blockchain and NFTs to revolutionize investment opportunities and expand the horizons of real estate wealth creation.
                  </p>
                  <p className="mb-3">
                    5. <strong>Client-Centric Focus</strong>: Your triumph is our mission. We prioritize transparency, integrity, and personalized attention, ensuring that each client receives dedicated support and tailored guidance to navigate their unique real estate goals.
                  </p>
                  <p className="mb-3">
                    6. <strong>Exclusive Investor Network</strong>: Gain access to our exclusive network of investors who are poised and ready to make strategic acquisitions. With pre-vetted buyers at your disposal, seize opportunities and expedite your real estate transactions with confidence.
                  </p>
                  <p className="text-center mb-3">
                    In a realm saturated with conventional consulting services, Realty Vision Capital Group emerges as a beacon of innovation, empowerment, and unparalleled excellence. Join us in shaping the future of real estate investment and management. Explore boundless possibilities with Realty Vision Capital Group today.”
                  </p>
                  <p className="text-center">
                    Realty Vision Capital Group, we are committed to providing our clients with the highest level of service and expertise in the real estate industry. Here are some reasons why you should choose us for your real estate needs:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="about-process d-flex flex-wrap mt-5 pt-5 justify-content-evenly gap-4">
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-197.64 -197.64 798.62 798.62" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(34.28390000000002,34.28390000000002), scale(0.83)"><path transform="translate(-197.64, -197.64), scale(24.956875)" d="M16,30.954465025237628C19.733136025750053,30.68515395726828,22.307805963629903,27.598509183231215,25.03397452441807,25.03397452441807C27.897460340328916,22.340264118704898,31.768130109452972,19.92925194333501,31.8969941213727,16C32.02755433725165,12.019028320457991,28.66633286470122,8.950786337642011,25.646624717927974,6.353375282072028C22.900403662704694,3.9912049718391813,19.622276575969867,2.3524407684066913,16,2.3261526365365306C12.350891337733707,2.2996697748029487,8.719544033520556,3.5608074072284244,6.212333815099052,6.212333815099049C3.764963286082462,8.800576133135433,3.184991427073025,12.43973502814619,3.070387180362429,15.999999999999998C2.9507413268474396,19.716886184616257,3.1290098753925,23.625608427019607,5.561249335428627,26.438750664571366C8.138945305111317,29.42012874309888,12.069006296169226,31.238049685763556,16,30.954465025237628" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.8066799999999998"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M201.675,115.898c-24.577,0-44.571,19.994-44.571,44.571c0,24.578,19.994,44.573,44.571,44.573 c24.571,0,44.561-19.995,44.561-44.573C246.235,135.892,226.246,115.898,201.675,115.898z"></path> <path d="M403.335,179.276c0-10.931-8.208-20.135-19.094-21.408l-22.891-2.676c-3.251-11.672-7.892-23.087-13.818-33.992 l14.091-17.808c6.768-8.547,6.077-20.858-1.622-28.652l-30.214-30.212c-4.074-4.072-9.482-6.315-15.23-6.315 c-4.844,0-9.612,1.666-13.427,4.69l-17.195,13.629c-11.289-6.424-23.367-11.483-35.967-15.067l-2.599-22.329 c-1.283-10.889-10.489-19.098-21.415-19.098h-42.848c-10.933,0-20.135,8.209-21.406,19.098l-2.603,22.325 c-12.919,3.657-25.341,8.908-36.984,15.633l-17.898-14.191c-3.793-3.008-8.546-4.664-13.382-4.664 c-5.744,0-11.164,2.226-15.28,6.285L43.275,74.81c-7.736,7.738-8.436,20.059-1.63,28.656l15.104,19.105 c-5.851,10.925-10.406,22.456-13.567,34.343l-24.085,2.748c-10.884,1.28-19.091,10.483-19.091,21.405L0,223.917 c0.008,10.927,8.221,20.13,19.108,21.409l25.604,2.973c3.32,10.84,7.718,21.283,13.097,31.11l-16.157,20.387 c-6.771,8.546-6.078,20.86,1.625,28.66l30.282,30.279c4.072,4.072,9.479,6.315,15.227,6.315c4.845,0,9.614-1.666,13.43-4.69 l20.227-16.007c10.31,5.74,21.219,10.355,32.495,13.747l3.037,26.103c1.279,10.888,10.484,19.099,21.412,19.099h42.849 c10.925,0,20.128-8.211,21.408-19.106l2.894-25.033c12.137-3.347,23.911-8.107,35.064-14.176l19.524,15.448 c3.799,3.007,8.555,4.664,13.391,4.664c5.744,0,11.163-2.228,15.271-6.289l30.285-30.287c7.736-7.739,8.433-20.058,1.626-28.646 l-15.151-19.222c6.191-11.052,11.035-22.617,14.426-34.446l23.268-2.674c10.889-1.285,19.1-10.492,19.1-21.417L403.335,179.276z M155.997,275.09v31.424c-6.142-2.686-12.003-5.895-17.528-9.571L155.997,275.09z M247.34,275.088l17.529,21.855 c-5.525,3.678-11.388,6.886-17.529,9.571V275.088z M249.976,218.598c-3.499-5.056-9.265-8.074-15.424-8.074 c-0.221,0-65.55,0-65.767,0c-6.157,0-11.924,3.018-15.371,8.001l-41.705,53.693c-15.284-19.447-24.41-43.953-24.41-70.55 c0-63.064,51.307-114.37,114.371-114.37c63.064,0,114.371,51.307,114.371,114.37c0,26.598-9.126,51.104-24.411,70.551 L249.976,218.598z"></path> </g> </g></svg>
              </div>
              <div className="process-card-heading">
                <h5>We prioritize honesty and transparency</h5>
              </div>
              <p>
                We believe in being honest with our clients and maintaining open communication throughout the entire process. We will always provide you with all the information you need to make informed decisions.
              </p>
            </div>
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-179.45 -179.45 807.53 807.53" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-179.45, -179.45), scale(25.2353125)" d="M16,31.117157886425655C20.035762100047712,31.58409739084086,24.126131532730597,29.871213944554807,26.963871376319545,26.963871376319545C29.771775065402693,24.08709676950723,30.75214186881352,20.019968360092715,30.75524822043048,16C30.75835738474898,11.976391687775735,30.00374638875885,7.6746189408359955,26.980828712422266,5.019171287577736C24.07594012411923,2.467404944362532,19.820583508675977,2.444256032506337,16,3.0384200115998574C12.773904727155047,3.5401312292438405,10.484652816704127,5.886706676563384,7.974906762638195,7.9749067626381915C5.039325693517496,10.417417084065466,0.5736304884018829,12.184183119480485,0.42185954915152735,15.999999999999996C0.26914701748411973,19.83949034697691,4.552510623244194,22.013949484576084,7.310081071187282,24.689918928812716C9.997942387872406,27.2982420485938,12.27942986725536,30.68668623550618,16,31.117157886425655" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M221.279,182.561c50.319,0,91.257-40.948,91.257-91.28C312.536,40.949,271.598,0,221.279,0 c-50.331,0-91.278,40.949-91.278,91.281C130.001,141.613,170.948,182.561,221.279,182.561z"></path> <circle cx="262.291" cy="264.136" r="29.572"></circle> <path d="M412.008,378.466l-86.234-165.309c-7.383-14.157-21.489-20.494-35.772-20.494h-0.041 c-1.413-0.1-134.222-0.045-135.718,0.158c-13.382,1.099-25.394,8.884-31.364,20.336L36.645,378.466 c-4.743,9.093-5.661,19.488-2.587,29.271c3.075,9.783,9.774,17.781,18.863,22.522c4.689,2.447,9.721,3.882,14.955,4.264 c0.92,0.066,1.854,0.101,2.777,0.101c14.371,0,27.424-7.91,34.063-20.643l25.686-49.238v64.955 c0,10.439,8.492,18.933,18.931,18.933h149.197c10.44,0,18.935-8.493,18.935-18.933v-66.456l26.469,50.739 c6.64,12.733,19.692,20.643,34.064,20.643c0.923,0,1.857-0.033,2.777-0.101c5.236-0.382,10.268-1.816,14.954-4.264 C414.495,420.474,421.798,397.24,412.008,378.466z M309.385,334.792c-0.143,0.231-0.493,0.621-1.23,0.621 c-0.368,0-0.793-0.1-1.263-0.296l-14.966-6.264c-0.368-0.154-0.806-0.235-1.266-0.235c-1.1,0-2.22,0.454-2.854,1.158l-7.189,7.969 c-0.6,0.665-1.341,1.031-2.088,1.031c-0.986,0-1.87-0.637-2.365-1.704l-14.085-30.384c-0.03,0.001-0.06,0.002-0.091,0.002 l-14.086,30.382c-0.494,1.067-1.379,1.704-2.365,1.704c-0.747,0-1.488-0.366-2.088-1.031l-7.189-7.969 c-0.635-0.704-1.755-1.158-2.855-1.158c-0.46,0-0.897,0.081-1.265,0.235l-14.968,6.264c-0.469,0.196-0.894,0.296-1.262,0.296 c-0.737,0-1.088-0.39-1.23-0.622c-0.226-0.366-0.377-1.037,0.186-2.151l18.271-36.172l-6.605-2.637 c-1.849-0.738-3.399-2.871-3.53-4.856l-0.6-9.027c-0.101-1.511-0.866-3.871-1.674-5.153l-4.82-7.654 c-1.059-1.685-1.059-4.321,0-6.006l4.82-7.654c0.808-1.282,1.573-3.643,1.674-5.153l0.6-9.027c0.131-1.985,1.682-4.118,3.53-4.856 l8.404-3.355c1.405-0.561,3.411-2.02,4.38-3.185l5.785-6.96c0.992-1.194,2.81-1.996,4.521-1.996c0.417,0,0.815,0.047,1.186,0.142 l8.775,2.234c1.397,0.355,4.014,0.356,5.412-0.001l8.775-2.233c1.897-0.482,4.476,0.369,5.708,1.854l5.785,6.96 c0.967,1.165,2.973,2.623,4.38,3.185l8.406,3.355c1.849,0.738,3.399,2.871,3.53,4.856l0.6,9.028 c0.101,1.511,0.866,3.871,1.674,5.153l4.82,7.654c1.06,1.685,1.06,4.321,0,6.006l-4.82,7.654c-0.808,1.282-1.573,3.643-1.674,5.153 l-0.6,9.028c-0.131,1.985-1.682,4.118-3.53,4.856l-7.033,2.807l18.182,36.001C309.762,333.753,309.611,334.424,309.385,334.792z"></path> </g> </g>
                </svg>
              </div>
              <div className="process-card-heading">
                <h5>We have extensive knowledge and experience</h5>
              </div>
              <p>
                Our team is made up of experienced and knowledgeable professionals who are experts in their respective fields. We are constantly staying up-to-date with industry trends and changes to ensure that we are always providing our clients with the most accurate and relevant information.
              </p>
            </div>
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-185.86 -185.86 825.05 825.05" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-185.86, -185.86), scale(25.7828125)" d="M16,28.63662165403366C17.787908052827753,28.433201751920368,19.717714424444846,28.75373222126656,21.283615584079676,27.86719490101636C22.83523210243105,26.988744852128246,23.54453063662575,25.18314130171452,24.616531122054774,23.758359470116325C25.614235127472533,22.432324118870124,26.482053337714813,21.0793588838844,27.420497978607905,19.710744734037803C28.639717671189736,17.932652292217142,31.385729276288327,16.54595004617911,31.01874252891892,14.421466551845887C30.638790290739507,12.22192592964841,26.93723086490121,12.262684100136905,25.801927813778967,10.340854338137436C24.68298509564924,8.446719185810831,26.58459177613722,5.174283641574502,24.79784903439916,3.890799650018227C23.00569897939721,2.6034313835468175,20.52078975372814,5.330932597059307,18.341934813203597,4.98206296336658C16.314374598076363,4.657418042594068,15.073902573373559,1.8635710678664719,13.025451579815249,2.005849940297228C11.066498950160746,2.1419125418283267,10.122360931724087,4.571617361285378,8.49205773658754,5.666204008697665C6.796705652405363,6.804464523394736,3.7647770039755364,6.645877790511893,3.194192676019618,8.606563694309436C2.550460610658275,10.818605498713804,5.810603516634751,12.62384346166317,5.7968723414730565,14.927608070132445C5.785029619825706,16.914535094064608,3.157667386467279,18.196581885060258,3.125191745041718,20.183278787257958C3.093620378133732,22.114656708707557,4.433790429386633,23.820894660639347,5.626662461225935,25.34019507277876C6.855706463505617,26.905565883193187,8.255784409608037,28.530893929031475,10.152527355282167,29.133638594435165C12.037439026483572,29.732623531832683,14.034882681826305,28.860203606065138,16,28.63662165403366" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.745,282.458l-29.016-23.847V200.05c0-2.424-1.972-4.395-4.396-4.395h-35.562c-2.424,0-4.395,1.972-4.395,4.395v22.109 l-35.733-29.368c-4.252-3.494-9.914-5.418-15.942-5.418c-6.029,0-11.691,1.924-15.943,5.418L5.655,282.458 c-4.412,3.626-6.343,7.548-5.437,11.045c0.906,3.497,4.498,5.988,10.116,7.016l17.612,3.222v136.433 c0,5.338,4.343,9.681,9.681,9.681h186.146c5.338,0,9.681-4.343,9.681-9.681V303.74l17.612-3.222 c5.618-1.027,9.21-3.519,10.116-7.016C262.088,290.005,260.157,286.084,255.745,282.458z M138.133,372.336 c-0.139,0.031-0.81,0.111-0.81,1.023v9.746c0,2.666-2.225,4.834-4.96,4.834h-4.424c-2.734,0-4.956-2.168-4.956-4.834v-9.262 c0-0.686-0.752-0.951-0.899-0.971c-0.549-0.084-12.875-2.029-19.243-5.346c-1.595-0.832-2.843-2.701-2.033-5.004l2.277-6.17 c0.688-1.848,2.407-3.041,4.381-3.041c0.724,0,1.427,0.16,2.089,0.473c0.105,0.049,10.476,4.908,18.139,4.908 c8.975,0,15.237-4.813,15.237-11.701c0-6.332-4.421-10.648-15.264-14.904c-13.564-5.156-26.125-12.021-26.125-27.219 c0-12.191,8.247-21.855,21.441-24.998c0.281-0.066,1.054-0.377,1.054-1.088l-0.012-9.305c0-2.666,2.224-4.834,4.954-4.834h4.279 c2.731,0,4.958,2.168,4.958,4.834l0.034,8.846c0,0.688,0.585,0.811,0.753,0.842c0.107,0.018,10.557,1.818,15.905,4.147 c1.607,0.695,2.869,2.633,2.037,4.855l-2.385,6.1c-0.697,1.779-2.379,2.93-4.279,2.93c-0.779,0-1.565-0.199-2.267-0.572 c-0.059-0.031-6.719-3.455-15.406-3.455c-9.82,0-13.302,5.371-13.302,9.971c0,5.746,3.792,8.928,16.92,14.191 c17.254,6.816,24.619,15.387,24.619,28.65C160.846,358.892,152.187,369.177,138.133,372.336z"></path> <path d="M451.471,236.545l-43.314-100.157c-3.502-8.105-10.24-13.542-20.209-13.542c-0.067,0-81.344-0.016-81.492-0.016 c-8.976,0-17.076,5.321-20.635,13.557L242.51,236.545c-2.383,5.509-2.479,11.616-0.268,17.197c2.21,5.58,6.461,9.965,11.97,12.347 c2.844,1.228,5.842,1.85,8.911,1.85c8.973,0,17.072-5.321,20.631-13.557l7.886-18.235v191.111 c0,13.645,11.101,24.745,24.746,24.745c13.646,0,24.747-11.101,24.747-24.745V298.706h10.496v128.554 c0,13.645,11.101,24.745,24.746,24.745c13.645,0,24.747-11.101,24.747-24.745V233.336l9.102,21.048 c3.56,8.235,11.66,13.557,20.632,13.557c3.072,0,6.07-0.622,8.91-1.85c5.509-2.382,9.76-6.767,11.971-12.347 C453.948,248.163,453.854,242.055,451.471,236.545z"></path> <path d="M344.172,114.594c31.221,0,56.622-25.406,56.622-56.636c0-31.228-25.4-56.634-56.622-56.634 c-31.228,0-56.635,25.405-56.635,56.634C287.537,89.188,312.944,114.594,344.172,114.594z"></path> </g> </g></svg>
              </div>
              <div className="process-card-heading">
                <h5>We are dedicated to our clients</h5>
              </div>
              <p>
                We understand that every client has unique needs and preferences, which is why we offer personalized service tailored to your specific situation. We take the time to get to know you and your goals to ensure that we are providing you with the best possible service.
              </p>
            </div>
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-234.69 -234.69 1041.81 1041.81" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-234.69, -234.69), scale(32.5565625)" d="M16,31.2123231315054C18.795069821350417,31.480420860603257,20.385134295914817,27.979201086491948,22.547136208329583,26.1875427961681C24.414884608254358,24.639733385941106,27.07619246641219,23.708837663708486,27.83480958341925,21.40477643934992C28.584730111597068,19.12712837211164,26.729683067750795,16.87988612728276,26.393424156598346,14.505651205998147C26.056164858585532,12.124352818616725,27.413761787544225,9.292070525425618,25.85938077274904,7.456797928592723C24.306898646817427,5.623767368083329,21.32683352529418,6.380335510629476,19.001476977806185,5.777908158865596C16.77210937330278,5.200348548258782,14.773501881876108,3.877882914815217,12.473210732137222,3.988858796188161C9.793668133200267,4.1181313891932385,7.053484006619026,4.747723261497002,4.9835512710118905,6.454192837224044C2.7401941806875616,8.303634877671385,0.2776792462093935,10.894067011672611,0.5911351041665096,13.784539692878027C0.9146913864680717,16.768151487279397,4.536067198904578,18.065077732079054,6.4897367746032515,20.343191688073603C7.811059759555359,21.88394574896401,8.87659371177167,23.476946094239135,10.213164429222989,25.00449191154371C12.114498866466308,27.177497371701087,13.125800689500934,30.936635453783225,16,31.2123231315054" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M368.8,184.672c27.518,0,49.906-22.389,49.906-49.907c0-27.52-22.388-49.909-49.906-49.909 c-27.512,0-49.895,22.39-49.895,49.909C318.906,162.283,341.288,184.672,368.8,184.672z"></path> <path d="M569.241,309.187l-35.982-35.982c-2.054-2.054-4.792-3.185-7.712-3.185c-2.919,0-5.658,1.131-7.712,3.185l-10.524,10.524 c-0.432-0.505-0.878-0.999-1.352-1.474c-4.825-4.826-11.334-7.484-18.327-7.485l-17.057-23.258 c-4.539-6.191-12.204-14.811-17.831-20.052l-35.153-32.736c-2.522-2.349-7.544-5.664-13.351-5.664c0,0-61.263,0-61.593,0 c-8.06,0-15.304,4.477-18.905,11.683l-25.67,51.361c-1.891,3.783-6.592,10.518-9.491,13.597l-18.164,19.297 c-3.867,4.108-5.902,9.476-5.731,15.114c0.17,5.639,2.527,10.873,6.634,14.738c3.932,3.702,9.071,5.741,14.472,5.741 c5.801,0,11.407-2.421,15.381-6.642l18.163-19.297c5.697-6.052,12.798-16.226,16.517-23.665l3.819-7.642 c0,0,5.346,30.242,6.863,40.329c0.076,0.502,0.1,1.112,0.088,1.25l-5.925,66.5c-0.64,7.188-0.944,18.461-0.692,25.664 l2.367,67.785c0.421,12.051,10.19,21.49,22.241,21.49c0.26,0,0.523-0.004,0.79-0.013c12.27-0.431,21.905-10.762,21.477-23.032 l-2.367-67.785c-0.188-5.38,0.066-14.799,0.544-20.156l3.972-44.581h8.382l12.227,51.081c1.786,7.461,5.444,18.385,8.509,25.41 l25.759,59.053c3.544,8.121,11.56,13.369,20.421,13.369c0.202,0,0.404-0.003,0.606-0.009c2.856-0.078,5.644-0.701,8.286-1.853 c5.452-2.378,9.651-6.737,11.824-12.273c2.173-5.537,2.061-11.588-0.317-17.04l-25.76-59.055 c-2.026-4.645-4.838-13.041-6.018-17.969L430.518,269.21c2.299,2.586,4.507,5.248,5.997,7.279l17.14,23.374 c1.488,2.028,3.316,3.751,5.374,5.11c0.357,6.4,2.947,12.285,7.439,16.774c0.474,0.474,0.968,0.92,1.472,1.351l-10.524,10.524 c-2.054,2.054-3.185,4.792-3.185,7.712c0,2.92,1.131,5.658,3.185,7.712l35.983,35.984c2.054,2.054,4.793,3.185,7.712,3.185 s5.658-1.131,7.712-3.185l60.418-60.42c2.054-2.054,3.185-4.792,3.185-7.712C572.426,313.979,571.294,311.241,569.241,309.187z M475.629,312.585c-1.211-1.21-2.135-2.642-2.759-4.216c3.719-0.38,7.247-1.724,10.304-3.967 c4.549-3.336,7.527-8.243,8.384-13.819c0.113-0.735,0.182-1.47,0.219-2.203c1.895,0.609,3.613,1.631,5.02,3.038 c0.478,0.478,0.897,0.999,1.286,1.539l-20.915,20.914C476.626,313.482,476.106,313.062,475.629,312.585z"></path> </g> <path d="M255.161,359.058h-11.2V122.663c0-5.959-4.848-10.807-10.807-10.807h-29.355V92.868c0-5.959-4.848-10.807-10.807-10.807 H72.507c-5.959,0-10.807,4.848-10.807,10.807v18.988H32.345c-5.959,0-10.807,4.848-10.807,10.807v236.395h-11.2 c-5.7,0-10.338,4.638-10.338,10.338v35.449c0,5.7,4.638,10.338,10.338,10.338h244.823c5.7,0,10.338-4.638,10.338-10.338v-35.449 C265.499,363.695,260.861,359.058,255.161,359.058z M91.549,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M91.549,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M91.549,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M155.374,367.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-92.251 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V367.548z M155.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M155.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M219.374,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M219.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M219.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z"></path> </g> </g></svg>
              </div>
              <div className="process-card-heading">
                <h5>We offer personalized service</h5>
              </div>
              <p>
                We understand that every client has unique needs and preferences, which is why we offer personalized service tailored to your specific situation. We take the time to get to know you and your goals to ensure that we are providing you with the best possible service.
              </p>
            </div>
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-234.69 -234.69 1041.81 1041.81" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-234.69, -234.69), scale(32.5565625)" d="M16,31.2123231315054C18.795069821350417,31.480420860603257,20.385134295914817,27.979201086491948,22.547136208329583,26.1875427961681C24.414884608254358,24.639733385941106,27.07619246641219,23.708837663708486,27.83480958341925,21.40477643934992C28.584730111597068,19.12712837211164,26.729683067750795,16.87988612728276,26.393424156598346,14.505651205998147C26.056164858585532,12.124352818616725,27.413761787544225,9.292070525425618,25.85938077274904,7.456797928592723C24.306898646817427,5.623767368083329,21.32683352529418,6.380335510629476,19.001476977806185,5.777908158865596C16.77210937330278,5.200348548258782,14.773501881876108,3.877882914815217,12.473210732137222,3.988858796188161C9.793668133200267,4.1181313891932385,7.053484006619026,4.747723261497002,4.9835512710118905,6.454192837224044C2.7401941806875616,8.303634877671385,0.2776792462093935,10.894067011672611,0.5911351041665096,13.784539692878027C0.9146913864680717,16.768151487279397,4.536067198904578,18.065077732079054,6.4897367746032515,20.343191688073603C7.811059759555359,21.88394574896401,8.87659371177167,23.476946094239135,10.213164429222989,25.00449191154371C12.114498866466308,27.177497371701087,13.125800689500934,30.936635453783225,16,31.2123231315054" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M368.8,184.672c27.518,0,49.906-22.389,49.906-49.907c0-27.52-22.388-49.909-49.906-49.909 c-27.512,0-49.895,22.39-49.895,49.909C318.906,162.283,341.288,184.672,368.8,184.672z"></path> <path d="M569.241,309.187l-35.982-35.982c-2.054-2.054-4.792-3.185-7.712-3.185c-2.919,0-5.658,1.131-7.712,3.185l-10.524,10.524 c-0.432-0.505-0.878-0.999-1.352-1.474c-4.825-4.826-11.334-7.484-18.327-7.485l-17.057-23.258 c-4.539-6.191-12.204-14.811-17.831-20.052l-35.153-32.736c-2.522-2.349-7.544-5.664-13.351-5.664c0,0-61.263,0-61.593,0 c-8.06,0-15.304,4.477-18.905,11.683l-25.67,51.361c-1.891,3.783-6.592,10.518-9.491,13.597l-18.164,19.297 c-3.867,4.108-5.902,9.476-5.731,15.114c0.17,5.639,2.527,10.873,6.634,14.738c3.932,3.702,9.071,5.741,14.472,5.741 c5.801,0,11.407-2.421,15.381-6.642l18.163-19.297c5.697-6.052,12.798-16.226,16.517-23.665l3.819-7.642 c0,0,5.346,30.242,6.863,40.329c0.076,0.502,0.1,1.112,0.088,1.25l-5.925,66.5c-0.64,7.188-0.944,18.461-0.692,25.664 l2.367,67.785c0.421,12.051,10.19,21.49,22.241,21.49c0.26,0,0.523-0.004,0.79-0.013c12.27-0.431,21.905-10.762,21.477-23.032 l-2.367-67.785c-0.188-5.38,0.066-14.799,0.544-20.156l3.972-44.581h8.382l12.227,51.081c1.786,7.461,5.444,18.385,8.509,25.41 l25.759,59.053c3.544,8.121,11.56,13.369,20.421,13.369c0.202,0,0.404-0.003,0.606-0.009c2.856-0.078,5.644-0.701,8.286-1.853 c5.452-2.378,9.651-6.737,11.824-12.273c2.173-5.537,2.061-11.588-0.317-17.04l-25.76-59.055 c-2.026-4.645-4.838-13.041-6.018-17.969L430.518,269.21c2.299,2.586,4.507,5.248,5.997,7.279l17.14,23.374 c1.488,2.028,3.316,3.751,5.374,5.11c0.357,6.4,2.947,12.285,7.439,16.774c0.474,0.474,0.968,0.92,1.472,1.351l-10.524,10.524 c-2.054,2.054-3.185,4.792-3.185,7.712c0,2.92,1.131,5.658,3.185,7.712l35.983,35.984c2.054,2.054,4.793,3.185,7.712,3.185 s5.658-1.131,7.712-3.185l60.418-60.42c2.054-2.054,3.185-4.792,3.185-7.712C572.426,313.979,571.294,311.241,569.241,309.187z M475.629,312.585c-1.211-1.21-2.135-2.642-2.759-4.216c3.719-0.38,7.247-1.724,10.304-3.967 c4.549-3.336,7.527-8.243,8.384-13.819c0.113-0.735,0.182-1.47,0.219-2.203c1.895,0.609,3.613,1.631,5.02,3.038 c0.478,0.478,0.897,0.999,1.286,1.539l-20.915,20.914C476.626,313.482,476.106,313.062,475.629,312.585z"></path> </g> <path d="M255.161,359.058h-11.2V122.663c0-5.959-4.848-10.807-10.807-10.807h-29.355V92.868c0-5.959-4.848-10.807-10.807-10.807 H72.507c-5.959,0-10.807,4.848-10.807,10.807v18.988H32.345c-5.959,0-10.807,4.848-10.807,10.807v236.395h-11.2 c-5.7,0-10.338,4.638-10.338,10.338v35.449c0,5.7,4.638,10.338,10.338,10.338h244.823c5.7,0,10.338-4.638,10.338-10.338v-35.449 C265.499,363.695,260.861,359.058,255.161,359.058z M91.549,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M91.549,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M91.549,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M155.374,367.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-92.251 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V367.548z M155.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M155.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M219.374,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M219.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M219.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z"></path> </g> </g></svg>
              </div>
              <div className="process-card-heading">
                <h5>We offer personalized service</h5>
              </div>
              <p>
                We understand that every client has unique needs and preferences, which is why we offer personalized service tailored to your specific situation. We take the time to get to know you and your goals to ensure that we are providing you with the best possible service.
              </p>
            </div>
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-234.69 -234.69 1041.81 1041.81" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-234.69, -234.69), scale(32.5565625)" d="M16,31.2123231315054C18.795069821350417,31.480420860603257,20.385134295914817,27.979201086491948,22.547136208329583,26.1875427961681C24.414884608254358,24.639733385941106,27.07619246641219,23.708837663708486,27.83480958341925,21.40477643934992C28.584730111597068,19.12712837211164,26.729683067750795,16.87988612728276,26.393424156598346,14.505651205998147C26.056164858585532,12.124352818616725,27.413761787544225,9.292070525425618,25.85938077274904,7.456797928592723C24.306898646817427,5.623767368083329,21.32683352529418,6.380335510629476,19.001476977806185,5.777908158865596C16.77210937330278,5.200348548258782,14.773501881876108,3.877882914815217,12.473210732137222,3.988858796188161C9.793668133200267,4.1181313891932385,7.053484006619026,4.747723261497002,4.9835512710118905,6.454192837224044C2.7401941806875616,8.303634877671385,0.2776792462093935,10.894067011672611,0.5911351041665096,13.784539692878027C0.9146913864680717,16.768151487279397,4.536067198904578,18.065077732079054,6.4897367746032515,20.343191688073603C7.811059759555359,21.88394574896401,8.87659371177167,23.476946094239135,10.213164429222989,25.00449191154371C12.114498866466308,27.177497371701087,13.125800689500934,30.936635453783225,16,31.2123231315054" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M368.8,184.672c27.518,0,49.906-22.389,49.906-49.907c0-27.52-22.388-49.909-49.906-49.909 c-27.512,0-49.895,22.39-49.895,49.909C318.906,162.283,341.288,184.672,368.8,184.672z"></path> <path d="M569.241,309.187l-35.982-35.982c-2.054-2.054-4.792-3.185-7.712-3.185c-2.919,0-5.658,1.131-7.712,3.185l-10.524,10.524 c-0.432-0.505-0.878-0.999-1.352-1.474c-4.825-4.826-11.334-7.484-18.327-7.485l-17.057-23.258 c-4.539-6.191-12.204-14.811-17.831-20.052l-35.153-32.736c-2.522-2.349-7.544-5.664-13.351-5.664c0,0-61.263,0-61.593,0 c-8.06,0-15.304,4.477-18.905,11.683l-25.67,51.361c-1.891,3.783-6.592,10.518-9.491,13.597l-18.164,19.297 c-3.867,4.108-5.902,9.476-5.731,15.114c0.17,5.639,2.527,10.873,6.634,14.738c3.932,3.702,9.071,5.741,14.472,5.741 c5.801,0,11.407-2.421,15.381-6.642l18.163-19.297c5.697-6.052,12.798-16.226,16.517-23.665l3.819-7.642 c0,0,5.346,30.242,6.863,40.329c0.076,0.502,0.1,1.112,0.088,1.25l-5.925,66.5c-0.64,7.188-0.944,18.461-0.692,25.664 l2.367,67.785c0.421,12.051,10.19,21.49,22.241,21.49c0.26,0,0.523-0.004,0.79-0.013c12.27-0.431,21.905-10.762,21.477-23.032 l-2.367-67.785c-0.188-5.38,0.066-14.799,0.544-20.156l3.972-44.581h8.382l12.227,51.081c1.786,7.461,5.444,18.385,8.509,25.41 l25.759,59.053c3.544,8.121,11.56,13.369,20.421,13.369c0.202,0,0.404-0.003,0.606-0.009c2.856-0.078,5.644-0.701,8.286-1.853 c5.452-2.378,9.651-6.737,11.824-12.273c2.173-5.537,2.061-11.588-0.317-17.04l-25.76-59.055 c-2.026-4.645-4.838-13.041-6.018-17.969L430.518,269.21c2.299,2.586,4.507,5.248,5.997,7.279l17.14,23.374 c1.488,2.028,3.316,3.751,5.374,5.11c0.357,6.4,2.947,12.285,7.439,16.774c0.474,0.474,0.968,0.92,1.472,1.351l-10.524,10.524 c-2.054,2.054-3.185,4.792-3.185,7.712c0,2.92,1.131,5.658,3.185,7.712l35.983,35.984c2.054,2.054,4.793,3.185,7.712,3.185 s5.658-1.131,7.712-3.185l60.418-60.42c2.054-2.054,3.185-4.792,3.185-7.712C572.426,313.979,571.294,311.241,569.241,309.187z M475.629,312.585c-1.211-1.21-2.135-2.642-2.759-4.216c3.719-0.38,7.247-1.724,10.304-3.967 c4.549-3.336,7.527-8.243,8.384-13.819c0.113-0.735,0.182-1.47,0.219-2.203c1.895,0.609,3.613,1.631,5.02,3.038 c0.478,0.478,0.897,0.999,1.286,1.539l-20.915,20.914C476.626,313.482,476.106,313.062,475.629,312.585z"></path> </g> <path d="M255.161,359.058h-11.2V122.663c0-5.959-4.848-10.807-10.807-10.807h-29.355V92.868c0-5.959-4.848-10.807-10.807-10.807 H72.507c-5.959,0-10.807,4.848-10.807,10.807v18.988H32.345c-5.959,0-10.807,4.848-10.807,10.807v236.395h-11.2 c-5.7,0-10.338,4.638-10.338,10.338v35.449c0,5.7,4.638,10.338,10.338,10.338h244.823c5.7,0,10.338-4.638,10.338-10.338v-35.449 C265.499,363.695,260.861,359.058,255.161,359.058z M91.549,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M91.549,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M91.549,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M155.374,367.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-92.251 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V367.548z M155.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M155.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M219.374,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M219.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M219.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z"></path> </g> </g></svg>
              </div>
              <div className="process-card-heading">
                <h5>We offer personalized service</h5>
              </div>
              <p>
                We understand that every client has unique needs and preferences, which is why we offer personalized service tailored to your specific situation. We take the time to get to know you and your goals to ensure that we are providing you with the best possible service.
              </p>
            </div>
            <div className="process-card">
              <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="75px" width="75px" id="Capa_1" viewBox="-234.69 -234.69 1041.81 1041.81" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-234.69, -234.69), scale(32.5565625)" d="M16,31.2123231315054C18.795069821350417,31.480420860603257,20.385134295914817,27.979201086491948,22.547136208329583,26.1875427961681C24.414884608254358,24.639733385941106,27.07619246641219,23.708837663708486,27.83480958341925,21.40477643934992C28.584730111597068,19.12712837211164,26.729683067750795,16.87988612728276,26.393424156598346,14.505651205998147C26.056164858585532,12.124352818616725,27.413761787544225,9.292070525425618,25.85938077274904,7.456797928592723C24.306898646817427,5.623767368083329,21.32683352529418,6.380335510629476,19.001476977806185,5.777908158865596C16.77210937330278,5.200348548258782,14.773501881876108,3.877882914815217,12.473210732137222,3.988858796188161C9.793668133200267,4.1181313891932385,7.053484006619026,4.747723261497002,4.9835512710118905,6.454192837224044C2.7401941806875616,8.303634877671385,0.2776792462093935,10.894067011672611,0.5911351041665096,13.784539692878027C0.9146913864680717,16.768151487279397,4.536067198904578,18.065077732079054,6.4897367746032515,20.343191688073603C7.811059759555359,21.88394574896401,8.87659371177167,23.476946094239135,10.213164429222989,25.00449191154371C12.114498866466308,27.177497371701087,13.125800689500934,30.936635453783225,16,31.2123231315054" fill="#CEB17E"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M368.8,184.672c27.518,0,49.906-22.389,49.906-49.907c0-27.52-22.388-49.909-49.906-49.909 c-27.512,0-49.895,22.39-49.895,49.909C318.906,162.283,341.288,184.672,368.8,184.672z"></path> <path d="M569.241,309.187l-35.982-35.982c-2.054-2.054-4.792-3.185-7.712-3.185c-2.919,0-5.658,1.131-7.712,3.185l-10.524,10.524 c-0.432-0.505-0.878-0.999-1.352-1.474c-4.825-4.826-11.334-7.484-18.327-7.485l-17.057-23.258 c-4.539-6.191-12.204-14.811-17.831-20.052l-35.153-32.736c-2.522-2.349-7.544-5.664-13.351-5.664c0,0-61.263,0-61.593,0 c-8.06,0-15.304,4.477-18.905,11.683l-25.67,51.361c-1.891,3.783-6.592,10.518-9.491,13.597l-18.164,19.297 c-3.867,4.108-5.902,9.476-5.731,15.114c0.17,5.639,2.527,10.873,6.634,14.738c3.932,3.702,9.071,5.741,14.472,5.741 c5.801,0,11.407-2.421,15.381-6.642l18.163-19.297c5.697-6.052,12.798-16.226,16.517-23.665l3.819-7.642 c0,0,5.346,30.242,6.863,40.329c0.076,0.502,0.1,1.112,0.088,1.25l-5.925,66.5c-0.64,7.188-0.944,18.461-0.692,25.664 l2.367,67.785c0.421,12.051,10.19,21.49,22.241,21.49c0.26,0,0.523-0.004,0.79-0.013c12.27-0.431,21.905-10.762,21.477-23.032 l-2.367-67.785c-0.188-5.38,0.066-14.799,0.544-20.156l3.972-44.581h8.382l12.227,51.081c1.786,7.461,5.444,18.385,8.509,25.41 l25.759,59.053c3.544,8.121,11.56,13.369,20.421,13.369c0.202,0,0.404-0.003,0.606-0.009c2.856-0.078,5.644-0.701,8.286-1.853 c5.452-2.378,9.651-6.737,11.824-12.273c2.173-5.537,2.061-11.588-0.317-17.04l-25.76-59.055 c-2.026-4.645-4.838-13.041-6.018-17.969L430.518,269.21c2.299,2.586,4.507,5.248,5.997,7.279l17.14,23.374 c1.488,2.028,3.316,3.751,5.374,5.11c0.357,6.4,2.947,12.285,7.439,16.774c0.474,0.474,0.968,0.92,1.472,1.351l-10.524,10.524 c-2.054,2.054-3.185,4.792-3.185,7.712c0,2.92,1.131,5.658,3.185,7.712l35.983,35.984c2.054,2.054,4.793,3.185,7.712,3.185 s5.658-1.131,7.712-3.185l60.418-60.42c2.054-2.054,3.185-4.792,3.185-7.712C572.426,313.979,571.294,311.241,569.241,309.187z M475.629,312.585c-1.211-1.21-2.135-2.642-2.759-4.216c3.719-0.38,7.247-1.724,10.304-3.967 c4.549-3.336,7.527-8.243,8.384-13.819c0.113-0.735,0.182-1.47,0.219-2.203c1.895,0.609,3.613,1.631,5.02,3.038 c0.478,0.478,0.897,0.999,1.286,1.539l-20.915,20.914C476.626,313.482,476.106,313.062,475.629,312.585z"></path> </g> <path d="M255.161,359.058h-11.2V122.663c0-5.959-4.848-10.807-10.807-10.807h-29.355V92.868c0-5.959-4.848-10.807-10.807-10.807 H72.507c-5.959,0-10.807,4.848-10.807,10.807v18.988H32.345c-5.959,0-10.807,4.848-10.807,10.807v236.395h-11.2 c-5.7,0-10.338,4.638-10.338,10.338v35.449c0,5.7,4.638,10.338,10.338,10.338h244.823c5.7,0,10.338-4.638,10.338-10.338v-35.449 C265.499,363.695,260.861,359.058,255.161,359.058z M91.549,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M91.549,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M91.549,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M155.374,367.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-92.251 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V367.548z M155.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M155.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z M219.374,314.547c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V314.547z M219.374,251.881c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V251.881z M219.374,188.548c0,1.65-1.35,3-3,3h-39.25c-1.65,0-3-1.35-3-3v-39.25 c0-1.65,1.35-3,3-3h39.25c1.65,0,3,1.35,3,3V188.548z"></path> </g> </g></svg>
              </div>
              <div className="process-card-heading">
                <h5>We offer personalized service</h5>
              </div>
              <p>
                We understand that every client has unique needs and preferences, which is why we offer personalized service tailored to your specific situation. We take the time to get to know you and your goals to ensure that we are providing you with the best possible service.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section>
        <h1 className="text-center py-3">Members</h1>
        <div className="members mb-4">
          <div className="container">
            <div className="members-container">
              <div className="member-card position-relative">
                <img src={MEMBER_01} alt="m1" className="w-100" />
                <div className="img-content text-white position-absolute bottom-0 pb-4 w-100 d-flex flex-column align-items-center">
                  <h6 className="fw-bold">Mr. Day</h6>
                  <span className="">Bussiness Development</span>
                  <span className="">Associate</span>
                </div>
                <div className="after-hover-box">
                  <div className="d-flex flex-column align-items-center ">
                    <h6 className="fw-bold">Mr. Day</h6>
                    <span className="">Bussiness Development</span>
                    <span className="">Associate</span>
                    <div className="mt-2 d-flex align-items-center gap-2">
                      <span>
                        <SlSocialFacebook size={20} color="blue" />
                      </span>
                      <span>
                        <FiTwitter size={20} color="blue" />
                      </span>
                      <span>
                        <CiLinkedin size={20} color="blue" />
                      </span>
                      <span>
                        <FaPinterestP size={20} color="red" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
              <div className="member-card position-relative">
                <img src={MEMBER_02} alt="m1" className="w-100" />
                <div className="img-content text-white position-absolute bottom-0 pb-4 w-100 d-flex flex-column align-items-center">
                  <h6 className="fw-bold m-0">Mr. Yohan</h6>
                  <span className="">Agent</span>
                </div>
                <div className="after-hover-box">
                  <div className="d-flex flex-column align-items-center ">
                    <h6 className="fw-bold m-0">Mr. Yohan</h6>
                    <span className="">Agent</span>
                    <div className="mt-2 d-flex align-items-center gap-2">
                      <span>
                        <SlSocialFacebook size={20} color="blue" />
                      </span>
                      <span>
                        <FiTwitter size={20} color="blue" />
                      </span>
                      <span>
                        <CiLinkedin size={20} color="blue" />
                      </span>
                      <span>
                        <FaPinterestP size={20} color="red" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
              <div className="member-card position-relative">
                <img src={MEMBER_03} alt="m1" className="w-100" />
                <div className="img-content text-white position-absolute bottom-0 pb-4 w-100 d-flex flex-column align-items-center">
                  <h6 className="fw-bold m-0">Mr. Green</h6>
                  <span className="">Agent</span>
                </div>
                <div className="after-hover-box">
                  <div className="d-flex flex-column align-items-center ">
                    <h6 className="fw-bold m-0">Mr. Green</h6>
                    <span className="">Agent</span>
                    <div className="mt-2 d-flex align-items-center gap-2">
                      <span>
                        <SlSocialFacebook size={20} color="blue" />
                      </span>
                      <span>
                        <FiTwitter size={20} color="blue" />
                      </span>
                      <span>
                        <CiLinkedin size={20} color="blue" />
                      </span>
                      <span>
                        <FaPinterestP size={20} color="red" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="opportunities text-white position-relative py-5">
        <div className="opportunity-overlay"></div>
        <div className="container position-relative">
          <h1 className="text-center mb-4">Unlocking Opportunities: The Role of Real Estate Wholesalers</h1>
          <div className="row">
            <div className="col-6">
              <p className="mb-3">
                Welcome to the world of real estate wholesaling, where opportunity meets expertise. Our mission is to bridge the gap between motivated sellers and savvy investors, creating a win-win scenario for all. As dedicated Real Estate Wholesalers, we specialize in sourcing distressed or discounted properties, negotiating favorable deals, and connecting sellers with buyers looking for their next investment.
              </p>

              <p>
                At the heart of our operation lies a deep understanding of the real estate market. We meticulously identify properties with untapped potential, conducting thorough due diligence to ensure quality.
              </p>
            </div>
            <div className="col-6">
              <p className="mb-3">
                Through our extensive network and negotiation prowess, we secure these properties at attractive prices. Our role is to facilitate seamless transactions that benefit sellers seeking a quick offload, investors hungry for discounted assets, and us, the experts who make it all happen.
              </p>

              <p className="mb-3">
                “Ready to explore the world of real estate opportunities? Contact us today and let’s navigate this journey together.”
              </p>

              <p>
                Feel free to adjust and customize this content to align with your branding and website design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-section pt-5 pb-4 mt-4 ">
        <div className="container">
          <div className="property-enquire-form bg-white">
            <div className="row justify-content-center py-3 pt-4">
              <div className="col-10">
                <h1 className="text-center">Request a free valuation of your property</h1>
              </div>
            </div>
            <form className='mt-4' onSubmit={submitHandler}>
              <fieldset className="reset mt-3 p-4 pt-0 t-0 ">
                <div className="d-flex">
                  <h1 className="reset mb-3 side-heading px-5">Property Details</h1>
                </div>
                <Row className='mb-3 d-flex justify-content-around'>
                  <Col xxl={6} className="bg-lightgray p-3">
                    <Row>
                      <Col lg={12}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Title: *"} type={"text"} placeholder={"Title"} controlId={"floatingInput-3"} name="title" value={details.title} onChange={propertyDetailsHandler} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='swimming-pool  mb-4'>
                          <DropDownComp label={"City"} options={cities} name="city" onChange={propertyDetailsHandler} className='p-3' value={details.city} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='swimming-pool  mb-4'>
                          <DropDownComp label={"Country"} options={[{ label: 'United States of America', value: 185 }]} name="country" onChange={propertyDetailsHandler} className='p-3' value={details.country} />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className='swimming-pool  mb-4'>
                          <DropDownComp label={"Property Type"} options={propertyTypes.length ? propertyTypes.map(item => { return { label: item[1], value: item[0] } }) : []} name="property_type" onChange={propertyDetailsHandler} className='p-3' />
                        </div>
                      </Col>


                      <Col lg={6}>
                        <div className='price'>
                          <InputComp label={"Price in ($):"} type={"number"} placeholder={"price"} controlId={"floatingInput-4"} name="price" onChange={propertyDetailsHandler} value={details.price} />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className='square_foot'>
                          <InputComp label={"Square Foot:"} type={"number"} placeholder={"Square Foot"} controlId={"floatingInput-4"} name="square_foot" onChange={propertyDetailsHandler}
                            value={details.square_foot}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>


                  <Col xxl={5} className="bg-lightgray p-3">
                    <Row>

                      <Col lg={12}>
                        <div className='address'>
                          <InputComp label={"Address:"} type={"text"} placeholder={"Address"} controlId={"floatingInput-4"} name="address" onChange={propertyDetailsHandler} value={details.address} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='bedrooms'>
                          <InputComp label={"Bedrooms:"} type={"number"} placeholder={"Bedrooms"} controlId={"floatingInput-4"} name="bedrooms" onChange={propertyDetailsHandler} value={details.bedrooms} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='bathrooms'>
                          <InputComp label={"Bathrooms:"} type={"number"} placeholder={"Bathrooms"} controlId={"floatingInput-4"} name="bathrooms" onChange={propertyDetailsHandler} value={details.bathrooms} />
                        </div>
                      </Col>
                      <Col xxl={12} className=" p-4">
                        <h5 className='mb-3'>Property Images</h5>
                        <MultiImageUpload onFilesSelect={handleMultiImgSelect} />
                      </Col>

                    </Row>
                  </Col>
                </Row>
              </fieldset>

              <fieldset className="reset mt-3 p-4 pt-0 t-0 ">
                <div className="d-flex">
                  <h1 className="reset mb-3 side-heading px-5">Owner Details</h1>
                </div>
                <Row className='mb-3 d-flex justify-content-around'>
                  <Col xxl={6} className="bg-lightgray p-3">
                    <Row>
                      <Col lg={12}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Owner Name: *"} type={"text"} placeholder={"Owner Name"} controlId={"floatingInput-3"} name="owner_name" onChange={propertyDetailsHandler} value={details.owner_name} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Owner Age: *"} type={"text"} placeholder={"Owner Age"} controlId={"floatingInput-3"} name="owner_age" onChange={propertyDetailsHandler} value={details.owner_age} />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className='swimming-pool  mb-4'>
                          <DropDownComp label={"Ownership Type"} options={OWNERSHIP_TYPE} name="ownership_type" onChange={propertyDetailsHandler} className='p-3' value={details.ownership_type} />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xxl={5} className="bg-lightgray p-3">
                    <Row>
                      <Col lg={12}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Owner Email Address: *"} type={"email"} placeholder={"Owner Email Address"} controlId={"floatingInput-3"} name="owner_email" onChange={propertyDetailsHandler} value={details.owner_email} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Govt ID Proof: *"} type={"number"} placeholder={"Govt ID Proof"} controlId={"floatingInput-3"} name="govt_id_proof" onChange={propertyDetailsHandler} value={details.govt_id_proof} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Owner Contact#: *"} type={"number"} placeholder={"Owner Contact#"} controlId={"floatingInput-3"} name="owner_contact" onChange={propertyDetailsHandler} value={details.owner_contact} />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </fieldset>
              <div className="text-end pb-3 pe-3">
                <button type="submit" className="btn bg-golden-clr text-white fw-bolder">ENQUIRE NOW</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}