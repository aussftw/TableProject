import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  textField: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#32021F',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4B2E39',
      },
      '&:hover fieldset': {
        borderColor: '#32021F',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4B2E39',
      },
    },
  },
});

export default useStyles;
