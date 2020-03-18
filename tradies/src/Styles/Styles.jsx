import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
const UseStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    border: '0.5px solid lightgrey',
    color: 'grey',
    background: 'white'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  displaystyle:
  {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
    border: '0.5px solid lightgrey',
    background: 'white'
  },
  buttoncolorprimary:
  {
    color: 'white',
    background: 'orange'
  },
  buttoncolorsecondary:
  {
    color: 'black',
    background: 'lightgrey'
  },
  Iconstyle: {
    display: 'inline-flex',
    VerticalAlign: 'text-bottom',
    BoxSizing: 'inherit',
    textAlign: 'center',
    AlignItems: 'center'

  },
  IconstylePhone: {
    padding: '0 px',
    margin: '0 px'
  },
  pagesize: {
    padding: '18px',
    justifyContent: 'center'
  },
  fontcolor: {
    color: 'orange'
  },
  backcolour: {
    background: 'lightgrey'
  },
}));

export default UseStyles;