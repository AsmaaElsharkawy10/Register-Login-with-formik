import ProgressComponent from './../Progress/Progress';

function SkillsComponent()
{
//skillPercentage
  return(
      <div className="container-fluid my-5 bg-dark text-white py-5">
          <div className='skillsHeader text-center'>
          <h2>Skills</h2>
          <p>
                  It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              </p>
          </div>
         
          <div className="row mt-5 justify-content-center align-items-center">
              
              <div className="col-3">
                <h3>My Skills</h3>
                <hr className='w-50 bg-danger p-1'/>
                <ul className='list-unstyled'>
                <li>HTML</li>
                <li>CSs</li>
                <li>Javascript</li>
                <li>Angular</li>
                </ul>
              </div>
              <div className="col-7">
              <ProgressComponent skillName={"HTML"} skillPercentage={"95"}/>
              <ProgressComponent skillName={"CSS"} skillPercentage={"90"}/>
              <ProgressComponent skillName={"Javascript"} skillPercentage={"85"}/>
              <ProgressComponent skillName={"Sass"} skillPercentage={"70"}/>
              <ProgressComponent skillName={"Angula"} skillPercentage={"75"}/>
              <ProgressComponent skillName={"Bootstrap"} skillPercentage={"90"}/>
              </div>
          </div>
      </div>

  )
}

export default SkillsComponent;