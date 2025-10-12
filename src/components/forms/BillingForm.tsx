import { Button, Form as BootstrapForm, Row, Col, Card } from "react-bootstrap";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import type { IMedicine } from "../../core/interfaces/medicine";
import type { IBillingForm } from "../../core/interfaces/billing";
import { useEffect, useState } from "react";
import { addBilling } from "../../services/billingService";
import { useNavigate } from "react-router-dom";
import { getAllMedicines } from "../../services/medicineService";

// This is use for initialization
const initialValues: IBillingForm = {
  patient: {
    name: "",
    phone: "",
    age: 0,
    gender: "",
    address: "",
  },
  medicines: [
    {
      medicine: "",
      quantity: 1,
      price: 1,
      total: 1,
    },
  ],
  totalAmount: 0,
  netAmount: 0,
  paymentStatus: "paid",
  discount: 0,
};

const validationSchema = Yup.object({
  patient: Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d+$/, "Only numbers are allowed")
      .min(10, "Phone must be at least 10 digits")
      .max(15, "Phone must be at most 15 digits"),
    age: Yup.number().min(0).required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string(),
  }),
  medicines: Yup.array().of(
    Yup.object({
      medicine: Yup.string().required("Medicine is required"),
      quantity: Yup.number().min(1).required("Quantity is required"),
      price: Yup.number().min(0).required("Price is required"),
      total: Yup.number(),
    })
  ),
  totalAmount: Yup.number().min(1).required("Total amount is required"),
  netAmount: Yup.number().min(1).required("Net Amount is required"),
  discount: Yup.number(),
});

const AutoCalculateTotals = () => {
  const { values, setFieldValue } = useFormikContext<IBillingForm>();

  useEffect(() => {
    let totalAmount = 0;

    values.medicines.forEach((med, index) => {
      const total = med.price * med.quantity;
      totalAmount += total;
      setFieldValue(`medicines[${index}].total`, total, false); // prevent extra re-renders
    });

    setFieldValue("totalAmount", totalAmount, false);
    setFieldValue("netAmount", totalAmount - (values.discount || 0), false);
  }, [values.medicines, values.discount, setFieldValue]);

  return null; // This component doesn't render anything
};

