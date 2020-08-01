import ProjectCard from '../ProjectCard/ProjectCard';
import React from 'react';
import { Typography, Divider } from '@material-ui/core';

export default function Cornell(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'cornell',
        header: {
          href: 'https://www.cs.cornell.edu/',
          title: 'Cornell University - College of Engineering, Computer Science',
          date: 'August 2017 - May 2021',
          icon: '../Screenshots/Cornell/Cornell.svg',
        },
        body: (
          <>
            <Typography>
              <b>Junior Year (Fall 2019-Spring 2020)</b>
            </Typography>{' '}
            <Typography>
              <b>CS 4300</b>: Into to Database Systems; <b>CS 4820</b>: Intro Analysis of Algorithms; <b>CS 2850</b>:
              Networks
              <br />
              <b>CS 3300</b>: Data Driven Web Applications; <b>CS 4300</b>: Language and Information; <b>CS 4700</b>:
              Foundations of Artificial Intelligence;
              <b>CS 3420</b>: Embedded Systems;
            </Typography>
            <Typography>
              <b>Technologies:</b>
            </Typography>
            <Divider />
            <br />
            <Typography>
              <b>Sophomore Year (Fall 2018-Spring 2019)</b>
            </Typography>{' '}
            <Typography>
              <b>CS 2110</b>: Object-Oriented Programming and Data Structures (Java); <b>CS 2800</b>: Discrete
              Structures; <b>ECE 2300</b>: Digital Logic and Computer Organization
              <br />
              <b>CS 3110</b>: Data Structures and Functional Programming
              <br /> Functional programming in OCaml. Had weekly assignments in groups of 2-3. Assignments enforced Test
              Driven Development. Assignments included writing an Enigma machine, a text-based adventure game, search
              engine for text documents, a RML Interpreter, etc. Extensively used GitHub to code with group members.
              Final project was open-ended and consisted of two weekly sprints. Our group implemented a battleship with
              extra features and three levels of AI.
            </Typography>
            <Typography>
              <b>Technologies:</b>
            </Typography>
            <ul>
              <img
                src="techicons/Java.png"
                width="40"
                height="40"
                alt="Python 3.3"
                data-toggle="tooltip"
                title="Java 8"
              />
              <img src="techicons/OCaml.png" width="40" height="40" alt="Matlab" data-toggle="tooltip" title="OCaml" />
            </ul>
            <Divider />
            <br />
            <Typography>
              <b>Freshman Year (Fall 2017-Spring 2018)</b>
            </Typography>
            <Typography>
              <b>CS 1110</b>: Introduction to Computing Using Python; <b>CS 1132</b>: Short Course in MATLAB;{' '}
              <b>ENGRG/MAE 1112</b>: Practical Computing for Engineering Applications of Matlab; <br />
            </Typography>
            <Typography>
              <b>Technologies:</b>
            </Typography>
            <ul>
              <img
                src="techicons/Python.png"
                width="40"
                height="40"
                alt="Python 3.3"
                data-toggle="tooltip"
                title="Python 3.3"
              />
              <img
                src="techicons/Matlab.png"
                width="40"
                height="40"
                alt="Matlab"
                data-toggle="tooltip"
                title="Matlab"
              />
            </ul>
          </>
        ),
        techIcons: {
          data: [
            {
              icon: '../../techicons/selenium.png',
              label: 'Selenium',
            },
            {
              icon: '../../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../../techicons/jenkins.png',
              label: 'Jenkins',
            },
            {
              icon: '../../techicons/jira.png',
              label: 'Jira',
            },
            {
              icon: '../../techicons/oracle.png',
              label: 'ORACLE DB Management',
            },
            {
              icon: '../../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../../techicons/Python.png',
              label: 'Python',
            },
            {
              icon: '../../techicons/jupyter.png',
              label: 'Jupyter notebook',
            },
          ],
        },
        techDetails: null,
        carouselImages: {
          images: [
            {
              label: 'Website Ui',
              imgPath: '../Screenshots/Homesite/WebsiteUI.png',
            },
            {
              label: 'ReadyApi Interface',
              imgPath: '../Screenshots/Homesite/ReadyApi.png',
            },
            {
              label: 'BitBucket',
              imgPath: '../Screenshots/Homesite/Bitbucket.png',
            },
            {
              label: 'Microsoft SQL Management Server',
              imgPath: '../Screenshots/Homesite/SQL.png',
            },
          ],
        },
      }}
    />
  );
}
