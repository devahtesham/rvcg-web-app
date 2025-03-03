import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import InputComp from '../../components/UI/InputComp/InputComp'
import DropDownComp from '../../components/UI/DropDownComp/DropDownComp'
import RadioBoxComp from '../../components/RadioBoxComp/RadioBoxComp'
import { SubmitContactForm } from '../../store/slices/propertyManagementSlice/propertyManagementSlice'
import { useDispatch } from 'react-redux'
import { errorNotify, successNotify } from '../../Toastify/Toastify'
import { useNavigate } from 'react-router-dom'
import TICK from "../../assets/img/tick.png"
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";


export default function ContactUS() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    full_name: '',
    phone: '',
    email: '',
    help_type: '',
    timeline: '',
    message: ''
  })


  const submitHandler = (e) => {
    e.preventDefault()
    console.log('[details]', details)

    const payload = {
      ...details
    }

    dispatch(SubmitContactForm(payload))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          successNotify("Thank You For Contacting Us !")
          setDetails({
            full_name: '',
            phone: '',
            email: '',
            help_type: '',
            timeline: '',
            message: ''
          })
          navigate("/")
        } else {
          errorNotify(response?.payload)

        }
      })
      .catch((error) => {
        console.log(error)
        errorNotify(error)
      })
  }
  const propertyDetailsHandler = (e) => {

    const { name, value } = e.target

    if (name === "help_type") {
      setDetails({
        ...details,
        'help_type': value
      })
    } else if (name === "timeline") {
      setDetails({
        ...details,
        'timeline': value
      })
    } else {
      setDetails({
        ...details,
        [name]: value
      })
    }

  }




  return (
    <>
      <section className="contact-us-page">
        <section className="main-banner about-bg contact-page">
          <div className="bg-overlay"></div>
          <div className="banner-content text-white h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-6">
                  <div className="about-us-banner">
                    <h1 className="mb-3 text-center main-card-heading">Contact Us</h1>
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
      </section>

      <section className="pt-5 pb-4 mt-4 ">
        <div className="container">
          <div className="property-enquire-form bg-white">
            <form className='' onSubmit={submitHandler}>
              <fieldset className="reset mt-3 p-4 pt-0 t-0 ">
                <Row>
                  <div className="d-flex justify-content-center pt-4">
                    <h1 className="reset mb-3 side-heading px-5">Feel Free to Contact Us</h1>
                  </div>
                </Row>
                <Row className='mb-3 d-flex justify-content-around mt-3'>
                  <Col xxl={5} className="bg-lightgray p-3">
                    <Row>
                      <Col lg={12}>
                        <div className='property-no'>
                          <InputComp
                            required={true}
                            label={"Full Name: *"}
                            type={"text"}
                            placeholder={"Full Name"}
                            controlId={"floatingInput-3"}
                            name="full_name"
                            value={details.full_name}
                            onChange={propertyDetailsHandler}
                          />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className='property-no'>
                          <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '160px' }}
                              value={details.message}
                              onChange={propertyDetailsHandler}
                              name='message'
                            />
                          </FloatingLabel>
                        </div>
                      </Col>



                    </Row>
                  </Col>
                  <Col xxl={6} className="bg-lightgray p-3">
                    <Row>
                      <Col lg={6}>
                        <div className='property-no'>
                          <InputComp
                            required={true}
                            label={"Email: *"}
                            type={"email"}
                            placeholder={"Email"}
                            controlId={"floatingInput-3"}
                            name="email"
                            value={details.email}
                            onChange={propertyDetailsHandler}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='property-no'>
                          <InputComp
                            required={true}
                            label={"Phone: *"}
                            type={"number"}
                            placeholder={"Phone"}
                            controlId={"floatingInput-3"}
                            name="phone"
                            value={details.phone}
                            onChange={propertyDetailsHandler}
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <h5 className='my-4 mb-3'>Timeline?</h5>
                        <Row className='flex-column'>
                          {
                            ["0-3 Months", "3-6 Months", "6-12 Months"].map((item, index) => (
                              <Col className="mb-2" key={index}>
                                {/* */}
                                {/* <RadioBoxComp
                                  size={"19px"}
                                  id={index}
                                  label={item}
                                  name={`radio`}
                                  onChange={featuresCheckHandler}
                                /> */}
                                <Form.Check
                                  size={"19px"}
                                  label={item}
                                  name="timeline"
                                  type={"radio"}
                                  id={`radio2-${index}`}
                                  value={item}
                                  onChange={propertyDetailsHandler}
                                />
                              </Col>
                            ))
                          }
                        </Row>
                      </Col>
                      <Col sm={6}>
                        <h5 className='my-4 mb-3'>How Can we Help you?</h5>
                        <Row className='flex-column'>
                          {
                            ["Buying", "Selling", "Both Buying and Selling"].map((item, index) => (
                              <Col className="mb-2" key={index}>
                                {/* */}
                                {/* <RadioBoxComp
                                  size={"19px"}
                                  id={index}
                                  label={item}
                                  name={`radio`}
                                  onChange={featuresCheckHandler}
                                /> */}
                                <Form.Check
                                  size={"19px"}
                                  label={item}
                                  name="help_type"
                                  type={"radio"}
                                  id={`radio-${index}`}
                                  value={item}
                                  onChange={propertyDetailsHandler}
                                />
                              </Col>
                            ))
                          }
                        </Row>
                      </Col>


                    </Row>
                  </Col>
                </Row>
              </fieldset>

              <div className="text-end pb-3 pe-3">
                <button type='submit' className="btn bg-golden-clr text-white fw-bolder">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className='why-section mt-4 p-5'>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className='contact-box'>
                <div>
                  <span>
                    <MdOutlineWifiCalling3 size={50} color='#16BFBF' />
                  </span>
                </div>
                <div className="content mt-3">
                  <h3 className='fw-bold mb-3'>Call</h3>
                  <p className='mb-3'>Feel Free to Call us</p>
                  <a href="tel:+1 (602) 403 4869" className='text-dark-green-clr'>+1 (602) 403 4869</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='contact-box'>
                <div>
                  <span>
                    <MdAlternateEmail size={50} color='#16BFBF' />
                  </span>
                </div>
                <div className="content mt-3">
                  <h3 className='fw-bold mb-3'>Email</h3>
                  <p className='mb-3'>Feel free to email us for any query</p>
                  <a href="mailto:info@rvcgfirst.com" className='text-dark-green-clr'>info@rvcgfirst.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='contact-box'>
                <div>
                  <span>
                    <MdAlternateEmail size={50} color='#16BFBF' />
                  </span>
                </div>
                <div className="content mt-3">
                  <h3 className='fw-bold mb-3'>Address</h3>
                  <p className='mb-3'>Address</p>
                  <p className='text-dark-green-clr fw-bold'>5830 E 2ND ST, STE 7000 CASPER, WY 82609</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}