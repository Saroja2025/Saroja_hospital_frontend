// src/routes/Router.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Appointment from '../pages/Appointment';
import Account from '../pages/Account';
import Settings from '../pages/Settings';
import Help from '../pages/Help';
import NotFound from '../pages/NotFound';
import Stats from '../pages/Stats';
import Notifications from '../pages/Notifications';
import ResetPassword from '../pages/ResetPassword';
import Docs from '../pages/Docs';
import Medicine from '../pages/Medicine';
import Users from '../pages/Users';
import Billings from '../pages/Billings';
import BillingDetail from '../pages/BillingDetail';
import BillingForm from '../components/forms/BillingForm';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<ResetPassword />} />
      {/* Public Routes with Layout */}
      <Route
        element={
          <PublicRoute>
            <PublicLayout />
          </PublicRoute>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>

      {/* Private Routes with Layout */}
      <Route
        element={
            <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/form" element={<BillingForm />} />
        <Route path="/billings" element={<Billings />} />
        <Route path="/billings/:id" element={<BillingDetail />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help" element={<Help />} />
        {/* Add more private routes here */}
      </Route>
        <Route path="*" element={<NotFound />} />

    </Routes>
  </Router>
);

export default AppRouter;
