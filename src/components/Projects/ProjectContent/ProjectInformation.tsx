import ProjectCard from '../ProjectCard/ProjectCard';
import React from 'react';
import { Typography, Link, Collapse } from '@material-ui/core';
import GoogleAnalyticsDataTable from './GoogleAnalyticsDataTable';

export function JavaOSS(): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ProjectCard
      {...{
        id: 'javaOSS',
        header: {
          href: 'https://github.com/sam-rosenthal/java-cssSelector-to-xpath',
          title: 'java-cssSelector-to-xpath OSS Project',
          date: 'June 2018 - Present',
          icon: 'favBig.png',
        },
        body: (
          <>
            <Typography>
              I developed this Open Source Software (
              <Link
                href="https://github.com/sam-rosenthal/java-cssSelector-to-xpath/blob/samdev/License.txt"
                target="_blank"
              >
                MIT License
              </Link>
              ) which is written in Java and converts CSS Selector Strings to XPath Strings. Running this software in
              3rd-party packages requires no additional external jar files.
              <br />
              <br />
              <b>Summer 2020:</b> Implemented a major upgrade to capabilities of the OSS by adding the following pseudo
              classes: nth-of-type, nth-last-of-type, nth-child, nth-last-child. <br />
              <Link component="button" variant="body1" onClick={handleExpandClick}>
                <b>New psuedo class implementation notes</b>
              </Link>
            </Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography>
                A{' '}
                <Link
                  href="https://github.com/sam-rosenthal/java-cssSelector-to-xpath/blob/master/src/main/java/org/sam/rosenthal/cssselectortoxpath/model/CssPsuedoClassType.java"
                  target="_blank"
                >
                  conditional algorithm
                </Link>{' '}
                was developed that handled all valid input expressions (odd, even, xn+y) for the new pseudo-classes.
                Implementing this algorithm, required looking into the behavior of the psudo class which was affected
                the relationship between the signs and magnitudes of x and y. Odd and even cases were implemented by
                applying the algorithm to 2n+1 and 2n respectively. After generating the algorithm for nth-of-type,
                nth-last-of-type was simply the reverse. Nth-of-child and nth-last-of-child was nearly the same except{' '}
                {'<element>'}
                :nth-of-type(
                {'<element>'}) was replaced with *:nth-of-type({'<element>'}).
              </Typography>
            </Collapse>{' '}
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
              icon: '../../techicons/maven.png',
              label: 'Maven',
            },
            {
              icon: '../../techicons/regex.png',
              label: 'Regular Expressions',
            },
            {
              icon: '../../techicons/junit.png',
              label: 'JUnit',
            },
            {
              icon: '../../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../../techicons/tortoisegit.png',
              label: 'Tortoise Git',
            },
            {
              icon: '../../techicons/github.png',
              label: 'Github',
            },
            {
              icon: '../../techicons/travis.png',
              label: 'Travis CI',
            },
          ],
        },
        techDetails: (
          <>
            <Typography>
              <b>Regular Expressions</b> - Java Regex Utility classes were used to validate and parse the CSS Selector
              strings. I used the Matcher and Pattern classes to parse the selector into elements, attribute names, and
              attributes that make up the components of the CSS Selector String. Once the string was broken into its
              components it was straight forward to reconstruct the corresponding XPath String. Listed are some Regular
              Expressions that were used to identify CSS Selector components:
            </Typography>
            <div style={{ backgroundColor: '#e0e0e0' }}>
              <code>
                private static final String QUOTES_RE = &quot;([\&quot;\&apos;])&quot;; <br />
                private static final String ATTRIBUTE_VALUE_RE = &quot;([-_.#a-zA-Z0-9:\\/ ]+)&quot;;
                <br />
                private static final String ATTRIBUTE_VALUE_RE_NO_SPACES = &quot;([-_.#a-zA-Z0-9:\\/]+)&quot;;
                <br />
                private static final String ELEMENT_ATTRIBUTE_NAME_RE=&quot;(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)&quot;; <br />
                private static final String STARTING_ELEMENT_RE =
                &quot;^(&quot;+ELEMENT_ATTRIBUTE_NAME_RE+&quot;|([*]))?&quot;;
                <br />
                private static final String PSUEDO_RE = &quot;(:[a-z][a-z\\-]*([(][^)]+[)])?)&quot;;
                <br />
              </code>
            </div>
            <Typography>
              Regular expressions were also used when calling the Java replaceAll String method. A simple example of a
              regex expression that was used to remove white spaces was:
            </Typography>
            <code style={{ backgroundColor: '#e0e0e0' }}>
              {' '}
              selectorString=selectorString.replaceAll(&quot;\\s+&quot;,&quot;&quot;);
            </code>
            <hr />
            <Typography>
              <b>Recursion</b> - A basic CSS Selector is made up of (0 or 1) elements associated with (0 or more)
              attributes. A basic CSS Selector can have a &quot;combinator&quot; relationship with another CSS selector
              which then can have a &quot;combinator&quot; relationship with another CSS Selector which ... This is the
              &quot;cascading&quot; relationship of CSS. This pattern lent itself to recursion. I created a recursive
              method, recursiveSelectorSplit, which takes a basic selector and looks for a combinator. If it finds one
              it adds the element/combinator pair to a list of these pairs and calls itself to find the next cascading
              relationship. The recursion is complete when there are no more &quot;combinators&quot;.
            </Typography>
            <hr />
            <Typography>
              <b>
                <Link href="https://junit.org/junit4/" target="_blank">
                  Junit Testing
                </Link>
              </b>{' '}
              - Individual classes and methods, end-to-end testing (CSS input String to XPath output String), invalid
              CSS Selector Strings, and unsupported CSS Selector Strings are all tested using the JUnit test framework.
              I currently have 19 JUnit tests and over 310 individual test cases and growing.{' '}
            </Typography>
            <hr />
            <Typography>
              {' '}
              <b>
                <Link href="https://www.seleniumhq.org/" target="_blank">
                  Selenium Testing
                </Link>
              </b>{' '}
              - I used Selenium testing to verify that the actual output of my CSS Selector converter is producing
              correct and valid XPaths. Please see{' '}
              <Link href="#java-cssSelector-to-xpath-website-technology-details">Selenium testing details</Link> of the
              CSS Selector to XPath Converter Website.
            </Typography>
            <hr />
            <Typography>
              <b>
                GitHub, Git,{' '}
                <Link href="https://tortoisegit.org/" target="_blank">
                  Tortoise Git
                </Link>
              </b>{' '}
              - Used Git as my version control system. GitHub was my code repository. Used Eclipse&apos;s Git-plugin and
              Tortoise Git to manage my source code on my development PC.
            </Typography>
            <hr />
            <Typography>
              <b>
                <Link href="https://maven.apache.org/" target="_blank">
                  Apache Maven
                </Link>
              </b>{' '}
              - Used Maven as the build automation tool. Configured POM file to pull all required software and
              dependencies. The POM file also included plugins to run unit and integration (Selenium) tests. Maven was
              used for development, continuous integration, and deployment of the software.{' '}
            </Typography>
            <hr />
            <Typography>
              <b>Continuous Integration</b> - Continuous Integration - Used{' '}
              <Link href="https://travis-ci.org/" target="_blank">
                Travis CI
              </Link>{' '}
              as the continuous integration service for this project. When changes are committed to GitHub (Branches and
              Master), the CI pipeline is started. The code is checked out from Github, compiled, and all unit tests are
              run.
              <i>Note: I have set up all Selenium tests as integration-tests so they are not run as part of CI.</i>
            </Typography>
            <hr />
          </>
        ),
        carouselImages: {
          images: [
            {
              label: 'Github ReadMe',
              imgPath: 'https://sam-rosenthal.github.io/projects/oss/code/GitReadme.png',
            },
          ],
        },
      }}
    />
  );
}

