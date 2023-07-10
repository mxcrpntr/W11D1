import './form.css';
import { useState } from 'react';


const Form = () => {

    const [user,setUser] = useState({
        "name": "",
        "email": "",
        "phoneNumber": "",
        "phoneType": "",
        "staff": "",
        "bio": "",
        "signUp": false
    })
    
    const handleChange = () => {
        
    }

    return (
        <form class="form">
            <input type="text" 
                placeholder="Name"
                value={user.name}
                onChange={handleChange("name")}>
            </input>
            <input type="text"
                placeholder="Email"
                value={user.email} 
                onChange={handleChange("email")}> 
            </input>
            <input type="text"
                placeholder="Phone Number"
                value={user.phoneNumber} 
                onChange={handleChange("phoneNumber")}>
            </input>
            <select onChange={handleChange("phoneType")}>
                <option value="Home"
                    selected={user.phoneType === "Home"}>
                    Home
                </option>
                <option value="Work"
                    selected={user.phoneType === "Work"}>
                    Work
                </option>
                <option value="Mobile"
                    selected={user.phoneType === "Mobile"}>
                    Mobile
                </option>
            </select>
            <label> Instructor:
                <input type="radio"
                    name="staff"
                    value="Instructor"
                    checked={user.staff === "Instructor"}>
                </input>
            </label>
            <label> Student:
                <input type="radio"
                    name="staff"
                    value="Student"
                    checked={user.staff === "Student"}>
                </input>
            </label>
            <label> Bio:
                <textarea rows="4"
                    columns="35"
                    value={user.bio}>
            </textarea>
            </label>
            <label> Sign up for email notifications:
                <input type="checkbox"
                checked={user.signUp}>
                </input>
            </label>
        </form>
    )
}

export default Form;