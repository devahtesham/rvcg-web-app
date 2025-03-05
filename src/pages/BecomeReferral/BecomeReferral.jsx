


import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy } from 'react-icons/fa';
import './ReferralProgram.css'; // Custom CSS
import { getUser } from '../../data/global';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserProfileDetails } from '../../store/slices/propertyManagementSlice/propertyManagementSlice';

const BecomeReferral = () => {
    const [email, setEmail] = useState('');
    const [referralLink, setReferralLink] = useState('');
    const { user } = getUser()
    const dispatch = useDispatch()

    const { userProfileDetails, isLoading } = useSelector((state) => state.PropertyMangementReducer)

    const handleSubmit = (e) => {
        dispatch(GetUserProfileDetails(user?.userId))
        e.preventDefault();
        // Generate a referral link (Modify logic based on your backend)
        const generatedLink = userProfileDetails?.referral_code;
        setReferralLink(generatedLink);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        alert('Referral link copied!');
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
