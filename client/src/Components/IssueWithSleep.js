import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function IssueWithSleep() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/timetosleep");
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                That's a great goal. How long have you been struggling with your sleep?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form2">
                <select value="" name="role" className="issuewithsleep" multiple>
                    <option value="sleep easily">Less than 2 weeks</option>
                    <option value="sleep through night">2 to 8 weeks</option>
                    <option value="wake up refreshed">More than 8 weeks</option>
                </select>
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default IssueWithSleep;