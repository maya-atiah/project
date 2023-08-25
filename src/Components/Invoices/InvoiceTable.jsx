import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import "./InvoiceTable.css";
import { TbPlayerTrackNextFilled } from "react-icons/tb";


const InvoiceTable = (props) => {
  const [editStates, setEditStates] = useState({});
  const [editedValues, setEditedValues] = useState({});
  const handleNavigation = (e, id) => {
    e.preventDefault();
    window.location.href = `/invoices/${id}`;
  };

  //handleEdit for updateing the editstates into true
  const handleEdit = (customerId) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [customerId]: true,
    }));

    // Initialize the edited value with the current status
    setEditedValues((prevEditedValues) => ({
      ...prevEditedValues,
      [customerId]:
        props.invoiceData.find((item) => item.CustomerId === customerId)
          ?.Status || "",
    }));
  };


  const handleSave = (customerId) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [customerId]: false,
    }));

    //  save edited data
    const editedStatus = editedValues[customerId];
    props.handleSaveInvoice(customerId, editedStatus);
  };

  const handleStatusChange = (customerId, value) => {
    setEditedValues((prevEditedValues) => ({
      ...prevEditedValues,
      [customerId]: value,
    }));
  };

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.invoiceData.length === 0 ? (
            <tr>
              <td>Your Invoice List is empty</td>
            </tr>
          ) : (
            <>
              {props.invoiceData.map((item) => {
                const isEditing = editStates[item.CustomerId];
                return (
                  <tr key={item.CustomerId}>
                    <td
                      onClick={(e) => handleNavigation(e, item.CustomerId)}
                      className='to-single'
                    >
                      <div className='next-icon'>
                        {item.CustomerId}

                        <TbPlayerTrackNextFilled />
                      </div>
                    </td>
                    <td>{item.CustomerName}</td>
                    <td>{item.PaymentStatus[0].PayedThrough}</td>
                    <td>
                      {isEditing ? (
                        <select
                          name='Status'
                          required
                          value={editedValues[item.CustomerId]}
                          onChange={(e) =>
                            handleStatusChange(item.CustomerId, e.target.value)
                          }
                          className='input-edit'
                        >
                          <option value='Pending'>Pending</option>
                          <option value='Invoiced'>Invoiced</option>
                        </select>
                      ) : (
                        item.Status
                      )}
                    </td>
                    <td>
                      {item.InvoiceDetails.reduce(
                        (total, detail) => total + detail.Total,
                        0
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <MdDoneOutline
                          className='icon-invoice'
                          onClick={() => handleSave(item.CustomerId)}
                        />
                      ) : (
                        <FiEdit
                          onClick={() => handleEdit(item.CustomerId)}
                          className='icon-invoice'
                        />
                      )}

                      <AiFillDelete
                        onClick={() =>
                          props.handleDeleteInvoice(item.CustomerId)
                        }
                        className='icon-invoice'
                      />
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
