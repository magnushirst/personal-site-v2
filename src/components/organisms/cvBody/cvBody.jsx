import React from 'react';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Section from '../../molecules/section/section';
import Title from '../../atoms/title/title';
import WideSection from '../../molecules/wideSection/wideSection';
import LinkedList from '../../atoms/linkedList/linkedList';
import goustoLogo from '../../../../public/img/gousto.png';
import giffgaffLogo from '../../../../public/img/giffgaff.png';
import tescoLogo from '../../../../public/img/tesco.png';
import icapLogo from '../../../../public/img/icap.png';
import opusLogo from '../../../../public/img/opus.jpg';

const CvBlock = styled.div`
  max-width: 40em;
`;

const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:  1em;
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
  color: ${(props) => props.theme.colors.altBase};
`;
const JobDuration = styled.span`
  display: block;
  padding-left: 1em;
  color: ${(props) => props.theme.colors.altBase};
`;
const JobDescription = styled.div`
  padding-left: 1em;
  margin-top: 1em;

  & > ul > li {
    margin: 1em 0;
  }
`;
export default function CvBody() {
  return (
    <article>
      <WideSection align="left">
        <Title>
          <FormattedMessage id="cv.title" />
        </Title>
        <p>
          <FormattedMessage id="cv.1.paragraph" />
        </p>
      </WideSection>
      <Section align="left">
        <LinkedList offset="0.7em">
          <CvBlock>
            <JobInfo>
              <Image src={goustoLogo} alt="Gousto Logo" width="150" height="50" />
              <div>
                <JobTitle><FormattedMessage id="cv.job.1.title" /></JobTitle>
                <CompanyName><FormattedMessage id="cv.job.1.company" /></CompanyName>
                <JobDuration><FormattedMessage id="cv.job.1.duration" /></JobDuration>
              </div>
            </JobInfo>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <Image src={giffgaffLogo} alt="giffgaff Logo" width="150" height="50" />
              <div>
                <JobTitle><FormattedMessage id="cv.job.2.title" /></JobTitle>
                <CompanyName><FormattedMessage id="cv.job.2.company" /></CompanyName>
                <JobDuration><FormattedMessage id="cv.job.2.duration" /></JobDuration>
              </div>
            </JobInfo>
            <JobDescription>
              <ul>
                <li><FormattedMessage id="cv.job.2.description.1" /></li>
                <li><FormattedMessage id="cv.job.2.description.2" /></li>
                <li><FormattedMessage id="cv.job.2.description.3" /></li>
                <li><FormattedMessage id="cv.job.2.description.4" /></li>
                <li><FormattedMessage id="cv.job.2.description.5" /></li>
                <li><FormattedMessage id="cv.job.2.description.6" /></li>
              </ul>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <Image src={tescoLogo} alt="Tesco Logo" width="150" height="50" />
              <div>
                <JobTitle><FormattedMessage id="cv.job.3.title" /></JobTitle>
                <CompanyName><FormattedMessage id="cv.job.3.company" /></CompanyName>
                <JobDuration><FormattedMessage id="cv.job.3.duration" /></JobDuration>
              </div>
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
              <Image src={opusLogo} alt="Opus Uk Logo" width="130" height="50" />
              <div>
                <JobTitle><FormattedMessage id="cv.job.4.title" /></JobTitle>
                <CompanyName><FormattedMessage id="cv.job.4.company" /></CompanyName>
                <JobDuration><FormattedMessage id="cv.job.4.duration" /></JobDuration>
              </div>
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
              <Image src={icapLogo} alt="ICAP Logo" width="150" height="50" />
              <div>
                <JobTitle><FormattedMessage id="cv.job.5.title" /></JobTitle>
                <CompanyName><FormattedMessage id="cv.job.5.company" /></CompanyName>
                <JobDuration><FormattedMessage id="cv.job.5.duration" /></JobDuration>
              </div>
            </JobInfo>
            <JobDescription>
              <p><FormattedMessage id="cv.job.5.description.1" /></p>
            </JobDescription>
          </CvBlock>
          <CvBlock>
            <JobInfo>
              <Image src={opusLogo} alt="Opus Uk Logo" width="130" height="50" />
              <div>
                <JobTitle><FormattedMessage id="cv.job.6.title" /></JobTitle>
                <CompanyName><FormattedMessage id="cv.job.6.company" /></CompanyName>
                <JobDuration><FormattedMessage id="cv.job.6.duration" /></JobDuration>
              </div>
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
    </article>
  );
}
