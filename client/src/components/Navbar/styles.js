import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  profile: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: '50px',
    },
    appBar: {
      padding: '10px 30px',
      justifyContent: 'space-around',
    },
    brandContainer: {
      marginBottom: '5px',
    },
    username: {
      marginBottom: '5px',
    },
    purple: {
      marginBottom: '5px',
    },
  },
  [theme.breakpoints.down('xs')]: {
    heading: {
      fontSize: '35px',
    },
    appBar: {
      flexDirection: 'column',
      padding: '10px 10px',
    },
  },
}));
