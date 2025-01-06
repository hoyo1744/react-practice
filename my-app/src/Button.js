import PropTypes from "prop-types";
// CSS 코드를 import해서 사용함.
// CSS 코드도 모듈러가 될 수 있다.(.module.css를 반드시 붙여야함.)
import styled from"./Button.module.css";

function Button({text}){
    return <button className={styled.btn}>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;