const BillingForm = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const navigate= useNavigate()
  const addNewBilling = async (payload: unknown) => {
    try {
      const result = await addBilling(payload);
      if (result.status === 200) {
        navigate("/billings/"+result?.data?.data?._id+"?invoice=true");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (values: IBillingForm) => {
    addNewBilling(values);
  };

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
  useEffect(()=>{
   fetchMedicines();
  },[])

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, values ,setFieldValue}) => (
                  <Form>
                    <AutoCalculateTotals />
                    <h5 className="mt-2 mb-3 border-bottom pb-2 text-primary">
                      Patient Details
                    </h5>
                    <Row>
                      <Col md={6}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>Phone *</BootstrapForm.Label>
                          <Field name="patient.phone" className="form-control" />
                          <div className="text-danger">
                            <ErrorMessage name="patient.phone" />
                          </div>
                        </BootstrapForm.Group>
                      </Col>

                      <Col md={6}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>Name *</BootstrapForm.Label>
                          <Field name="patient.name" className="form-control" />
                          <div className="text-danger">
                            <ErrorMessage name="patient.name" />
                          </div>
                        </BootstrapForm.Group>
                      </Col>

                      <Col md={6}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>Age *</BootstrapForm.Label>
                          <Field
                            name="patient.age"
                            type="number"
                            className="form-control"
                            max
                          />
                          <div className="text-danger">
                            <ErrorMessage name="patient.age" />
                          </div>
                        </BootstrapForm.Group>
                      </Col>

                      <Col md={6}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>Gender *</BootstrapForm.Label>
                          <Field
                            as="select"
                            name="patient.gender"
                            className="form-control"
                          >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </Field>
                          <div className="text-danger">
                            <ErrorMessage name="patient.gender" />
                          </div>
                        </BootstrapForm.Group>
                      </Col>

                      <Col md={12}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>Address</BootstrapForm.Label>
                          <Field
                            as="textarea"
                            name="patient.address"
                            className="form-control"
                            rows={3}
                          />
                        </BootstrapForm.Group>
                      </Col>
                    </Row>

                    <h5 className="mt-2 mb-3 border-bottom pb-2 text-success">
                      Prescribed Medicines
                    </h5>

                    <div className="p-3 border rounded bg-light mb-3">
                      <Row className="fw-bold text-muted mb-2">
                        <Col md={4}>Medicine</Col>
                        <Col md={2}>Quantity</Col>
                        <Col md={3}>Price</Col>
                        <Col md={1}>Total</Col>
                        <Col md={2}></Col>
                      </Row>
                    </div>

                    <FieldArray name="medicines">
                      {({ push, remove }) => (
                        <>
                          {values.medicines.map((m, index) => (
                            <Row key={index} className="align-items-center">
                              <Col md={4}>
                                <BootstrapForm.Group className="mb-3">
                                  <Field name={`medicines[${index}].medicine`}>
                                    {({ field, form }) => (
                                      <select
                                        {...field}
                                        className="form-control"
                                        onChange={(e) => {
                                          const selectedId = e.target.value;
                                          form.setFieldValue(
                                            `medicines[${index}].medicine`,
                                            selectedId
                                          );

                                          const selectedMedicine = medicines.find(
                                            (med) => med._id === selectedId
                                          );

                                          if (selectedMedicine) {
                                            const price = selectedMedicine.price || 0;
                                            const quantity =
                                              form.values.medicines[index].quantity ||
                                              1;
                                            const total = price * quantity;

                                            form.setFieldValue(
                                              `medicines[${index}].price`,
                                              price
                                            );
                                            form.setFieldValue(
                                              `medicines[${index}].total`,
                                              total
                                            );
                                          }
                                        }}
                                      >
                                        <option value="">Select Medicine</option>
                                        {medicines.map((med) => (
                                          <option key={med._id} value={med._id}>
                                            {med.name}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  </Field>
                                  <div className="text-danger">
                                    <ErrorMessage
                                      name={`medicines[${index}].medicine`}
                                    />
                                  </div>
                                </BootstrapForm.Group>
                              </Col>

                              <Col md={2}>
                                <BootstrapForm.Group className="mb-3">
                                  <Field
                                    name={`medicines[${index}].quantity`}
                                    type="number"
                                    className="form-control"
                                    min={1}
                                    onChange={(e) => {
                                      const quantity =
                                        parseInt(e.target.value, 10) || 0;
                                      const price = m.price || 0;
                                      const total = quantity * price;

                                      setFieldValue(
                                        `medicines[${index}].quantity`,
                                        quantity
                                      );
                                      setFieldValue(
                                        `medicines[${index}].total`,
                                        total
                                      );
                                    }}
                                  />
                                  <div className="text-danger">
                                    <ErrorMessage
                                      name={`medicines[${index}].quantity`}
                                    />
                                  </div>
                                </BootstrapForm.Group>
                              </Col>

                              <Col md={3}>
                                <BootstrapForm.Group className="mb-3">
                                  <Field
                                    name={`medicines[${index}].price`}
                                    type="number"
                                    className="form-control"
                                    disabled
                                  />
                                  <div className="text-danger">
                                    <ErrorMessage
                                      name={`medicines[${index}].price`}
                                    />
                                  </div>
                                </BootstrapForm.Group>
                              </Col>
                              <Col md={1}>
                                <span>{m?.total}</span>{" "}
                                {/* Display total (not editable) */}
                              </Col>

                              <Col md={2}>
                                <Button
                                  variant="danger"
                                  onClick={() => remove(index)}
                                >
                                  Remove
                                </Button>
                              </Col>
                            </Row>
                          ))}

                          <Button
                            variant="success"
                            className="text-white"
                            onClick={() =>
                              push({ medicine: "", quantity: 1, price: 1, total: 1 })
                            }
                          >
                            + Add Medicine
                          </Button>
                        </>
                      )}
                    </FieldArray>
                    <div className="d-flex justify-content-end mt-4">
                      <div
                        style={{ width: "450px" }}
                        className="border rounded p-3 bg-white shadow-sm"
                      >
                        <BootstrapForm.Group className="mb-3 d-flex gap-2 align-items-center"></BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-3">
                          <Row>
                            <Col md={4}>
                              <BootstrapForm.Label className="w-full">
                                Discount
                              </BootstrapForm.Label>
                            </Col>
                            <Col md={8}>
                              <Field
                                name="discount"
                                type="number"
                                min={0}
                                className="form-control"
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-3">
                          <Row>
                            <Col md={4}>
                              <BootstrapForm.Label className="w-full">
                                Total Amount
                              </BootstrapForm.Label>
                            </Col>
                            <Col md={8}>
                              <Field
                                name="totalAmount"
                                type="number"
                                className="form-control"
                                disabled
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-3">
                          <Row>
                            <Col md={4}>
                              <BootstrapForm.Label className="w-full">
                                Net Amount
                              </BootstrapForm.Label>
                            </Col>
                            <Col md={8}>
                              <Field
                                name="netAmount"
                                type="number"
                                className="form-control fw-bold text-success"
                                disabled
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-4">
                      <Button variant="outline-secondary" onClick={close}>
                        <i className="bi bi-x-circle me-1" /> Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        className="text-white"
                        disabled={isSubmitting}
                      >
                        <i className="bi bi-receipt me-1" /> Create Bill
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
