import { Modal, Button, Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import type { IUser } from '../../core/interfaces/user';

interface Props {
  show: boolean;
  close: () => void;
  submit: (v: IUser) => void;
}

const initialValues: IUser = {
  firstName: '',
  lastName: '',
  role: '',
  email: '',
  password: '',
  avatar: '',
  phone: '',
  dob: undefined,
  gender: '',
  parentFirstName: '',
  parentLastName: '',
  parentEmail: '',
  parentPhone: '',
  parentRelation: '',
  schoolName: '',
  schoolAddress: '',
  bio: '',
  address: '',
  isBlocked: false,
  isVerified: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters'),
  dob: Yup.date().nullable()
});

const UserForm = ({ show, close, submit }: Props) => {
  const handleSubmit = (values: IUser) => {
    submit(values);
    close();
  };

  return (
    <Modal show={show} onHide={close} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>User Form</Modal.Title>
      </Modal.Header>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body>
              <Row>
                {/* Personal Information */}
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>First Name *</BootstrapForm.Label>
                    <Field name="firstName" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="firstName" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                    <Field name="lastName" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Email *</BootstrapForm.Label>
                    <Field name="email" type="email" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="email" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field name="password" type="password" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="password" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Phone</BootstrapForm.Label>
                    <Field name="phone" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Date of Birth</BootstrapForm.Label>
                    <Field name="dob" type="date" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Gender</BootstrapForm.Label>
                    <Field as="select" name="gender" className="form-control">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                {/* 'admin', 'doctor', 'nurse', 'pharmacist','staff', 'accountant','hr' */}
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Role</BootstrapForm.Label>
                    <Field as="select" name="role" className="form-control">
                      <option value="">Select</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="staff">Staff</option>
                      <option value="accountant">Accountant</option>
                      <option value="hr">HR</option>
                    </Field>
                  </BootstrapForm.Group>
                </Col>

                <Col md={12}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Address</BootstrapForm.Label>
                    <Field as="textarea" name="address" className="form-control" rows={3} />
                  </BootstrapForm.Group>
                </Col>

                <Col md={12}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Bio</BootstrapForm.Label>
                    <Field as="textarea" name="bio" className="form-control" rows={3} />
                  </BootstrapForm.Group>
                </Col>

                {/* Parent Info */}
                <Col xs={12}><h5 className="mt-3">Parent Info</h5></Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Parent First Name</BootstrapForm.Label>
                    <Field name="parentFirstName" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Parent Last Name</BootstrapForm.Label>
                    <Field name="parentLastName" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Parent Email</BootstrapForm.Label>
                    <Field name="parentEmail" type="email" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Parent Phone</BootstrapForm.Label>
                    <Field name="parentPhone" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={12}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Relation to Parent</BootstrapForm.Label>
                    <Field name="parentRelation" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                {/* School Info */}
                <Col xs={12}><h5 className="mt-3">School Info</h5></Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>School Name</BootstrapForm.Label>
                    <Field name="schoolName" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>School Address</BootstrapForm.Label>
                    <Field name="schoolAddress" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                {/* Flags */}
                <Col xs={12}><h5 className="mt-3">Status</h5></Col>

                <Col md={6}>
                  <BootstrapForm.Check
                    type="checkbox"
                    label="Is Verified"
                    name="isVerified"
                    as={Field}
                  />
                </Col>

                <Col md={6}>
                  <BootstrapForm.Check
                    type="checkbox"
                    label="Is Blocked"
                    name="isBlocked"
                    as={Field}
                  />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={close}>Cancel</Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>Save User</Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UserForm;
