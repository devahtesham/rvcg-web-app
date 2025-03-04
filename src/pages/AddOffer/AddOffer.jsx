import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import InputComp from "../../components/UI/InputComp/InputComp";
import DropDownComp from "../../components/UI/DropDownComp/DropDownComp";
import { getLaterMonthDate, getUser, OFFER_STATUS } from "../../data/global";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import DescriptionComp from "../../components/UI/DescriptionComp/DescriptionComp";
import { AddOffers } from "../../store/slices/propertyManagementSlice/propertyManagementSlice";
import { errorNotify, successNotify } from "../../Toastify/Toastify";


const AddOffer = ({ data }) => {
    const { handleModalClose } = useModal()

    const dispatch = useDispatch();
    const { user } = getUser()
    console.log('[data]', data)




    const [formValues, setFormValues] = useState({
        listing_id: data?.title,
        user_id: user?.name,
        offer_price: data.price,
        offer_date: new Date().toISOString().split('T')[0],
        status: "Pending",
        expiry_date: getLaterMonthDate(1),
        message: "",
        negotiation_comments: "",
    })

    const leadValuesHandler = (e) => {
        let { value, name } = e.target;

        console.log("FIELDS",e.target)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const addLeadTypeHandler = (e) => {
        e.preventDefault()


        const payload = {
           ...formValues,
           listing_id: data.id,
           user_id: user.userId,
        }

        console.log('[payload]', payload)


        dispatch(AddOffers(payload))
            .unwrap()
            .then(() => {
                successNotify("Offer Placed Successfully")
                handleModalClose()
            })
            .catch((error) => {
                errorNotify(error)
            })
    }



    return (

        <fieldset className="reset mt-3 p-4 pt-0 t-0 ">
            <div className="d-flex">
                <h1 className="reset mb-3 side-heading mx-auto px-5 py-2 mt-3">Add Offer</h1>

            </div>
            <form onSubmit={addLeadTypeHandler}>
                <Row className='mt-3 bg-lightgray'>

                    <Col lg={6} className="pt-3">
                        <div className='property-no'>
                            <InputComp
                                label="Title"
                                type="text"
                                placeholder="Title"
                                name="listing_id"
                                value={formValues.listing_id}
                                onChange={leadValuesHandler}
                                disabled={true}

                            />
                        </div>

                    </Col>
                    <Col lg={6} className="pt-3">
                        <div className='property-no'>
                            <InputComp
                                label="User Name: *"
                                type="text"
                                placeholder="User Name"
                                name="user_id"
                                value={formValues.user_id}
                                onChange={leadValuesHandler}
                                disabled={true}
                            />
                        </div>
                    </Col>

                    <Col lg={6} className="p-3 pb-0">
                        <div className='property-no'>
                            <InputComp
                                label="Offer Price: * ($)"
                                type="text"
                                placeholder="Offer Price"
                                name="offer_price"
                                value={formValues.offer_price}
                                onChange={leadValuesHandler}
                              
                            />
                        </div>
                    </Col>





                    <Col lg={6} className="p-3 pb-0">
                        <div className='property-no'>
                            <InputComp
                                label="Offer Date: *"
                                type="text"
                                placeholder="Offer Date"
                                name="offer_date"
                                value={formValues.offer_date}
                                onChange={leadValuesHandler}
                                disabled={true}
                            />
                        </div>
                    </Col>

                    

                    <Col lg={6} className="p-3 pb-0">
                        <div className='property-no'>
                            <InputComp
                                label="Expiry Date: *"
                                type="text"
                                placeholder="Expiry Date"
                                name="expiry_date"
                                value={formValues.expiry_date}
                                onChange={leadValuesHandler}
                                disabled={true}
                            />
                        </div>
                    </Col>

                    <Col lg={12}>
                        <DescriptionComp
                            label={"Message"}
                            placeholder={"Message"}
                            name={"message"}
                            value={formValues.message}
                            onChange={leadValuesHandler}
                        />
                    </Col>
                    <Col lg={12}>
                        <DescriptionComp
                            label={"Negotiation Comments"}
                            placeholder={"Negotiation Comments"}
                            name={"negotiation_comments"}
                            value={formValues.negotiation_comments}
                            onChange={leadValuesHandler}
                        />
                    </Col>

                </Row>

                <Row>
                    <Col lg={12} className=' mt-5'>
                        <button type="submit" className={`custom-btn bg-primary-clr`}>Place</button>
                    </Col>
                </Row>

            </form>
        </fieldset>

    )
}

export default AddOffer