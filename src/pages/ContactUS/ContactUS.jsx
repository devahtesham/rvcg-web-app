import React from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import InputComp from '../../components/UI/InputComp/InputComp'
import DropDownComp from '../../components/UI/DropDownComp/DropDownComp'
import RadioBoxComp from '../../components/RadioBoxComp/RadioBoxComp'

export default function ContactUS() {

  const propertyDetailsHandler = () => { }
  const featuresCheckHandler = () => { }

  return (
    <>


      <section className="contact-us-page">
        <section className="main-banner about-bg">
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

      <section className="why-section pt-5 pb-4 mt-4 ">
        <div className="container">
          <div className="property-enquire-form bg-white">
            <form className=''>
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
                          <InputComp required={true} label={"Full Name: *"} type={"text"} placeholder={"Full Name"} controlId={"floatingInput-3"} name="title" />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className='property-no'>
                          <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '160px' }}
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
                          <InputComp required={true} label={"Email: *"} type={"email"} placeholder={"Email"} controlId={"floatingInput-3"} name="title" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className='property-no'>
                          <InputComp required={true} label={"Phone: *"} type={"number"} placeholder={"Phone"} controlId={"floatingInput-3"} name="title" />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <h5 className='my-4 mb-3'>Timeline?</h5>
                        <Row className='flex-column'>
                          {
                            ["0-3 Months", "3-6 Months", "6-12 Months"].map((item, index) => (
                              <Col className="mb-2">
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
                                  name="group2"
                                  type={"radio"}
                                  id={`radio2-${index}`}
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
                              <Col className="mb-2">
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
                                  name="group1"
                                  type={"radio"}
                                  id={`radio-${index}`}
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
                <button className="btn bg-golden-clr text-white fw-bolder">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}