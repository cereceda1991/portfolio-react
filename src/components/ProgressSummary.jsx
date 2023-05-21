import React, { useState, useEffect } from "react";

const ProgressSummary = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= value) {
                    return value;
                } else {
                    return prevCount + 20;
                }
            });
        }, 100);

        return () => clearInterval(timer);
    }, [value]);

    return <h1>+{count}</h1>;
};

export default ProgressSummary;

