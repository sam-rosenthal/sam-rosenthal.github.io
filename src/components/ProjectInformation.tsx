import ProjectCard from './ProjectCard';
import React from 'react';
import { Typography, Link } from '@material-ui/core';

export function JavaOSS(): JSX.Element {
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
          </Typography>
        ),
        techIcons: {
          data: [
            {
              icon: '../techicons/eclipse.png',
              label: 'Eclipse',
            },
            {
              icon: '../techicons/java.png',
              label: 'JDK8',
            },
            {
              icon: '../techicons/maven.png',
              label: 'Maven',
            },
            {
              icon: '../techicons/regex.png',
              label: 'Regular Expressions',
            },
            {
              icon: '../techicons/junit.png',
              label: 'JUnit',
            },
            {
              icon: '../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../techicons/tortoisegit.png',
              label: 'Tortoise Git',
            },
            {
              icon: '../techicons/github.png',
              label: 'Github',
            },
            {
              icon: '../techicons/travis.png',
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
            <code style={{ backgroundColor: '#e0e0e0' }}>
              {' '}
              private static final String QUOTES_RE = &quot;([\&quot;\&apos;])&quot;; private static final String
              ATTRIBUTE_VALUE_RE = &quot;([-_.#a-zA-Z0-9:\\/ ]+)&quot;; private static final String
              ATTRIBUTE_VALUE_RE_NO_SPACES = &quot;([-_.#a-zA-Z0-9:\\/]+)&quot;; private static final String
              ELEMENT_ATTRIBUTE_NAME_RE=&quot;(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)&quot;; private static final String
              STARTING_ELEMENT_RE = &quot;^(&quot;+ELEMENT_ATTRIBUTE_NAME_RE+&quot;|([*]))?&quot;; private static final
              String PSUEDO_RE = &quot;(:[a-z][a-z\\-]*([(][^)]+[)])?)&quot;;
            </code>
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
              icon: '../techicons/react.png',
              label: 'React',
            },
            {
              icon: '../techicons/typescript.png',
              label: 'Typescript',
            },
            {
              icon: '../techicons/html.png',
              label: 'HTML 5',
            },
            {
              icon: '../techicons/css.png',
              label: 'CSS 3',
            },
            {
              icon: '../techicons/gcp.png',
              label: 'Google Cloud Platform',
            },
            {
              icon: '../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../techicons/java.png',
              label: 'JDK8',
            },
            {
              icon: '../techicons/maven.png',
              label: 'Maven',
            },
            {
              icon: '../techicons/eclipse.png',
              label: 'Eclipse',
            },
            {
              icon: '../techicons/regex.png',
              label: 'Regular Expressions',
            },
            {
              icon: '../techicons/junit.png',
              label: 'JUnit',
            },
            {
              icon: '../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../techicons/tortoisegit.png',
              label: 'Tortoise Git',
            },
            {
              icon: '../techicons/github.png',
              label: 'Github',
            },
            {
              icon: '../techicons/travis.png',
              label: 'Travis CI',
            },
            {
              icon: '../techicons/debian.png',
              label: 'Debian Linux',
            },
            {
              icon: '../techicons/analytics.png',
              label: 'Google Analytics',
            },
          ],
        },
        techDetails: (
          <>
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
              <br />
              The abstract Selenium class has the following method:
            </Typography>
            <code style={{ backgroundColor: '#e0e0e0' }}>
              protected By getBy(String cssSelector) {'return By.cssSelector(cssSelector);'}
            </code>
            <Typography>The By.xpath tests override this method with:</Typography>
            <code style={{ backgroundColor: '#e0e0e0' }}>
              @Override
              {
                'protected By getBy(String cssSelector) {  String xpath = null; try { xpath = converter.convertCssSelectorStringToXpathString(cssSelector);} catch (CssSelectorToXPathConverterException e) {throw new RuntimeException(e); } System.out.println("original cssSelector="+cssSelector+", using xpath="+xpath); return By.xpath(xpath);}'
              }
            </code>
            <hr />
            <Typography>
              <b>
                <Link href="https://wicket.apache.org/" target="_blank">
                  Apache Wicket
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
            <table>
              <tbody>
                <tr>
                  <th>Month</th>
                  <th>Visitors</th>
                  <th>Countries of Visitors</th>
                  <th>Total Visits</th>
                  <th>Average Visit Time (secs)</th>
                </tr>
                <tr>
                  <td>September 2018</td>
                  <td>72</td>
                  <td>17</td>
                  <td>100</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>October 2018</td>
                  <td>118</td>
                  <td>20</td>
                  <td>163</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>November 2018</td>
                  <td>126</td>
                  <td>26</td>
                  <td>152</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>December 2018</td>
                  <td>160</td>
                  <td>24</td>
                  <td>184</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>January</td>
                  <td>240</td>
                  <td>57</td>
                  <td>283</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Febuary</td>
                  <td>239</td>
                  <td>56</td>
                  <td>288</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>March</td>
                  <td>296</td>
                  <td>57</td>
                  <td>360</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>April</td>
                  <td>284</td>
                  <td>55</td>
                  <td>355</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>May</td>
                  <td>346</td>
                  <td>63</td>
                  <td>445</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>June</td>
                  <td>231</td>
                  <td>51</td>
                  <td>300</td>
                  <td>49</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>314</td>
                  <td>52</td>
                  <td>397</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <Typography>
              <b>GitHub, Git, Apache Maven, Continuous Integration</b> - This Website&apos;s source code is maintained
              as part of the java-csSelector-to-xpath repository (See previous section for details){' '}
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
          icon: 'favBig.png',
        },
        body: (
          <Typography>
            This website was developed from scratch without templates or publishing tools. I used VSCode as my editor.
            MaterialUi was used as the front-end component library. I used Font-Awesome for some icons. Javascript and
            jQuery were used to supplement Bootstrap to provide additional dynamic behavior.
          </Typography>
        ),
        techIcons: {
          data: [
            {
              icon: '../techicons/react.png',
              label: 'React',
            },
            {
              icon: '../techicons/typescript.png',
              label: 'Typescript',
            },
            {
              icon: '../techicons/html.png',
              label: 'HTML 5',
            },
            {
              icon: '../techicons/css.png',
              label: 'CSS 3',
            },
            {
              icon: '../techicons/material.png',
              label: 'Material UI',
            },
            {
              icon: '../techicons/vscode.png',
              label: 'Visual Studio',
            },
            {
              icon: '../techicons/git.png',
              label: 'Git',
            },
            {
              icon: '../techicons/tortoisegit.png',
              label: 'Tortoise Git',
            },
            {
              icon: '../techicons/github.png',
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
