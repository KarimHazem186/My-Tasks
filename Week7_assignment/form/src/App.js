import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const initialValues = {username:"",email:"",password:"",phone:""};
  const [formValues,setFormValues] = useState(initialValues)
  const [formErrors,setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)
  
  const handleChange=(e)=>{
    // console.log(e.target);
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);
  };

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0&&isSubmit) {
      console.log(formValues)
    }
  },[formErrors]);

  const validate=(values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username) {
      errors.username="Username is required!";
    }
    if(!values.email) {
      errors.email="Email is required!";
    } else if (!regex.test(values.email)){
      errors.email="Please enter a valid email format !";
    }if(!values.phone) {
      errors.phone="Phone is required!";
    }else if (values.phone.length>0&&values.phone.length<11){
      errors.phone="Please enter a valid phone number";
    }
    if(!values.password) {
      errors.password="Password is required!";
    }else if (values.password.length < 6){
      errors.password="Password must be at least 6 characters";
    }else if (values.password.length > 10){
      errors.password="Password must be at most 10 characters";
    } 
    return errors
  };

  return (
    <div className="container">

      {
        Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='ui message success'>Successful submission</div>
        ) : (
          
          <></>
          // <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        )
      }

      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input type="text"
             name="username" 
             placeholder='Username' 
             value={formValues.username} 
             onChange={handleChange}
             />
          </div>
          <p>{formErrors.username}</p>
         
          <div className='field'>
            <label>Email</label>
            <input type="text" 
            name="email" 
            placeholder="Email" 
            value={formValues.email} 
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          
          <div className='field'>
            <label>Phone</label>
            <input type="text" 
            name="phone" 
            placeholder="Phone" 
            value={formValues.phone} 
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>


          <div className='field'>
            <label>Password</label>
            <input type="password" 
            name="password" 
            placeholder="Password" 
            value={formValues.password}
            onChange={handleChange} 
            />
          </div>
          <p>{formErrors.password}</p>

          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
