import React from 'react';
import { Formik } from 'formik';
import {useState} from 'react';

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  
  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
  };
  return (
    <div>
        <Formik
      initialValues={{ categories:'', name: '', unitprice: '', stock: ''}}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (
          test(values.name)
        )
        return errors;
      }}
      validate={values => {
        const errors = {};
        if (!values.unitprice) {
          errors.unitprice = 'Required';
        } else if (
          test(values.unitprice)
        )
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>

          <select name="categories" id="categories">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>

          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="name"
          />
          {errors.name && touched.name && errors.name}
          <input
            type="number"
            name="unitprice"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.unitprice}
            placeholder="unit price"
          />
          {errors.unitprice && touched.unitprice && errors.unitprice}
          <input
            type="number"
            name="stock"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.stock}
            placeholder="unit in stock"
          />
          {errors.stock && touched.stock && errors.stock}

          <label htmlFor="subscribe">
        <input
          type="checkbox"
          value={isSubscribed}
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
        />
        Subscribe
      </label>
      
      <input
            type="text"
            name="unit"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.unit}
            placeholder="unit in unit"
          />
          {errors.unit && touched.unit && errors.unit}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>
  )
}

export default App
