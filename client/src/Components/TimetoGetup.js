import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function TimetoGetup() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/hoursofsleep");
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                What time do you go get out of bed to start your day?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form">
                <input type="text" name="name" required placeholder="Enter time in hh:mm format" />
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default TimetoGetup;