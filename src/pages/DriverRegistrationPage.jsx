// import React, { useState } from 'react';
// import "../styles/driver-registration.css";
// import axios from 'axios';

// const DriverRegistrationPage = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     address: '',
//     licenseNumber: '',
//     idProofType: 'Aadhaar', // Default value for identification proof type
//     drivingLicense: null, // To handle file upload for driving license
//     idProofFile: null, // To handle file upload for identification proof
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     // Loop over each field in formData to check if they are empty
//     Object.keys(formData).forEach((field) => {
//       if (field !== 'drivingLicense' && field !== 'idProofFile' && !formData[field]) {
//         newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`;
//       }
//     });

//     // Specific validation for file fields
//     if (!formData.drivingLicense) newErrors.drivingLicense = 'Please upload your driving license.';
//     if (!formData.idProofFile) newErrors.idProofFile = 'Please upload your identification proof.';

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       // Form is valid, handle the form submission
//       console.log('Form submitted:', formData);
//     } else {
//       setErrors(formErrors);
//     }


//     // Create a FormData object to handle file uploads
//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (formData[key] !== null && formData[key] !== undefined) {
//         formDataToSend.append(key, formData[key]);
//       }
//     });
  


//     // try {
//     //   const response = await fetch("http://localhost:5000/api/register-driver",  {
//     //    method:"POST",
//     //    body: formData,
//     //   });      //1



//     try {
//       const response = await axios.post("http://localhost:5000/api/register-driver", formData, {
//         headers:{
//           "Content-Type":"multipart/form-data",
//         }
//       });


//       if (response.ok) {
//           alert("Driver registered successfully!");
//           setFormData({ name: "", email: "", phone: "", age: "", address: "", licenseNumber: "", idProofType: "",  drivingLicense: "", idProofFile: ""});
//       } else {
//           const errorData = await response.json();
//           alert(errorData.error || "Failed to register driver");
//       }
//   } catch (error) {
//       console.error("Error submitting form:", error);
//   }

//   //reset

//   setFormData({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     address: '',
//     licenseNumber: '',
//     identificationProof: '',
//     idProofType: 'Aadhaar',
//     drivingLicense: null,
//     idProofFile: null,
//   });

  
//   };

//   // Array of fields to render
//   const fields = [
//     { label: 'Full Name', name: 'name', type: 'text' },
//     { label: 'Email', name: 'email', type: 'email' },
//     { label: 'Phone Number', name: 'phone', type: 'text' },
//     { label: 'Age', name: 'age', type: 'number' },
//     { label: 'Address', name: 'address', type: 'text' },
//     { label: 'License Number', name: 'licenseNumber', type: 'text' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-900 to-yellow-400 flex items-center justify-center py-8">
//       <div className="bg-white p-8 m-6  rounded-lg shadow-lg w-full max-w-md">
//                <h2 className="form-heading">Driver Registration</h2>

// <form onSubmit={handleSubmit} className="form-container">
//   {/* Render standard input fields */}
//   {fields.map(({ label, name, type }) => (
//     <div key={name} className="form-group">
//       <label htmlFor={name} className="label">{label}</label>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={formData[name]}
//         onChange={handleInputChange}
//         className="input-field"
//         required
//       />
//       {errors[name] && <p className="error-text">{errors[name]}</p>}
//     </div>
//   ))}


//   {/* Identification Proof Type (Aadhar or Passport) */}
//   <div className="form-group">
//     <label htmlFor="idProofType" className="label">Identification Proof Type</label>
//     <select
//       id="idProofType"
//       name="idProofType"
//       value={formData.idProofType}
//       onChange={handleInputChange}
//       className="input-field"
//     >
//       <option value="Aadhaar">Aadhaar Card</option>
//       <option value="Passport">Passport</option>
//     </select>
//     {errors.idProofType && <p className="error-text">{errors.idProofType}</p>}
//   </div>

//   {/* File Upload for Driving License */}
//   <div className="form-group">
//     <label htmlFor="drivingLicense" className="label">Upload Driving License</label>
//     <input
//       type="file"
//       id="drivingLicense"
//       name="drivingLicense"
//       onChange={handleFileChange}
//       className="file-input"
//     />
//     {errors.drivingLicense && <p className="error-text">{errors.drivingLicense}</p>}
//   </div>

//   {/* File Upload for Identification Proof */}
//   <div className="form-group">
//     <label htmlFor="idProofFile" className="label">Upload Identification Proof</label>
//     <input
//       type="file"
//       id="idProofFile"
//       name="idProofFile"
//       onChange={handleFileChange}
//       className="file-input"
//     />
//     {errors.idProofFile && <p className="error-text">{errors.idProofFile}</p>}
//   </div>

