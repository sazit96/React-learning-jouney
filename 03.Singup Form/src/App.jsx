import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
    function signUp(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const dietaryData = formData.getAll("dietaryRestrictions");
        const allData = {
          ...data,
          dietaryRestrictions: dietaryData,
        };
        console.log(allData);
      }
    /*
This is a multi-line comment.
It spans multiple lines.
function signUp(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("description");
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const favColor = formData.get("favColor");

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Description:", description);
    console.log("Employment Status:", employmentStatus);
    console.log("Dietary Restrictions:", dietaryRestrictions);
    console.log("Favorite Color:", favColor);
  }
*/
    
      return (
        <section>
          <h1>Signup form</h1>
          <form onSubmit={signUp}>
            {/* Email */}
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              defaultValue="joe@schmoe.com"
              type="email"
              name="email"
              placeholder="joe@schmoe.com"
              required
            />
    
            {/* Password */}
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              defaultValue="password123"
              type="password"
              name="password"
              required
            />
    
            {/* Description */}
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              defaultValue="This is a description"
              placeholder="Add a brief description about yourself"
            ></textarea>
    
            {/* Employment Status */}
            <fieldset>
              <legend>Employment Status:</legend>
              <label>
                <input type="radio" name="employmentStatus" value="unemployed" />
                Unemployed
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="part-time" />
                Part-time
              </label>
              <label>
                <input
                  type="radio"
                  name="employmentStatus"
                  defaultChecked={true}
                  value="full-time"
                />
                Full-time
              </label>
            </fieldset>
    
            {/* Dietary Restrictions */}
            <fieldset>
              <legend>Dietary Restrictions:</legend>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                Kosher
              </label>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                Vegan
              </label>
              <label>
                <input
                  type="checkbox"
                  name="dietaryRestrictions"
                  defaultChecked={true}
                  value="gluten-free"
                />
                Gluten-free
              </label>
            </fieldset>
    
            {/* Favorite Color */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <select id="favColor" name="favColor" defaultValue="" required>
              <option value="" disabled>
                -- Choose a color --
              </option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
    
            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>
        </section>
      );
}