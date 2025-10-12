import { useEffect, useRef, useState } from "react";

import type { IBilling } from "../core/interfaces/billing";
import { getBillingById } from "../services/billingService";
import { useParams } from "react-router-dom";
import ThermalReceipt from "../components/thermal-receipt/ThermalReceipt";
import  { useReactToPrint }  from 'react-to-print';
import html2pdf from "html2pdf.js";

const BillingDetail = () => {
  const printRef = useRef(null);
  const [billing, setBilling] = useState<IBilling>();
  const {id}= useParams();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Billing Receipt",
  });

useEffect(() => {
  // Fetch billing from API
  if(id){
    getBillingById(id,{}).then((data) => setBilling(data.data?.data));
  }
}, []);


const downloadPDF = () => {
  const element = document.getElementById("receipt-to-print");
  if (element) {
    html2pdf()
      .from(element)
      .set({
        margin: 0,
        filename: "receipt.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: [58, 200], orientation: "portrait" },
      })
      .save();
  } else {
    console.error("Element with id 'receipt-to-print' not found.");
  }
};

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
<div className="col-12 col-lg-12">
  <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
    <div className="app-card-header p-3 border-bottom-0">
      <div className="row align-items-center gx-3">
        <div className="col-auto">
          <div className="app-icon-holder">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-receipt"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 0 0-1 1v13.5a.5.5 0 0 0 .74.439L5 15l2.26.94a.5.5 0 0 0 .48 0L10 15l2.26.94a.5.5 0 0 0 .74-.439V2a1 1 0 0 0-1-1H3z" />
              <path d="M3 4h10v1H3V4zm0 2h10v1H3V6zm0 2h7v1H3V8z" />
            </svg>
          </div>
        </div>
        <div className="col-auto">
          <h4 className="app-card-title">Billing Information</h4>
        </div>
      </div>
    </div>
<div className="app-card-body px-4 w-100">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
    <div className="col">
      <div className="item-label"><strong>Patient</strong></div>
      <div className="item-data">{billing?.patient.name} ({billing?.patient.gender})</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Phone</strong></div>
      <div className="item-data">{billing?.patient.phone}</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Address</strong></div>
      <div className="item-data">{billing?.patient.address}</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Billing Date</strong></div>
      <div className="item-data">{new Date(billing?.billingDate||"").toLocaleDateString()}</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Total Amount</strong></div>
      <div className="item-data">${billing?.totalAmount}</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Discount</strong></div>
      <div className="item-data">${billing?.discount}</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Net Amount</strong></div>
      <div className="item-data">${billing?.netAmount}</div>
    </div>
    <div className="col">
      <div className="item-label"><strong>Payment Status</strong></div>
      <div className={`item-data ${billing?.paymentStatus === 'paid' ? 'text-success' : 'text-danger'}`}>
        {billing?.paymentStatus}
      </div>
    </div>
  </div>

  <hr className="my-4" />

  <div className="item-label mb-2">
    <strong>Medicines</strong>
  </div>
  <table className="table table-sm table-bordered">
    <thead className="table-light">
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Dosage</th>
        <th>Strength</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {billing?.medicines?.map((item, index) => (
        <tr key={index}>
          <td>{item.medicine.name}</td>
          <td>{item.medicine.brand}</td>
          <td>{item.medicine.dosageForm}</td>
          <td>{item.medicine.strength}</td>
          <td>{item.quantity}</td>
          <td>${item.price}</td>
          <td>${item.total}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    <div className="app-card-footer p-4 mt-auto">
      <a className="btn app-btn-secondary" href="#" onClick={downloadPDF}>
        Download Invoice
      </a>
      <a className="btn app-btn-primary ms-2" href="#" onClick={handlePrint}>
        Print Invoice
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
      <div style={{display:"none", fontFamily: "monospace", fontSize: "10px" }}>
        <ThermalReceipt ref={printRef}  billing={billing} />
      </div>
    </div>
  );
};

export default BillingDetail;
