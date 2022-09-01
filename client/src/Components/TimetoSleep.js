import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function TimetoSleep() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/timetogetup");
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                What time do you go to bed for sleep?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form">
                <input type="text" name="name" required placeholder="Enter time in hh:mm format" />
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default TimetoSleep;