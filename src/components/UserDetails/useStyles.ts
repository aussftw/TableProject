import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  wrapper: {
    margin: '0 1rem',
  },
  header: {
    backgroundColor: '#77A0A9',
    color: '#fff',
    paddingLeft: '2rem',
    textAlign: 'center',
  },
  content: {
    minHeight: '300px',
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    marginBottom: '2rem',
    fontSize: '18px',
  },

  desc: {
    fontSize: '16px',
  },
});

export default useStyles;
