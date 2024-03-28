import { useState } from "react";
import Resume from "./Resume";
import "./App.css";
import Form from "./Form";
import Experience from "./Experience";
import Education from "./Education";
import uuid from "react-uuid";
import ReRenderFunction from "./ReRender";
//let con = [];
let exp = [];
function Home() {
  const [fullName, setFullName] = useState("Vinothkumar R");
  const [email, setEmail] = useState("vinothkumarr8987@gmail.com");
  const [num, setNum] = useState("9080249484");
  const [adrs, setAdrs] = useState("London");

  const [cmpnyName, setCmpnyName] = useState("");
  const [position, setPosition] = useState("");
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const [loc, setLoc] = useState("");
  const [des, setDes] = useState("");
  const [eid,setEid] =useState(uuid())

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [e_sDate, sete_SDate] = useState("");
  const [e_eDate, sete_EDate] = useState("");
  const [e_loc, sete_Loc] = useState("");
  const [id, setId] = useState(uuid());

  const [arrays, setArrays] = useState([]);
  const [exparrays, setexpArrays] = useState([]);

  const saveEducation = (event) => {
    event.preventDefault();
    setArrays([
      ...arrays,
      {
        school: school,
        degree: degree,
        e_sDate: e_sDate,
        e_eDate: e_eDate,
        e_loc: e_loc,
        key: uuid(),
        returnID: returnID,
        id: uuid(),
      },
    ])
    setInpSchl("");
    setInpDeg("");
    setInpSd("");
    setInpEd("");
    setInpLoc("")
    setInpId("")
    
  };

  const saveExperience = (event) => {
    event.preventDefault();
    setexpArrays([
      ...exparrays,
      {
        cmpnyName: cmpnyName,
        position: position,
        sDate: sDate,
        eDate: eDate,
        loc: loc,
        des: des,
        id: uuid(),
      },
    ]);
  };

  //const [inputField, setInputField] = useState({
  //  schl: "a",
  //  deg: "b",
  //  sd: "x",
  //  ed: "y",
  //  loc: "z",
  //  id:''
  //});

  const [inpSchl,setInpSchl] =useState('')
  const [inpDeg,setInpDeg] =useState('')
  const [inpSd,setInpSd] =useState('')
  const [inpEd,setInpEd] =useState('')
  const [inpLoc,setInpLoc] =useState('')
  const [inpId,setInpId] =useState('')


  const [inpCmpny,setInpCmpny] =useState('')
  const [inpPos,setInpPos] =useState('')
  const [inpESd,setInpESd] =useState('')
  const [inpEEd,setInpEEd] =useState('')
  const [inpELoc,setInpELoc] =useState('')
  const [inpEid,setInpEid] = useState('')
  const [inpDes,setInpDes] =useState('')

  const [reset, setReset] = useState([]);
  const returnID = (a) => {
    console.log("jelo");
    //ReRenderFunction(a.target.id, con);
    arrays.map(function (list) {
      console.log(list);
      if (list.id == a.target.id) {
        console.log("working");
        setInpSchl(list.school);
        setInpDeg(list.degree);
        setInpSd(list.e_sDate);
        setInpEd(list.e_eDate);
        setInpLoc(list.e_loc);
        setInpId(list.id)
      }
    });
  };

  const returnIDE = (a) => {
    console.log("jelo");
    //ReRenderFunction(a.target.id, con);
    exparrays.map(function (list) {
      console.log(list);
      if (list.id == a.target.id) {
        console.log("working");
        console.log(list)
        setInpCmpny(list.cmpnyName);
        setInpPos(list.position);
        setInpESd(list.sDate);
        setInpEEd(list.eDate);
        setInpELoc(list.loc);
        setInpDes(list.des)
        setInpEid(list.id);
      }
    });
  };
  
  return (
    <div className="divider">
      <div className="details">
        <Form
          head="Personal Details"
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          num={num}
          setNum={setNum}
          adrs={adrs}
          setAdrs={setAdrs}
        ></Form>
        <Experience
        exparrays ={exparrays}
        setexpArrays ={setexpArrays}
          head="Professional Experience"
          saveExperience={saveExperience}
          cmpnyName={cmpnyName}
          setCmpnyName={setCmpnyName}
          position={position}
          setPosition={setPosition}
          sDate={sDate}
          setSDate={setSDate}
          eDate={eDate}
          setEDate={setEDate}
          loc={loc}
          setLoc={setLoc}
          des={des}
          setDes={setDes}
          id={eid}
          setId={setEid}

          inpCmpny ={inpCmpny}
          setInpCmpny={setInpCmpny}
          inpPos ={inpPos}
          setInpPos ={setInpPos}
          inpEEd={inpEEd}
          setInpEEd={setInpEEd}
          inpESd = {inpESd}
          setInpESd={setInpESd}
          inpELoc={inpELoc}
          setInpELoc ={setInpELoc}
          inpId={inpEid}
          setInpId={setInpEid}
          inpDes={inpDes}
          setInpDe={setInpDes}
          

          
          
        ></Experience>
        <div>
          <Education
           // reset={reset}
           // setReset={setReset}
            arrays={arrays}
            setArrays={setArrays}
            //setInputField={setInputField}
            //inputField={inputField}
            inpSchl={inpSchl}
            setInpSchl ={setInpSchl}
            inpDeg ={inpDeg}
            setInpDeg ={setInpDeg}
            inpSd ={inpSd}
            setInpSd ={setInpSd}
            inpEd ={inpEd}
            setInpEd ={setInpEd}
            inpLoc={inpLoc}
            setInpLoc ={setInpLoc}
            inpId ={inpId}
            setInpId = {setInpId}
            degree={degree}
            e_eDate={e_eDate}
            e_sDate={e_sDate}
            e_loc={e_loc}
            head="Educational Qualification"
            id={id}
            setId = {setId}
            saveEducation={saveEducation}
            school={school}
            setSchool={setSchool}
            setDegree={setDegree}
            sete_SDate={sete_SDate}
            sete_EDate={sete_EDate}
            sete_Loc={sete_Loc}
          ></Education>
        </div>
      </div>
      <div className="fullResume">
        <Resume
          arrays={arrays}
          exparrays={exparrays}
          returnID={returnID}
          returnIDE ={returnIDE}
          id={id}
          fullName={fullName}
          email={email}
          num={num}
          adrs={adrs}
          cmpnyName={cmpnyName}
          position={position}
          sDate={sDate}
          eDate={eDate}
          loc={loc}
          des={des}
          school={school}
          degree={degree}
          e_eDate={e_eDate}
          e_sDate={e_sDate}
          e_loc={e_loc}
        ></Resume>
      </div>
    </div>
  );
}

export default Home;
