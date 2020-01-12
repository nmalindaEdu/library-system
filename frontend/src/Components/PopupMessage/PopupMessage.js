import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';
import Warning from '@material-ui/icons/WarningRounded';

const useStyles = makeStyles(() => ({
  mainDiv: {
    margin: '3rem',
    display: 'flex',
    flexDirection: 'column'
  },
  childOneDiv: {
    textAlign: 'center',
    // backgroundColor: '#f7f9fc',
    color: 'red'
  },
  warning: {
    // fill: 'red',
    fontSize: '3.5rem'
  },
  pStyle: {
    marginTop: 0
  },
  childDivTwo: {
    backgroundColor: '#f7f9fc'
  },
  dialog: {
    borderRadius: '.8rem'
    // fontFamily: theme.typography.fontFamily,
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {
  const classes = useStyles();
  const { clicked, clickOpen, handleClose } = props;

  return (
    <div>
      <Dialog
        open={clickOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        classes={{ paper: classes.dialog }}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'>
        <div className={classes.mainDiv}>
          <div className={classes.childOneDiv}>
            <Icon>
              <Warning classes={{ root: classes.warning }} />
            </Icon>
            <p className={classes.pStyle}>Confirmation</p>
          </div>
          <div className={classes.childDivTwo}>
            <DialogTitle id='alert-dialog-slide-title'>
              Are you sure, you want to delete?
            </DialogTitle>
            <DialogActions>
              <Button onClick={clicked} color='primary'>
                YES
              </Button>
              <Button onClick={handleClose} color='primary'>
                NO
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
AlertDialogSlide.propTypes = {
  clicked: PropTypes.func.isRequired,
  clickOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
export default AlertDialogSlide;
