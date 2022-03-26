import  Button  from "./../Button/Button";
import "./home.css"
function HomeComponent()
{
 return(
     
    <>
      <div className="Container-fluid d-flex align-items-center">
         <div className="col-md-5 text-center">
            <h1 className="text-white mb-3">Asmaa Elsharkawy</h1>
            <p className="text-white mb-5">I am MEARN stack Developer</p>
            <Button content="Learn More" style={"btn btn-outline-light btn-lg"}/>
         </div>
      </div>
      </>
 )
}

export default HomeComponent ;