export function ConverterWebsite(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'converterWebsite',
        header: {
          href: 'https://css-selector-to-xpath.appspot.com/',
          title: 'CSS Selector to XPath Converter Website',
          date: 'July 2018 - Present',
          icon: 'favBig.png',
        },
        body: (
          <Typography>
            Free online CSS Selector to XPath converter. This tool uses java-cssSelector-to-xpath OSS to transform CSS
            Selector strings to XPath strings.
          </Typography>
        ),
        techIcons: {
          data: [
            {
              icon: '../../techicons/react.png',
              label: 'React',
            },
            {
              icon: '../../techicons/typescript.png',
              label: 'Typescript',
            },
            {
              icon: '../../techicons/html.png',
              label: 'HTML 5',
            },
            {
              icon: '../../techicons/css.png',
              label: 'CSS 3',
            },
            {
              icon: '../../techicons/gcp.png',
              label: 'Google Cloud Platform',
            },
            {
              icon: '../../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../../techicons/eslint.png',
              label: 'ESLint',
            },
            {
              icon: '../../techicons/prettier.png',
              label: 'Prettier',
            },
            {
              icon: '../../techicons/reactrouter.png',
              label: 'React Router',
            },
            {
              icon: '../../techicons/npm.png',
              label: 'npm',
            },
            {
              icon: '../../techicons/reactbootstrap.png',
              label: 'React Bootstrap',
            },
            {
              icon: null,
              label: 'Axios',
            },
            {
              icon: '../../techicons/java.png',
              label: 'JDK8',
            },
            {
              icon: '../../techicons/spring.png',
              label: 'Spring Boot',
            },
            {
              icon: '../../techicons/selenium.png',
              label: 'Selenium',
            },
            {
              icon: '../../techicons/junit.png',
              label: 'JUnit',
            },
            {
              icon: null,
              label: 'Jetty HTTPClient',
            },
            {
              icon: '../../techicons/maven.png',
              label: 'Maven',
            },
            {
              icon: '../../techicons/eclipse.png',
              label: 'Eclipse',
            },
            {
              icon: '../../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../../techicons/tortoisegit.png',
              label: 'Tortoise Git',
            },
            {
              icon: '../../techicons/github.png',
              label: 'Github',
            },
            {
              icon: '../../techicons/debian.png',
              label: 'Debian Linux',
            },
            {
              icon: '../../techicons/analytics.png',
              label: 'Google Analytics',
            },
          ],
        },
        techDetails: (
          <>
            <Typography>
              <b>
                <Link href="https://wicket.apache.org/" target="_blank">
                  React (Summer 2020 – Present)
                </Link>
              </b>{' '}
              - For the summer of 2020, I rewrote the entire website in React using{' '}
              <Link href="https://www.typescriptlang.org/" target="_blank">
                Typescript.
              </Link>{' '}
              My development environment included Visual Studio Code with{' '}
              <Link href="https://eslint.org/" target="_blank">
                ESLint
              </Link>{' '}
              for static code analysis and environment and{' '}
              <Link href="https://eslint.org/" target="_blank">
                Prettier
              </Link>{' '}
              for code formatting. I used{' '}
              <Link href="https://www.npmjs.com/" target="_blank">
                npm
              </Link>{' '}
              to locally install packages and to run the web application. The website consists of two pages, the main
              page which has the convert functionality and the test page which consists of test cases used by selenium
              test. Since this was a multi-page website, I used react-router for navigation. I used{' '}
              <Link href="https://spring.io/projects/spring-boot" target="_blank">
                Spring Boot
              </Link>{' '}
              to provide REST Services. The website made REST calls to convert CSS Selector strings to Xpaths, retrieve
              the website version number, and retrieve the content of the test page. I used Axios for the asynchronous
              REST calls. Data from asynchronous responses was rendered by updates to the corresponding state. For the
              converter POST request, I handled the following three conditions:
            </Typography>
            <ul style={{ margin: '0px' }}>
              <li>
                HTTP Status code of 200 = a valid request. The REST response contained the equivalent XPath string which
                was rendered in the results table.
              </li>
              <li>
                HTTP Status code 400 = an invalid request. The REST response contained an error message explaining why
                the CSS Selector String could not be converted to an XPath String which was rendered in the results
                table.
              </li>
              <li>
                All other codes = unexpected error responses. A generic message with the status code and text was
                rendered in the results table. I used react-bootstrap as the front-end framework for this website.{' '}
              </li>
            </ul>
            <hr />
            <Typography>
              <b>
                <Link href="https://spring.io/projects/spring-boot" target="_blank">
                  Spring Boot (Summer 2020)
                </Link>
              </b>{' '}
              - Created a Spring application that extended SpringBootServletInitializer to provide REST Services for my
              OSS converter website and to render React website as a static website. I created a class that used the
              Spring @RestController annotation that provided the following REST services:
              <ul style={{ margin: '0px' }}>
                <li>
                  Endpoint: /Convert
                  <ul>
                    <li>Request type: POST</li>
                    <li>Request body (Spring @RequestBody): JSON String that maps to CssSelectorIn class</li>
                    <li>
                      Response body (Spring @ ResponseBody ): JSON String which that maps to an XpathOut object if the
                      CSS Selector was successfully converted to an XPath, otherwise it maps to an InvalidCssSelector
                      object.
                    </li>
                  </ul>
                </li>
                <li>
                  Endpoint : /testcases
                  <ul>
                    <li>Request type: GET</li>
                    <li>
                      Response body (Spring @ResponseBody): JSON String corresponding to a list of
                      BassCssSelectorToXpathTestCase objects o The REST service returns the test cases displayed in the{' '}
                      <Link href="https://css-selector-to-xpath.appspot.com/TestPage" target="_blank">
                        TestPage
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Endpoint: /version
                  <ul>
                    <li>Request type: GET</li>
                    <li>Response body (Spring @ResponseBody): JSON String corresponding to the version number</li>
                  </ul>
                </li>
              </ul>
              Due to Spring being used to render the React application as a static website (required for deployment in
              GCP), Spring was intercepting the /TestPage request before it could be handled by react-router. I created
              a class that used the Spring @Controller annotation to handle this issue. The controller returned
              Index.html, the static page of React, so that the router could give the appearance of navigating to the
              test page, when in fact it maintained the current page, just with updated content.
            </Typography>
            <hr />
            <Typography>
              {' '}
              <b>Selenium Testing</b> - I implemented two types of Selenium Testing. The obvious testing is to verify
              that my CSS Selector to XPath website is working properly. My tests also verify that the actual output of
              my CSS Selector converter is producing correct and valid XPaths. <br /> <br />
              All Selenium tests are driven by the JUnit test framework. I test 3 browsers: Chrome, FireFox, and Edge.{' '}
              <i>Note: I developed on a Windows PC and that&apos;s why I chose those three browsers to test. </i>
              My first set of Selenium tests verify that all expected text is displayed on my the converter website. I
              verify that all links work and bring up the expected websites on a new tab. Through automated Selenium
              testing, I verify that the expected results are properly displayed when CSS selectors are entered and the
              convert button is pressed. I also check when invalid CSS Selectors are entered that the proper error
              messages are displayed. I created an abstract Selenium test class that is extended by all tests. The
              abstract class includes setting up the browser, specific drivers, methods to go to website URLs, test text
              and links, entering text, pressing the convert button, and error messages. <br />
              <br />
              The second type of Selenium test verifies that my OSS software correctly converts CSS Selectors. Selenium
              can identify elements of a webpage by either CSS Selectors or XPaths. I have written all the Selenium
              tests exclusively using Selenium&apos;s &quot;By.cssSelector&quot; method. I then rerun the tests using
              the same code except for the following change: the original test CSS Selector input is converted using my
              OSS software to an XPath which is then passed in as the argument for the &quot;By.xpath&quot; method. Both
              versions of the Selenium test work on all three browser types, demonstrating that the converter software
              is working properly. The final &quot;special&quot; test checks the contents of a (
              <Link
                href="https://css-selector-to-xpath.appspot.com/css-selector-to-xpath-reference-cases"
                target="_blank"
              >
                test webpage
              </Link>
              ) constructed with the same base-case CSS Selectors defined in a JUnit test written for the OSS converter
              software. The Selenium test and the JUnit test use the same inputs and outputs as part of this special
              test.
              <br />
              <br />
              The following is how I implemented the By.cssSelector and By.xpath Selenium tests:
              <br />
              The abstract Selenium class has the following method:
            </Typography>
            <div style={{ backgroundColor: '#e0e0e0' }}>
              <code>
                protected By getBy(String cssSelector) &#123; <br />
                &nbsp;&nbsp;&nbsp;return By.cssSelector(cssSelector); <br /> &#125;
              </code>
            </div>
            <Typography>The By.xpath tests override this method with:</Typography>
            <div style={{ backgroundColor: '#e0e0e0' }}>
              <code>
                @Override protected By getBy(String cssSelector) &#123; <br />
                &nbsp;&nbsp;&nbsp;String xpath = null; <br />
                &nbsp;&nbsp;&nbsp;try &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xpath =
                converter.convertCssSelectorStringToXpathString(cssSelector);
                <br /> &nbsp;&nbsp; &#125; <br />
                &nbsp;&nbsp;&nbsp;catch (CssSelectorToXPathConverterException e) &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; throw new RuntimeException(e); <br /> &nbsp;&nbsp; &#125; <br />
                &nbsp;&nbsp;&nbsp;System.out.println("original cssSelector="+cssSelector+", using xpath="+xpath);
                <br />
                &nbsp;&nbsp;&nbsp;return By.xpath(xpath);
                <br /> &#125;
              </code>
            </div>
            <hr />
            <Typography>
              <b>JUnit Testing of Spring REST Services</b> - I used{' '}
              <Link href="https://www.eclipse.org/jetty/documentation/current/http-client.html" target="_blank">
                Jetty HttpClient
              </Link>{' '}
              to create a REST client for unit testing. All the original java-css-to-xpath unit tests were run using
              REST calls instead of java api function calls. To startup the Spring Rest Server used by the JUnit test, I
              called the Java Process class to run the REST service in its own JVM and remapped its stdout and stderr
              back to the JUnit test’s streams. I also wrote additional unit tests to test the /version and /testcases
              REST endpoint.
            </Typography>
            <hr />
            <Typography>
              <b>
                <Link href="https://console.cloud.google.com/appengine" target="_blank">
                  GCP App Engine
                </Link>
              </b>{' '}
              - Used{' '}
              <Link href="https://console.cloud.google.com" target="_blank">
                {' '}
                Google Cloud Platform&apos;s App Engine
              </Link>{' '}
              to host CSS Selector to XPath Converter Website. I created a GCP account and project. I used GCP&apos;s
              suite tools to deploy, monitor, and manage the website.
            </Typography>
            <hr />
            <Typography>
              <b>
                <Link href="https://www.debian.org/" target="_blank">
                  Linux (Debian)
                </Link>
              </b>{' '}
              - Used Google&apos;s Cloud Shell (a bash shell) to compile, test deploy, and deploy webapp on the GCP App
              Engine.
            </Typography>
            <hr />
            <Typography>
              <b>
                <Link href="https://analytics.google.com/" target="_blank">
                  Google Analytics
                </Link>
              </b>{' '}
              - Used Google Analytics to track progress and monitor website&apos;s traffic. The traffic statistics for
              the first four months that my website was up and running was as follows:{' '}
            </Typography>
            <GoogleAnalyticsDataTable />
            <hr />
            <Typography>
              <b>GitHub, Git, Apache Maven, Continuous Integration</b> - This Website&apos;s source code is maintained
              as part of the java-csSelector-to-xpath repository (See previous section for details){' '}
            </Typography>
            <hr />
            <Typography>
              <b>
                <Link href="https://wicket.apache.org/" target="_blank">
                  Apache Wicket (July 2018 - Spring 2020)
                </Link>
              </b>{' '}
              - Used Wicket as the web application framework for the website. I modified one of Wicket&apos;s example
              programs,
              <Link href="http://examples8x.wicket.apache.org/echo/" target="_blank">
                {' '}
                echo{' '}
              </Link>{' '}
              which consisted of a text field and a submit button. Since Wicket uses HTML file for templating, I was
              able to easily add custom static content, including links, to the website.{' '}
            </Typography>
            <hr />
          </>
        ),
        carouselImages: {
          images: [
            {
              label: 'Website',
              imgPath: '../Screenshots/Website/Website.JPG',
            },
            {
              label: 'Hosted on Google Cloud Platform',
              imgPath: '../Screenshots/Website/GCP.JPG',
            },
            {
              label: 'Google Analyrics Homepage',
              imgPath: '../Screenshots/Website/Analytics.JPG',
            },
            {
              label: 'Google Analytics World Map',
              imgPath: '../Screenshots/Website/Map.JPG',
            },
          ],
        },
      }}
    />
  );
}

