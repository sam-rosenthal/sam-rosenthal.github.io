import ProjectCard from './ProjectCard';
import React from 'react';
import { Typography, Link } from '@material-ui/core';

export function Cornell(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'cornell',
        header: {
          href: 'https://www.engineering.cornell.edu/programs-departments/computer-science',
          title: 'Software Development Engineer in Test (SDET) Intern',
          date: 'Homesite Group | Summer 2019',
          icon: '../Screenshots/Homesite/Homesite.png',
        },
        body: (
          <>
            <Typography>
              <b>Overview</b>
            </Typography>{' '}
            <Typography>
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
            <br />
            <Typography>
              <b>Project Details</b>
            </Typography>
            <Typography>
              I helped develop a framework for testing the end-to-end flow of HSAPI. Three test-suites were created, one
              for each type of home insurance Homesite provides (homeowners, renters, condos). Each test-suite included
              test cases that would send all HTTP requests (Post, Put, and Get) required for retrieving and purchasing a
              quote. Since home insurance laws vary by state, each suite ran multiple times with the necessary input
              data to generate a quote. Every JSON HTTP response was verified to contain a valid http status code of 200
              and a &quot;RequirementMessage&quot; of &quot;ok&quot;. Note: when a request had missing requirements the
              requirement message would have details on missing data.
            </Typography>
            <br />
            <Typography>
              ReadyAPI was the IDE used in software development of the automated test framework. Test cases were written
              using Groovy. Test cases made REST calls to HSAPI via SoapUI. Groovy parser classes were created to
              convert JSON responses into a HashMap (using JsonSlurper). The classes included getter methods to retrieve
              all insurance information. All parser classes extended an abstract base class that was created to handle
              general information that appeared in every response, such as: SessionID, HttpStatusCode,
              RequiremenMessage, etc.
            </Typography>
            <br />
            <Typography>
              Microsoft SQL server database was used to enable the test framework to be dynamic and data driven. To
              generate each JSON HTTP request, two tables were queried. The first table would return the JSON keys and
              the second table return the JSON values. Microsoft SQL Server Management was the IDE used to query and
              update the databases.
            </Typography>
            <br />
            <Typography>
              <b>Testing Software Approach</b>
            </Typography>{' '}
            <Typography>
              Followed a pseudo-agile software development approach. Participated in week-long sprints. Used Jira to
              organize and manage a backlog of stories and Confluence to provide overall project status and milestones.
              Development branches were managed by Bitbucket. Continuous integration used a Jenkins pipeline to run and
              verify all tests.{' '}
            </Typography>
            <br />
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
              icon: '../techicons/soapui.png',
              label: 'Soap UI Pro',
            },
            {
              icon: '../techicons/readyapi.png',
              label: 'ReadyApi',
            },
            {
              icon: '../techicons/groovy.png',
              label: 'Groovy',
            },
            {
              icon: '../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../techicons/bitbucket.png',
              label: 'BitBucket',
            },
            {
              icon: '../techicons/confluence.png',
              label: 'Confluence',
            },
            {
              icon: '../techicons/jira.png',
              label: 'Jira',
            },
            {
              icon: '../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../techicons/json.png',
              label: 'JSON',
            },
            {
              icon: '../techicons/microsoftsql.png',
              label: 'Microsoft SQL Server',
            },
            {
              icon: '../techicons/jenkins.png',
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
