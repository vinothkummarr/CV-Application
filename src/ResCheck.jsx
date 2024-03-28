
function ResCheck(props){ 
    
    return(
        //<div>
        //    <h1>{props.edu_list.school}</h1>
        //</div>
        <div className="Education" key= {props.edu_list.id}>
        
        <div className="exp"> 
        <div className="dates">
        <p>{props.edu_list.e_sDate} - {props.edu_list.e_eDate}</p>
        <p id="loc">{props.edu_list.e_loc}</p>
        </div>
        <div id="company">
        <p id="cmpnyName">{props.edu_list.school}</p>
        <p>{props.edu_list.degree}</p>
        <hr />
        </div>
        <button onClick={props.returnID} key={props.edu_list.id} className="editBtn" id= {props.edu_list.id}>Edit</button>
        </div>
    </div>
    )
}
export default ResCheck