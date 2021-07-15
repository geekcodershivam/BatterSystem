import React, { useState } from 'react';
import '../Assets/css/wrapper.css';
import Forms from './Forms';
import TableControl from './TableControl';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import Graph from './Graph';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InputAdornment from '@material-ui/core/InputAdornment';
function Wrapper(props) {
  const [date, setDate] = useState('July 17');
  const [formdata, setForm] = useState({});
  console.log(formdata);

  const datas = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'DEU',
        data: [55, 46, 54.89, 53.81, 50, 50],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192, 1)',
        borderWidth: 1,
      },
      {
        label: 'USA',
        data: [30.23, 50, 50, 50, 44.33, 50],
        fill: true,
        backgroundColor: 'rgb(240,219,79,0.2)',
        borderColor: 'rgba(240,219,79, 1)',
        borderWidth: 1,
      },
    ],
  };

  const days = [
    {
      value: 'July 17',
      label: 'July 17',
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
      value: 'Web',
      label: 'Web',
    },
  ];

  return (
    <div className="wrapper">
      <div className="items content-1">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'center',

            marginBottom: '-31px',
          }}
        >
          <TextField
            id="outlined-select-currency"
            select
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          >
            {days.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <span>
            <SettingsIcon
              style={{ cursor: 'pointer', marginLeft: '10px' }}
              fontSize="large"
            />
          </span>
        </div>
        <FormLabel
          style={{ fontWeight: '600', color: 'black', marginRight: '90%' }}
          component="legend"
        >
          Create Alert
        </FormLabel>
        <Graph
          className="chart"
          type="Line"
          title={'Power Cost'}
          data={datas}
        />
      </div>

      <Forms setForm={setForm} />
      {/* <div >Content-3</div> */}
      <TableControl />
    </div>
  );
}

export default connect(null, null)(Wrapper);
