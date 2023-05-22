// import React from 'react'
// import { motion, useScroll } from 'framer-motion'

// const Licon = ({ reference }) => {
//     const { scrollYProgress } = useScroll({
//         target: reference,
//         offset: ["center end", "center center"],
//     });


//     return (
//         <figure>
//             <svg
//                 className='svg__rotate'
//                 width="75"
//                 height="75"
//                 viewBox="0 0 100 100">
//                 <circle cx="75" cy='50' r="20" className='circle1' />
//                 <motion.circle
//                     style={{
//                         pathLength: scrollYProgress,
//                     }}
//                 />
//                 <circle cx="75" cy='50' r="10" className='circle2' />
//             </svg>
//         </figure>
//     )
// }

// export default Licon

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Licon = () => {
    const reference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: reference.current,
        offset: ["center end", "center center"],
    });

    return (
        <figure ref={reference}>
            <svg
                className='svg__rotate'
                width="75"
                height="75"
                viewBox="0 0 100 100"
            >
                <circle cx="75" cy="50" r="20" className='circle1' />
                <motion.circle
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
                <circle cx="75" cy="50" r="10" className='circle2' />
            </svg>
        </figure>
    );
};

export default Licon;

