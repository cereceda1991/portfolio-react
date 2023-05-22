import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Licon from "./Licon";
import './styles/experiencie.css'
import { MdWorkHistory } from "react-icons/md";

const Experiences = [
	{
		positions: "Team Leader and Frontend Developer",
		company: "No-Country Tech",
		companyLink: "https://www.nocountry.tech/",
		time: "March 2023 - Today",
		work: "team leader in the development of a mobile application and developer in a web page",
	},
	{
		positions: "Senior UI/UX Designer",
		company: "InnovateTech Solutions",
		companyLink: "https://www.innovatetech.com/",
		time: "May 2022 - February 2023",
		work: "designer of intuitive and attractive user interfaces for web and mobile applications"
	},
	{
		positions: "Full Stack Developer",
		company: "TechHub Solutions",
		companyLink: "https://www.techhubsolutions.com/",
		time: "January 2021 - April 2022",
		work: "implementation of features and functionalities for web and enterprise applications"
	}
];

const Details = ({ positions, company, companyLink, time, work }) => {
	const ref = useRef(null);

	return (
		<li ref={ref}>
			<Licon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h2><a href={companyLink} target="_blank">{company}</a></h2>
				<h3>{positions}</h3>
				<span>({time})</span>
				<p>{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const target = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: target,
		offset: ["start end", "center start"],
	});

	return (
		<div className="container__experiencie">
			<h1>
				<MdWorkHistory /> WORK EXPERIENCIE
			</h1>			<div ref={target}>
				<motion.div
					style={{
						scaleY: scrollYProgress,
					}}
					className="motion-div" />
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
		</div>
	);
};

export default Experience;
