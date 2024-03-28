import Input from "./Input";
function Experience(props) {
  function changeValue(event) {
    console.log(props);
    event.preventDefault();
    props.exparrays.map(function (list,index) {
      if (list.id == props.inpId) {
        console.log("hi");
        const deletedArray = props.exparrays.filter(a => a.id !== props.inpId)
        const nextArray =[
          ...deletedArray.slice(0, index),
          {cmpnyName:props.inpCmpny, position: props.inpPos, eDate: props.inpEEd,  sDate:props.inpESd, loc: props.inpELoc, id:props.inpId , des:props.inpDes},
          ...deletedArray.slice(index)
        ];
        props.setexpArrays(nextArray)
        
      } else{
        console.log(list.id)
        console.log(props.inpId)
      }
    });
    props.setInpCmpny("");
    props.setInpPos("");
    props.setInpESd("");
    props.setInpEEd("");
    props.setInpELoc("")
    props.setInpId("")
    props.setInpDe("")
  }
  return (
    <div>
      <form action="">
        <h1>{props.head}</h1>
        <Input
          text="Company Name"
          textt={props.cmpnyName}
          setText={props.setCmpnyName}
          inp={props.inpCmpny}
          setInputField={props.setInpCmpny}
          setId={props.setInpId}
          id={props.inpId}
        />
        <Input
          text="Position"
          textt={props.position}
          setText={props.setPosition}
          inp={props.inpPos}
          setInputField={props.setInpPos}
          setId={props.setInpId}
          id={props.inpId}
        />
        <Input
          text="Start Date"
          textt={props.sDate}
          setText={props.setSDate}
          inp={props.inpESd}
          setInputField={props.setInpESd}
          setId={props.setInpId}
          id={props.inpId}
        />
        <Input
          text="End Date"
          textt={props.eDate}
          setText={props.setEDate}
          inp={props.inpEEd}
          setInputField={props.setInpEEd}
          setId={props.setInpId}
          id={props.inpId}
        />
        <Input
          text="Location"
          textt={props.loc}
          setText={props.setLoc}
          inp={props.inpELoc}
          setInputField={props.setInpELoc}
          setId={props.setInpId}
          id={props.inpId}
        />
        <Input
          text="Description"
          textt={props.des}
          setText={props.setDes}
          inp={props.inpDes}
          setInputField={props.setInpDes}
          setId={props.setInpId}
          id={props.inpId}
        />
        <button onClick={props.saveExperience}>Save</button>
        <button onClick={changeValue}>Reset</button>
      </form>
    </div>
  );
}
export default Experience;
