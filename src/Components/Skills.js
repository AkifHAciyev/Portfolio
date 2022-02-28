import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
	return (
		<SkillsStyled>
			<Title title={'My Skills'} span={'my skills'} />
			<InnerLayout>
				<div className="skills">
					<ProgressBar title={'React JS'} width={'90%'} text={'90%'} />
					<ProgressBar title={'Redux'} width={'90%'} text={'90%'} />
					<ProgressBar title={'JAVASCRIPT'} width={'90%'} text={'90%'} />
					<ProgressBar title={'HTML5'} width={'95%'} text={'95%'} />
					<ProgressBar title={'CSS3'} width={'95%'} text={'95%'} />
					<ProgressBar title={'Material UI'} width={'90%'} text={'90%'} />
					<ProgressBar title={'JQuerry'} width={'90%'} text={'90%'} />
					<ProgressBar title={'FireBase'} width={'80%'} text={'80%'} />
				</div>
			</InnerLayout>
		</SkillsStyled>
	);
}

const SkillsStyled = styled.section`
	.skills {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 2rem;
		grid-column-gap: 3rem;
		@media screen and (max-width: 700px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default Skills;
