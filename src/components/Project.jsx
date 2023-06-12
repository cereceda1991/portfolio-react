// import React from 'react'
// import playSound from '../utils/playSound'
// import './styles/Project.css'

// const Project = ({ title, image, languages, demoUrl, codeUrl, content }) => {
//     return (
//         <div className='container__project' onMouseEnter={playSound} onMouseLeave={() => { }}>
//             <img src={image} alt={image} />
//             <div className='container__languages'>
//                 {languages.map((language, index) => (
//                     <img key={index} src={language} alt={language} />
//                 ))}
//             </div>
//             <div className='image-overlay'>
//                 <h4 >{title}</h4>
//                 <p>{content}</p>
//                 <div className='container__butttons'>
//                     <button>
//                         <a href={demoUrl} target="__blank"> Demo </a>
//                     </button>
//                     <button>
//                         <a href={codeUrl} target="__blank"> Code </a>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Project
