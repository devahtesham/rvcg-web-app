import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EvaluateProperty, FileUpload, GetAllCities, GetPropertyTypes } from '../../store/slices/propertyManagementSlice/propertyManagementSlice'
import { Col, Row } from 'react-bootstrap'
import InputComp from '../../components/UI/InputComp/InputComp'
import DropDownComp from '../../components/UI/DropDownComp/DropDownComp'
import { moveToTop, OWNERSHIP_TYPE } from '../../data/global'
import MultiImageUpload from '../../components/MultiImageUploader/MultiImageUploader'
import BUY_TOP from "../../assets/img/buy-top.png"
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiHome4Line } from "react-icons/ri";
import { errorNotify, successNotify } from '../../Toastify/Toastify'

import { ImLoop2 } from "react-icons/im";
import { useNavigate } from 'react-router-dom'




export default function BuyProperty() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  useEffect(() => {
    moveToTop()
  }, [])
  const [propertyImages, setPropertyImages] = useState([])

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
      <section className="main-banner about-bg buy-property">
        <div className="bg-overlay"></div>
        <div className="banner-content text-white h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5">
                <div className="about-us-banner d-flex flex-column align-items-center">
                  <h1 className="mb-3 text-center main-card-heading" >Buy from Us</h1>
                  Why Choose Realty Vision Capital Group?
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

      <section className="py-5">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-xl-6">
              <div className="">
                <h2 className="main-heading mb-3">Buy Home from Us</h2>
                <p>At Realty Vision Capital Group, we’re committed to helping our clients find the perfect home that fits their needs and budget. Here are just a few reasons why you should consider buying a home from us</p>
                <button className={`mt-2 custom-btn bg-primary-clr cursor-pointer`} onClick={() => navigate('/contact-us')}>CONTACT WITH US</button>
              </div>
            </div>

            <div className="col-xl-6">
              <div className='sell-top-img'>
                <img src={BUY_TOP} alt="" className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="why-section pt-5 pb-4 mt-4 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className='text-center'>Why Choose Realty Vision Capital Group?</h1>
              <p className='text-center'>At Realty Vision Capital Group, we’re committed to helping our clients find the perfect home that fits their needs and budget. Here are just a few reasons why you should consider buying a home from us.</p>
            </div>
          </div>
          <section className="about-process d-flex flex-wrap mt-5 pt-5 justify-content-evenly gap-4">

            <div className="process-card">
              <div className='my-2'>
                <span>
                  <RiHome4Line color='#ceb17e' size={60} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Wide selection of properties</h5>
              </div>
              <p>
                We offer a diverse range of properties to choose from, including single-family homes, townhouses, condos, and more. With our extensive network and resources, we have access to exclusive properties that you won't find anywhere else.
              </p>
            </div>

            <div className="process-card">
              <div className='my-2'>
                <span>
                  <HiOutlineUsers color='#ceb17e' size={60} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Expert guidance</h5>
              </div>
              <p>
                Our team of experienced agents is dedicated to providing you with the highest level of service and expertise. We'll work with you to understand your unique needs and preferences and guide you through the home-buying process from start to finish.
              </p>
            </div>


            <div className="process-card">
              <div className='my-2'>
                <span>
                  <ImLoop2 color='#ceb17e' size={50} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Seamless experience</h5>
              </div>
              <p>
                We understand that buying a home can be stressful, which is why we're committed to making the process as seamless and stress-free as possible. We'll handle all the paperwork and logistics for you, so you can focus on finding your dream home.
              </p>
            </div>

            <div className="process-card">
              <div className='my-2'>
                <span>
                  <AiOutlineDollar color='#ceb17e' size={60} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Competitive Pricing</h5>
              </div>
              <p>
                We offer competitive pricing on all our properties, and we'll work with you to find a home that fits your budget. We also offer financing options and other resources to help make your home-buying experience more affordable.
              </p>
            </div>

          </section>
        </div>
      </section>

      <section className=" position-relative py-5">
        <div className="container position-relative">
          <h1 className="text-center mb-3">Buy Real Estate Properties For Investment</h1>
          <h3 className="text-center mb-4 text-light-green-clr">About Reality Vision Capital Group</h3>
          <div className="row">
            <div className="col-6">
              <p className="mb-3">
                Looking to purchase real estate for investment purposes or to find your dream home at a discounted price? We have got you covered! With our platform, you can research various real estate markets, find investment properties and get an idea of their potential value.
              </p>

              <p>
                Once you’ve found a property you’re interested in, our platform provides real estate calculators, training resources, and access to real estate experts who can assist you in evaluating the property.
              </p>
              <p>
                Join our network today to gain access to the resources, education, properties, and funding you need to get started with your first
              </p>
            </div>
            <div className="col-6">
              <p className="mb-3">
                Once you’ve identified your preferred market, our marketplace makes it easy to locate the perfect investment property. Set up alert notifications and browse exclusive listings not available on the MLS.
              </p>

              <p className="mb-3">
                Finally, when it comes to funding your investment. We provide access to the largest network of verified hard and private money lenders, so you can easily connect with lenders who are ready and willing to provide financing.
              </p>

              <p>
                investment property or to grow your existing real estate business.
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
