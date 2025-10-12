import { useEffect, useState } from "react";
import { getAllBillings } from "../services/billingService";
import type { IBilling } from "../core/interfaces/billing";
import { Link} from "react-router-dom";

interface BillingState {
  data: IBilling[];
  store: IBilling[];
}

const Billings = () => {
  const [billings, setBillings] = useState<BillingState>({data:[], store: []});
  const [filter, setFilter] = useState({search: '', type: ''})
  const data = billings.data.filter(s=> 
    String(s?.patient?.name).toLocaleLowerCase()
    .includes(String(filter.search).toLocaleLowerCase())
  )
  useEffect(()=>{
   fetchMedicines();
  },[])

  const fetchMedicines= async ()=>{
    try {
      const response= await getAllBillings({page:1, limit:100});
      if(response.status === 200){
        setBillings(prev=> ({...prev, data: response?.data?.data}));
      }
      } catch (error) {
        console.log(error)
      }
  }
  const handleFilter = (e: { target: { value: string; }; }) =>{
    const {value} = e.target
    setFilter(prev=> ({...prev, search: value}))
  }

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 my-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">Billings</h1>
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
                          value={filter.search}
                          onChange={handleFilter}
                        />
                      </div>
                      {/* <div className="col-auto">
                        <button className="btn app-btn-secondary" 
                        onClick={handleSearch}
                        >
                          Search
                        </button>
                      </div> */}
                    </form>
                  </div>
                  <div className="col-auto">
                    <select className="form-select w-auto" defaultValue={'option-1'}>
                      {options.map(o=> 
                        <option key={o.value} value={o.value}>{o.label}</option>
                      )}
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
                          fillRule="evenodd"
                          d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                        />
                      </svg>
                      Download CSV
                    </a>
                  </div>
                  <div className="col-auto">
                   
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
                      <th className="cell">Bill Date</th>
                      <th className="cell">Name</th>
                      <th className="cell">Total Amount</th>
                      <th className="cell">Net Amount</th>
                      <th className="cell">Items</th>
                      <th className="cell">Status</th>
                      <th className="cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((billing) => (
                      <tr key={billing._id}>
                        <td className="cell">{new Date(billing?.billingDate).toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" })}</td>
                        <td className="cell">
                          <span className="truncate">
                            {billing?.patient?.name}
                          </span>
                        </td>
                        <td className="cell">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(billing?.totalAmount)}</td>
                        <td className="cell">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(billing?.netAmount)}</td>
                        <td className="cell">{billing?.medicines?.length}</td>
                        <td className="cell">{billing?.paymentStatus.charAt(0).toLocaleUpperCase() + billing?.paymentStatus.slice(1).toLocaleLowerCase()}</td>
                        <td className="cell">
                          <Link className="btn-sm app-btn-secondary" to={"/billings/"+billing?._id}>
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <nav className="app-pagination">
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
          </nav> */}

        </div>
      </div>
    </div>
  );
};

export default Billings;

const options = [
  { value: 'option-1', label: 'All' },
  { value: 'option-2', label: 'This week' },
  { value: 'option-3', label: 'This month' },
  { value: 'option-4', label: 'Last 3 months' },
]