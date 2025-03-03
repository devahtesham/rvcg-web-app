import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { DeletePropertyFromFav, ViewFavProperties } from '../../store/slices/propertyManagementSlice/propertyManagementSlice';
import { Row } from 'react-bootstrap';
import MapLoader from '../../components/Loaders/MapLoader';
import PropertyListingCard from '../../components/PropertyListingCard/PropertyListingCard';
import { DUMMY_FAV, getUser } from '../../data/global';
import { errorNotify, successNotify } from '../../Toastify/Toastify';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);
    const dispatch = useDispatch()
    const [isLoding, setIsLoading] = useState(true)
    const navigate = useNavigate()



    useEffect(() => {
        // console.log('i am run')
        setIsLoading(true)
        dispatch(ViewFavProperties())
            .then((response) => {
                setIsLoading(false)
                setFavourites(response.payload)

            })
    }, [])

    const toggleFavorite = (id) => {
        const { token } = getUser();
        if (!token) {
            navigate('/login')
        } else {
            // remove from DB Level
            dispatch(DeletePropertyFromFav(id))
                .then((response) => {
                    console.log('[response]', response)
                    if (response.meta.requestStatus === "fulfilled") {
                        successNotify("Remove From Favourites !")
                        dispatch(ViewFavProperties())
                            .then((response) => {
                                setFavourites(response.payload)

                            })
                    } else {
                        errorNotify(response.payload)

                    }
                })
                .catch((error) => {
                    console.log(error)
                    errorNotify(error)
                })

        }

    };

    return (
        <div className='container'>
            <Row>
                <div className="d-flex pt-4">
                    <h1 className="reset mb-3 side-heading px-5">Favourites</h1>
                </div>
            </Row>
            <section className='mt-4 property-listing-all'>
                {isLoding ? <div className='w-100 vh-100 d-flex justify-content-center align-items-center'><MapLoader /></div> : !favourites.length ? <h1>No Property Added To Favourites !</h1> : (

                    favourites.map(property => (

                        <PropertyListingCard
                            property={property}
                            isFavorite={true}
                            onFavoriteToggle={() => toggleFavorite(property.id)}
                            onClick={() => console.log(`Clicked on property ${property.id}`)}
                        />

                    )))}
            </section>
        </div>
    )
}

export default Favourites