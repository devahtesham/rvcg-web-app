

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EvaluateProperty, GetAllCities, GetPropertyTypes } from '../../store/slices/propertyManagementSlice/propertyManagementSlice'
import { Col, Row } from 'react-bootstrap'
import InputComp from '../../components/UI/InputComp/InputComp'
import DropDownComp from '../../components/UI/DropDownComp/DropDownComp'
import { OWNERSHIP_TYPE } from '../../data/global'
import MultiImageUpload from '../../components/MultiImageUploader/MultiImageUploader'
import REFEREAL_TOP from "../../assets/img/referal.png"
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiHome4Line } from "react-icons/ri";
import { errorNotify, successNotify } from '../../Toastify/Toastify'
import FAQSection from '../../components/FAQ/FAQ'
import REF2 from "../../assets/img/ref-2.png"



export default function ReferralAssociates() {
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
              <div className="col-xxl-5">
                <div className="about-us-banner d-flex flex-column align-items-center">
                  <h1 className="mb-3 text-center main-card-heading">Become an Associate</h1>
                  <button className={`mt-2 custom-btn bg-primary-clr`}>REQUEST YOUR OFFER NOW</button>
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
                <h2 className="main-heading mb-3">We Partner with Wholesalers</h2>
                <p className='mb-3'>As a whole seller, we understand that your time is valuable. That’s why we work tirelessly to identify properties that meet your investment criteria and provide you with the information and resources you need to make informed decisions.</p>
                <button className={`mt-2 custom-btn bg-primary-clr`}>REQUEST YOUR OFFER NOW</button>
              </div>
            </div>

            <div className="col-xl-6">
              <div className='sell-top-img'>
                <img src={REFEREAL_TOP} alt="" className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="why-section pt-5 pb-4 mt-4 ">
        <div className="container">
          <div>
            <h1 className='text-center'>Sellers and Investors from All Over The Country</h1>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6">
              <div className='sell-top-img'>
                <img src={REF2} alt="" className='w-100' />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="">
                <p className='mb-3'>
                  We work with a network of sellers and investors from all over the country to bring you the best deals on distressed properties, fixer-uppers, and other investment opportunities. We also offer comprehensive market analysis and data to help you understand the current state of the real estate market in your area.
                </p>
                <p className='mb-3'>
                  Our team of experienced professionals is committed to providing you with the highest level of service and support. We pride ourselves on our honesty, integrity, and transparency, and we will always put your needs first. Whether you’re a seasoned investor or just getting started, we’re here to help
                </p>
                <p>
                  Please feel free to browse our listings or contact us directly to learn more about how we can assist you in achieving your real estate goals. Thank you for visiting our website, and we look forward to working with you!
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="opportunities referral text-white position-relative py-5">
        <div className="opportunity-overlay"></div>
        <div className="container position-relative">
          <h1 className="text-center mb-4">Exclusive Referral Hub – Where Connections Spark Prosperity!</h1>
          <div className="row">
            <div className="col-6">
              <p className="mb-3">
                🚀 Dive into an Exciting World of Rewards and Opportunities!
              </p>

              <p className="mb-3">
                🌟 Elite Networking: Your referrals unlock a VIP portal, connecting you with industry leaders and passionate real estate enthusiasts. Elevate your network, forge powerful alliances, and seize unmatched opportunities.
              </p>

              <p>
                ✨ NFT Bonanza: Refer a friend, claim a dazzling Real Estate NFT! These unique digital tokens aren’t just collectibles; they’re symbols of your expanding network and financial growth.
              </p>


            </div>
            <div className="col-6">
              <p className="mb-3">
                💰 Lavish Commissions: Every pair of referrals means double the fun – and double the commissions! Enjoy generous rewards that reflect your passion for networking and success. After just two referrals, you make a whopping 60% commission on every deal!
              </p>



              <p className="mb-3">
                🚀 At RVC, your connections are golden tickets to extraordinary benefits:
              </p>

              <p>
                🏡 Elevate Your Journey: Be part of a community that thrives on collaboration, innovation, and mutual growth. Your referrals don’t just fuel your success; they help transform the real estate landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 d-flex flex-column align-items-center py-5">
              <h1 className='text-center'>Sign up for Referral Program</h1>
              <p className='text-center mb-3'>
                Join our affiliate program and earn commission on each successful sale you refer or new customer signup.
                Apply today and start earning!
              </p>
              <button className={`mt-2 custom-btn bg-primary-clr`}>SIGN FOR FREE TRIAL NOW</button>
            </div>
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