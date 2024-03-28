import Input from "./Input";
function Form(props) {

  return (
    <div>
      <form action="">
        <h1>{props.head}</h1>
        <Input text="Full Name" textt={props.fullName} setText={props.setFullName} />
        <Input text="E-mail" textt ={props.email} setText ={props.setEmail}/>
        <Input text="Phone Number" textt ={props.num} setText ={props.setNum}/>
        <Input text="Address"  textt ={props.adrs} setText ={props.setAdrs}/>
        <button>Save</button>
      </form>
    </div>
  );
}
export default Form;
