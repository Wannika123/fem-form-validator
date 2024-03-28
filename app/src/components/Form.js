import { InputMask } from '@react-input/mask';

function Form(props) {
    const monthModify = (input) => {
        return { replacement: input[0] === '0' 
            ? { a: /[0-1]/, b: /[1-9]/ } 
            : { a: /[0-1]/, b: /[0-2]/ } }
    }
    const blankWarning = <div className='warning'>Can't be blank</div>
    return (
        <div id="Form-container">
            <form>
                <label htmlFor="name">Cardholder Name</label>
                <input 
                    id="card-name"
                    placeholder="e.g. Jane Appleseed" 
                    type="text" 
                    onChange={props.handleChange} 
                /> 
                {props.cardName === '' && blankWarning}
                <label htmlFor="card-num">Card Number</label>
                <InputMask 
                    id="card-num" 
                    placeholder="e.g. 1234 5678 9123 0000" 
                    onChange={props.handleChange} 
                    mask='____ ____ ____ ____'
                    replacement={{ _: /\d/ }} 
                />
                {props.cardNum === '' && blankWarning}
                <div className="third-line-form">
                    <label className="date-label">
                        Exp. Date (MM/YY)
                        <InputMask
                            placeholder="MM" 
                            id="month" 
                            onChange={props.handleChange}
                            mask="ab"
                            replacement={{ a: /[0-1]/, b: /\d/ }}
                            modify={monthModify}
                        />
                        <InputMask
                            placeholder="YY" 
                            id="year" 
                            onChange={props.handleChange}
                            mask='ab'
                            replacement={{ a: /[2-9]/, b: /\d/ }}
                        />
                        {
                        props.month === '' 
                            ? blankWarning
                            : props.year === '' 
                                ? blankWarning
                                : null
                        }
                    </label>
                    <label className="cvc-label">
                        CVC
                        <InputMask 
                            placeholder="e.g. 123" 
                            id="cvc" 
                            onChange={props.handleChange}
                            mask="___"
                            replacement={{ _: /\d/ }}
                        />
                        {props.cvc === '' && blankWarning}
                    </label>
                </div>
                <button type="submit" id="form-btn" onClick={props.handleClick}>Confirm</button>
            </form>
        </div>
    )
}

export default Form;