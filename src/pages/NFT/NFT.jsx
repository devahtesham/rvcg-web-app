import React, { useEffect } from 'react'
import NFT_IMG from "../../assets/img/nftt.png"
import { HiOutlineUsers } from 'react-icons/hi'
import { ImLoop2 } from 'react-icons/im'
import { AiOutlineDollar } from 'react-icons/ai'
import { RiHome4Line } from 'react-icons/ri'

import TICK from "../../assets/img/tick.png"
import { moveToTop } from '../../data/global'


export default function NFT() {

  useEffect(() => {
    moveToTop()
  }, [])

  return (
    <>
      <section className="nft-section">
        <div className="h-100">
          <div className="container">
            <div className="row justify-content-between align-items-center pt-5">
              <div className="col-xxl-6">
                <div className="about-us-banner">
                  <h1 className="fw-bolder mb-1">Introducing "PropertyPro"</h1>
                  <h1 className="fw-bolder">(aka Invisible Mega Man)</h1>
                  <h5 className="text-golden-clr">by RVCG: Your Real Estate Navigator in the Digital Age</h5>
                </div>

              </div>
              <div className="col-xxl-5">
                <div>
                  <img src={NFT_IMG} alt="" className='w-100' />
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section className="why-nft-sec">
        <div className="row justify-content-center" >
          <div className="col-lg-6 bg-white p-4" style={{ borderRadius: 8 }}>
            <p className='mb-3 mt-2'>
              In the ever-evolving landscape of real estate, a revolutionary force has emerged – NFTs (Non-Fungible Tokens). But what exactly is this game-changing innovation, and how can it transform the world of real estate for investors, buyers, sellers, and wholesalers?
            </p>
            <p className='mb-3'>
              NFTs, at their core, are unique digital assets built on blockchain technology. They represent ownership or proof of authenticity of a specific item, whether it’s digital art, collectibles, or, in our case, real estate properties. Imagine owning a one-of-a-kind piece of digital art, akin to owning the Mona Lisa, but in the digital realm. This unparalleled uniqueness and traceability is what makes NFTs a groundbreaking concept
            </p>
            <p>
              In the realm of real estate, NFTs can be used as digital representations of properties. Each NFT becomes a digital certificate of ownership, eliminating the need for traditional paper deeds and making property transactions faster, more secure, and easily traceable. But it doesn’t stop there – NFTs bring a host of benefits:
            </p>
            <section className="about-process d-flex flex-wrap justify-content-evenly gap-4 mt-5 ">

              <div className="process-card">
                <div className='my-2'>
                  <span>
                    <img src={TICK} alt="tick" className='w-100' />
                  </span>
                </div>
                <div className="process-card-heading">
                  <h5>Fractional Ownership
                  </h5>
                </div>
                <p>
                  Investors can purchase fractions of property NFTs, opening up lucrative real estate investments with minimal capital.
                </p>
              </div>

              <div className="process-card">
                <div className='my-2'>
                  <span>
                    <img src={TICK} alt="tick" className='w-100' />
                  </span>
                </div>
                <div className="process-card-heading">
                  <h5>Global Accessibility
                  </h5>
                </div>
                <p>
                  Buyers from around the world can invest in properties without the hassle of geographical boundaries.
                </p>
              </div>
              <div className="process-card">
                <div className='my-2'>
                  <span>
                    <img src={TICK} alt="tick" className='w-100' />
                  </span>
                </div>
                <div className="process-card-heading">
                  <h5>Transparency
                  </h5>
                </div>
                <p>
                  Smart contracts embedded in NFTs automate tasks like rent collection, ensuring transparency and efficiency.
                </p>
              </div>
              <div className="process-card">
                <div className='my-2'>
                  <span>
                    <img src={TICK} alt="tick" className='w-100' />
                  </span>
                </div>
                <div className="process-card-heading">
                  <h5>Liquidity
                  </h5>
                </div>
                <p>
                  Property NFTs can be traded on various marketplaces, offering newfound liquidity to the traditionally illiquid real estate market.
                </p>
              </div>
              <div className="process-card">
                <div className='my-2'>
                  <span>
                    <img src={TICK} alt="tick" className='w-100' />
                  </span>
                </div>
                <div className="process-card-heading">
                  <h5>Digital Art Integration
                  </h5>
                </div>
                <p>
                  NFTs can merge with digital art, allowing buyers to own virtual art pieces that double as deeds to physical properties. It's the marriage of culture and investment.
                </p>
              </div>
              <div className="process-card">
                <div className='my-2'>
                  <span>
                    <img src={TICK} alt="tick" className='w-100' />
                  </span>
                </div>
                <div className="process-card-heading">
                  <h5>Wholesaler Opportunities
                  </h5>
                </div>
                <p>
                  Wholesalers can use NFTs to streamline property transactions, reducing overheads and increasing profits.
                </p>
              </div>

            </section>
            <p className='mb-3'>
              The potential of NFTs in real estate is awe-inspiring. Picture yourself owning a digital masterpiece of a property, backed by the security of blockchain technology. It’s not just a deed; it’s a work of art. This fusion of innovation, digital art, and real estate is the future, and it’s here to redefine the way we perceive, buy, and sell properties.
            </p>
            <p className='mb-3'>
              Join us in this thrilling journey, where NFTs are the brushstrokes painting the canvas of real estate’s future. Together, we’ll create a masterpiece of innovation, seamlessly blending the worlds of real estate and digital art, making every property transaction an experience worth treasuring. Welcome to the future of real estate with NFTs – where art meets investment, and innovation knows no bounds.
            </p>
          </div>


        </div>
      </section>
    </>
  )
}