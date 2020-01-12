import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import getYear from 'date-fns/getYear';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'block',
    marginTop: 'auto',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)'
  },
  footerBody: {
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#fff',
    borderTop: '1px solid #edf1f7',
    color: '#1a2138',
    fontSize: '.9375rem',
    fontWeight: '400',
    lineHeight: '1.25rem',
    padding: '1.25rem',
    textAlign: 'left',
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingTop: 0,
      textAlign: 'center'
    }
  },
  innerBody: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      '& svg': {
        fontSize: 'small'
      }
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingBottom: '1.9rem',
      paddingLeft: '1rem'
    }
  },
  social: {
    fontSize: '2rem',
    '& a': {
      padding: '.4rem',
      color: '#8f9bb3',
      transition: 'color ease-out .1s'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none'
    }
  }
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerBody}>
        <div className={classes.innerBody}>
          <p>
            Built with{' '}
            {
              <SvgIcon>
                <path d='M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z' />
              </SvgIcon>
            }{' '}
            by the{' '}
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <b>LMS Solutions Pvt Ltd.</b>
            </a>{' '}
            © 2012 - {getYear(new Date())}.
          </p>
          <div className={classes.social}>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <SvgIcon>
                <path d='M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z' />
              </SvgIcon>
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <SvgIcon>
                <path d='M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20' />
              </SvgIcon>
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <SvgIcon>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </SvgIcon>
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <SvgIcon>
                <path d='M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1' />
              </SvgIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
