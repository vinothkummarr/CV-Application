import Input from "./Input";
function Education(props) {
  console.log(props)
 // console.log(props)
  function changeValue(event){
    event.preventDefault()
    
    props.arrays.map(function(list,index){
      if(list.id == props.inpId){
        console.log('found')
        console.log(list.id)
        console.log(props.inpId)
        const deletedArray = props.arrays.filter(a => a.id !== props.inpId)
        const nextArray =[
          ...deletedArray.slice(0, index),
          {school:props.inpSchl, degree:props.inpDeg, e_eDate: props.inpEd,  e_sDate:props.inpSd, e_loc: props.inpLoc, id:props.inpId},
          ...deletedArray.slice(index)
        ];
        props.setArrays(nextArray)
       
        
      } else{
        console.log('not found')
        console.log(list.id)
        console.log(props.inpId)
      }
     
    })
    props.setInpSchl("");
    props.setInpDeg("");
    props.setInpSd("");
    props.setInpEd("");
    props.setInpLoc("")
    props.setInpId("")
  }
  return (
    <div>
      <form action="">
        <h1>{props.head}</h1>
        <Input
          text="School/College"
          textt={props.school}
          setText={props.setSchool}
          inp={props.inpSchl}
          setInputField ={props.setInpSchl}
          setId ={props.setInpId}
          id = {props.inpId}
        
        />
        <Input
          text="Std/Degree"
          textt={props.degree}
          setText={props.setDegree}
          inp={props.inpDeg}
          setInputField ={props.setInpDeg}
          setId ={props.setInpId}
          id = {props.inpId}
        />
        <Input text="Start Date" textt={props.e_sDate} setText={props.sete_SDate} inp={props.inpSd} setInputField ={props.setInpSd} setId ={props.setInpId} id = {props.inpId}/>
        <Input text="End Date" textt={props.e_eDate} setText={props.sete_EDate} inp={props.inpEd} setInputField ={props.setInpEd} setId ={props.setInpId} id = {props.inpId}/>
        <Input text="Location" textt={props.e_loc} setText={props.sete_Loc} inp={props.inpLoc} setInputField ={props.setInpLoc} setId ={props.setInpId} id = {props.inpId}/>
        
        <button type= 'submit' onClick={props.saveEducation}>Save</button>
         <button onClick={changeValue}>Reset</button>
      </form>
    </div>
  );
}
export default Education;
