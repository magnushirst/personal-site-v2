import React from 'react';

import styled from 'styled-components';
import Section from '../src/components/molecules/section/section';
import Title from '../src/components/atoms/title/title';
import WideSection from '../src/components/molecules/wideSection/wideSection';
import LinkedList from '../src/components/atoms/linkedList/linkedList';

const CvBlock = styled.div`
  max-width: 40em;
`;

const JobInfo = styled.div`
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: .5em;
`;
const CompanyName = styled.span`
  display: block;
  padding-left: 1em;
  margin-bottom: .5em;
  color: #888;
`;
const JobDuration = styled.span`
  display: block;
  padding-left: 1em;
  color: #888;
`;
const JobDescription = styled.div`
  padding-left: 1em;
  margin-top: 1em;
  & > ul > li {
    margin: 1em 0;
  }
`;
export default function Cv() {
  return (
    <>
      <WideSection align="left">
        <Title>Curriculum Vitae</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </WideSection>
      <Section align="left">
        <LinkedList>
          <CvBlock>
            <JobInfo>
              <JobTitle>Engineering Manager</JobTitle>
              <CompanyName>gousto · Full-time</CompanyName>
              <JobDuration>Jul 2022 - Present</JobDuration>
            </JobInfo>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle>Tech Lead of Member</JobTitle>
              <CompanyName>giffgaff · Full-time</CompanyName>
              <JobDuration>Jan 2019 - Jul 2022 · 3 yrs 7 mos</JobDuration>
            </JobInfo>
            <JobDescription>
              <ul>
                <li>
                  - Managed Front End (ReactJS), Mobile (React Native)
                  and Backend (Java) flows for our domain
                </li>
                <li>
                  - Improved GDPR Compliancy for member data and account access
                </li>
                <li>
                  - Migrated core account access flows from legacy PHP to ReactJS
                </li>
                <li>
                  - Managed core member backend microservices in Java Spring Boot
                </li>
                <li>
                  - Designed event driven dashboard personalisation functionality
                </li>
                <li>
                  - Designed and implemented MFA to protect member accounts
                </li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle>Software Engineer</JobTitle>
              <CompanyName>Tesco PLC</CompanyName>
              <JobDuration>Sep 2014 - Jan 2019 · 4 yrs 6 mos</JobDuration>
            </JobInfo>
            <JobDescription>
              <ul>
                <li>
                  - Developed the Identity Services for Customers, Colleagues and 3rd Parties
                </li>
                <li>
                  - Designed and implemented the Clubcard Rollout to 100m Customers with a focus on
                  customer identity and authentication
                </li>
                <li>
                  - Improved CICD processes with Kubernetes, Helm and Jenkins in AWS of backend
                  microservices
                </li>
                <li>
                  - Created automated pipelines using ansible to deploy and manage MongoDB clusters
                </li>
                <li>
                  - Created an internal system to manage AWS infrastructure integrations with
                  in-house data centres
                </li>
                <li>
                  - Created a POC native app and backend service for a colleague paging system for
                  use in store
                </li>
                <li>
                  - Worked in the graduate recruitment team to help create a better technology
                  recruitment process and mentored junior engineers
                </li>
                <li>
                  - Worked in India for 3 months to project manage and help QA
                </li>
                <li>
                  - Managed and implemented a project working with a 3rd party hardware company to
                  implement a new time keeping process in warehouses
                </li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle>PHP Developer</JobTitle>
              <CompanyName>Opus-UK Limited</CompanyName>
              <JobDuration>Jul 2013 - Oct 2013 · 4 mos</JobDuration>
            </JobInfo>
            <JobDescription>
              <p>
                Time over the summer between my Industrial placement and University was spent
                developing an internal system to:
              </p>
              <ul>
                <li>
                  - Aid the sales team at Opus to create quotes faster and more efficiently for
                  off-site staff.
                </li>
                <li>
                  - Generate PDF invoices which can be emailed to the customer.
                </li>
                <li>
                  - Integrate the process with Sage.
                </li>
                <li>
                  - Generate reports of users&apos; sales statistics for themselves and managers.
                </li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle>IT Finance Intern</JobTitle>
              <CompanyName>ICAP</CompanyName>
              <JobDuration>Jul 2012 - Jun 2013 · 1 yr</JobDuration>
            </JobInfo>
            <JobDescription>
              <p>
                University placement. Working with Oracle Financials, Essbase, Hyperion Financial
                Reporting and ASP.NET development
              </p>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle>Web Programmer</JobTitle>
              <CompanyName>OPUS UK LTD</CompanyName>
              <JobDuration>Aug 2011 - Oct 2011 · 3 mos</JobDuration>
            </JobInfo>
            <JobDescription>
              <p>
                Time over the summer between my Industrial placement and University was spent
                developing an internal system to:
              </p>
              <ul>
                <li>
                  - Aid the sales team at Opus to create quotes faster and more efficiently for
                  off-site staff.
                </li>
                <li>
                  - Generate PDF invoices which can be emailed to the customer.
                </li>
                <li>
                  - Integrate the process with Sage.
                </li>
                <li>
                  - Generate reports of users&apos; sales statistics for themselves and managers.
                </li>
              </ul>
            </JobDescription>
          </CvBlock>
        </LinkedList>
      </Section>
    </>
  );
}
