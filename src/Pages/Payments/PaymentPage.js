import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import axios from "axios";

const PaymentPage = () => {
  //   const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("student")));
  const [fname, setFname] = useState(data.fname);
  const [lname, setLname] = useState(data.lname);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);

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

  const displayRazorpay = async (e) => {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      setError("Failed Loading Razorpay");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);
        const { data } = await axios.post("/student/razorpay", config);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
      const options = {
        key: "rzp_test_T2w19cF6gqmZQa",
        amount: 100 * 1000,
        currency: "INR",
        name: "Walchand Collge of Engineering, Sangli",
        description: "Spot Round Fee Payment",
        image: "https://img.collegepravesh.com/2018/11/WCE-Sangli-Logo.png",
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
        handler: function (response) {
          console.log(response);
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
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
                  {fname} {lname}
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
                <td>1000 Rs</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Button
            type="button"
            onClick={(e) => {
              displayRazorpay(e);
            }}
          >
            Proceed
          </Button>
        </Row>
      </Container>
    </MainScreen>
  );
};

export default PaymentPage;
