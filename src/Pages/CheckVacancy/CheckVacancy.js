import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post("/vacancy/show", {}, config);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainScreen
      title={"WALCHAND COLLEGE OF ENGINEERING , SPOT ROUND VACANCY POSITION"}
    >
      <Container>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading></Loading>}
      </Container>
      <div className="table">
        <table className="vacTable">
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th colSpan="2">OPEN</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">VJDT</th>
              <th colSpan="2">NTB</th>
              <th colSpan="2">NTC</th>
              <th colSpan="2">NTD</th>
              <th colSpan="2">OBC</th>
              <th colSpan="2">SEBC</th>
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
              <td>{data.g_open_civil}</td>
              <td>{data.l_open_civil}</td>
              <td>{data.g_sc_civil}</td>
              <td>{data.l_sc_civil}</td>
              <td>{data.g_st_civil}</td>
              <td>{data.l_st_civil}</td>
              <td>{data.g_vjdt_civil}</td>
              <td>{data.l_vjdt_civil}</td>
              <td>{data.g_ntb_civil}</td>
              <td>{data.l_ntb_civil}</td>
              <td>{data.g_ntc_civil}</td>
              <td>{data.l_ntc_civil}</td>
              <td>{data.g_ntd_civil}</td>
              <td>{data.l_ntd_civil}</td>
              <td>{data.g_obc_civil}</td>
              <td>{data.l_obc_civil}</td>
              <td>{data.g_sebc_civil}</td>
              <td>{data.l_sebc_civil}</td>
              <td>{data.g_orphan_civil}</td>
              <td>
                {parseInt(data.g_open_civil) +
                  parseInt(data.l_open_civil) +
                  parseInt(data.g_sc_civil) +
                  parseInt(data.l_sc_civil) +
                  parseInt(data.g_st_civil) +
                  parseInt(data.l_st_civil) +
                  parseInt(data.g_vjdt_civil) +
                  parseInt(data.l_vjdt_civil) +
                  parseInt(data.g_ntb_civil) +
                  parseInt(data.l_ntb_civil) +
                  parseInt(data.g_ntc_civil) +
                  parseInt(data.l_ntc_civil) +
                  parseInt(data.g_ntd_civil) +
                  parseInt(data.l_ntd_civil) +
                  parseInt(data.g_obc_civil) +
                  parseInt(data.l_obc_civil) +
                  parseInt(data.g_sebc_civil) +
                  parseInt(data.l_sebc_civil) +
                  parseInt(data.g_orphan_civil) || 0}
              </td>
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
              <td>{data.pw_open_civil}</td>
              <td>{data.def_open_civil}</td>
              <td>{data.pw_sc_civil}</td>
              <td>{data.def_sc_civil}</td>
              <td>{data.pw_st_civil}</td>
              <td>{data.def_st_civil}</td>
              <td>{data.pw_vjdt_civil}</td>
              <td>{data.def_vjdt_civil}</td>
              <td>{data.pw_ntb_civil}</td>
              <td>{data.def_ntb_civil}</td>
              <td>{data.pw_ntc_civil}</td>
              <td>{data.def_ntc_civil}</td>
              <td>{data.pw_ntd_civil}</td>
              <td>{data.def_ntd_civil}</td>
              <td>{data.pw_obc_civil}</td>
              <td>{data.def_obc_civil}</td>
              <td>{data.pw_sebc_civil}</td>
              <td>{data.def_sebc_civil}</td>
              <td></td>
              <td>
                {parseInt(data.pw_open_civil) +
                  parseInt(data.def_open_civil) +
                  parseInt(data.pw_sc_civil) +
                  parseInt(data.def_sc_civil) +
                  parseInt(data.pw_st_civil) +
                  parseInt(data.def_st_civil) +
                  parseInt(data.pw_vjdt_civil) +
                  parseInt(data.def_vjdt_civil) +
                  parseInt(data.pw_ntb_civil) +
                  parseInt(data.def_ntb_civil) +
                  parseInt(data.pw_ntc_civil) +
                  parseInt(data.def_ntc_civil) +
                  parseInt(data.pw_ntd_civil) +
                  parseInt(data.def_ntd_civil) +
                  parseInt(data.pw_obc_civil) +
                  parseInt(data.def_obc_civil) +
                  parseInt(data.pw_sebc_civil) +
                  parseInt(data.def_sebc_civil)|| 0}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table className="vacTable">
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th colSpan="2">OPEN</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">vjdt</th>
              <th colSpan="2">ntb</th>
              <th colSpan="2">ntc</th>
              <th colSpan="2">ntd</th>
              <th colSpan="2">OBC</th>
              <th colSpan="2">SEBC</th>
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
              <td>{data.g_open_cse}</td>
              <td>{data.l_open_cse}</td>
              <td>{data.g_sc_cse}</td>
              <td>{data.l_sc_cse}</td>
              <td>{data.g_st_cse}</td>
              <td>{data.l_st_cse}</td>
              <td>{data.g_vjdt_cse}</td>
              <td>{data.l_vjdt_cse}</td>
              <td>{data.g_ntb_cse}</td>
              <td>{data.l_ntb_cse}</td>
              <td>{data.g_ntc_cse}</td>
              <td>{data.l_ntc_cse}</td>
              <td>{data.g_ntd_cse}</td>
              <td>{data.l_ntd_cse}</td>
              <td>{data.g_obc_cse}</td>
              <td>{data.l_obc_cse}</td>
              <td>{data.g_sebc_cse}</td>
              <td>{data.l_sebc_cse}</td>
              <td>{data.g_orphan_cse}</td>
              <td>
                {parseInt(data.g_open_cse) +
                  parseInt(data.l_open_cse) +
                  parseInt(data.g_sc_cse) +
                  parseInt(data.l_sc_cse) +
                  parseInt(data.g_st_cse) +
                  parseInt(data.l_st_cse) +
                  parseInt(data.g_vjdt_cse) +
                  parseInt(data.l_vjdt_cse) +
                  parseInt(data.g_ntb_cse) +
                  parseInt(data.l_ntb_cse) +
                  parseInt(data.g_ntc_cse) +
                  parseInt(data.l_ntc_cse) +
                  parseInt(data.g_ntd_cse) +
                  parseInt(data.l_ntd_cse) +
                  parseInt(data.g_obc_cse) +
                  parseInt(data.l_obc_cse) +
                  parseInt(data.g_sebc_cse) +
                  parseInt(data.l_sebc_cse) +
                  parseInt(data.g_orphan_cse)|| 0}
              </td>
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
              <td>{data.pw_open_cse}</td>
              <td>{data.def_open_cse}</td>
              <td>{data.pw_sc_cse}</td>
              <td>{data.def_sc_cse}</td>
              <td>{data.pw_st_cse}</td>
              <td>{data.def_st_cse}</td>
              <td>{data.pw_vjdt_cse}</td>
              <td>{data.def_vjdt_cse}</td>
              <td>{data.pw_ntb_cse}</td>
              <td>{data.def_ntb_cse}</td>
              <td>{data.pw_ntc_cse}</td>
              <td>{data.def_ntc_cse}</td>
              <td>{data.pw_ntd_cse}</td>
              <td>{data.def_ntd_cse}</td>
              <td>{data.pw_obc_cse}</td>
              <td>{data.def_obc_cse}</td>
              <td>{data.pw_sebc_cse}</td>
              <td>{data.def_sebc_cse}</td>
              <td></td>
              <td>
                {parseInt(data.pw_open_cse) +
                  parseInt(data.def_open_cse) +
                  parseInt(data.pw_sc_cse) +
                  parseInt(data.def_sc_cse) +
                  parseInt(data.pw_st_cse) +
                  parseInt(data.def_st_cse) +
                  parseInt(data.pw_vjdt_cse) +
                  parseInt(data.def_vjdt_cse) +
                  parseInt(data.pw_ntb_cse) +
                  parseInt(data.def_ntb_cse) +
                  parseInt(data.pw_ntc_cse) +
                  parseInt(data.def_ntc_cse) +
                  parseInt(data.pw_ntd_cse) +
                  parseInt(data.def_ntd_cse) +
                  parseInt(data.pw_obc_cse) +
                  parseInt(data.def_obc_cse) +
                  parseInt(data.pw_sebc_cse) +
                  parseInt(data.def_sebc_cse)|| 0}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table className="vacTable">
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th colSpan="2">OPEN</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">VJDT</th>
              <th colSpan="2">NTB</th>
              <th colSpan="2">NTC</th>
              <th colSpan="2">NTD</th>
              <th colSpan="2">OBC</th>
              <th colSpan="2">SEBC</th>
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
                VACANCY <b>IT</b>
              </td>
              <td>{data.g_open_it}</td>
              <td>{data.l_open_it}</td>
              <td>{data.g_sc_it}</td>
              <td>{data.l_sc_it}</td>
              <td>{data.g_st_it}</td>
              <td>{data.l_st_it}</td>
              <td>{data.g_vjdt_it}</td>
              <td>{data.l_vjdt_it}</td>
              <td>{data.g_ntb_it}</td>
              <td>{data.l_ntb_it}</td>
              <td>{data.g_ntc_it}</td>
              <td>{data.l_ntc_it}</td>
              <td>{data.g_ntd_it}</td>
              <td>{data.l_ntd_it}</td>
              <td>{data.g_obc_it}</td>
              <td>{data.l_obc_it}</td>
              <td>{data.g_sebc_it}</td>
              <td>{data.l_sebc_it}</td>
              <td>{data.g_orphan_it}</td>
              <td>
                {parseInt(data.g_open_it) +
                  parseInt(data.l_open_it) +
                  parseInt(data.g_sc_it) +
                  parseInt(data.l_sc_it) +
                  parseInt(data.g_st_it) +
                  parseInt(data.l_st_it) +
                  parseInt(data.g_vjdt_it) +
                  parseInt(data.l_vjdt_it) +
                  parseInt(data.g_ntb_it) +
                  parseInt(data.l_ntb_it) +
                  parseInt(data.g_ntc_it) +
                  parseInt(data.l_ntc_it) +
                  parseInt(data.g_ntd_it) +
                  parseInt(data.l_ntd_it) +
                  parseInt(data.g_obc_it) +
                  parseInt(data.l_obc_it) +
                  parseInt(data.g_sebc_it) +
                  parseInt(data.l_sebc_it) +
                  parseInt(data.g_orphan_it)|| 0}
              </td>
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
              <td>{data.pw_open_it}</td>
              <td>{data.def_open_it}</td>
              <td>{data.pw_sc_it}</td>
              <td>{data.def_sc_it}</td>
              <td>{data.pw_st_it}</td>
              <td>{data.def_st_it}</td>
              <td>{data.pw_vjdt_it}</td>
              <td>{data.def_vjdt_it}</td>
              <td>{data.pw_ntb_it}</td>
              <td>{data.def_ntb_it}</td>
              <td>{data.pw_ntc_it}</td>
              <td>{data.def_ntc_it}</td>
              <td>{data.pw_ntd_it}</td>
              <td>{data.def_ntd_it}</td>
              <td>{data.pw_obc_it}</td>
              <td>{data.def_obc_it}</td>
              <td>{data.pw_sebc_it}</td>
              <td>{data.def_sebc_it}</td>
              <td></td>
              <td>
                {parseInt(data.pw_open_it) +
                  parseInt(data.def_open_it) +
                  parseInt(data.pw_sc_it) +
                  parseInt(data.def_sc_it) +
                  parseInt(data.pw_st_it) +
                  parseInt(data.def_st_it) +
                  parseInt(data.pw_vjdt_it) +
                  parseInt(data.def_vjdt_it) +
                  parseInt(data.pw_ntb_it) +
                  parseInt(data.def_ntb_it) +
                  parseInt(data.pw_ntc_it) +
                  parseInt(data.def_ntc_it) +
                  parseInt(data.pw_ntd_it) +
                  parseInt(data.def_ntd_it) +
                  parseInt(data.pw_obc_it) +
                  parseInt(data.def_obc_it) +
                  parseInt(data.pw_sebc_it) +
                  parseInt(data.def_sebc_it)|| 0}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table className="vacTable">
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th colSpan="2">OPEN</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">VJDT</th>
              <th colSpan="2">NTB</th>
              <th colSpan="2">NTC</th>
              <th colSpan="2">NTD</th>
              <th colSpan="2">OBC</th>
              <th colSpan="2">SEBC</th>
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
                VACANCY <b>ELECTRICAL</b>
              </td>
              <td>{data.g_open_electrical}</td>
              <td>{data.l_open_electrical}</td>
              <td>{data.g_sc_electrical}</td>
              <td>{data.l_sc_electrical}</td>
              <td>{data.g_st_electrical}</td>
              <td>{data.l_st_electrical}</td>
              <td>{data.g_vjdt_electrical}</td>
              <td>{data.l_vjdt_electrical}</td>
              <td>{data.g_ntb_electrical}</td>
              <td>{data.l_ntb_electrical}</td>
              <td>{data.g_ntc_electrical}</td>
              <td>{data.l_ntc_electrical}</td>
              <td>{data.g_ntd_electrical}</td>
              <td>{data.l_ntd_electrical}</td>
              <td>{data.g_obc_electrical}</td>
              <td>{data.l_obc_electrical}</td>
              <td>{data.g_sebc_electrical}</td>
              <td>{data.l_sebc_electrical}</td>
              <td>{data.g_orphan_electrical}</td>
              <td>
                {parseInt(data.g_open_electrical) +
                  parseInt(data.l_open_electrical) +
                  parseInt(data.g_sc_electrical) +
                  parseInt(data.l_sc_electrical) +
                  parseInt(data.g_st_electrical) +
                  parseInt(data.l_st_electrical) +
                  parseInt(data.g_vjdt_electrical) +
                  parseInt(data.l_vjdt_electrical) +
                  parseInt(data.g_ntb_electrical) +
                  parseInt(data.l_ntb_electrical) +
                  parseInt(data.g_ntc_electrical) +
                  parseInt(data.l_ntc_electrical) +
                  parseInt(data.g_ntd_electrical) +
                  parseInt(data.l_ntd_electrical) +
                  parseInt(data.g_obc_electrical) +
                  parseInt(data.l_obc_electrical) +
                  parseInt(data.g_sebc_electrical) +
                  parseInt(data.l_sebc_electrical) +
                  parseInt(data.g_orphan_electrical)|| 0}
              </td>
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
              <td>{data.pw_open_electrical}</td>
              <td>{data.def_open_electrical}</td>
              <td>{data.pw_sc_electrical}</td>
              <td>{data.def_sc_electrical}</td>
              <td>{data.pw_st_electrical}</td>
              <td>{data.def_st_electrical}</td>
              <td>{data.pw_vjdt_electrical}</td>
              <td>{data.def_vjdt_electrical}</td>
              <td>{data.pw_ntb_electrical}</td>
              <td>{data.def_ntb_electrical}</td>
              <td>{data.pw_ntc_electrical}</td>
              <td>{data.def_ntc_electrical}</td>
              <td>{data.pw_ntd_electrical}</td>
              <td>{data.def_ntd_electrical}</td>
              <td>{data.pw_obc_electrical}</td>
              <td>{data.def_obc_electrical}</td>
              <td>{data.pw_sebc_electrical}</td>
              <td>{data.def_sebc_electrical}</td>
              <td></td>
              <td>
                {parseInt(data.pw_open_electrical) +
                  parseInt(data.def_open_electrical) +
                  parseInt(data.pw_sc_electrical) +
                  parseInt(data.def_sc_electrical) +
                  parseInt(data.pw_st_electrical) +
                  parseInt(data.def_st_electrical) +
                  parseInt(data.pw_vjdt_electrical) +
                  parseInt(data.def_vjdt_electrical) +
                  parseInt(data.pw_ntb_electrical) +
                  parseInt(data.def_ntb_electrical) +
                  parseInt(data.pw_ntc_electrical) +
                  parseInt(data.def_ntc_electrical) +
                  parseInt(data.pw_ntd_electrical) +
                  parseInt(data.def_ntd_electrical) +
                  parseInt(data.pw_obc_electrical) +
                  parseInt(data.def_obc_electrical) +
                  parseInt(data.pw_sebc_electrical) +
                  parseInt(data.def_sebc_electrical)|| 0}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table className="vacTable">
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th colSpan="2">OPEN</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">VJDT</th>
              <th colSpan="2">NTB</th>
              <th colSpan="2">NTC</th>
              <th colSpan="2">NTD</th>
              <th colSpan="2">OBC</th>
              <th colSpan="2">SEBC</th>
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
              <td>{data.g_open_electronics}</td>
              <td>{data.l_open_electronics}</td>
              <td>{data.g_sc_electronics}</td>
              <td>{data.l_sc_electronics}</td>
              <td>{data.g_st_electronics}</td>
              <td>{data.l_st_electronics}</td>
              <td>{data.g_vjdt_electronics}</td>
              <td>{data.l_vjdt_electronics}</td>
              <td>{data.g_ntb_electronics}</td>
              <td>{data.l_ntb_electronics}</td>
              <td>{data.g_ntc_electronics}</td>
              <td>{data.l_ntc_electronics}</td>
              <td>{data.g_ntd_electronics}</td>
              <td>{data.l_ntd_electronics}</td>
              <td>{data.g_obc_electronics}</td>
              <td>{data.l_obc_electronics}</td>
              <td>{data.g_sebc_electronics}</td>
              <td>{data.l_sebc_electronics}</td>
              <td>{data.g_orphan_electronics}</td>
              <td>
                {parseInt(data.g_open_electronics) +
                  parseInt(data.l_open_electronics) +
                  parseInt(data.g_sc_electronics) +
                  parseInt(data.l_sc_electronics) +
                  parseInt(data.g_st_electronics) +
                  parseInt(data.l_st_electronics) +
                  parseInt(data.g_vjdt_electronics) +
                  parseInt(data.l_vjdt_electronics) +
                  parseInt(data.g_ntb_electronics) +
                  parseInt(data.l_ntb_electronics) +
                  parseInt(data.g_ntc_electronics) +
                  parseInt(data.l_ntc_electronics) +
                  parseInt(data.g_ntd_electronics) +
                  parseInt(data.l_ntd_electronics) +
                  parseInt(data.g_obc_electronics) +
                  parseInt(data.l_obc_electronics) +
                  parseInt(data.g_sebc_electronics) +
                  parseInt(data.l_sebc_electronics) +
                  parseInt(data.g_orphan_electronics)|| 0}
              </td>
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
              <td>{data.pw_open_electronics}</td>
              <td>{data.def_open_electronics}</td>
              <td>{data.pw_sc_electronics}</td>
              <td>{data.def_sc_electronics}</td>
              <td>{data.pw_st_electronics}</td>
              <td>{data.def_st_electronics}</td>
              <td>{data.pw_vjdt_electronics}</td>
              <td>{data.def_vjdt_electronics}</td>
              <td>{data.pw_ntb_electronics}</td>
              <td>{data.def_ntb_electronics} </td>
              <td>{data.pw_ntc_electronics}</td>
              <td>{data.def_ntc_electronics} </td>
              <td>{data.pw_ntd_electronics}</td>
              <td>{data.def_ntd_electronics}</td>
              <td>{data.pw_obc_electronics}</td>
              <td>{data.def_obc_electronics}</td>
              <td>{data.pw_sebc_electronics} </td>
              <td>{data.def_sebc_electronics}</td>
              <td></td>
              <td>
                {parseInt(data.pw_open_electronics) +
                  parseInt(data.def_open_electronics) +
                  parseInt(data.pw_sc_electronics) +
                  parseInt(data.def_sc_electronics) +
                  parseInt(data.pw_st_electronics) +
                  parseInt(data.def_st_electronics) +
                  parseInt(data.pw_vjdt_electronics) +
                  parseInt(data.def_vjdt_electronics) +
                  parseInt(data.pw_ntb_electronics) +
                  parseInt(data.def_ntb_electronics) +
                  parseInt(data.pw_ntc_electronics) +
                  parseInt(data.def_ntc_electronics) +
                  parseInt(data.pw_ntd_electronics) +
                  parseInt(data.def_ntd_electronics) +
                  parseInt(data.pw_obc_electronics) +
                  parseInt(data.def_obc_electronics) +
                  parseInt(data.pw_sebc_electronics) +
                  parseInt(data.def_sebc_electronics)|| 0}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table className="vacTable">
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th colSpan="2">OPEN</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">VJDT</th>
              <th colSpan="2">NTB</th>
              <th colSpan="2">NTC</th>
              <th colSpan="2">NTD</th>
              <th colSpan="2">OBC</th>
              <th colSpan="2">SEBC</th>
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
              <td>{data.g_open_mechanical}</td>
              <td>{data.l_open_mechanical}</td>
              <td>{data.g_sc_mechanical}</td>
              <td>{data.l_sc_mechanical}</td>
              <td>{data.g_st_mechanical}</td>
              <td>{data.l_st_mechanical}</td>
              <td>{data.g_vjdt_mechanical}</td>
              <td>{data.l_vjdt_mechanical}</td>
              <td>{data.g_ntb_mechanical}</td>
              <td>{data.l_ntb_mechanical}</td>
              <td>{data.g_ntc_mechanical}</td>
              <td>{data.l_ntc_mechanical}</td>
              <td>{data.g_ntd_mechanical}</td>
              <td>{data.l_ntd_mechanical}</td>
              <td>{data.g_obc_mechanical}</td>
              <td>{data.l_obc_mechanical}</td>
              <td>{data.g_sebc_mechanical}</td>
              <td>{data.l_sebc_mechanical}</td>
              <td>{data.g_orphan_mechanical}</td>
              <td>
                {parseInt(data.g_open_mechanical) +
                  parseInt(data.l_open_mechanical) +
                  parseInt(data.g_sc_mechanical) +
                  parseInt(data.l_sc_mechanical) +
                  parseInt(data.g_st_mechanical) +
                  parseInt(data.l_st_mechanical) +
                  parseInt(data.g_vjdt_mechanical) +
                  parseInt(data.l_vjdt_mechanical) +
                  parseInt(data.g_ntb_mechanical) +
                  parseInt(data.l_ntb_mechanical) +
                  parseInt(data.g_ntc_mechanical) +
                  parseInt(data.l_ntc_mechanical) +
                  parseInt(data.g_ntd_mechanical) +
                  parseInt(data.l_ntd_mechanical) +
                  parseInt(data.g_obc_mechanical) +
                  parseInt(data.l_obc_mechanical) +
                  parseInt(data.g_sebc_mechanical) +
                  parseInt(data.l_sebc_mechanical) +
                  parseInt(data.g_orphan_mechanical)|| 0}
              </td>
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
              <td>{data.pw_open_mechanical}</td>
              <td> {data.def_open_mechanical}</td>
              <td>{data.pw_sc_mechanical}</td>
              <td>{data.def_sc_mechanical}</td>
              <td>{data.pw_st_mechanical}</td>
              <td>{data.def_st_mechanical}</td>
              <td>{data.pw_vjdt_mechanical}</td>
              <td>{data.def_vjdt_mechanical}</td>
              <td>{data.pw_ntb_mechanical}</td>
              <td>{data.def_ntb_mechanical}</td>
              <td>{data.pw_ntc_mechanical}</td>
              <td>{data.def_ntc_mechanical}</td>
              <td>{data.pw_ntd_mechanical}</td>
              <td>{data.def_ntd_mechanical}</td>
              <td>{data.pw_obc_mechanical}</td>
              <td>{data.def_obc_mechanical}</td>
              <td>{data.pw_sebc_mechanical} </td>
              <td>{data.def_sebc_mechanical} </td>
              <td></td>
              <td>
                {parseInt(data.pw_open_mechanical) +
                  parseInt(data.def_open_mechanical) +
                  parseInt(data.pw_sc_mechanical) +
                  parseInt(data.def_sc_mechanical) +
                  parseInt(data.pw_st_mechanical) +
                  parseInt(data.def_st_mechanical) +
                  parseInt(data.pw_vjdt_mechanical) +
                  parseInt(data.def_vjdt_mechanical) +
                  parseInt(data.pw_ntb_mechanical) +
                  parseInt(data.def_ntb_mechanical) +
                  parseInt(data.pw_ntc_mechanical) +
                  parseInt(data.def_ntc_mechanical) +
                  parseInt(data.pw_ntd_mechanical) +
                  parseInt(data.def_ntd_mechanical) +
                  parseInt(data.pw_obc_mechanical) +
                  parseInt(data.def_obc_mechanical) +
                  parseInt(data.pw_sebc_mechanical) +
                  parseInt(data.def_sebc_mechanical)|| 0}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
      </div>
      <h5 style={{ textAlign: "center", maxWidth: "100%" }}>
        Note:This is dynamic round and vacancy may be created at any instance
        during admission process.
      </h5>
    </MainScreen>
  );
};

export default CheckVacancy;
