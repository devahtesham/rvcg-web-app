import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { BiSolidHide, BiSolidShow, BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "../../store/slices/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { errorNotify, successNotify, warnNotify } from "../../Toastify/Toastify";
import { getUser, moveToTop, setUser } from "../../data/global";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [error, setError] = useState("");

  const { authLoading } = useSelector(state => state.AuthReducer)

  useEffect(() => {
    moveToTop() 
    const { token } = getUser()
    if (token) {
      warnNotify("You are already logged in !")
      navigate("/")
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // console.log("Logging in with:", { email, password, rememberMe });

    // Handle authentication logic here
    setError(""); // Clear error if login is successful

    // preparing payload
    const payload = {
      "email": email,
      "password": password

    }


    dispatch(LogIn(payload))
      .then((response) => {
        console.log('[response]', response)
        if (response.meta.requestStatus !== "rejected") {
          successNotify("Login Successfully !")
          setUser(response.payload?.user, response.payload?.token)
          navigate("/")
        } else {
          errorNotify(response.payload)
        }
      })
  };

  // show hide password
  const passwordShowHideHandler = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 login-form-screen">
      <Row>
        <Col md={12}>
          <Card className="p-4 shadow-lg rounded">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicEmail">
                  <BiSolidUser size={20} color='#16BFBF' />
                  <Form.Control type="email" placeholder="Username or email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 icon-input position-relative" controlId="formBasicPassword">
                  <RiLockPasswordFill size={20} color='#16BFBF' />
                  {
                    !isPasswordShow ? <BiSolidHide onClick={passwordShowHideHandler} size={20} color='#16BFBF' className='password-show-hide' /> : <BiSolidShow onClick={passwordShowHideHandler} size={20} color='#E8090C' className='password-show-hide' />
                  }


                  <Form.Control type={isPasswordShow ? "text" : "password"} placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
                <p className="text-center mb-2">If you dont have an acount, please <Link className="register-link" to={"/register"}>Register </Link>Here</p>
                <Button type="submit" className="w-100 bg-primary-clr border-0">
                  {
                    authLoading ? "Loading ..." : "Login"
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

export default Login;
