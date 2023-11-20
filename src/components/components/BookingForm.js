import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useAlertContext } from "./context/alertContext";
import useSubmit from "./hooks/useSubmit";
const BookingForm = () => {
    const { isLoading, response, submit } = useSubmit();
    // const { onOpen } = useAlertContext();
    // === All fild values that well insert === //
const initialValues = {
    resDate: '',
    resTime: '',
    guests: '',
    occasion: ''
}
// ====
const validationSchema = Yup.object({
    resDate: Yup.date().required("Required !"),
    resTime: Yup.string().required("Required !"),
    guests: Yup.number().min(1, "Minimum number of guests 1").max(10, "Most number of guests 10").required("Required !"),
    occasion: Yup.string().required("Required !"),
})
    // === Submit button Values
const onSubmit = (values) => {
    // console.log(values)
      submit('', values)
      alert(JSON.stringify(values, null, 2));
      values.preventDefult()

}
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <label htmlFor="resDate">Choose date</label>
                <Field type="date" id="resDate" name="resDate" />
                <ErrorMessage name='resDate' />
                {/*  */}
                <label htmlFor="resTime">Choose time</label>
                <Field as='select' id="resTime" name='resTime'>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </Field>
                <ErrorMessage name='resTime' />
                {/*  */}
                <label htmlFor="guests">Number of guests</label>
                <Field type="number" placeholder="1" min="1" max="10" id="guests" name="guests" />
                <ErrorMessage name='guests' />
                {/*  */}
                <label htmlFor="occasion">Occasion</label>
                <Field as='select' id="occasion" name='occasion'>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Field>
                <ErrorMessage name='occasion' />
                {/* <input type="submit" value="Make Your reservation" /> */}
                <button type="submit">Make Your reservation</button>

            </Form>
        </Formik>
    )
}

export default BookingForm