export function PersonalWebsite(): JSX.Element {
  return (
    <ProjectCard
      {...{
        id: 'personalWebsite',
        header: {
          href: '',
          title: 'Personal Website',
          date: 'July 2018 - Present',
          icon: 'favicon-32x32.png',
        },
        body: (
          <>
            <Typography gutterBottom>
              This responsive website was developed from without templates or publishing tools.{' '}
            </Typography>
            <Typography>
              <b>Summer 2020:</b> Rebuilt whole website with React and Typescript. My development environment included
              Visual Studio Code with{' '}
              <Link href="https://eslint.org/" target="_blank">
                ESLint
              </Link>{' '}
              for static code analysis and environment and{' '}
              <Link href="https://eslint.org/" target="_blank">
                Prettier
              </Link>{' '}
              for code formatting. I used{' '}
              <Link href="https://www.npmjs.com/" target="_blank">
                npm
              </Link>{' '}
              MaterialUi was used as the front-end component library. JSX was used to build React components. Used React
              hooks to update states for dynamic content inside function components. Utilized Javascript for conditional
              rendering. React Router provided navigation for the single-page static website.
            </Typography>
            <Typography>
              <b>First iteration:</b> Wrote website in HTML using Eclipse as my editor. Used Bootstrap as the front-end
              component library, Javascript and jQuery to provide additional dynamic behavior, and Font-Awesome for some
              icons. Used CSS to style and format page content.
            </Typography>
          </>
        ),
        techIcons: {
          data: [
            {
              icon: '../../techicons/react.png',
              label: 'React',
            },
            {
              icon: '../../techicons/typescript.png',
              label: 'Typescript',
            },
            {
              icon: '../../techicons/html.png',
              label: 'HTML 5',
            },
            {
              icon: '../../techicons/css.png',
              label: 'CSS 3',
            },
            {
              icon: '../../techicons/material.png',
              label: 'Material UI',
            },
            {
              icon: '../../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../../techicons/eslint.png',
              label: 'ESLint',
            },
            {
              icon: '../../techicons/prettier.png',
              label: 'Prettier',
            },
            {
              icon: '../../techicons/reactrouter.png',
              label: 'React Router',
            },
            {
              icon: null,
              label: 'JSX',
            },
            {
              icon: '../../techicons/npm.png',
              label: 'npm',
            },
            {
              icon: '../../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../../techicons/tortoisegit.png',
              label: 'Tortoise Git',
            },
            {
              icon: '../../techicons/github.png',
              label: 'Github',
            },
          ],
        },
        techDetails: (
          <>
            <Typography>
              <b>Regular Expressions</b> - Java Regex Utility classes were used to validate and parse the CSS Selector
            </Typography>
            <hr />
          </>
        ),
        carouselImages: {
          images: [],
        },
      }}
    />
  );
}
