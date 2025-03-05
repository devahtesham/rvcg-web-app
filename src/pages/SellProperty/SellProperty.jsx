import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EvaluateProperty, GetAllCities, GetPropertyTypes } from '../../store/slices/propertyManagementSlice/propertyManagementSlice'
import { Col, Row } from 'react-bootstrap'
import InputComp from '../../components/UI/InputComp/InputComp'
import DropDownComp from '../../components/UI/DropDownComp/DropDownComp'
import { moveToTop, OWNERSHIP_TYPE } from '../../data/global'
import MultiImageUpload from '../../components/MultiImageUploader/MultiImageUploader'
import SELL_TOP from "../../assets/img/sell-top.png"
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiHome4Line } from "react-icons/ri";
import { errorNotify, successNotify } from '../../Toastify/Toastify'
import FAQSection from '../../components/FAQ/FAQ'
import { useNavigate } from 'react-router-dom'



export default function SellProperty() {
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
      <section className="main-banner about-bg sell-property">
        <div className="bg-overlay"></div>
        <div className="banner-content text-white h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5">
                <div className="about-us-banner d-flex flex-column align-items-center">
                  <h1 className="mb-3 text-center main-card-heading">Sell Your Distressed Property With Us</h1>
                  <button className={`mt-2 custom-btn bg-primary-clr`} onClick={() => {
                    window.scrollTo({ top: document.body.scrollHeight - 2800, behavior: "smooth" });
                  }}>REQUEST YOUR OFFER NOW</button>
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
                <h2 className="main-heading mb-3">Sell Your Distressed Property</h2>
                <p className='mb-3'>Are you looking to sell a distressed property quickly and for a fair price? You’ve come to the right place.</p>
                <p>At Realty Vision Capital Group, we specialize in house flipping, which means we purchase distressed properties, renovate them, and sell them for a profit. We understand that selling a distressed property can be stressful and time-consuming, and that’s why we’re here to make the process as easy and hassle-free as possible.</p>
              </div>
            </div>

            <div className="col-xl-6">
              <div className='sell-top-img'>
                <img src={SELL_TOP} alt="" className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="why-section pt-5 pb-4 mt-4 ">
        <div className="container">
          <div>
            <h1 className='text-center'>Why Sell to Us?</h1>
            <h1 className='text-golden-clr text-center'>It's as Easy as 1,2,3 Sold</h1>
          </div>
          <section className="about-process d-flex flex-wrap mt-5 pt-5 justify-content-evenly gap-4">
            <div className="process-card">
              <div>
                <span>
                  <HiOutlineLightBulb color='#ceb17e' size={90} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Let Us Know</h5>
              </div>
              <p>
                Provide us with a few important details about your house and its condition by completing a brief form. This will help us determine the best offer price for your property.
              </p>
            </div>
            <div className="process-card">
              <div>
                <span>
                  <FiClock color='#ceb17e' size={90} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Fast and Flexible</h5>
              </div>
              <p>
                We can close on a distressed property in as little as (INSERT TIME), which means you'll get your money quickly and won't have to worry about a long and drawn-out sales process.
              </p>
            </div>
            <div className="process-card">
              <div>
                <span>
                  <AiOutlineDollar color='#ceb17e' size={90} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Fair Prices</h5>
              </div>
              <p>
                We understand that you want to get the most money possible for your distressed property, and that's why we offer competitive prices that are fair and reasonable. Skip the hassle of listing your property and the stress of waiting for the right offer. We'll provide you with a fair cash offer for your home within one business day.
              </p>
            </div>

            <div className="process-card">
              <div>
                <span>
                  <MdOutlineDoNotDisturbAlt color='#ceb17e' size={90} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>No Repairs Necessary</h5>
              </div>
              <p>
                We purchase distressed properties in any condition, which means you won't have to worry about making expensive repairs or renovations before you sell.
              </p>
            </div>


            <div className="process-card">
              <div>
                <span>
                  <HiOutlineUsers color='#ceb17e' size={90} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Experienced and Professional</h5>
              </div>
              <p>
                Our team of real estate professionals has years of experience in the industry, which means you can trust us to handle your sale with care and attention to detail.
              </p>
            </div>

            <div className="process-card">
              <div>
                <span>
                  <RiHome4Line color='#ceb17e' size={90} />
                </span>
              </div>
              <div className="process-card-heading">
                <h5>Sold</h5>
              </div>
              <p>
                Provide some basic information about your property, receive an offer within 24 hours, and choose your closing date. We take care of the rest, so you can move on to your next home or handle other expenses.
              </p>
            </div>

          </section>
        </div>
      </section>

      <section className="why-section pt-5 pb-4 mt-4 ">
        <div className="container">
          <div className="property-enquire-form bg-white">
            <div className="row justify-content-center py-3 pt-4">
              <div className="col-md-6">
                <h1 className="text-center mb-4 mt-3">Contact us today to get started on selling your home hassle-free!</h1>
                <p className='mb-3'>If you’re interested in selling your distressed property to us, please don’t hesitate to contact us today. We would be happy to discuss your options and provide you with a fair and competitive offer for your property. Thank you for considering our services, and we look forward to hearing from you soon!</p>
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

      <section className='why-section'>
        <div className="row justify-content-center py-3 pt-4">
          <div className="col-md-6">
            <h2 className="text-center mb-2 mt-3">Common Questions</h2>
            <h1 className='mb-3 fw-bolder text-center'>We're here to help</h1>
          </div>
        </div>
        <FAQSection />
      </section>
    </>
  )
}
