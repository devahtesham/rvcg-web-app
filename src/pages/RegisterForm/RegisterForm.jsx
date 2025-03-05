import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { BiSolidHide, BiSolidShow, BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { successNotify, warnNotify } from "../../Toastify/Toastify";
import { RegisterUser } from "../../store/slices/authSlice/authSlice";
import { getUser, moveToTop } from "../../data/global";



const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [isCPasswordShow, setIsCPasswordShow] = useState(false)
  const [error, setError] = useState("");
  const [rCode, setRCode] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { authLoading } = useSelector(state => state.AuthReducer)

  useEffect(() => {
    moveToTop()
  }, [])

  useEffect(() => {
    const { token } = getUser()
    if (token) {
      warnNotify("You are already logged in !")
      navigate("/")
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password are not same")
      return
    }

    // console.log("Logging in with:", { email, password, rememberMe });

    // Handle authentication logic here
    setError(""); // Clear error if login is successful

    // preparing payload
    const payload = {
      "name": fullName,
      "email": email,
      "password": password,
      "password_confirmation": confirmPassword,
      "referral_codes": rCode ? [rCode] : null,
      "is_active": 1       // by default is Active (this field is only on Admin panel)

    }
    

    dispatch(RegisterUser(payload))
      .then((response) => {
        console.log('[response]', response)
        if(response.meta.requestStatus !== "rejected" ){
          successNotify("Registered Successfully !")
          navigate("/login")
        }
      })
  };




  // show hide password
  const passwordShowHideHandler = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  const CpasswordShowHideHandler = () => {
    setIsCPasswordShow(!isCPasswordShow)
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 login-form-screen">
      <Row>
        <Col md={12}>
          <Card className="p-4 shadow-lg rounded">
            <Card.Body>
              <h3 className="text-center mb-4">Register</h3>
              {error && <Alert variant="danger">{error}</Alert>}
              {/* <BiSolidUser size={20} color='#16BFBF' /> */}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicEmail">
                  <BiSolidUser size={20} color='#16BFBF' />
                  <Form.Control type="text" placeholder="Full Name" name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicEmail">
                  <MdEmail size={20} color='#16BFBF' />
                  <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicPassword">
                  <RiLockPasswordFill size={20} color='#16BFBF' />
                  {
                    !isPasswordShow ? <BiSolidHide onClick={passwordShowHideHandler} size={20} color='#16BFBF' className='password-show-hide' /> : <BiSolidShow onClick={passwordShowHideHandler} size={20} color='#E8090C' className='password-show-hide' />
                  }


                  <Form.Control type={isPasswordShow ? "text" : "password"} placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicPassword">
                  <RiLockPasswordFill size={20} color='#16BFBF' />
                  {
                    !isCPasswordShow ? <BiSolidHide onClick={CpasswordShowHideHandler} size={20} color='#16BFBF' className='password-show-hide' /> : <BiSolidShow onClick={CpasswordShowHideHandler} size={20} color='#E8090C' className='password-show-hide' />
                  }


                  <Form.Control type={isCPasswordShow ? "text" : "password"} placeholder="Confirm Password" name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicEmail">
                  <BiSolidUser size={20} color='#16BFBF' />
                  <Form.Control type="text" placeholder="Referral Code" name='rCode' value={rCode} onChange={(e) => setRCode(e.target.value)} />
                </Form.Group>

                {/* Remember Me & Forgot Password */}
                {/* <Form.Group className="d-flex justify-content-between align-items-center mb-3" id="login">
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <a href="#" className="text-primary">Forgot Password?</a>
                </Form.Group> */}

                {/* Login Button */}
                <Button type="submit" className="w-100 bg-primary-clr border-0">
                  {
                    authLoading ? "Loading ..." : "Register"
                  }
                  
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
