import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Name = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/changeinsleep");
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                Hey! I'm <span style={{ color: "#73C6B6" }}>wysa</span>
            </div>
            <div className="intro">
                Our conversations are private and anonymous, so there is no login. Just choose a nickname and we are good to go.
            </div>
            <div>
                <form action="" method="post" className="form" onSubmit={handleSubmit}>
                    <input type="text" name="name" required placeholder="Choose a nickname" />
                    <button className="button nexttoinput" type="submit"><FontAwesomeIcon icon={faArrowDown} /></button>
                </form>
            </div>
    
        </div>
        )
}
export default Name;