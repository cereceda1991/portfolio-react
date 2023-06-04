import React, { useRef } from "react";
import Licon from "./Licon";
import './styles/Experiencie.css'
import { MdWorkHistory } from "react-icons/md";

const Experiences = [
	{
		positions: "TL & Frontend Developer",
		company: "No-Country Tech",
		companyLink: "https://www.nocountry.tech/",
		time: "March 2023 - Today",
		work: "I led the development of an excellent Verbify web application; an innovative platform to learn English. Using technologies like Next.js, React, TypeScript, and Redux, we create an exceptional user experience. I managed to successfully lead two teams during the project, demonstrating my technical and creative skills"},
	
];

const Details = ({ positions, company, companyLink, time, work }) => {

	return (
	<div className="container__details">
		<Licon />
		<li>			
		<h1>
        <a href={companyLink} target="_blank">{company}</a>
		</h1>
		<h3>{positions}</h3>
		<span>({time})</span>
		<p>{work}</p>
		</li>
	</div>
	);
};

const Experience = () => {
	return (
		<div className="container__experiencie">
			<h1>
				<MdWorkHistory /> WORK EXPERIENCIE
			</h1>		
			<ul>
					{Experiences.map((experience, index) => {
						return (
							<Details
								key={index}
								positions={experience.positions}
								company={experience.company}
								companyLink={experience.companyLink}
								time={experience.time}
								work={experience.work}
							/>
						);
					})}
				</ul>
			</div>
	);
};

export default Experience;
