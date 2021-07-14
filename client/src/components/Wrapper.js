import React,{useState} from 'react';
import '../Assets/css/wrapper.css';
import Forms from './Forms';
import Tables from './Tables';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import Graph from './Graph';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InputAdornment from '@material-ui/core/InputAdornment';
function Wrapper(props) {
  const [date, setDate] = useState('July 17');
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
      }
    ],
  };
  const data = props.alert === null ? [] : props.alert;
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
     
         <div style={{
               display: 'flex',
               justifyContent: 'flex-end',
               alignItems: 'flex-end',
               alignContent: 'center',
               marginBottom: '-31px'
            }}>
         
        <TextField
          id="outlined-select-currency"
          select
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
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
        <SettingsIcon style={{cursor: 'pointer'}} fontSize="large"/>
        </span>
      </div>
      <FormLabel
          style={{ fontWeight: '600', color: 'black',marginRight:'90%' }}
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
        
      <Forms />
      {/* <div >Content-3</div> */}
      <Tables data={data} />
    </div>
  );
}

function mapStateToProps({ alert }) {
  return { alert };
}
export default connect(mapStateToProps, null)(Wrapper);
