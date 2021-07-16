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
import createData from '../Assets/dataController'
let monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


const dateArray=(data)=>{
  if(Array.isArray(data)){
    const date=[...new Set(data.map((ele)=> {return ele.date}))]
    return date.map((ele)=>{ return{value:ele,label: ele}})
  }
  else{
  const today = new Date();
  const date = monthsList[today.getMonth()] + ' ' +today.getDate();
    return [{value:date,label: date}]
  }
}

function Wrapper(props) {
  const [date, setDate] = useState(`${monthsList[new Date().getMonth()]+' '+new Date().getDate()}`);
  const [formdata, setForm] = useState({});
  const days = dateArray(props.graph);
  const data=createData(props.graph,days[0].value);

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
          Power Cost
        </FormLabel>
        <Graph
          className="chart"
          type="Line"
          title={'Power Cost'}
          data={data}
        />
      </div>

      <Forms setForm={setForm} />
      {/* <div >Content-3</div> */}
      <TableControl />
    </div>
  );
}
function mapStateToProps(state) {
  return { graph: state.graph };
}
export default connect(mapStateToProps, null)(Wrapper);
