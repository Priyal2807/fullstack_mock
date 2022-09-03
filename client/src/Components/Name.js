import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Name = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const handleChange = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = async (e) => {

        if (localStorage.getItem('userid') === null)
            localStorage.setItem('userid', Math.floor((Math.random() * 100) + 1));

        e.preventDefault();
        let myid = localStorage.getItem('userid')
        const url = "name"
        await axios
            .post(url, {
                data: data,
                myid: myid
            }).then(function (response) {
                navigate("/changeinsleep");
            }).catch(function (err) {
                console.log(err);
            })
       
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
                    <input type="text" name="name" onChange={handleChange} value={data} required placeholder="Choose a nickname" />
                    <button className="button nexttoinput" type="submit"><FontAwesomeIcon icon={faArrowDown} /></button>
                </form>
            </div>
    
        </div>
        )
}
export default Name;