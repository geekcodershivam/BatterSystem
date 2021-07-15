import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../Assets/css/wrapper.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import RefreshIcon from '@material-ui/icons/Refresh';
import {connect} from 'react-redux'
import {deletAlerts} from '../actions/alertAction'
const columns = [
  { id: 'name', label: 'Name', },
  { id: 'priceSignal', label: 'Price Signal', },
  {
    id: 'criteria',
    label: 'Criteria',
  },
  {
    id: 'value',
    label: 'Value',
    align: 'right',
  },
  {
    id: 'email',
    label: 'Email',
    align: 'right',
  },
  {
    id: 'activedays',
    label: 'Active Days',
    align: 'right',
  },
  {
    id: 'actions',
    label: 'Actions',
    align: 'right',
  },
];

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
});

function Tables(props) {
  
  useEffect(() => {
   (Array.isArray(props.data))?setData(props.data):setData([])
  },[props]);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState([]);

  const rows=data.map((ele)=>{
    return {
      name:ele['name'],
      priceSignal:'DK1',
      criteria:ele['criteria'],
      value:ele['value'],
      email:ele['email'],
      activedays:ele['days']

    }
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handledelete=(idx)=>{
    props.deletAlerts(props.data[idx]['_id'])
  }

  return (
    <div className="item content-3">
      <div style={{marginBottom: '5px',display: 'flex', justifyContent: 'space-between'}}>
      <Button
    
          style={{ backgroundColor: '#0d1148', color: 'white',padding: "5px 26px 5px 26px",borderRadius: '7px' }}
          variant="contained"
          type="submit"
        >
           Alerts
        </Button>
        <Button
          style={{ backgroundColor: 'white', color: 'grey', marginRight: '374px', padding: "5px 26px 5px 26px",
          }}
          variant="contained"
        >
          Triggered Alerts
        </Button>

        <span>
        <RefreshIcon style={{cursor: 'pointer'}}fontSize="large"/>
        </span>
      </div>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table  stickyHeader aria-label="sticky table">
          <TableHead style={{borderBottom:'none'}}>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{borderBottom: '1px solid white'}}>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,idx) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    const renderitem=
                  (<TableCell id={idx}key={column.id} align={column.align}>
                    {column.format && typeof value === 'number' ? column.format(value) : value}
                  </TableCell>);

                  const action=
                  (<TableCell id={idx} style={{display: 'flex'}} key={column.id} align={column.align}>
                   
                   <DeleteIcon id={idx} onClick={(e)=>handledelete(idx)}/>
                   <CreateIcon/>
                  </TableCell>);

                   if(column.id==='actions') return action
                   else return renderitem;
                   

                  })
                  }
                   
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    
  );
}
export default connect(null,{deletAlerts})(Tables)