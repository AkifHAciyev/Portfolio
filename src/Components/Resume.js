import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
	const briefcase = <BusinessCenterIcon />;
	const school = <SchoolIcon />;
	return (
		<ResumeStyled>
			<Title title={'Resume'} span={'resume'} />
			<InnerLayout>
				<div className="small-title">
					<SmallTitle icon={briefcase} title={'Working Experience'} />
				</div>
				<div className="resume-content">
					<ResumeItem
						year={'2021 - Present'}
						title={'Junior Front End development'}
						subTitle={'EACamp'}
						text={'I took part in many projects from 6 months. from 6 months. I organized ecommerce projects using big technologies. For example: Javascript, ReactJs, NodeJs, Redux'}
					/>
					<ResumeItem
						year={'2021 - 09.2021'}
						title={'Front End development'}
						subTitle={'Freelance'}
						text={'I took freelance orders for website layout, creating mini-games, improving website speed, writing online stores, making separate components for websites'}
					/>
				</div>
				<div className="small-title u-small-title-margin">
					<SmallTitle icon={school} title={'Certificates'} />
				</div>
				<div className="resume-content ">
					<ResumeItem
						year={''}
						title={'EA Camp'}
						subTitle={'HTML, CSS, Javascript, React, Redax, NodeJs'}
						text={
							'The course is designed to prepare students from 0 to junior front-end developer within 4 months.You will make more than 10 projects that will help you hone your skills as a Front end developer'
						}
					/>
					<ResumeItem
						year={''}
						title={'JavaScript 2.0'}
						subTitle={'DOM , Object , Touch , API , AJAX'}
						text={
							'The course is designed for those who start from scratch. The course contains all the topics necessary for the junior developer level competition and 3 projects. Number of tasks in remote sensing: 449'
						}
					/>
					<ResumeItem
						year={''}
						title={'Development Bootcamp from Udemy'}
						subTitle={'HTML, CSS, Javascript, React'}
						text={
							'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, React, build real projects. By the end of this course, you will be fluently programming and be ready to make any website.'
						}
					/>
					<ResumeItem
						year={''}
						title={'Complete Course on JS + React'}
						subTitle={'JavaScript, React'}
						text={
							'Learning the most popular JavaScript-based library - React.js with all the necessary technologies (including Redux). For those who want to learn how to create web applications using the React library'
						}
					/>
					<ResumeItem
						year={''}
						title={'Markup Developer'}
						subTitle={'HTML5 & CSS3'}
						text={
							'We used HTML5, CSS, Bootstrap, Animation, WordPress.This is a guarantee that you will master the layout. We have little theory here, but a lot of practice. Course project was to create an online store'
						}
					/>
				</div>
				<div className="small-title u-small-title-margin">
					<SmallTitle icon={school} title={'Educational Qualifications'} />
				</div>
				<div className="resume-content ">
					<ResumeItem year={'2012 - 2016'} title={'Electronics telecommunications and radio engineering'} subTitle={'Azerbaijan Technical University'} />
				</div>
			</InnerLayout>
		</ResumeStyled>
	);
}

const ResumeStyled = styled.section`
	.small-title {
		padding-bottom: 3rem;
	}
	.u-small-title-margin {
		margin-top: 4rem;
	}

	.resume-content {
		border-left: 2px solid var(--border-color);
	}
`;
export default Resume;
