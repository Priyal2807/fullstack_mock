import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function ChangeinSleep() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/issuewithsleep");
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                Let's say in a few weeks, you are sleeping well. What would change?
            </div>
            <div className="intro">
                Select all the changes you would like to see
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form2">
                <select value="" name="role" className="changeinsleep" multiple>
                <option value="sleep easily">I would go to sleep easily</option>
                <option value="sleep through night">I would sleep through the night</option>
                <option value="wake up refreshed">I'd wake up on time, refreshed</option>
                </select>
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default ChangeinSleep;