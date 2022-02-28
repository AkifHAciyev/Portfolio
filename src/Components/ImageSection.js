import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
	return (
		<ImageSectionStyled>
			<div className="left-content">
				<img src={resume} alt="" />
			</div>
			<div className="right-content">
				<h4>
					I am <span>Akif Haciyev</span>
				</h4>
				<p className="paragraph">
					Hello dear reader. I have experience working as Front End Developer over 1 year. I have worked on several projects, one of them being an E-commerce site. Also I am familiar with Solid and Agile principles. Currently, I am working through
					Upwork as a freelancer. Same time I am increasing my knowledge nonstop. environment.
				</p>
				<div className="about-info">
					<div className="info-title">
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality </p>
						<p>Languages </p>
						<p>Location</p>
					</div>
					<div className="info">
						<p>: Akif Haciyev</p>
						<p>: 26</p>
						<p>: Azerbaijani </p>
						<p>: Azerbaijan, Russian, English </p>
						<p>: Azerbaijan, Baku</p>
					</div>
				</div>
				<PrimaryButton title={'Download Cv'} />
			</div>
		</ImageSectionStyled>
	);
}

const ImageSectionStyled = styled.div`
	margin-top: 5rem;
	display: flex;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		.left-content {
			margin-bottom: 2rem;
		}
	}
	.left-content {
		width: 100%;
		img {
			width: 95%;
			object-fit: cover;
		}
	}
	.right-content {
		width: 100%;
		h4 {
			font-size: 2rem;
			color: var(--white-color);
			span {
				font-size: 2rem;
			}
		}
		.paragraph {
			padding: 1rem 0;
		}
		.about-info {
			display: flex;
			padding-bottom: 1.4rem;
			.info-title {
				padding-right: 3rem;
				p {
					font-weight: 600;
				}
			}
			.info-title,
			.info {
				p {
					padding: 0.3rem 0;
				}
			}
		}
	}
`;
export default ImageSection;
