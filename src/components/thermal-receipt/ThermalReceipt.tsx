
import  { forwardRef } from "react";
import type { IBilling } from "../../core/interfaces/billing";

interface Props{
    billing?: IBilling
}
const ThermalReceipt = forwardRef(({ billing }: Props, ref) => {
  return (
    <div
      id="receipt-to-print"
      ref={ref}
      style={{
        width: "58mm", // or "80mm"
        fontSize: "12px",
        fontFamily: "monospace",
        padding: "5mm",
        color: "#000",
      }}
    >
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        <h4 style={{ margin: 0 }}>Saroja Hospital Receipt</h4>
        <small>{new Date(billing?.billingDate||"").toLocaleDateString()}</small>
      </div>
      <hr />

      <div>
        <strong>Patient:</strong> {billing?.patient.name} ({billing?.patient.gender})<br />
        <strong>Phone:</strong> {billing?.patient.phone}<br />
        <strong>Address:</strong> {billing?.patient.address}
      </div>
      <hr />

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Med</th>
            <th>Qty</th>
            <th>₹</th>
          </tr>
        </thead>
        <tbody>
          {billing?.medicines.map((item, index) => (
            <tr key={index}>
              <td>{item.medicine.name.slice(0, 10)}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <div>
        <strong>Total:</strong> ₹{billing?.totalAmount} <br />
        <strong>Discount:</strong> ₹{billing?.discount} <br />
        <strong>Net:</strong> ₹{billing?.netAmount} <br />
        <strong>Status:</strong> {billing?.paymentStatus}
      </div>

      <hr />
      <div style={{ textAlign: "center" }}>
        Thank you!<br />
        Visit Again
      </div>
    </div>
  );
});

export default ThermalReceipt;