//   <button type="submit" className="submit-button">
//     Register as Driver
//   </button>

//   <button
//     type="button"
//     className="reset-button"
//     onClick={() =>
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         age: '',
//         address: '',
//         licenseNumber: '',
//         identificationProof: '',
//         idProofType: 'Aadhaar',
//         drivingLicense: null,
//         idProofFile: null,
//       })
//     }
//   >Reset Form</button>

// </form>

//       </div>
//     </div>
//   );
// };

// export default DriverRegistrationPage;










import React, { useState } from 'react';
import "../styles/driver-registration.css";
import axios from 'axios';

const DriverRegistrationPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    licenseNumber: '',
    idProofType: 'Aadhaar', // Default value for identification proof type
    drivingLicense: null, // To handle file upload for driving license
    idProofFile: null, // To handle file upload for identification proof
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    // Loop over each field in formData to check if they are empty
    Object.keys(formData).forEach((field) => {
      if (field !== 'drivingLicense' && field !== 'idProofFile' && !formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`;
      }
    });

    // Specific validation for file fields
    if (!formData.drivingLicense) newErrors.drivingLicense = 'Please upload your driving license.';
    if (!formData.idProofFile) newErrors.idProofFile = 'Please upload your identification proof.';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, handle the form submission
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }


    // Create a FormData object to handle file uploads
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    });
  


    // try {
    //   const response = await fetch("http://localhost:5000/api/register-driver",  {
    //    method:"POST",
    //    body: formData,
    //   });      //1



    try {
      const response = await axios.post("http://localhost:5000/api/register-driver", formData, {
        headers:{
          "Content-Type":"multipart/form-data",
        }
      });


      if (response.ok) {
          alert("Driver registered successfully!");
          setFormData({ name: "", email: "", phone: "", age: "", address: "", licenseNumber: "", idProofType: "",  drivingLicense: "", idProofFile: ""});
      } else {
          const errorData = await response.json();
          alert(errorData.error || "Failed to register driver");
      }
  } catch (error) {
      console.error("Error submitting form:", error);
  }

  //reset

  setFormData({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    licenseNumber: '',
    identificationProof: '',
    idProofType: 'Aadhaar',
    drivingLicense: null,
    idProofFile: null,
  });

  
  };

  // Array of fields to render
  const fields = [
    { label: 'Full Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone Number', name: 'phone', type: 'text' },
    { label: 'Age', name: 'age', type: 'number' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'License Number', name: 'licenseNumber', type: 'text' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-yellow-400 flex items-center justify-center py-8">
      <div className="bg-white p-8 m-6  rounded-lg shadow-lg w-full max-w-md">
               <h2 className="form-heading">Driver Registration</h2>

<form onSubmit={handleSubmit} className="form-container">
  {/* Render standard input fields */}
  {fields.map(({ label, name, type }) => (
    <div key={name} className="form-group">
      <label htmlFor={name} className="label">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        className="input-field"
        required
      />
      {errors[name] && <p className="error-text">{errors[name]}</p>}
    </div>
  ))}


  {/* Identification Proof Type (Aadhar or Passport) */}
  <div className="form-group">
    <label htmlFor="idProofType" className="label">Identification Proof Type</label>
    <select
      id="idProofType"
      name="idProofType"
      value={formData.idProofType}
      onChange={handleInputChange}
      className="input-field"
    >
      <option value="Aadhaar">Aadhaar Card</option>
      <option value="Passport">Passport</option>
    </select>
    {errors.idProofType && <p className="error-text">{errors.idProofType}</p>}
  </div>

  {/* File Upload for Driving License */}
  <div className="form-group">
    <label htmlFor="drivingLicense" className="label">Upload Driving License</label>
    <input
      type="file"
      id="drivingLicense"
      name="drivingLicense"
      onChange={handleFileChange}
      className="file-input"
    />
    {errors.drivingLicense && <p className="error-text">{errors.drivingLicense}</p>}
  </div>

  {/* File Upload for Identification Proof */}
  <div className="form-group">
    <label htmlFor="idProofFile" className="label">Upload Identification Proof</label>
    <input
      type="file"
      id="idProofFile"
      name="idProofFile"
      onChange={handleFileChange}
      className="file-input"
    />
    {errors.idProofFile && <p className="error-text">{errors.idProofFile}</p>}
  </div>

  <button type="submit" className="submit-button">
    Register as Driver
  </button>

  <button
    type="button"
    className="reset-button"
    onClick={() =>
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        address: '',
        licenseNumber: '',
        identificationProof: '',
        idProofType: 'Aadhaar',
        drivingLicense: null,
        idProofFile: null,
      })
    }
  >Reset Form</button>

</form>

      </div>
    </div>
  );
};

export default DriverRegistrationPage;