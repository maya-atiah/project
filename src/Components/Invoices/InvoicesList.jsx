import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import InvoiceTable from "./InvoiceTable";
import { invoiceData } from "./InvoiceData";
import './invoiceList.css'
import ButtonInvoice from "../UI/ButtonInvoice";
import PopupAdd from "./Popup/PopupAdd";
import AddInvoice from "./AddForms/AddInvoice";



const InvoicesList = () => {
 
  const [invoices, setInvoices] = useState(invoiceData);
  const [showInput, setShowInput] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  //delete invoice
  const handleDeleteInvoice = (id) => {
    const updatedInvoices = invoices.filter((item) => item.CustomerId !== id);
    setInvoices(updatedInvoices);
  }

  //add new invoice
  const handleAddInvoice = (newInvoice) => {
    const addedInvoiceData = [...invoices, newInvoice];
    setInvoices(addedInvoiceData)
    setButtonPopup(false)
   
  };

  //save the new status for a single customer's invoice
   const handleSaveInvoice = (customerId, editedStatus) => {
     const updatedInvoiceData = invoices.map((item) => {
       if (item.CustomerId === customerId) {
         return {
           ...item,
           Status: editedStatus,
         };
       }
       return item;
     });
     setInvoices(updatedInvoiceData);
   };
  
  
  return (
    <div className='invoice-container'>
      <div className='invoice-list-container'>
        <div className='invoice-list-page'>
          <div className='title-button-inv'>
            <div className="title">
              {" "}
              <FaClipboardList className='icon-invoices' />
              <h1>Invoice List</h1>
            </div>
            <div onClick={() => setButtonPopup(true)}>
              {" "}
              <ButtonInvoice title='Add Invoice' />
            </div>

            <PopupAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
              <AddInvoice onAddInvoice={handleAddInvoice} />
            </PopupAdd>
          </div>

          <InvoiceTable
            invoiceData={invoices}
            handleDeleteInvoice={handleDeleteInvoice}
            setShowInput={setShowInput}
            showInput={showInput}
            setInvoices={setInvoices}
            handleSaveInvoice={handleSaveInvoice}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoicesList;
