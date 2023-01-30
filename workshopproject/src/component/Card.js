import React, { useState } from 'react'
import user from "./user"
import "./style/Card.css"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Card() {
    let [index, setIndex] = useState(0);
    let { name, description } = user[index];
    let checkNumber = (number) => {
        if (number > user.length - 1) {
            return 0;
        }
        if (number < 0) {
            return user.length - 1;
        }
        return number
    }
    let decrement = () => {
        let newIndex = index - 1;
        setIndex(() => {
            return checkNumber(newIndex)
        });
    }
    let Increment = () => {
        let newIndex = index + 1;
        setIndex(() => {
            return checkNumber(newIndex)
        });
    }
    return (
        <>
            <div className="mainContainer">
                {console.log("it is name", name)}
                <div className="title">{name}</div>
                <div className="desc">{description}</div>
                <span className="LeftIcon" onClick={decrement}><KeyboardDoubleArrowLeftIcon /></span>
                <span className="RightIcon" onClick={Increment}><KeyboardDoubleArrowRightIcon /></span>

            </div>

        </>
    )
}

export default Card