import "./about.css";
import Button from './../Button/Button';
function AboutComponent()
{
  return(
      <div className="container mt-5">
        
          <div className="row">
          <div className="col-4">
              <h2 className="mb-3">About Me</h2>
            <Button content={"Download Cv"} redirect={"https://www.google.com"} style={"btn btn-outline-danger btn-lg text-decoration-none"}/>
          </div>
          <div className="col-7">
              <p className="ln-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as 
              their default model text, and a search for 'lorem ipsum' will uncover
              many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose.
              </p>
          </div>
          </div>
      </div>
  )
}

export default AboutComponent;