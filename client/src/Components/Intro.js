import sleeppenguin from '../sleeppenguin.jpg'
import Button from './Button.js'
function Intro() {
    return (
        <div className="centreDiv sizeofDiv">
            <img src={sleeppenguin} alt="sleepy penguin" height="90" width="90" />
            <div className="heading">
                Hey! I'm <span style={{ color: "#73C6B6" }}>wysa</span>
            </div>
            <div className="intro">
                I am here to help you sleep better
            </div>
            <Button name="/name"/>
        </div>
        )
}

export default Intro