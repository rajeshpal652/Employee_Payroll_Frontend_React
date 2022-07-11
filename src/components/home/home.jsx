import logo from "../../assets/images/logo.png";
import addButton from "../../assets/icons/create-black-18dp.svg";
import Display from "../display/display";
import EmployeeService from "../../services/EmployeeService.js";
import "../home/home.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
  // let initialArray={
  //     employeeDataArray:[]
  //     }
  const [employeeArray, setEmployeeArray] = useState([]);

  const getAllEmployees = () => {
    EmployeeService.getAllemployees()
      .then((emp) => {
        console.log(emp.data.data);
        setEmployeeArray(emp.data.data);
      })
      .catch((err) => {
        console.log("err after", err);
      });
  };

  useEffect(() => {
    console.log("homepage");
    getAllEmployees();
  }, []);

  return (
    <>
      <div className="body">
        <header className="header-content header">
          <div className="logo-content">
            <img src={logo} alt="" />
            <div>
              <span className="emp-text">EMPLOYEE</span>
              <span className="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>
        <div className="main-content">
          <div className="header-content">
            <div className="heading">
              Employee Details
              <div className="emp-count">{employeeArray.length}</div>
            </div>
            <Link to="/addemployee" className="add-button">
              <img src={addButton} alt="" />
              Add User
            </Link>
          </div>
          <div className="table-main">
            <Display employeeArray={employeeArray} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
