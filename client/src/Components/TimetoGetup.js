import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
function TimetoGetup() {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const handleChange = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${process.env.link}/morningTimegetup`
        const myid = localStorage.getItem('userid');
        await axios.post(url, {morningtime: data, myid:myid}).then(() => {
            navigate("/hoursofsleep");
        }).catch((err) => {
            console.log(err)
        })
        
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                What time do you go get out of bed to start your day?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form">
                <input type="text" name="name" value={data} onChange={handleChange} required placeholder="Enter time in hh:mm format" />
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default TimetoGetup;