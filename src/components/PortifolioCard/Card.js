function Card(props) {
 return(
    <div className="card border-0" style={{"width": "100%"}}>
    <div className="card-header-pills">
        <img src={props.imageSrc} alt="image" className="card-img-top"/>
    </div>
    <div className="card-body">
        <p className="card-text text-center">{props.description}</p>
      </div> 
</div>
 )       
   }

   export default Card;