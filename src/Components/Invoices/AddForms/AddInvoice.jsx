import React, { useState } from "react";

const AddInvoice = (props) => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerId: "",
    Status: "",
    PayedThrough: "",
    CardNumber: "",
    City: "",
    Country: "",
    Street: "",
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
    const newInvoice = {
      CustomerName: formData.CustomerName,
      CustomerId: formData.CustomerId,
      Status: formData.Status,
      PaymentStatus: [
        {
          PayedThrough: formData.PayedThrough,
          CardNumber: formData.CardNumber,
        },
      ],
      Address: [
        {
          City: formData.City,
          Country: formData.Country,
          Street: formData.Street,
        },
      ],
      InvoiceDetails: [
        {
          ItemName: formData.ItemName,
          ItemId: formData.ItemId,
          Price: parseFloat(formData.Price),
          Quantity: parseInt(formData.Quantity),
          Tax: parseFloat(formData.Tax),
          Total:
            parseFloat(formData.Price) * parseInt(formData.Quantity) +
            parseFloat(formData.Tax),
        },
      ],
    };

    props.onAddInvoice(newInvoice);
  
  };

  return (
    <div>
      <form className='popup-form' id='customerForm' onSubmit={handleSubmit}>
        <div className='one'>
          {" "}
          <label>Customer Name:</label>
          <input
            className='input-edit'
            type='text'
            name='CustomerName'
            required
            value={formData.CustomerName}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          {" "}
          <label>Customer ID:</label>
          <input
            className='input-edit'
            type='number'
            name='CustomerId'
            required
            value={formData.CustomerId}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          {" "}
          <label>Status:</label>
          <select
            className='input-edit'
            type='text'
            name='Status'
            required
            value={formData.Status}
            onChange={handleChange}
          >
            <option value='Pending'>Pending</option>
            <option value='Invoiced'>Invoiced</option>
          </select>
        </div>
        <div className='one'>
          {" "}
          <label>Payment Method:</label>
          <select
            name='PayedThrough'
            required
            value={formData.PayedThrough}
            className='input-edit'
            onChange={handleChange}
          >
            <option value='Select'>Select</option>
            <option value='MasterCard'>MasterCard</option>
            <option value='Visa'>Visa</option>
          </select>
        </div>

        <div className='one'>
          {" "}
          <label>Card Number:</label>
          <input
            className='input-edit'
            type='text'
            name='CardNumber'
            required
            value={formData.CardNumber}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          {" "}
          <label>City:</label>
          <input
            className='input-edit'
            type='text'
            name='City'
            required
            value={formData.City}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          <label>Country:</label>
          <input
            className='input-edit'
            type='text'
            name='Country'
            required
            value={formData.Country}
            onChange={handleChange}
          />
        </div>

        <div className='one'>
          {" "}
          <label>Street:</label>
          <input
            className='input-edit'
            type='text'
            name='Street'
            required
            value={formData.Street}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          {" "}
          <label>Item Name:</label>
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
          <label>Item Id:</label>
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
          <label>Quantity :</label>
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
          <label> Tax:</label>
          <input
            type='number'
            name='Tax'
            value={formData.Tax}
            onChange={handleChange}
            required
            className='input-edit'
          />
        </div>
        <div className='one'>
          {" "}
          <label> Price:</label>
          <input
            type='number'
            name='Price'
            value={formData.Price}
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
};

export default AddInvoice;
