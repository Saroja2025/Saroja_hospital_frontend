import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const role= localStorage.getItem("role");
  const location = useLocation();
  const pathname = location.pathname
  return (
    <div id="app-sidepanel" className="app-sidepanel">
      <div id="sidepanel-drop" className="sidepanel-drop"></div>
      <div className="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
          &times;
        </a>
        <div className="app-branding">
          <a className="app-logo" href="index.html">
            <img
              className="logo-icon me-2"                                   
              src="assets/images/app-logo.png"
              alt="logo"
            />
            <span className="logo-text">Saroja Hospital</span>
          </a>
        </div>

        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
            <li className="nav-item">
              <a className={`nav-link ${pathname == '/dashboard' ?  'active': ''}`} href="/dashboard">
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Overview</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${pathname == '/form' ?  'active': ''}`} href="/form">
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-folder"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                    <path
                      fillRule="evenodd"
                      d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Form</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${pathname == '/billings' ?  'active': ''}`} href="/billings">
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-folder"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                    <path
                      fillRule="evenodd"
                      d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Billings</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${pathname == '/appointment' ?  'active': ''}`} href="/appointment">
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-card-list"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                    />
                    <circle cx="3.5" cy="5.5" r=".5" />
                    <circle cx="3.5" cy="8" r=".5" />
                    <circle cx="3.5" cy="10.5" r=".5" />
                  </svg>
                </span>
                <span className="nav-link-text">Appointment</span>
              </a>
            </li>
            {
              role ==='admin' && <li className="nav-item">
              <a className={`nav-link ${pathname == '/users' ?  'active': ''}`} href="/users">
                <span className="nav-icon">

                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                </span>
                <span className="nav-link-text">Users</span>
              </a>
            </li>
            }
            <li className="nav-item">
              <a className={`nav-link ${pathname == '/medicine' ?  'active': ''}`} href="/medicine">
                <span className="nav-icon">

                  <svg xmlns="http://www.w3.org/2000/svg" width="1em"
                    height="1em" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
                    <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                  </svg>
                </span>
                <span className="nav-link-text">Medicine</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="app-sidepanel-footer">
          <nav className="app-nav app-nav-footer">
            <ul className="app-menu footer-menu list-unstyled">
              <li className="nav-item">
                <a className={`nav-link ${pathname == '/settings' ?  'active': ''}`} href="/settings">
                  <span className="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-gear"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                      />
                    </svg>
                  </span>
                  <span className="nav-link-text">Settings</span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/"
                >
                  <span className="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-download"
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
                  </span>
                  <span className="nav-link-text">Download</span>
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/"
                >
                  <span className="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-file-person"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </span>
                  <span className="nav-link-text">License</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
