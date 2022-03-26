import Card from "../PortifolioCard/Card";
function PortifolioComponent()
{
   return(
       <div className="container my-5">
           <h2 className="text-danger text-center my-5">Our Team</h2>
           <div className="row justify-content-center">
            <div className="col-3">
            <Card imageSrc={"images/team-2.jpg"} description={"Asmaa Elsharkawy"}/>
            </div>
            <div className="col-3">
            <Card imageSrc={"images/team-1.jpg"} description={"Mohamed Elsharkawy"}/>
            </div>
            <div className="col-3">
            <Card imageSrc={"images/team-3.jpg"} description={"Aly Elsharkawy"}/>
            </div>
           </div>
       </div>
   )
}

export default PortifolioComponent;

