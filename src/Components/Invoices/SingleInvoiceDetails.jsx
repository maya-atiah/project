import React, { useEffect, useState } from "react";
import { invoiceData } from "./InvoiceData";
import { useParams } from "react-router-dom";
import "./SingleInvoice.css";
import { MdOutlineAddCircle, MdArrowBack } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";
import { AiFillDelete } from "react-icons/ai";
import ButtonInvoice from "../UI/ButtonInvoice";
import PopupAdd from "./Popup/PopupAdd";
import AddItems from "./AddForms/AddItems";

const SingleInvoiceDetails = () => {
  const { id } = useParams();

  const [showInput, setShowInput] = useState(false);
  const [invoice, setInvoice] = useState(
    invoiceData.find((item) => item.CustomerId === id)
  );
  const [buttonPopup, setButtonPopup] = useState(false);
  const [TotalAmount, setTotalAmount] = useState();

  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  //show Input
  const editHandler = () => {
    setShowInput(!showInput);
  };

  //handle change the editted inputs
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedInvoice = { ...invoice };

    if (name === "City" || name === "Country" || name === "Street") {
      // Update Address details
      updatedInvoice.Address[index][name] = value;
    } else if (name === "PayedThrough") {
      updatedInvoice.PaymentStatus[index][name] = value;

    } else if (name === "Quantity") {
      // Update Quantity in InvoiceDetails
      if (
        updatedInvoice.InvoiceDetails &&
        updatedInvoice.InvoiceDetails[index]
      ) {
        updatedInvoice.InvoiceDetails[index][name] = parseInt(value, 10);
      }
    } else {
      // Update other fields
      updatedInvoice[name] = value;
    }

    setInvoice(updatedInvoice);
  };

  //submit the edited data
  const handleSubmit = () => {
    const updatedInvoiceData = [...invoiceData];
    const index = updatedInvoiceData.findIndex(
      (item) => item.CustomerId === id
    );

    updatedInvoiceData[index] = invoice;

    setInvoice(updatedInvoiceData[index]);
    setShowInput(false);
  };

  //ADD NEW ITEM
  const handleAddItem = (newItem) => {
    const updatedInvoice = { ...invoice };
    updatedInvoice.InvoiceDetails.push(newItem);

    setInvoice(updatedInvoice);
    setButtonPopup(false);
  };

  //useEffect to update the total amount when we add update or delete the items 
  useEffect(() => {
    const newTotalAmount = invoice.InvoiceDetails.reduce(
      (total, detail) => total + detail.Quantity * (detail.Price + detail.Tax),
      0
    );
    setTotalAmount(newTotalAmount);
  }, [invoice]);


  //delete item function
  const deleteItem = (itemId) => {
    const updatedInvoice = { ...invoice };
    updatedInvoice.InvoiceDetails = updatedInvoice.InvoiceDetails.filter(
      (item) => item.ItemId !== itemId
    );
    setInvoice(updatedInvoice);
  };

  return (
    <div className='sinvoice-container'>
      <div className='sinvoice-list-container'>
        <div className='sinvoice-list-page'>
          <div onClick={(e) => handleBack(e)} className='back-cont'>
            <MdArrowBack className='icon-invoices-title' />
          </div>
          <div className='title-button-inv'>
            <div className='titleSingle'>
              {" "}
              <LiaAddressCard className='icon-invoices' />{" "}
              <h1>Invoice Details for {invoice.CustomerName}</h1>
            </div>
            {showInput ? (
              <div onClick={handleSubmit}>
                {" "}
                <ButtonInvoice title='Submit' />
              </div>
            ) : (
              <div onClick={editHandler}>
                {" "}
                <ButtonInvoice title='Edit' />
              </div>
            )}
          </div>

          <div className='customer-details'>
            <p>
              <span> Name:</span>
              {showInput ? (
                <input
                  value={invoice.CustomerName}
                  name='CustomerName'
                  onChange={handleChange}
                  className='input-edit'
                />
              ) : (
                invoice.CustomerName
              )}
            </p>
            <p>
              <span>ID:</span>
              {invoice.CustomerId}
            </p>
            <p>
              <span> Status:</span>
              {showInput ? (
                <select
                  id='Status'
                  name='Status'
                  required
                  value={invoice.Status}
                  onChange={handleChange}
                  className='input-edit'
                >
                  <option value='Pending'>Pending</option>
                  <option value='Invoiced'>Invoiced</option>
                </select>
              ) : (
                invoice.Status
              )}
            </p>
            <p>
              <span>Payment Status:</span>
              {invoice.PaymentStatus.map((item,index) => {
                return (
                  <>
                    {showInput ? (
                      <select
                        id='PayedThrough'
                        name='PayedThrough'
                        onChange={(e) => handleChange(e, index)}
                        required
                        className='input-edit'
                        value={item.PayedThrough}
                      >
                        <option value='MasterCard'>MasterCard</option>
                        <option value='Visa'>Visa</option>
                      </select>
                    ) : (
                      item.PayedThrough
                    )}
                  </>
                );
              })}
          
            </p>
            <div>
              <p className='Address'>Address</p>
              {invoice.Address.map((item, index) => {
                return (
                  <div>
                    <p>
                      <span>City :</span>
                      {showInput ? (
                        <input
                          value={item.City}
                          name='City'
                          onChange={(e) => handleChange(e, index)}
                          className='input-edit'
                        />
                      ) : (
                        item.City
                      )}
                    </p>
                    <p>
                      <span>Country :</span>
                      {showInput ? (
                        <input
                          value={item.Country}
                          name='Country'
                          onChange={(e) => handleChange(e, index)}
                          className='input-edit'
                        />
                      ) : (
                        item.Country
                      )}
                    </p>
                    <p>
                      {" "}
                      <span>Street :</span>
                      {showInput ? (
                        <input
                          value={item.Street}
                          name='Street'
                          onChange={(e) => handleChange(e, index)}
                          className='input-edit'
                        />
                      ) : (
                        item.Street
                      )}
                    </p>
                  </div>
                );
              })}
            </div>{" "}
          </div>
          <div>
            <div className='item-details-cont'>
              <div className='add-item'>
                <h2>Invoice Items</h2>
                <MdOutlineAddCircle
                  className='icon-invoice'
                  onClick={() => setButtonPopup(true)}
                />
                <PopupAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <AddItems
                    invoiceData={invoice}
                    id={id}
                    handleAddItem={handleAddItem}
                  />
                </PopupAdd>
              </div>
              <div className='table-container'>
                <table>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Tax</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.InvoiceDetails.length === 0 ? (
                      <tr>
                        <td>Your Invoice List is empty</td>
                      </tr>
                    ) : (
                      <>
                        {invoice.InvoiceDetails.map((item, index) => (
                          <tr key={item.ItemId}>
                            <td>{item.ItemName}</td>
                            <td>{item.Price}</td>
                            <td>
                              {" "}
                              {showInput ? (
                                <input
                                  value={item.Quantity}
                                  name='Quantity'
                                  type='number'
                                  className='input-edit-number'
                                  onChange={(e) => handleChange(e, index)}
                                />
                              ) : (
                                item.Quantity
                              )}
                            </td>
                            <td>{item.Tax}</td>
                            <td>{item.Quantity * (item.Price + item.Tax)}</td>
                            <td onClick={() => deleteItem(item.ItemId)}>
                              <AiFillDelete className='icon-invoice' />
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <th>Total</th>
                          <td></td>

                          <td></td>

                          <td></td>
                          <td>{TotalAmount}</td>
                          <td></td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInvoiceDetails;
