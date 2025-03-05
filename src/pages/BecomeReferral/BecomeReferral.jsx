


import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy } from 'react-icons/fa';
import './ReferralProgram.css'; // Custom CSS
import { getUser, moveToTop } from '../../data/global';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserProfileDetails } from '../../store/slices/propertyManagementSlice/propertyManagementSlice';
import { useNavigate } from 'react-router-dom';
import { successNotify } from '../../Toastify/Toastify';

const BecomeReferral = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [referralLink, setReferralLink] = useState('');
    const { user } = getUser()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userProfileDetails } = useSelector((state) => state.PropertyMangementReducer)

    useEffect(() => {
        moveToTop()
        dispatch(GetUserProfileDetails(user?.id))
    }, [])

    useEffect(() => {
        const { token } = getUser();
        if (!token) {
            navigate("/login")
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            const generatedLink = userProfileDetails?.referral_code ? userProfileDetails?.referral_code : "Empty";
            setReferralLink(generatedLink);
        }, 500);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        successNotify('Referral link copied!');
    };

    return (
        <Container className="referral-container">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-lg p-4 referral-card">
                        <Card.Body>
                            <h2 className="text-center mb-3">Become a Referral Partner</h2>
                            <p className="text-center text-muted">
                                Invite friends & earn rewards when they join!
                            </p>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <button className={`custom-btn bg-primary-clr w-100`}> {

                                    isLoading ? "Generating ..." : "Generate Referral Code"
                                } </button>
                            </Form>

                            {referralLink && (
                                <div className="mt-4">
                                    <Form.Label>Your Referral Code</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" value={referralLink} readOnly />
                                        <Button variant="secondary" onClick={copyToClipboard}>
                                            <FaCopy />
                                        </Button>
                                    </InputGroup>

                                    <div className="social-share mt-3 text-center">
                                        <p className="text-muted">Share your link:</p>
                                        <FaFacebook className="social-icon facebook" />
                                        <FaTwitter className="social-icon twitter" />
                                        <FaLinkedin className="social-icon linkedin" />
                                        <FaWhatsapp className="social-icon whatsapp" />
                                    </div>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BecomeReferral;
