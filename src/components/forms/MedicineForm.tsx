import { Modal, Button, Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import type { IMedicine } from '../../core/interfaces/medicine';

interface Props {
  show: boolean;
  close: () => void;
  submit: (v: IMedicine) => void;
}

const initialValues: IMedicine = {
  name: '',
  genericName: '',
  brand: '',
  manufacturer: '',
  description: '',
  dosageForm: '',
  strength: '',
  unit: '',
  price: 0,
  quantityInStock: 0,
  expiryDate: new Date(),
  batchNumber: '',
  prescriptionRequired: false,
  category: '',
  barcode: '',
  storageLocation: '',
  status: 'available',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  dosageForm: Yup.string().required('Dosage form is required'),
  price: Yup.number().min(0, 'Price must be positive').required('Price is required'),
  expiryDate: Yup.date().required('Expiry date is required'),
  batchNumber: Yup.string().required('Batch number is required'),
});

const MedicineForm = ({ show, close, submit }: Props) => {
  const handleSubmit = (values: IMedicine) => {
    const formatted: IMedicine = {
      ...values,
      expiryDate: new Date(values.expiryDate),
      price: Number(values.price),
      quantityInStock: Number(values.quantityInStock),
    };
    submit(formatted);
    close();
  };

  return (
    <Modal show={show} onHide={close} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Medicine Form</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Name *</BootstrapForm.Label>
                    <Field name="name" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="name" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Generic Name</BootstrapForm.Label>
                    <Field name="genericName" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Brand</BootstrapForm.Label>
                    <Field name="brand" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Manufacturer</BootstrapForm.Label>
                    <Field name="manufacturer" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={12}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Description</BootstrapForm.Label>
                    <Field as="textarea"  name="description" className="form-control" rows={4} />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Dosage Form *</BootstrapForm.Label>
                    <Field name="dosageForm" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="dosageForm" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={3}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Strength</BootstrapForm.Label>
                    <Field name="strength" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={3}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Unit</BootstrapForm.Label>
                    <Field name="unit" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={4}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Price *</BootstrapForm.Label>
                    <Field name="price" type="number" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="price" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={4}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Quantity In Stock</BootstrapForm.Label>
                    <Field name="quantityInStock" type="number" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={4}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Expiry Date *</BootstrapForm.Label>
                    <Field name="expiryDate" type="date" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="expiryDate" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Batch Number *</BootstrapForm.Label>
                    <Field name="batchNumber" className="form-control" />
                    <div className="text-danger"><ErrorMessage name="batchNumber" /></div>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Category</BootstrapForm.Label>
                    <Field name="category" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Barcode</BootstrapForm.Label>
                    <Field name="barcode" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Storage Location</BootstrapForm.Label>
                    <Field name="storageLocation" className="form-control" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Status</BootstrapForm.Label>
                    <Field as="select" name="status" className="form-control">
                      <option value="">Select</option>
                      <option value="available">Available</option>
                      <option value="out_of_stock">Out of Stock</option>
                      <option value="expired">Expired</option>
                    </Field>
                  </BootstrapForm.Group>
                </Col>

                <Col md={6} className="d-flex align-items-center mb-3">
                  <BootstrapForm.Check
                    type="checkbox"
                    label="Prescription Required"
                    name="prescriptionRequired"
                    as={Field}
                  />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={close}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Save Medicine
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default MedicineForm;
