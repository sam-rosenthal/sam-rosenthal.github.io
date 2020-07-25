import React from 'react';
import {
  Divider,
  Grid,
  Typography,
  Avatar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableSortLabel,
  makeStyles,
  Theme,
  createStyles,
  Tooltip,
  withStyles,
  IconButton,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import HelpIcon from '@material-ui/icons/Help';
import TypedHeader from './TypedHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

interface Data {
  image: string;
  technology: string;
  level: number;
  category: string;
}

function createData(image: string, technology: string, level: number, category: string): Data {
  return { image, technology, level, category };
}

const rows = [
  createData('../techicons/java.png', 'Java 8', 3, 'Programming Language'),
  createData('../techicons/python.png', 'Python', 3, 'Programming Language'),
  createData('../techicons/css.png', 'CSS 3', 3, 'Programming Language'),
  createData('../techicons/js.png', 'Javascript', 3, 'Programming Language'),
  createData('../techicons/HTML.png', 'HTML 5', 3, 'Programming Language'),
  createData('../techicons/react.png', 'React', 3, 'Library/Framework'),
  createData('../techicons/typescript.png', 'Typescript', 3, 'Programming Language'),
  createData('../techicons/ocaml.png', 'OCaml', 3, 'Programming Language'),
  createData('../techicons/spring.png', 'Spring', 3, 'Library/Framework'),
  createData('../techicons/junit.png', 'JUnit', 3, 'Library/Framework'),
  createData('../techicons/selenium.png', 'Selenium', 3, 'Library/Framework'),
  createData('../techicons/maven.png', 'Maven', 3, 'Library/Framework'),
  createData('../techicons/material.png', 'Material UI', 2, 'Library/Framework'),
  createData('../techicons/bootstrap.png', 'Bootstrap', 2, 'Library/Framework'),
  createData('../techicons/d3.png', 'D3', 2, 'Library/Framework'),
  createData('../techicons/numpy.png', 'Numpy', 2, 'Library/Framework'),
  createData('../techicons/jira.png', 'Jira', 3, 'Software Development Tool'),
  createData('../techicons/git.png', 'Git', 3, 'Software Development Tool'),
  createData('../techicons/travis.png', 'Travis CI', 3, 'Software Development Tool'),
  createData('../techicons/jenkins.png', 'Jenkins', 3, 'Software Development Tool'),
  createData('../techicons/github.png', 'Github', 3, 'Software Development Tool'),
  createData('../techicons/bitbucket.png', 'Bitbucket', 3, 'Software Development Tool'),
  createData('../techicons/eclipse.png', 'Eclipse', 3, 'IDE'),
  createData('../techicons/vscode.png', 'VS Code', 3, 'IDE'),
  createData('../techicons/jupyter.png', 'Jupyter Notebook', 3, 'IDE'),
  createData('../techicons/tortoisegit.png', 'Tortoise git', 3, 'Software Development Tool'),
  createData('../techicons/confluence.png', 'Confluence', 3, 'Software Development Tool'),
  createData('../techicons/soapui.png', 'Soap UI Pro', 3, 'Software Development Tool'),
  createData('../techicons/analytics.png', 'Google Analytics', 2, 'Software Development Tool'),
  createData('../techicons/regex.png', 'Regular Expressions', 3, 'Software Development Tool'),
  createData('../techicons/c.png', 'C', 1, 'Programming Language'),
  createData('../techicons/latex.png', 'Latex', 3, 'Programming Language'),
  createData('../techicons/matlab.png', 'Matlab', 3, 'Software Development Tool'),
  createData('../techicons/groovy.png', 'Groovy', 2, 'Programming Language'),
  createData('../techicons/processing.png', 'Processing', 2, 'IDE'),
  createData('../techicons/ampl.png', 'Ampl', 3, 'Programming Language'),
  createData('TL', 'Terrapin Logo', 3, 'Programming Language'),
];
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof never>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
  align: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

const headCells: HeadCell[] = [
  { id: 'technology', numeric: false, label: 'Technology', align: 'left' },
  { id: 'level', numeric: true, label: 'Experience Level', align: 'right' },
  { id: 'category', numeric: false, label: 'Category', align: 'right' },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: '475px',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  const [open, setOpen] = React.useState(false);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : headCell.id === 'level' ? 'desc' : 'asc'}
              onClick={createSortHandler(headCell.id)}
              style={{ fontSize: '16px' }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
            {headCell.id === 'level' && (
              <HtmlTooltip
                title={
                  <>
                    <Typography>
                      <b>Advanced</b> (
                      <Rating name="read-only" defaultValue={3} max={3} readOnly style={{ verticalAlign: 'sub' }} />) -
                      Requires an occasional google search (there are always issues that come up, no matter how much you
                      know).
                    </Typography>
                    <Typography>
                      <b>Intermediate</b> (
                      <Rating name="read-only" defaultValue={2} max={3} readOnly style={{ verticalAlign: 'sub' }} />) -
                      Requires some google searches.
                    </Typography>
                    <Typography>
                      <b>Begginner</b> (
                      <Rating name="read-only" defaultValue={1} max={3} readOnly style={{ verticalAlign: 'sub' }} />) -
                      Requires google searches to get by.
                    </Typography>
                  </>
                }
                arrow
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                leaveDelay={200}
              >
                <IconButton
                  aria-label="legend"
                  onClick={() => setOpen(true)}
                  style={{ padding: '0px', margin: '6px 0px 6px 8px' }}
                >
                  <HelpIcon fontSize="small" />
                </IconButton>
              </HtmlTooltip>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function Skills(): JSX.Element {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('desc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('level');

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: keyof Data) => {
    if (property === 'level') {
      const isDesc = orderBy === property && order === 'desc';
      setOrder(isDesc ? 'asc' : 'desc');
    } else {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
    }

    setOrderBy(property);
  };

  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      <Grid item>
        {TypedHeader('My skills')}
        <Divider />
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" size="small">
            <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map((row) => {
                return (
                  <TableRow key={row.technology}>
                    <TableCell>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {row.image.startsWith('../') ? (
                          <Avatar src={row.image} variant="rounded" style={{ marginRight: '12px' }}></Avatar>
                        ) : (
                          <Avatar style={{ marginRight: '12px' }}> {row.image}</Avatar>
                        )}
                        <Typography>{row.technology}</Typography>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <Rating name="read-only" defaultValue={row.level} max={3} readOnly />
                    </TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
