import React from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';
import { FaBed, FaRegHeart, FaShower } from "react-icons/fa6";
import './RealEstateCard.css'; // We'll define custom styles in this file
import { HiOutlineCube } from 'react-icons/hi2';
import { FaHeart } from "react-icons/fa";



const PropertyListingCard = ({
    
    isFavorite = false,
    onFavoriteToggle,
    onClick,
    key,
    property,
    isJustListed = true,
}) => {
    return (
        <Card className="real-estate-card" onClick={onClick} key={key}>
            <div className="card-image-container">
                <Card.Img variant="top" src={property?.media[0]?.file_url} className="property-image" />

                {/* For Sale Badge */}
                <Badge bg="primary" className="for-sale-badge">{property?.property_status?.status?.toUpperCase()}</Badge>

                {/* Just Listed Badge */}
                {isJustListed && (
                    <Badge bg="light" className="just-listed-badge">Just listed</Badge>
                )}

                {/* Favorite Button */}

            </div>

            <Card.Body>
                <div className="price-section">
                    <Card.Title className="price">${property?.price.toLocaleString()}</Card.Title>
                    <span className="arv">(ARV - ${property?.arv.toLocaleString()})</span>
                </div>
                <div className='text-end'>
                    <span
                        className="favorite-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onFavoriteToggle && onFavoriteToggle();
                        }}
                    >
                        {
                            isFavorite ? <FaHeart color='red' /> : <FaRegHeart className="heart-outline" />
                        }

                    </span>
                </div>

                <Card.Text className="location">
                    {property?.address}, {property?.city?.city_name}, {property?.country?.country_name}, {property?.zip_code}
                </Card.Text>

                <div className="property-features">
                    <div className="feature">
                        <FaBed size={18} /> {property?.bedrooms} Beds
                    </div>
                    <div className="feature">
                        <FaShower size={18} />  {property?.bathrooms} {property?.bathrooms === 1 ? 'Bath' : 'Baths'}
                    </div>
                    <div className="feature">
                        <HiOutlineCube size={18} />  {property?.square_foot?.toLocaleString()} sq.ft
                    </div>
                </div>
            </Card.Body>
        </Card >
    );
};

export default PropertyListingCard;