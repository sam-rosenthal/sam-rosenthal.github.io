import ProjectCard from '../ProjectCard/ProjectCard';
import React from 'react';
import { Typography, Link } from '@material-ui/core';

export function TNS(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'tns',
        header: {
          href: 'https://tnsi.com/',
          title: 'Software Intern',
          date: 'Transaction Network Services | Summer 2020',
          icon: '../Screenshots/TNS/TNS.png',
        },
        body: (
          <>
            <Typography>
              <b>Overview</b>
            </Typography>{' '}
            <Typography gutterBottom>
              Worked as a member of TNS’ Call Guardian team. Stabilized, expanded test coverage, and refactored/cleaned
              up code for TNSI’s SPTF (standard portal test framework) automation tests in Selenium. Modularized test
              scripts with a python script to aid organization and debugging. Learned domain expertise in the
              telecommunications industry and TNS’ Call Guardian application used by Verizon.
            </Typography>
            <Typography>
              <b>Project Details:</b>
            </Typography>
            <Typography gutterBottom>
              I worked on revamping automated tests for the Call Guardian portal. Reported analysis of reocurring
              failures. Records had millions of call logs, Fixed tests so that they would pass as well as be stable for
              the consistanly changing data. ir thelped develop a framework for testing the end-to-end flow of HSAPI.
              Three test-suites were created, one for each type of home insurance Homesite provides (homeowners,
              renters, condos).
            </Typography>
            <Typography gutterBottom>
              To analyze sources of the errors, developed Python scripts to efficiently find error message, cause of
              error, test that failed, and line number of the failure. Modularized test scripts by writing a python
              script to grab all required tests from data file.
            </Typography>
            <Typography gutterBottom>
              Oracle SQL server database was used to store user information and website data. Insertions, deletions, and
              updates on the portal were validated with DB calls. Oracle SQL Server Management was the IDE used to query
              and update the databases.
            </Typography>
            <Typography gutterBottom></Typography>
            <Typography gutterBottom></Typography>
            <Typography>
              <b>Testing Software Approach</b>
            </Typography>{' '}
            <Typography gutterBottom>
              Followed an Agile software development approach consisting of three-week sprints with 2x/week scrum
              meetings and post sprint review meetings. Used Jira to record progress and organize tasks. Continuous
              integration used a Jenkins pipeline to run and verify all tests on a nightly basis.
            </Typography>
            <Typography gutterBottom>
              Jenkins was used was the IDE used in software development of the automated test framework. Test cases were
              written using Groovy. Test cases made REST calls to HSAPI via SoapUI. Groovy parser classes were created
              to convert JSON responses into a HashMap (using JsonSlurper). The classes included getter methods to
              retrieve all insurance information. All parser classes extended an abstract base class that was created to
              handle general information that appeared in every response, such as: SessionID, HttpStatusCode,
              RequiremenMessage, etc.
            </Typography>
            <Typography>
              <b>Software tools</b>
            </Typography>
            <Typography>Used the following software tools:</Typography>
            <ul style={{ margin: '0px', paddingLeft: '20px' }}>
              <li>
                <b>Selenium</b> for automated testing
              </li>
              <li>
                <b>Git</b> for version control
              </li>
              <li>
                <b>Jenkins</b> for CI/CD
              </li>
              <li>
                <b>Jira</b> for project management
              </li>
              <li>
                <b>Agile methodology</b> for software development
              </li>
              <li>
                <b>ORACLE DB Management</b> as the SQL IDE
              </li>
              <li>
                <b>Python</b> for text scripting
              </li>
              <li>
                <b>Jupyter notebook</b> as the IDE for python
              </li>
              <li>
                <b>Microsoft Teams</b> as the communications platform
              </li>
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
export function Homesite(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'homesite',
        header: {
          href: 'https://go.homesite.com/',
          title: 'Software Development Engineer in Test (SDET) Intern',
          date: 'Homesite Group | Summer 2019',
          icon: '../Screenshots/Homesite/Homesite.png',
        },
        body: (
          <>
            <Typography>
              <b>Overview</b>
            </Typography>{' '}
            <Typography gutterBottom>
              Worked as a member of Homesite&apos;s QA Automation team. Built a testing framework for Homesite&apos;s
              home-insurance quoting REST API (HSAPI) with{' '}
              <Link
                href="https://smartbear.com/product/ready-api/overview/?utm_source=aw&utm_medium=ppcs&utm_campaign=brand-readyapi&utm_content=trial&utm_term=readyapi&gclid=CjwKCAjwkenqBRBgEiwA-bZVtlOr-1LlZ_Se9URk0-Ov8z1j2ptj_eOBV2tAwd4-iVdAuXuoeYUC1RoCt_EQAvD_BwE"
                target="_blank"
              >
                {' '}
                ReadyAPI
              </Link>
              . The testing framework is the initial step to replace the current legacy API testing framework. I learned
              domain expertise on home insurance underwriting and Homesite&apos;s business model to provide insurance
              for their partners and customers. At the end of the summer I studied and passed the{' '}
              <Link href="https://www.soapui.org/professional/soapui-pro.html" target="_blank">
                SoapUI Pro
              </Link>
              <Link href="sam/SoapUIProCertificate.pdf" target="_blank">
                Certification
              </Link>
              , the primary tool used in the framework I worked on.{' '}
            </Typography>
            <Typography>
              <b>Project Details</b>
            </Typography>
            <Typography gutterBottom>
              I helped develop a framework for testing the end-to-end flow of HSAPI. Three test-suites were created, one
              for each type of home insurance Homesite provides (homeowners, renters, condos). Each test-suite included
              test cases that would send all HTTP requests (Post, Put, and Get) required for retrieving and purchasing a
              quote. Since home insurance laws vary by state, each suite ran multiple times with the necessary input
              data to generate a quote. Every JSON HTTP response was verified to contain a valid http status code of 200
              and a &quot;RequirementMessage&quot; of &quot;ok&quot;. Note: when a request had missing requirements the
              requirement message would have details on missing data.
            </Typography>
            <Typography gutterBottom>
              ReadyAPI was the IDE used in software development of the automated test framework. Test cases were written
              using Groovy. Test cases made REST calls to HSAPI via SoapUI. Groovy parser classes were created to
              convert JSON responses into a HashMap (using JsonSlurper). The classes included getter methods to retrieve
              all insurance information. All parser classes extended an abstract base class that was created to handle
              general information that appeared in every response, such as: SessionID, HttpStatusCode,
              RequiremenMessage, etc.
            </Typography>
            <Typography gutterBottom>
              Microsoft SQL server database was used to enable the test framework to be dynamic and data driven. To
              generate each JSON HTTP request, two tables were queried. The first table would return the JSON keys and
              the second table return the JSON values. Microsoft SQL Server Management was the IDE used to query and
              update the databases.
            </Typography>
            <Typography>
              <b>Testing Software Approach</b>
            </Typography>{' '}
            <Typography gutterBottom>
              Followed a pseudo-agile software development approach. Participated in week-long sprints. Used Jira to
              organize and manage a backlog of stories and Confluence to provide overall project status and milestones.
              Development branches were managed by Bitbucket. Continuous integration used a Jenkins pipeline to run and
              verify all tests.{' '}
            </Typography>
            <Typography>
              <b>Documentation</b>
            </Typography>
            <Typography>
              Wrote a test plan using Confluence to outline our testing approach. The test plan consisted of the
              following:
            </Typography>
            <ul style={{ marginTop: '0px', paddingLeft: '20px' }}>
              <li>A vision statement and purpose statement for the product as understood by QA</li>
              <li>
                Test request/response product flows{' '}
                <ul style={{ paddingLeft: '20px' }}>
                  <li>HSAPI quote creation, retrieval, and purchace for homeowners, renters, and condos insurance</li>
                </ul>
              </li>
              <li>
                Test Resource constraints{' '}
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Release deadlines, software licenses, personnel</li>
                </ul>
              </li>
              <li>Test Roles and responsibilities of the test team</li>
              <li>Test Approach describes the testing tools used and the testing methodology</li>
            </ul>
            <Typography>
              QA Automation&apos;s coding standards required all Groovy scripts to include Groovydoc. Class
              documentation overviewed the class functionality. Method documentation described the method and the
              definition of all inputs and outputs.
            </Typography>
            <br />
            <Typography>
              <b>Software tools</b>
            </Typography>
            <Typography>Used the following software tools:</Typography>
            <ul style={{ margin: '0px', paddingLeft: '20px' }}>
              <li>
                <b>ReadyAPI & SoapUI</b> for automated testing
              </li>
              <li>
                <b>Bitbucket and Git</b> for software configuration management
              </li>
              <li>
                <b>Visual Studio Code</b> as the IDE for Groovy
              </li>
              <li>
                <b>Jira</b> for project management
              </li>
              <li>
                <b>Microsoft SQL Server Management</b> as the SQL IDE
              </li>
              <li>
                <b>Confluence</b> as the documentation and knowledge management system
              </li>
              <li>
                <b>Microsoft Teams</b> as the communications platform
              </li>
              <li>
                <b>Jenkins</b> for continuous integration <i>(this was incorporated at the end of the internship)</i>
              </li>
            </ul>
          </>
        ),
        techIcons: {
          data: [
            {
              icon: '../../techicons/soapui.png',
              label: 'Soap UI Pro',
            },
            {
              icon: '../../techicons/readyapi.png',
              label: 'ReadyApi',
            },
            {
              icon: '../../techicons/groovy.png',
              label: 'Groovy',
            },
            {
              icon: '../../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../../techicons/bitbucket.png',
              label: 'BitBucket',
            },
            {
              icon: '../../techicons/confluence.png',
              label: 'Confluence',
            },
            {
              icon: '../../techicons/jira.png',
              label: 'Jira',
            },
            {
              icon: '../../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../../techicons/json.png',
              label: 'JSON',
            },
            {
              icon: '../../techicons/microsoftsql.png',
              label: 'Microsoft SQL Server',
            },
            {
              icon: '../../techicons/jenkins.png',
              label: 'Jenkins',
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

export function TIC(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'tic',
        header: {
          href: 'http://ticcamp.com/',
          title: 'Camp Programming Counselor',
          date: 'TIC Summer Camp | Summer 2017, 2018',
          icon: '../Screenshots/TIC/TIC.png',
        },
        body: (
          <>
            <Typography>
              Taught Java and{' '}
              <Link href="https://www.terrapinlogo.com/" target="_blank">
                Terrapin Logo
              </Link>{' '}
              programming to campers ages 7 to 14. Worked with groups of 2-4 campers to develop games and applications.{' '}
              <br /> <br /> Java programs were written in Swing and utilized{' '}
              <Link href="https://processing.org/" target="_blank">
                Processing
              </Link>
              &apos;s graphic framework. Graphical programs would often use AWT Graphics, AWT Shapes, BufferedIO,
              ImageIO, events, and event listeners. Text-based programs would use Scanner and JOptionPanes. All software
              developement was written using the Eclipse IDE. Campers typically had 0-3 years of prior java programming
              experience.
              <br /> <br />
              Logo programs were written using{' '}
              <Link href="http://www.microworlds.com/solutions/mwex.html" target="_blank">
                Microworlds EX IDE
              </Link>
              . All programs used the{' '}
              <Link href="https://en.wikipedia.org/wiki/Turtle_graphics" target="_blank">
                turtle-graphics
              </Link>{' '}
              as the graphical user interface. Programs involved working with graphical templates and creating rules and
              procedures. Campers typically had 0-1 years of Logo programming experience.
            </Typography>
          </>
        ),
        techIcons: {
          data: [
            {
              icon: '../../techicons/eclipse.png',
              label: 'Eclipse',
            },
            {
              icon: '../../techicons/java.png',
              label: 'JDK8',
            },
            {
              icon: '../../techicons/processing.png',
              label: 'Processing',
            },
            {
              icon: '../../techicons/microworlds.ico',
              label: 'Microworlds',
            },
            {
              icon: null,
              label: 'Terrapin Logo',
            },
          ],
        },
        techDetails: null,
        carouselImages: {
          images: [
            {
              label: 'Tron (Java)',
              imgPath: '../Screenshots/TIC/Java/Tron.png',
            },
            {
              label: '1v1 Doodle Jump (Java)',
              imgPath: '../Screenshots/TIC/Java/DoodleJump.png',
            },
            {
              label: 'Chicken Little (Java)',
              imgPath: '../Screenshots/TIC/Java/Chicken.png',
            },
            {
              label: 'Surrealifier (Java)',
              imgPath: '../Screenshots/TIC/Java/Surrealifier.png',
            },
            {
              label: 'Pong (Java)',
              imgPath: '../Screenshots/TIC/Java/Pong.png',
            },
            {
              label: 'Trivia Quiz (Java)',
              imgPath: '../Screenshots/TIC/Java/Quiz.png',
            },
            {
              label: 'Crossy Road (logo)',
              imgPath: '../Screenshots/TIC/logo/CrossyRoad.png',
            },
            {
              label: 'Firefront (logo)',
              imgPath: '../Screenshots/TIC/logo/Firefront.png',
            },
            {
              label: 'Trivia (logo)',
              imgPath: '../Screenshots/TIC/logo/Trivia.png',
            },
            {
              label: 'Maze Man (logo)',
              imgPath: '../Screenshots/TIC/logo/MazeMan.png',
            },
            {
              label: 'Jaguars (logo)',
              imgPath: '../Screenshots/TIC/logo/Jaguar.png',
            },
          ],
        },
      }}
    />
  );
}
