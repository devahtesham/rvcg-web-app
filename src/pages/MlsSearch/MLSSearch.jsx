import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterMLSData, GetMLSData } from '../../store/slices/propertyManagementSlice/propertyManagementSlice';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import CustomMLSFilter from '../../components/CustomMLSFilter';
import { BiSearch } from 'react-icons/bi';
import MapLoader from '../../components/Loaders/MapLoader';
import MLSCard from '../../components/MLSCard';
import { useNavigate } from 'react-router-dom';
import { moveToTop } from '../../data/global';

const MLSSearch = () => {
    const dispatch = useDispatch();
    const { isLoading, mlsData } = useSelector((state) => state.PropertyMangementReducer);
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [initialMlsList, setInitialMlsList] = useState([])

    // console.log('[mlsData]', mlsData)
    const [searchVal, setSearchVal] = useState("")


    useEffect(() => {
        moveToTop()
    }, [])

    useEffect(() => {
        dispatch(GetMLSData({ page, text: "" }))
            .then((res) => {
                setInitialMlsList(res.payload)
            })
    }, [])


    // CUSTOM DEBOUNCING
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('[searchVal]', searchVal)
            dispatch(GetMLSData({ page, text: searchVal }))
                .then((res) => {
                    console.log('[res]', res)
                    setInitialMlsList(res.payload)
                })
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [dispatch, searchVal, page])

    const searchPropertyHandler = (e) => {
        setSearchVal(e.target.value)
    }

    const handleFilterChange = (filters) => {
        dispatch(FilterMLSData(filters))
    }

    const loadMore = () => {
        setPage(page + 1)
        dispatch(GetMLSData({ page: page, text: searchVal }))
            .then((res) => {
                setInitialMlsList((prev) => [...prev, ...res.payload])
            })

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
                            <>
                                <Row className="justify-content-center">
                                    {initialMlsList?.length ? initialMlsList?.map((property, index) => (
                                        <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                                            <MLSCard property={property} />
                                        </Col>
                                    )) : <h1 className='text-center'>No Property Found !</h1>}

                                </Row>
                                <div className="mt-4 d-flex justify-content-center">
                                    <button onClick={loadMore} className={`custom-btn bg-primary-clr ${!initialMlsList?.length || page === 6 ? "custom-disabled" : ''}`}>LOAD MORE</button>
                                </div>
                            </>
                        )
                    }

                </Container>
            </div>
        </>
    )
}

export default MLSSearch
