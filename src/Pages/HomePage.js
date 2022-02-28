import React from 'react';
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
	return (
		<HomePageStyled>
			<div className="particle-con">
				<Particle />
			</div>
			<div className="typography">
				<h1>
					Hi, I'm <span>Akif Haciyev</span>
				</h1>
				<p>I spent three years to find suitable job for myself, tried myself in different areas, but finally understood what I want to achieve. My passion is programming, in particular, I want to become a Front-end developer. And now I am completely immersed in this sphere and I can't imagine my life without it.</p>
				<div className="icons">
					<a href="https://github.com/AkifHAciyev" target="_blank" className="icon i-github" rel="noreferrer">
						<GithubIcon />
					</a>
					<a href="https://www.linkedin.com/in/akif-haciyev-1594351aa/" target="_blank" className="icon i-linkedin" rel="noreferrer">
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</HomePageStyled>
	);
}

const HomePageStyled = styled.header`
	width: 100%;
	height: 100vh;
	position: relative;

	.typography {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 80%;

		.icons {
			display: flex;
			justify-content: center;
			margin-top: 1rem;
			.icon {
				border: 2px solid var(--border-color);
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				transition: all 0.4s ease-in-out;
				cursor: pointer;
				&:hover {
					border: 2px solid var(--primary-color);
					color: var(--primary-color);
				}
				&:not(:last-child) {
					margin-right: 1rem;
				}
				svg {
					margin: 0.5rem;
				}
			}
			.i-github {
				&:hover {
					border: 2px solid #5f4687;
					color: #5f4687;
				}
			}
		}
	}
`;

export default HomePage;
