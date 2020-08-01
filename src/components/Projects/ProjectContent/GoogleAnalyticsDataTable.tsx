import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';

interface Data {
  month: string;
  visitors: number;
  countries: number;
  totalVisits: number;
  averageVisitTime: number;
}

function createData(
  month: string,
  visitors: number,
  countries: number,
  totalVisits: number,
  averageVisitTime: number,
): Data {
  return { month, visitors, countries, totalVisits, averageVisitTime };
}

const rows = [
  createData('September (2018)', 72, 17, 100, 34),
  createData('October (2018)', 118, 20, 163, 12),
  createData('November (2018)', 126, 26, 152, 43),
  createData('December (2018)', 160, 24, 184, 45),
  createData('January (2019)', 240, 57, 283, 35),
  createData('Febuary (2019)', 239, 56, 288, 43),
  createData('March (2019)', 296, 57, 360, 50),
  createData('April (2019)', 284, 55, 355, 43),
  createData('May (2019)', 346, 63, 445, 75),
  createData('June (2019)', 231, 51, 300, 49),
  createData('July (2019)', 314, 52, 397, 42),
  createData('August (2019)', 364, 55, 503, 107),
  createData('September (2019)', 339, 55, 429, 31),
  createData('October (2019)', 361, 62, 482, 49),
  createData('November (2019)', 375, 66, 471, 61),
  createData('December (2019)', 336, 62, 398, 51),
  createData('January (2020)', 400, 61, 443, 29),
  createData('Febuarary (2020)', 322, 57, 386, 31),
  createData('March (2020)', 283, 55, 353, 22),
  createData('April (2020)', 342, 52, 412, 26),
  createData('May (2020)', 345, 55, 417, 32),
  createData('June (2020)', 396, 65, 494, 48),
];

const useStyles = makeStyles({
  container: {
    maxHeight: 300,
  },
});

export default function GoogleAnalyticsDataTable(): JSX.Element {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Month</TableCell>
            <TableCell align="center">Visitors</TableCell>
            <TableCell align="center">Countries of Visitors</TableCell>
            <TableCell align="center">Total Visits</TableCell>
            <TableCell align="center">Average Visit Time (secs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.month}>
              <TableCell align="center">{row.month}</TableCell>
              <TableCell align="center">{row.visitors}</TableCell>
              <TableCell align="center">{row.countries}</TableCell>
              <TableCell align="center">{row.totalVisits}</TableCell>
              <TableCell align="center">{row.averageVisitTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
