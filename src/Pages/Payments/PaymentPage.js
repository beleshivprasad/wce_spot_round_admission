import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import axios from "axios";

const PaymentPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(
    JSON.parse(localStorage.getItem("paymentInfo"))
  );
  const [data, setData] = useState(JSON.parse(localStorage.getItem("student")));
  const [fname, setFname] = useState(data?.fname);
  const [lname, setLname] = useState(data?.lname);
  const [email, setEmail] = useState(data?.email);
  const [phone, setPhone] = useState(data?.phone);
  const [cetID, setCetID] = useState(data?.cetID);
  const [payment, setPayment] = useState(data?.paymentDone);
  const [paymentId, setPaymentId] = useState(data?.paymentId);

  const [show, setShow] = useState(true);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const getPaymentInfo = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);
      const { data } = await axios.post("/student/razorpay", config);
      setPaymentInfo(data);
      localStorage.setItem("paymentInfo", JSON.stringify(data));
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const displayRazorpay = async (e) => {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      setError("Failed Loading Razorpay");
    } else {
      const options = {
        key: "rzp_test_T2w19cF6gqmZQa",
        amount: 100 * 1000,
        currency: "INR",
        name: "Walchand Collge of Engineering, Sangli",
        description: "Spot Round Fee Payment",
        image: "https://img.collegepravesh.com/2018/11/WCE-Sangli-Logo.png",
        order_id: paymentInfo.id,
        handler: async (response) => {
          alert(response.razorpay_payment_id);
          setPaymentId(response.razorpay_payment_id);
          setPayment(true);
          try {
            const config = {
              headers: {
                "Content-type": "application/json",
              },
            };

            setLoading(true);
            const orderId = paymentInfo.id;
            const { data } = await axios.post(
              "/student/fetch",
              { orderId },
              config
            );
            console.log(data[0].id);
            const updatePayment = await axios.post("/student/updatepayment", {
              fname,
              lname,
              cetID,
              paymentId: data[0].id,
            });
            localStorage.setItem("student", JSON.stringify(updatePayment.data));
            setPaymentId(response.razorpay_payment_id);
            if (
              data[0].id.normalize() ===
              response.razorpay_payment_id.normalize()
            ) {
              setSuccess("Payment Successfull");
            } else {
              setError("Payment Failed");
            }
            setTimeout(() => {
              setError(false);
              setSuccess(false);
            }, 3000);
            setLoading(false);
          } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
            setTimeout(() => {
              setError(false);
            }, 3000);
          }
        },
        prefill: {
          name: `${fname} ${lname}`,
          email: email,
          contact: `91${phone}`,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
      e.preventDefault();
    }
  };
  return (
    <MainScreen title={"Spot Round Fee Payment"}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {success && <SuccessMessage variant="success">{success}</SuccessMessage>}
      {loading && <Loading></Loading>}
      <Container fluid>
        {data?.paymentDone === false && show ? (
          <>
            <br />
            <br />
            <Row>
              <h3 style={{ textAlign: "center" }}>
                You are going to pay Rs 1000/- to Walchand College of
                Engineering
              </h3>
            </Row>
            <br />
            <Row>
              <Col>
                <Row>
                  <Button
                    type="button"
                    onClick={(e) => {
                      getPaymentInfo(e).then(() => {
                        setShow(false);
                      });
                    }}
                  >
                    Proceed
                  </Button>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={(e) => {
                      localStorage.removeItem("paymentInfo");
                      history.push("/status");
                    }}
                  >
                    Cancel
                  </Button>
                </Row>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Table>
                <tbody>
                  <tr>
                    <td style={{ width: "50vw" }} colSpan={2}>
                      <b> Payment Details</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "50vw" }}>Name</td>
                    <td style={{ width: "50vw" }}>
                      {fname?.toUpperCase()} {lname?.toUpperCase()}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Mobile Number</td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td>Amount To Pay</td>
                    <td>{payment ? "0" : paymentInfo?.amount / 100} Rs</td>
                  </tr>
                  {paymentId ? (
                    <>
                      <tr>
                        <td>ID</td>
                        <td>{paymentId?.slice(4, 20)}</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  <tr>
                    <td>Status</td>
                    <td>{payment ? "Done" : "Pending"}</td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            {payment ? (
              <>
                <Row>
                  <Button
                    type="button"
                    variant="dark"
                    onClick={(e) => {
                      history.push("/status");
                      e.preventDefault();
                    }}
                  >
                    Go Back To Status
                  </Button>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <Col>
                    <Row>
                      <Button
                        type="button"
                        onClick={(e) => {
                          displayRazorpay(e);
                        }}
                      >
                        Pay
                      </Button>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Button
                        type="button"
                        variant="danger"
                        onClick={(e) => {
                          localStorage.removeItem("paymentInfo");
                          history.push("/status");
                        }}
                      >
                        Cancel
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </>
            )}
          </>
        )}
      </Container>
    </MainScreen>
  );
};

export default PaymentPage;
