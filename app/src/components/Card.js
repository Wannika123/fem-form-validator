function Card(props) {
    return (
        <div id="Card">

            <div className="card-container">

                <div className="card card-back">
                    <div className="card-back-cvc">{props.cvc}</div>
                </div>
    
                <div className="card card-front">
                    <div className="card-front-header">
                        <div className="big-circle"></div>
                        <div className="small-circle"></div>
                    </div>
                    <div className="card-front-middle">
                        {props.cardNum}
                    </div>
                    <div className="card-front-bottom">
                        <div className="card-front-bottom-name">{props.cardName}</div>
                        <div className="card-front-bottom-date">{props.month}/{props.year}</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card;