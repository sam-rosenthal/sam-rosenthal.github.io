import React from 'react';
import { Grid, Divider, Link, Breadcrumbs, Typography, Toolbar } from '@material-ui/core';
import { JavaOSS, ConverterWebsite, PersonalWebsite } from './ProjectContent/ProjectInformation';
import { TNS, Homesite, TIC } from './ProjectContent/WorkInformation';
import Cornell from './ProjectContent/SchoolInformation';

type navButtonData = {
  href: string;
  label: string;
  key: number;
};
function createData(href: string, label: string, key: number): navButtonData {
  return { href, label, key };
}
const data = [
  createData('#personal', 'Personal Projects', 0),
  createData('#work', 'Work experience', 1),
  createData('#school', 'Class Projects', 2),
];

function BreadcrumbsNav(section: number): JSX.Element {
  return (
    <Breadcrumbs separator="|" aria-label="breadcrumb" style={{ display: 'inline-grid' }}>
      {data.map((d, index) =>
        section === index ? (
          <Typography color="textPrimary" key={d.key}>
            {d.label}
          </Typography>
        ) : (
          <Link color="inherit" href={d.href} key={d.key}>
            {d.label}
          </Link>
        ),
      )}
    </Breadcrumbs>
  );
}
function gridHeader(id: string, title: string, index: number): JSX.Element {
  return (
    <Grid item style={{ textAlign: 'center' }} id={id}>
      {index !== 0 && <Toolbar />}
      <Typography component="h1" variant="h2">
        {title}
      </Typography>
      {BreadcrumbsNav(index)}
      <Divider />
    </Grid>
  );
}

export default function Projects(): JSX.Element {
  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      {gridHeader('personal', 'Personal Projects', 0)}
      <JavaOSS />
      <ConverterWebsite />
      <PersonalWebsite />
      {gridHeader('work', 'Work Experience', 1)}
      <TNS />
      <Homesite />
      <TIC />
      {gridHeader('school', 'Class Projects', 2)}
      <Cornell />
    </Grid>
  );
}
