import { makeStyles } from '@material-ui/core/styles';
import * as UIControls from '@material-ui/core';

const UseStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    border: '0.5px solid lightgrey',
    display: 'inline-flex',
    justifyContent: 'center',
    width: '49%'
  },
  pagestyle: {
    padding: '10px',
    textAlign: 'center'
  },
  linkstyle: {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center'
  },
  activelink: {
    borderBottom: '3px solid orange',
    width: '100%'
  },
}));

export default UseStyles;