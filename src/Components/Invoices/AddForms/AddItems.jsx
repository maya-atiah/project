import React, { useState } from 'react'



const AddItems = (props) => {
   const [formData, setFormData] = useState({
     ItemId: "",
     ItemName: "",
     Price: "",
     Quantity: "",
     Tax: "",
   });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   const handleSubmit = (e) => {
     e.preventDefault();
     const newItem = {
        
           ItemName: formData.ItemName,
           ItemId: formData.ItemId,
           Price: parseFloat(formData.Price),
           Quantity: parseInt(formData.Quantity),
           Tax: parseFloat(formData.Tax),
           Total:
             parseFloat(formData.Price) * parseInt(formData.Quantity) +
             parseFloat(formData.Tax),
        
     };

     props.handleAddItem(newItem);

   };
  return (
    <div>
      <form className='popup-form' id='customerForm' onSubmit={handleSubmit}>
        <div className='one'>
          {" "}
          <label for='ItemId'>Item Id:</label>
          <input
            type='number'
            name='ItemId'
            value={formData.ItemId}
            onChange={handleChange}
            required
            className='input-edit'
          />
        </div>
        <div className='one'>
          {" "}
          <label for='ItemName'>Item Name:</label>
          <input
            type='text'
            name='ItemName'
            value={formData.ItemName}
            onChange={handleChange}
            required
            className='input-edit'
          />
        </div>
        <div className='one'>
          {" "}
          <label for='Price'>Price:</label>
          <input
            type='number'
            name='Price'
            value={formData.Price}
            onChange={handleChange}
            required
            className='input-edit'
          />
        </div>

        <div className='one'>
          {" "}
          <label for='Quantity'>Quantity</label>
          <input
            type='number'
            name='Quantity'
            value={formData.Quantity}
            onChange={handleChange}
            required
            className='input-edit'
          />
        </div>
        <div className='one'>
          {" "}
          <label for='Tax'>Tax:</label>
          <input
            type='number'
            name='Tax'
            value={formData.Tax}
            onChange={handleChange}
            required
            className='input-edit'
          />
        </div>
     

        <button type='submit' className='btn-submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddItems
