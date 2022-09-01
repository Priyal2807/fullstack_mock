import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Button = (props) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(props.name);
    }
    return(
        <div className="button centreDiv">
            <button onClick={handleClick}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
        </div>
        )

}
export default Button;