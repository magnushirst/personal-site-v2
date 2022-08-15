import React from 'react';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Section from '../components/molecules/section/section';
import Title from '../components/atoms/title/title';
import WideSection from '../components/molecules/wideSection/wideSection';
import LinkedList from '../components/atoms/linkedList/linkedList';

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
        <Title>
          <FormattedMessage id="cv.title" />
        </Title>
        <p>
          <FormattedMessage id="cv.1.paragraph" />
        </p>
      </WideSection>
      <Section align="left">
        <LinkedList>
          <CvBlock>
            <JobInfo>
              <JobTitle><FormattedMessage id="cv.job.1.title" /></JobTitle>
              <CompanyName><FormattedMessage id="cv.job.1.company" /></CompanyName>
              <JobDuration><FormattedMessage id="cv.job.1.duration" /></JobDuration>
            </JobInfo>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle><FormattedMessage id="cv.job.2.title" /></JobTitle>
              <CompanyName><FormattedMessage id="cv.job.2.company" /></CompanyName>
              <JobDuration><FormattedMessage id="cv.job.2.duration" /></JobDuration>
            </JobInfo>
            <JobDescription>
              <ul>
                <li><FormattedMessage id="cv.job.2.description.1" /></li>
                <li><FormattedMessage id="cv.job.2.description.2" /></li>
                <li><FormattedMessage id="cv.job.2.description.3" /></li>
                <li><FormattedMessage id="cv.job.2.description.4" /></li>
                <li><FormattedMessage id="cv.job.2.description.5" /></li>
                <li><FormattedMessage id="cv.job.2.description.6" /></li>
                <li><FormattedMessage id="cv.job.2.description.7" /></li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle><FormattedMessage id="cv.job.3.title" /></JobTitle>
              <CompanyName><FormattedMessage id="cv.job.3.company" /></CompanyName>
              <JobDuration><FormattedMessage id="cv.job.3.duration" /></JobDuration>
            </JobInfo>
            <JobDescription>
              <ul>
                <li><FormattedMessage id="cv.job.3.description.1" /></li>
                <li><FormattedMessage id="cv.job.3.description.2" /></li>
                <li><FormattedMessage id="cv.job.3.description.3" /></li>
                <li><FormattedMessage id="cv.job.3.description.4" /></li>
                <li><FormattedMessage id="cv.job.3.description.5" /></li>
                <li><FormattedMessage id="cv.job.3.description.6" /></li>
                <li><FormattedMessage id="cv.job.3.description.7" /></li>
                <li><FormattedMessage id="cv.job.3.description.8" /></li>
                <li><FormattedMessage id="cv.job.3.description.9" /></li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle><FormattedMessage id="cv.job.4.title" /></JobTitle>
              <CompanyName><FormattedMessage id="cv.job.4.company" /></CompanyName>
              <JobDuration><FormattedMessage id="cv.job.4.duration" /></JobDuration>
            </JobInfo>
            <JobDescription>
              <p><FormattedMessage id="cv.job.4.description.1" /></p>
              <ul>
                <li><FormattedMessage id="cv.job.4.description.2" /></li>
                <li><FormattedMessage id="cv.job.4.description.3" /></li>
                <li><FormattedMessage id="cv.job.4.description.4" /></li>
                <li><FormattedMessage id="cv.job.4.description.5" /></li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle><FormattedMessage id="cv.job.5.title" /></JobTitle>
              <CompanyName><FormattedMessage id="cv.job.5.company" /></CompanyName>
              <JobDuration><FormattedMessage id="cv.job.5.duration" /></JobDuration>
            </JobInfo>
            <JobDescription>
              <p><FormattedMessage id="cv.job.5.description.1" /></p>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <JobTitle><FormattedMessage id="cv.job.6.title" /></JobTitle>
              <CompanyName><FormattedMessage id="cv.job.6.company" /></CompanyName>
              <JobDuration><FormattedMessage id="cv.job.6.duration" /></JobDuration>
            </JobInfo>
            <JobDescription>
              <p><FormattedMessage id="cv.job.6.description.1" /></p>
              <ul>
                <li><FormattedMessage id="cv.job.6.description.2" /></li>
                <li><FormattedMessage id="cv.job.6.description.3" /></li>
                <li><FormattedMessage id="cv.job.6.description.4" /></li>
                <li><FormattedMessage id="cv.job.6.description.5" /></li>
              </ul>
            </JobDescription>
          </CvBlock>
        </LinkedList>
      </Section>
    </>
  );
}
