import React from "react";
import "./style/SkillCard.css";
import { motion } from "framer-motion";

function SkillCard({ 
    logo, 
    name, 
    percentage, 
    color,
    level,
    time
}) {

    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:time,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
        className="skill-card">

            <div className="skill-logo">
                <img src={logo} alt={name} />
            </div>


            <h3>{name}</h3>


            <div 
              className="skill-line"
              style={{backgroundColor: color}}
            ></div>


            <div className="skill-info">

                <span>
                    {level}
                </span>

                <strong style={{color:color}}>
                    {percentage}%
                </strong>

            </div>


            <div className="progress-container">

                <div 
                    className="progress-bar"
                    style={{
                        width:`${percentage}%`,
                        backgroundColor:color
                    }}
                >
                </div>

            </div>

        </motion.div>
    );
}


export default SkillCard;