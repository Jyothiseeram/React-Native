import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted!");

    const form = event.target;
    console.log("First Name:",form.firstName.value);
    console.log("Last Name:", form.lastName.value);
    console.log("Email:", form.email.value);
    console.log("Gender:", form.gender.value);

    // Collect selected courses
    const courses = [];
    form.querySelectorAll("input[name='course']:checked").forEach((c) =>
      courses.push(c.value)
    );
    console.log("Courses:", courses);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name: </label>
          <input name="firstName" placeholder="First name" />
        </div>

        <div>
          <label className="label">Last Name: </label>
          <input name="lastName" placeholder="Last name" />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" value="Female" />
          <label>Female</label>
          <input type="radio" name="gender" value="Male" />
          <label>Male</label>
        </div>

        <div>
          <label>Courses:</label>
          <input type="checkbox" name="course" value="HTML" />
          <label>HTML</label>
          <input type="checkbox" name="course" value="CSS" />
          <label>CSS</label>
          <input type="checkbox" name="course" value="JavaScript" />
          <label>JavaScript</label>
          <input type="checkbox" name="course" value="Bootstrap" />
          <label>Bootstrap</label>
          <input type="checkbox" name="course" value="React" />
          <label>React</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
