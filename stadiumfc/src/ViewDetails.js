import { useEffect, useState } from "react";
import Background from './detailsBg.jpg';
import { useParams } from "react-router-dom";
import { data } from './data';
import { Link } from "react-router-dom";
import './ViewDetails.css';
export default function ViewDetails() {
    let { name } = useParams();
    const [player, setPlayer] = useState({})
    useEffect(() => {
        data.map(item => {
            if (item.Name === name) {
                setPlayer(item);
            }
        })
    }, [])


    function convertHeight(height) {
        let temp=parseFloat(height?.replace("'","."));
        return (temp/3.2808).toFixed(2);
    }

    function displayStars() {
        return [1,2,3].map(item => <div><img width="20" height="20" src="/assets/star.png" alt="Star" /></div>)
    }

    return <div
        style={{ backgroundImage: `url(${Background})` }}
        className="root">
        <div className="header row">
            <div className="homeSection row">
                <div>
                    <img src="/assets/back.svg" alt="Back" />
                </div>
                <Link to="/"><div>Home</div></Link>

            </div>
            <div className="helpSection row">
                <div>
                    <img width="20" height="20" src="/assets/help.png" alt="Help" />
                </div>
                <div>Help</div>

            </div>
        </div>
        <div className="row title">
            <div className="userName">{player.Name}</div>
            <div>
                <img width="40px" height="40px" src="/assets/user.png" alt="User" />
            </div>
        </div>
        <div className="row">
            <div className="progress">
                <img src="/assets/progress.png" alt="Progress" />
            </div>
            <div>
            <div className="row">
                <div className="label">Overall {player.Overall}</div>
                <div className="label">Potential {player.Finishing}</div>

            </div>
            <div className="padding">
                <div className="margin" >Age <span className="span">{player.age}</span></div>
                <div className="margin">Height <span className="span" >{player.Height} - {convertHeight(player.Height)}m</span></div>
                <div className="margin">Weight <span className="span">{player.Weight}</span></div>
                <div className="margin">Preferred Foot <span className="span">{player.PreferredFoot}</span></div>
                <div className="margin">Position <span className="span">{player.Position}</span></div>
                <div className="margin">Jersey Number <span className="span">{player.JerseyNumber}</span></div>
                <div className="margin row">Weak Foot <span className="span row" >{displayStars()}</span></div>
                <div className="margin row">Skill Moves <span className="span row" >{displayStars()}</span></div>
                <div className="margin">Work Rate (Attack- Defense) <span className="span">{player.WorkRate}</span></div>
                <div className="margin">International Reputation <span className="span" >{player.age}</span></div>

            </div>

            </div>
        </div>
    </div>
}