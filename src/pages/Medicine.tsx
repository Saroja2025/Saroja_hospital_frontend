import { useEffect, useState } from "react";
import MedicineForm from "../components/forms/MedicineForm";
import { addMedicine, getAllMedicines } from "../services/medicineService";
import type { IMedicine } from "../core/interfaces/medicine";

const Medicine = () => {
  const [show, setShow] = useState<boolean>(false);
  const [medicines, setMedicines] = useState<IMedicine[]>();

  useEffect(()=>{
   fetchMedicines();
  },[])

  const fetchMedicines= async ()=>{
      try {
        const result= await getAllMedicines({page:1, limit:100});
        if(result?.status === 200){
          setMedicines(result?.data?.data);
        }
      } catch (error) {
        console.log(error)
      }
  }
  const addNewMedicine = async (payload: unknown) => {
    console.log(payload);
    try {
      const result = await addMedicine(payload);
      if (result.status === 201) {
        console.log(result.data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">Medicines</h1>
            </div>
            <div className="col-auto">
              <div className="page-utilities">
                <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                  <div className="col-auto">
                    <form className="table-search-form row gx-1 align-items-center">
                      <div className="col-auto">
                        <input
                          type="text"
                          id="search-orders"
                          name="searchorders"
                          className="form-control search-orders py-3"
                          placeholder="Search"
                        />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn app-btn-secondary">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-auto">
                    <select className="form-select w-auto">
                      <option selected value="option-1">
                        All
                      </option>
                      <option value="option-2">This week</option>
                      <option value="option-3">This month</option>
                      <option value="option-4">Last 3 months</option>
                    </select>
                  </div>
                  <div className="col-auto">
                    <a className="btn app-btn-secondary" href="#">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-download me-1"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                        />
                      </svg>
                      Download CSV
                    </a>
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={() => setShow(true)}
                      className="btn app-btn-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        className="bi bi-plus-lg me-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                      Add New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app-card app-card-orders-table shadow-sm mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Batch No.</th>
                      <th className="cell">Name</th>
                      <th className="cell">Price</th>
                      <th className="cell">Brand</th>
                      <th className="cell">Status</th>
                      <th className="cell">Quantity In Stock</th>
                      <th className="cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicines?.map((medicine) => (
                      <tr key={medicine._id}>
                        <td className="cell">{medicine?.batchNumber}</td>
                        <td className="cell">
                          <span className="truncate">
                            {medicine?.name}
                          </span>
                        </td>
                        <td className="cell">{medicine?.price}</td>
                        <td className="cell">
                          {medicine?.brand}
                        </td>
                        <td className="cell">
                          <span className="badge bg-success">{medicine?.status}</span>
                        </td>
                        <td className="cell">{medicine?.quantityInStock}</td>
                        <td className="cell">
                          <a className="btn-sm app-btn-secondary" href="#">
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <nav className="app-pagination">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>

          <MedicineForm
            show={show}
            close={() => setShow(false)}
            submit={addNewMedicine}
          />
        </div>
      </div>
    </div>
  );
};

export default Medicine;
