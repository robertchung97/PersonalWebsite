import React from "react";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import HamburgerMenu from './hamburgerMenu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MENU_ITEMS from '../../utils/constants/menuItems';

import { withStyles } from '@material-ui/core/styles';

const themeColor = '#31315C';

const styles = {
  title: {
    color: '#FFFFFF',
    fontSize: '33px',
    fontFamily: 'Oleo Script',
    marginTop: '0em',
    marginBottom: '0em',
    paddingTop: '16px',
    '&:hover, &:active': {
      color: '#FFFFFF',
      textDecoration: 'none'
    }
  },

  headerStyle: {
    backgroundColor: themeColor,
    height: '4.3em',
    paddingLeft: '30px',
    margin: '0px',
    width: '100%'
  },
  
  links: {
    fontFamily: 'Nunito',
    fontSize: '15px',
    color: '#A6B0EA',
    fontWeight: 'lighter',
    textDecoration: 'none',
    boxShadow: 'none',
    '&:hover, &:active': {
      color: '#A6B0EA',
    },
  },
};

const Header = (props) => {

  const { classes } = props;
  const tabletScreen = useMediaQuery('(max-width:630px)');
  const mobileScreen = useMediaQuery('(max-width:370px)');

  return (
    <header>

        {mobileScreen ?
          <Grid 
            container
            direction='row'
            alignItems='center'
            alignContent='center'
            spacing={6}
            className={classes.headerStyle}
          >
            <Grid item>
              <HamburgerMenu/> 
            </Grid>
          </Grid>
          : tabletScreen ? 
            <Grid 
              container
              direction='row'
              justify='space-between'
              alignItems='center'
              alignContent='center'
              spacing={6}
              className={classes.headerStyle}
            >
              <Grid item>
                <Link className={classes.title} href='/'>Robert Chung</Link>
              </Grid>
              <Grid item>
                <HamburgerMenu/> 
              </Grid>
            </Grid>
          :
            <Grid 
              container
              direction='row'
              alignItems='center'
              alignContent='center'
              spacing={6}
              className={classes.headerStyle}
            >
            <Grid item>
              <Link className={classes.title} href='/'>Robert Chung</Link>
            </Grid>
            {MENU_ITEMS.map((item, index) => (
              <Grid item key={index}>
                <Link className={classes.links} href={item[1]}>{item[0]}</Link>
              </Grid>
            ))}
            </Grid>

        }
    </header>
  );

}

export default withStyles(styles)(Header);
