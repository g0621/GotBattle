import React from "react";
import './cardDetails.styles.css'

const CardDetailComponent = (props) => {
    const render = (data) => {
        return (
            <React.Fragment>
                <div className={'main-div'}>
                    <div className={'main-box battle-name'} style={{marginBottom: '20px'}}>{data.name}</div>
                    {data.attacker_king && data.defender_king &&
                    <div>
                        <div className={'title'}>{data.attacker_king}</div>
                        <div className={'sub-title'}>VS</div>
                        <div className={'title'}>{data.defender_king}</div>
                    </div>
                    }
                    <div className={'main-box data-box'}>
                        <h4>
                            Battle was fought {data.year && `in year ${data.year} `}
                            {data.location && ` at ${data.location}`}
                            {data.region && ` in ${data.region} region`}
                            {data.attacker_king && data.defender_king && ` were ${data.attacker_king} attacked king ${data.defender_king}`}
                            {data.battle_type && ` in a ${data.battle_type}`}
                        </h4>
                        {
                            <h4>
                                {data.attacker_1 &&
                                `The attackers came with ${data.attacker_1}`}
                                {data.attacker_2 && ` and ${data.attacker_2}`}
                                {data.attacker_3 && ` and ${data.attacker_3}`}
                                {data.attacker_4 && ` and ${data.attacker_4}`}
                            </h4>
                        }
                        {data.attacker_size && <p>{`The Attackers were total of ${data.attacker_size}`}</p>}
                        {data.attacker_commander && <p>{`Attackers were commanded by ${data.attacker_commander}`}</p>}
                        {
                            data.defender_1 &&
                            <h4>
                                The defenders had support from {data.defender_1}
                                {data.defender_2 && ` and ${data.defender_2}`}
                                {data.defender_3 && ` and ${data.defender_3}`}
                                {data.defender_4 && ` and ${data.defender_4}`}
                            </h4>
                        }
                        {data.defender_size && <p>{`The Defenders were total of ${data.defender_size}`}</p>}
                        {data.defender_commander && <p>{`Defenders were commanded by ${data.defender_commander}`}</p>}
                        {data.attacker_outcome &&
                        <h4>
                            {data.attacker_outcome === "win" ? 'Attackers ' : 'Defenders '}won the fight
                        </h4>}
                        {data.note && <p>{data.note}</p>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
    return (
        <div>
            {render(props.data)}
        </div>
    )
}

export default CardDetailComponent;
