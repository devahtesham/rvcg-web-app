import { Link } from "react-router-dom";
import CITY_01 from "../../assets/img/city-1.jpeg"
import { CITY_PROPERTY_LISTING } from "../../utils/utils";

export default function CityListing() {
    return (
        <section className="pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="main-heading text-center">Live the life your <span className="text-dark-green-clr">deserve</span></h1>
                    </div>
                    {
                        CITY_PROPERTY_LISTING.map((city, index) => (
                            <div className="col-3 mb-4" key={index}>
                                <div className="city-property-box rounded-2 overflow-hidden position-relative">
                                    <Link to={'/our-listing'} className="w-100 h-100 d-block">
                                        <img src={CITY_01} alt="city-01" className="" />
                                        <div className="city-name-inner-box">
                                            {city.name}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
