import ResCheck from "./ResCheck";

import ExperienceRender from "./ExperienceRender";
function Resume(props){
 // console.log(props)
    return(
        <div className="resumeMaker">
            <div className="resume">
            <h1>{props.fullName}</h1>
            <div className="contacts">
                <h4>{props.email}</h4>
                <h4>{props.num}</h4>
                <h4>{props.adrs}</h4>
            </div>
            </div>
            <div className="resumePage">
            <div className="Education">
                <h1 id="head">Education</h1>
                <div className="exp"> 
                <div className="dates">
                <p>10/02/2002- 11/02/2003</p>
                <p id="loc">Tenkasi</p>
                </div>
                <div id="company">
                <p id="cmpnyName">Merit Matricularion Hr.Sec.School</p>
                <p>12th</p>
                <hr />
                </div>
                <button key={props.id} onClick={props.returnID} className="editBtn" id={props.id}>Edit</button>
                </div>
            </div>
            <div>
            {props.arrays.map(function(data){
              console.log(props.arrays)   
          return(
            <div>
              <ResCheck key={data.key} edu_list ={data} returnID ={props.returnID}></ResCheck>
            </div>
          )
        })}</div>

            <div className="Experience">
            <h1 id="head">Experience</h1>
                <div className="exp"> 
                <div className="dates">
                <p>12345- 67909</p>
                <p id="loc">Thala</p>
                </div>
                <div id="company">
                <p id="cmpnyName">Gogul</p>
                <p>Tableman</p>
                <p>kksndskjjksndsbbs</p>
                <hr />
                </div>
                </div>
            </div>
            <div>
            {props.exparrays.map(function(data){

          return(
            <div>
              <ExperienceRender exp_list ={data} returnIDE={props.returnIDE}></ExperienceRender>
            </div>
          )
        })}</div></div>

            
        </div>
    )
}
export default Resume;