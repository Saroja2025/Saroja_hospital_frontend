const ResetPassword = () => {
  return (
    <div className="app app-reset-password p-0">
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
                <a className="app-logo" href="index.html">
                  <img
                    className="logo-icon me-2"
                    src="assets/images/app-logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <h2 className="auth-heading text-center mb-4">Password Reset</h2>

              <div className="auth-intro mb-4 text-center">
                Enter your email address below. We'll email you a link to a page
                where you can easily create a new password.
              </div>

              <div className="auth-form-container text-left">
                <form className="auth-form resetpass-form">
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="reg-email">
                      Your Email
                    </label>
                    <input
                      id="reg-email"
                      name="reg-email"
                      type="email"
                      className="form-control login-email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn bg-hospital btn-block theme-btn mx-auto"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>

                <div className="auth-option text-center pt-5">
                  <a className="app-link" href="/login">
                    Log in
                  </a>{" "}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder"></div>
          <div className="auth-background-mask"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
