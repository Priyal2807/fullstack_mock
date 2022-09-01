import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function HoursOfSleep() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/sleepscore");
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                Ok. How many hours sleep do you get in a typical night?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form">
                <input type="text" name="name" required placeholder="Enter the number of hours" />
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default HoursOfSleep;