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

    const [errors,setErrors] = useState([])
    
    const handleChange = (field) => {
        return (e) => {
            if (field !== "phoneNumber" || ['0','1','2','3','4','5','6','7','8','9'].includes(e.target.value.slice(-1))) {
                const newObj = Object.assign({}, user, {[field]: e.target.value});
                setUser(newObj);
            }
        }   
    }

    const handleClick = (field) => {
        return () => {
            const newObj = Object.assign({}, user);
            if (field === "signUp") {
                newObj["signUp"] = newObj["signUp"] ? false : true;
            } else {
                if (field === "Instructor") {
                    newObj["staff"] = "Instructor";
                } else {
                    newObj["staff"] = "Student";
                }
            }
            setUser(newObj);

        }   
    }

    const validate = () => {
        let errors = [];
        if (user.name.length === 0) {
            errors.push("Name is required, cannot be empty");
        }

        if (user.email.length === 0 || !user.email.split("").includes('@')) {
            errors.push("Email is required, can not be empty, and should be properly formatted");
        };

        if (user.phoneNumber.length !== 0 && user.phoneNumber.length !== 9) {
            debugger
            errors.push("Phone number not the correct length");
        };

        if (user.phoneNumber.length !== 0 && !user.phoneType) {
            errors.push("Phone type must be selected if a phone number is presented");
        };

        if (user.bio.length > 280) {
            errors.push("Bio should have a character limit of 280 characters");
        };

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        setErrors(errors);

        if (errors.length === 0) {
            setUser({
                "name": "",
                "email": "",
                "phoneNumber": "",
                "phoneType": "",
                "staff": "",
                "bio": "",
                "signUp": false
            });
        };

    }

    const showErrors = () => {
        if (!errors.length) return null;
        return (
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        );

        
    };

    return (
        <>
            {showErrors()}

            <form class="form" onSubmit={handleSubmit}>
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
                    <option selected={!user.phoneType} value="">--Please choose an option--</option>
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
                <label>Staff:
                    <label> Instructor:
                        <input type="radio"
                            name="staff"
                            value="Instructor"
                            checked={user.staff === "Instructor"}
                            onClick={handleClick("Instructor")}
                            >
                        </input>           

                    </label>
                    <label> Student:
                        <input type="radio"
                            name="staff"
                            value="Student"
                            checked={user.staff === "Student"}
                            onClick={handleClick("Student")}
                            >
                        </input>
                    </label>
                </label>
                <label> Bio:
                    <br />
                    <textarea width="300px" rows="4"
                        columns="35"
                        value={user.bio} 
                        onChange={handleChange("bio")}
                        >
                    </textarea>
                </label>
                <label> Sign up for email notifications:
                    <input type="checkbox"
                    checked={user.signUp}
                    onClick={handleClick("signUp")}
                    >
                    </input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </>

    )
}

export default Form;