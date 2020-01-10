import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      margin: 'auto'
    },
    h1: {
      fontSize: 35,
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
      textAlign: 'center'
    },
    h2: {
      fontSize: 20,
      color: theme.palette.primary.light,
      fontFamily: theme.typography.fontFamily,
      textAlign: 'left'
    },
    p: {
      color: theme.palette.primary.light,
      fontFamily: theme.typography.fontFamily
    },
    h3: {
      color: theme.palette.primary.dark,
      fontFamily: theme.typography.fontFamily,
      fontSize: 22
    }
  })
);

export default useStyles;
