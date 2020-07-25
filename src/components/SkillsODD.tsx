import React, { useState } from 'react';
import { Divider, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import TypedText from './TypedText';
import Rating from '@material-ui/lab/Rating';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';
import {
  Grid as ReactGrid,
  Table as ReactTable,
  TableHeaderRow as ReactTableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { DataTypeProvider, DataTypeProviderProps } from '@devexpress/dx-react-grid';

const iconMapping: { [key: string]: string } = {
  'Java 8': '../techicons/java.png',
  Python: '../techicons/python.png',
  Javascript: '../techicons/logo.png',
  'CSS 3': '../techicons/css.png',
  'HTML 5': '../techicons/HTML.png',
  Groovy: '../techicons/groovy.png',
  Processing: '../techicons/processing.png',
  Ampl: '../techicons/ampl.png',
  Latex: '../techicons/latex.png',
  'Terrapin Logo': '../techicons/logo.png',
  React: '../techicons/react.png',
  Spring: '../techicons/spring.png',
  JUnit: '../techicons/junit.png',
  Selenium: '../techicons/selenium.png',
  Maven: '../techicons/maven.png',
  'Material UI': '../techicons/material.png',
  Bootstrap: '../techicons/bootstrap.png',
  numpy: '../techicons/numpy.png',
  d3: '../techicons/d3.png',
  Git: '../techicons/git.png',
  Github: '../techicons/github.png',
  'Travis CI': '../techicons/travis.png',
  Jenkins: '../techicons/jenkins.png',
  Bitbucket: '../techicons/bitbucket.png',
  Jira: '../techicons/jira.png',
  Eclipse: '../techicons/eclipse.png',
  'VS Code': '../techicons/vscode.png',
  'Tortoise git': '../techicons/tortoisegit.png',
  Confluence: '../techicons/confluence.png',
};
const TechnologyFormatter = (xxx: DataTypeProvider.ValueFormatterProps) => (
  <Typography
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Avatar src={iconMapping[xxx.value]}></Avatar> &nbsp;&nbsp;&nbsp;
    {xxx.value}
  </Typography>
);

function TechnologyProvider(props: DataTypeProviderProps) {
  return <DataTypeProvider formatterComponent={TechnologyFormatter} {...props} />;
}

const ExperienceLevelFormatter = (xxx: DataTypeProvider.ValueFormatterProps) => (
  <Rating name="read-only" defaultValue={xxx.value} max={3} readOnly />
);

function ExperienceLevelProvider(props: DataTypeProviderProps) {
  return <DataTypeProvider formatterComponent={ExperienceLevelFormatter} {...props} />;
}

export default function Skills(): JSX.Element {
  const [columns] = useState([
    { name: 'technology', title: 'Technology' },
    { name: 'score', title: 'Experience Level' },
    { name: 'category', title: 'Category' },
    { name: 'experience', title: 'Experience (yrs)' },
  ]);

  function createData(technology: string, score: number, category: string, experience: number) {
    return { technology, score, category, experience };
  }

  const [technologyColumns] = useState(['technology']);
  const [experienceLevelColumns] = useState(['score']);

  const [rows] = useState([
    createData('Java 8', 3, 'Programming Language', 5),
    createData('Python', 3, 'Programming Language', 2),
    createData('Javascript', 3, 'Programming Language', 2),
    createData('CSS 3', 3, 'Programming Language', 2),
    createData('HTML 5', 3, 'Programming Language', 2),
    createData('Groovy', 2, 'Programming Language', 2),
    createData('Processing', 2, 'Programming Language', 2),
    createData('Ampl', 2, 'Programming Language', 2),
    createData('Latex', 3, 'Programming Language', 2),
    createData('Terrapin Logo', 3, 'Programming Language', 2),
    createData('React', 3, 'Library/Framework', 0.5),
    createData('Spring', 3, 'Library/Framework', 1),
    createData('JUnit', 3, 'Library/Framework', 3),
    createData('Selenium', 3, 'Library/Framework', 3),
    createData('Maven', 3, 'Library/Framework', 3),
    createData('Material UI', 2, 'Library/Framework', 0.5),
    createData('Bootstrap', 2, 'Library/Framework', 2),
    createData('numpy', 2, 'Library/Framework', 0.5),
    createData('d3', 1, 'Library/Framework', 0.5),
    createData('Git', 3, 'Software Development Tool', 2),
    createData('Github', 3, 'Software Development Tool', 2),
    createData('Travis CI', 3, 'Software Development Tool', 2),
    createData('Jenkins', 3, 'Software Development Tool', 2),
    createData('Bitbucket', 3, 'Software Development Tool', 2),
    createData('Jira', 3, 'Software Development Tool', 2),
    createData('Eclipse', 3, 'Software Development Tool', 2),
    createData('VS Code', 3, 'Software Development Tool', 2),
    createData('Tortoise git', 3, 'Software Development Tool', 2),
    createData('Confluence', 3, 'Software Development Tool', 2),
  ]);

  return (
    <Grid container direction="column" justify="center" spacing={3} style={{ textAlign: 'left' }}>
      <Grid item>
        {TypedText('Skills')}
        <Divider />
      </Grid>
      <Grid item>
        <Paper>
          <ReactGrid rows={rows} columns={columns}>
            <ExperienceLevelProvider for={experienceLevelColumns} />
            <TechnologyProvider for={technologyColumns} />
            <SortingState defaultSorting={[{ columnName: 'name', direction: 'asc' }]} />
            <IntegratedSorting />
            <ReactTable />
            <ReactTableHeaderRow showSortingControls />
          </ReactGrid>
        </Paper>
      </Grid>
    </Grid>
  );
}
