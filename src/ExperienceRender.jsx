function ExperienceRender(props){
    return(
        <div className="Experience">
            
                <div className="exp"> 
                <div className="dates">
                <p>{props.exp_list.sDate} - {props.exp_list.eDate}</p>
                <p id="loc">{props.exp_list.loc}</p>
                </div>
                <div id="company">
                <p id="cmpnyName">{props.exp_list.cmpnyName}</p>
                <p>{props.exp_list.position}</p>
                <p>{props.exp_list.des}</p><hr />
                </div>
                <button onClick={props.returnIDE} key={props.exp_list.id} className="editBtn" id= {props.exp_list.id}>Edit</button>
                </div>
                
            </div>
    )
}
export default ExperienceRender;