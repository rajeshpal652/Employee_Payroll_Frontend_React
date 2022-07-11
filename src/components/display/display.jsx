import deleteIcon from "../../assets/icons/delete-black-18dp.svg";
import editIcon from "../../assets/icons/create-black-18dp.svg";
import profile1 from "../../assets/profile-images/Ellipse -3.png";
import profile2 from "../../assets/profile-images/Ellipse -1.png";
import profile3 from "../../assets/profile-images/Ellipse -8.png";
import profile4 from "../../assets/profile-images/Ellipse -7.png";
import "../home/home.scss";
import { useEffect } from "react";
import EmployeeService from "../../services/EmployeeService.js";
import { useNavigate } from "react-router-dom";

const Display = (props) => {
  let employeeArray = [];

  const remove = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((data) => {
      var answer = window.confirm(
        "Data once deleted cannot be restored!! Do you wish to continue ?",
        data
      );
      if (answer === true) {
        alert("Data deleted successfully!!");
        window.location.reload();
        props.getAllEmployees();
      } else {
        window.location.reload();
      }
    });
  };

  let navigate = useNavigate();
  const update = (employeeId) => {
    navigate(`Employeeform/${employeeId}`);
  };

  const getAllEmployees = () => {
    EmployeeService.getAllemployees()
      .then((emp) => {
        console.log("data after get", Array.from(emp.data.data));
        // setEmployeeArray({...employeeArray, employeeDataArray: emp.data.data})
        // console.log(employeeDataArray);
        employeeArray = emp.data.data;
        console.log(employeeArray);
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
    <div>
      <table id="display" className="display">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.employeeArray &&
            props.employeeArray.map((element, ind) => (
              <tr key={`${element.employeeId}`}>
                <td>
                  <img
                    className="profile"
                    src={
                      element.profilePic ===
                      "../../assets/profile-images/Ellipse -3.png"
                        ? profile1
                        : element.profilePic ===
                          "../../assets/profile-images/Ellipse -1.png"
                        ? profile2
                        : element.profilePic ===
                          "../../assets/profile-images/Ellipse -8.png"
                        ? profile3
                        : profile4
                    }
                    alt=""
                  />
                </td>
                <td>{element.name}</td>
                <td>{element.gender}</td>
                <td>
                  {element.departments &&
                    element.departments.map((dept) => (
                      <div className="dept-label">{dept}</div>
                    ))}
                </td>
                <td>$ {element.salary}</td>
                <td>{element.startDate}</td>
                <td>
                  <img
                    onClick={() => remove(element.employeeId)}
                    src={deleteIcon}
                    alt="delete"
                  />

                  <img
                    onClick={() => update(element.employeeId)}
                    src={editIcon}
                    alt="edit"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Display;
