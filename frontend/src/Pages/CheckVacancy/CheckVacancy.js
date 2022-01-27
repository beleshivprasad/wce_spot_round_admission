import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import Loading from "../../Components/Loading";
import axios from "axios";

const CheckVacancy = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [vacancy, setVacancy] = useState({});
  const getData = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post("/vacancy/show", {}, config);
      setVacancy(data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <MainScreen
      title={"WALCHAND COLLEGE OF ENGINEERING , SPOT ROUND VACANCY POSITION"}
    >
      <Container>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading></Loading>}
        <Button
          style={{ margin: "10px" }}
          type="button"
          onClick={() => {
            getData();
          }}
        >
          Refresh
        </Button>
      </Container>
      <div className="table">
        <table className="vacTable">
          <tr>
            <th>CATEGORY</th>
            <th colSpan={2}>OPEN</th>
            <th colspan={2}>sc</th>
            <th colspan={2}>ST</th>
            <th colspan={2}>VJ/DT</th>
            <th colspan={2}>NTB/NT1</th>
            <th colspan={2}>NTC/NT2</th>
            <th colspan={2}>NTD/NT3</th>
            <th colspan={2}>OBC</th>
            <th colspan={2}>SEBC</th>
            <th>ORPHAN</th>
            <th>TOTAL</th>
          </tr>

          <tr>
            <td>GENERAL/LADIES</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td></td>
          </tr>

          <tr>
            <td>
              VACANCY <b>CIVIL</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>

          <tr>
            <td></td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <br></br>
        <table className="vacTable">
          <tr>
            <th>CATEGORY</th>
            <th colspan={2}>OPEN</th>
            <th colspan={2}>sc</th>
            <th colspan={2}>ST</th>
            <th colspan={2}>VJ/DT</th>
            <th colspan={2}>NTB/NT1</th>
            <th colspan={2}>NTC/NT2</th>
            <th colspan={2}>NTD/NT3</th>
            <th colspan={2}>OBC</th>
            <th colspan={2}>SEBC</th>
            <th>ORPHAN</th>
            <th>TOTAL</th>
          </tr>

          <tr>
            <td>GENERAL/LADIES</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td></td>
          </tr>

          <tr>
            <td>
              VACANCY <b>CSE</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <br></br>
        <table className="vacTable">
          <tr>
            <th>CATEGORY</th>
            <th colspan={2}>OPEN</th>
            <th colspan={2}>sc</th>
            <th colspan={2}>ST</th>
            <th colspan={2}>VJ/DT</th>
            <th colspan={2}>NTB/NT1</th>
            <th colspan={2}>NTC/NT2</th>
            <th colspan={2}>NTD/NT3</th>
            <th colspan={2}>OBC</th>
            <th colspan={2}>SEBC</th>
            <th>ORPHAN</th>
            <th>TOTAL</th>
          </tr>

          <tr>
            <td>GENERAL/LADIES</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td></td>
          </tr>

          <tr>
            <td>
              VACANCY <b>I.T</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <br></br>
        <table className="vacTable">
          <tr>
            <th>CATEGORY</th>
            <th colspan={2}>OPEN</th>
            <th colspan={2}>sc</th>
            <th colspan={2}>ST</th>
            <th colspan={2}>VJ/DT</th>
            <th colspan={2}>NTB/NT1</th>
            <th colspan={2}>NTC/NT2</th>
            <th colspan={2}>NTD/NT3</th>
            <th colspan={2}>OBC</th>
            <th colspan={2}>SEBC</th>
            <th>ORPHAN</th>
            <th>TOTAL</th>
          </tr>

          <tr>
            <td>GENERAL/LADIES</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td></td>
          </tr>

          <tr>
            <td>
              VACANCY <b>ELECTRICA</b>
            </td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>

          <tr>
            <td></td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>
        </table>
        <br></br>
        <table className="vacTable">
          <tr>
            <th>CATEGORY</th>
            <th colspan={2}>OPEN</th>
            <th colspan={2}>sc</th>
            <th colspan={2}>ST</th>
            <th colspan={2}>VJ/DT</th>
            <th colspan={2}>NTB/NT1</th>
            <th colspan={2}>NTC/NT2</th>
            <th colspan={2}>NTD/NT3</th>
            <th colspan={2}>OBC</th>
            <th colspan={2}>SEBC</th>
            <th>ORPHAN</th>
            <th>TOTAL</th>
          </tr>

          <tr>
            <td>GENERAL/LADIES</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td></td>
          </tr>

          <tr>
            <td>
              VACANCY <b>ELECTRONICS</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <br></br>
        <table className="vacTable">
          <tr>
            <th>CATEGORY</th>
            <th colspan={2}>OPEN</th>
            <th colspan={2}>sc</th>
            <th colspan={2}>ST</th>
            <th colspan={2}>VJ/DT</th>
            <th colspan={2}>NTB/NT1</th>
            <th colspan={2}>NTC/NT2</th>
            <th colspan={2}>NTD/NT3</th>
            <th colspan={2}>OBC</th>
            <th colspan={2}>SEBC</th>
            <th>ORPHAN</th>
            <th>TOTAL</th>
          </tr>

          <tr>
            <td>GENERAL/LADIES</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td>L</td>
            <td>G</td>
            <td></td>
          </tr>

          <tr>
            <td>
              VACANCY <b>MECHANICAL</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>

          <tr>
            <td></td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td>PW</td>
            <td>DEF</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <h5 style={{ textAlign: "center", maxWidth: "100%" }}>
        Note:This is dynamic round and vacancy may be created at any instance
        during admission process.
      </h5>
    </MainScreen>
  );
};

export default CheckVacancy;
