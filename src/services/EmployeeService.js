import axios from "axios";

class EmployeeService {
  baseUrl = "http://localhost:8080/employeepayrollservice";

  addEmployee(data) {
    return axios.post(`${this.baseUrl}/create`, data);
  }

  getAllemployees() {
    return axios.get(`${this.baseUrl}/get`);
  }

  getEmployee(employee_id) {
    return axios.get(`${this.baseUrl}/get/${employee_id}`);
  }

  deleteEmployee(employee_id) {
    return axios.delete(`${this.baseUrl}/delete/${employee_id}`);
  }

  updateEmployee(employee_id, data) {
    return axios.put(`${this.baseUrl}/update/${employee_id}`, data);
  }
}
export default new EmployeeService();
