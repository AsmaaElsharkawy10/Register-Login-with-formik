function ProgressComponent(props)
{
    return(
        <div className="progress  mb-3">
        <div className="progress-bar progress-bar-striped bg-danger"
         role="progressbar"
          style={{width :`${props.skillPercentage}%`}}
           aria-valuenow={props.skillPercentage}
            aria-valuemin="0" 
            aria-valuemax="100">{props.skillName}</div>
      </div>
      )
}

export default ProgressComponent;