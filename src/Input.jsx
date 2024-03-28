
function Input(props) {
   // console.log(props)
    ///console.log(props.inp)
    function handleFullNameChange(e) {
      props.setText(e.target.value);
      props.setInputField(e.target.value)
      props.setId(props.id)
    
      
    }
    return (
      <div className="inputBox">
        <div className="inputs">
          <label id="label" htmlFor="name">{props.text}</label>
          <input
            id="getVal"
           //defaultValue={props.inp}
           value={props.inp}
            type="text"
          // value={props.fullName}
            
            onChange={handleFullNameChange}
          />
        </div>
      </div>
    );
  }
  export default Input