import { Route, Routes } from 'react-router-dom';
import './App.css';
import InvoicesList from './Components/Invoices/InvoicesList';
import SingleInvoiceDetails from './Components/Invoices/SingleInvoiceDetails';

function App() {
  
  return (
    <div className="App" >

      <Routes>
        <Route path='/' element={<InvoicesList />} />
        <Route path="/invoices/:id"  element={<SingleInvoiceDetails/>} />
  
   </Routes>
   </div>
   
  );
}

export default App;
