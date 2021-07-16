import React, { useState} from 'react';
import {useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import {connect} from 'react-redux';
import {creatAlerts, fetchAlerts} from '../actions/alertAction'
import MenuItem from '@material-ui/core/MenuItem';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .required('required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),

  name: yup.string('Enter your Name').required('Name is required'),
  value: yup.number().required('Values is required'),
});
 function Forms(props) {
  const [day, setDay] = useState('Everyday');
  const [type, setType] = useState('DK-1');
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      value: 0,
      phone: '',
      days: day,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values['days']=day;
      props.creatAlerts(values);
    },
  });

  const days = [
    {
      value: 'Everyday',
      label: 'Everyday',
    },
    {
      value: 'Monday',
      label: 'Monday',
    },
    {
      value: 'Tuesday',
      label: 'Tuesday',
    },
    {
      value: 'Wednesday',
      label: 'Wednesday',
    },
    {
      value: 'Thursday',
      label: 'Thursday',
    },
    {
      value: 'Friday',
      label: 'Friday',
    },
    {
      value: 'Saturday',
      label: 'Saturday',
    },{
      value: 'Sunday',
      label: 'Sunday',
    },

  ];

  const types = [
    {
      value: 'DK-1',
      label: 'DK-1',
    },
    {
      value: 'DK-2',
      label: 'DK-2',
    },
    {
      value: 'DK-3',
      label: 'DK-3',
    }]


  return (
    <div className="item content-2">
      <form onSubmit={formik.handleSubmit}>
        <FormLabel
          style={{ fontWeight: '600', color: 'black' }}
          component="legend"
        >
          Create Alert
        </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          name="name"
          type="search"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <FormLabel
          style={{ marginTop: '10px', fontWeight: '600', color: 'black' }}
          component="legend"
        >
          Criteria
        </FormLabel>
        <FormControl component="fieldset">
          <RadioGroup
            style={{ display: 'inline' }}
            aria-label="criteria"
            name="criteria"
            value={formik.values.criteria}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="Greater than"
              control={<Radio />}
              label="Greater than"
            />
            <FormControlLabel
              value="Less than"
              control={<Radio />}
              label="Less than"
            />
          </RadioGroup>
        </FormControl>
        <></>
        <TextField
          fullWidth
          id="outlined-basic"
          name="value"
          label="value"
          margin="normal"
          type="search"
          variant="outlined"
          value={formik.values.value}
          onChange={formik.handleChange}
          error={formik.touched.value && Boolean(formik.errors.value)}
          helperText={formik.touched.value && formik.errors.value}
        />

        <TextField
          fullWidth
          margin="normal"
          id="outlined-select-currency"
          select
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
          variant="outlined"
        >
          {days.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          margin="normal"
          id="outlined-select-currency"
          select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          variant="outlined"
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          margin="normal"
          id="email outlined-basic"
          name="email"
          type="search"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-basic"
          name="phone"
          type="search"
          label="phone"
          variant="outlined"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button
          className="btn"
          style={{ backgroundColor: 'black', color: 'white' }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default connect(null,{creatAlerts, fetchAlerts})(Forms)
