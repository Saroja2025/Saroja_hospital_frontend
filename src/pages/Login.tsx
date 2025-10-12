import { useFormik } from "formik";
import * as Yup from "yup";
import { AxiosError } from "axios";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await login({
          email: values.email,
          password: values.password,
        });

        // Example: Save token and redirect
        localStorage.setItem("token", response.data.data?.accessToken);
        localStorage.setItem("role", response.data.data?.role);
        navigate("/dashboard");
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrors({ password: error.response?.data.responseMessage });
        } else {
          setErrors({ password: "Login failed. Please try again." });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="app-login min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-5">

          {/* Logo */}
          <div className="text-center mb-4">
            <a href="/">
              <img
                className="logo-icon mb-3"
                src="assets/images/app-logo.png"
                alt="logo"
                style={{ width: "70px" }}
              />
            </a>
            <h3 className="fw-bold text-dark">Log in to Portal</h3>
            <p className="text-muted small">Welcome back! Please enter your details</p>
          </div>

          {/* Form */}
          <form className="auth-form login-form" onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`form-control form-control-lg rounded-3 ${formik.touched.email && formik.errors.email ? "is-invalid" : ""
                  }`}
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`form-control form-control-lg rounded-3 ${formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : ""
                  }`}
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">{formik.errors.password}</div>
              )}
            </div>

            {/* Extra Options */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                  {...formik.getFieldProps("remember")}
                />
                <label className="form-check-label small" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="/login" className="small text-hospital fw-semibold">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-hospital text-white w-100 py-2 rounded-3 fw-bold"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
