import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterMLSData, GetMLSData } from '../../store/slices/propertyManagementSlice/propertyManagementSlice';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import CustomMLSFilter from '../../components/CustomMLSFilter';
import { BiSearch } from 'react-icons/bi';
import MapLoader from '../../components/Loaders/MapLoader';
import MLSCard from '../../components/MLSCard';
import { useNavigate } from 'react-router-dom';

function MlsSearch() {

    const dispatch = useDispatch();
    const { isLoading, mlsData } = useSelector((state) => state.PropertyMangementReducer);
    const navigate = useNavigate() 

    console.log('[mlsData]', mlsData)
    const [searchVal, setSearchVal] = useState("")
    useEffect(() => {
        dispatch(GetMLSData())
    }, [])


    // CUSTOM DEBOUNCING
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('[searchVal]', searchVal)
            dispatch(GetMLSData(searchVal))
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [dispatch, searchVal])

    const searchPropertyHandler = (e) => {
        setSearchVal(e.target.value)
    }

    const handleFilterChange = (filters) => {
        dispatch(FilterMLSData(filters))
    }

    return (
        <>
            <section className='realty-catalog position-relative d-flex justify-content-center'>
                <h1 className='text-white'>Realty Catalog</h1>
            </section>
            <div className="mls-listing">
                <Container className="mls-listing my-5">
                    <Row className="justify-content-between mb-5">
                        <Col sm={3}>
                            <CustomMLSFilter onFilterChange={handleFilterChange} />

                        </Col>
                        <Col sm={3}>
                            <Form>
                                <InputGroup className="property-search-input">
                                    <Form.Control
                                        placeholder="Search ..."
                                        aria-label="Search"
                                        aria-describedby=""
                                        className='search'
                                        onChange={searchPropertyHandler}
                                    />
                                    <span className='property-search-icon'><BiSearch size={20} /></span>
                                </InputGroup>

                            </Form>

                        </Col>
                    </Row>
                    {
                        isLoading ? <div className='h-100 d-flex justify-content-center align-items-center'>
                            <MapLoader />
                        </div> : (
                            <Row className="">
                                {mlsData?.length && mlsData?.map((property, index) => (
                                    <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                                        <MLSCard property={property} />
                                    </Col>
                                ))}
                            </Row>
                        )
                    }

                </Container>
            </div>
        </>
    )
}

export default MlsSearch