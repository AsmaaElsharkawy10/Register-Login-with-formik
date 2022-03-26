function Footer()
{
  return(
    <footer id="footer" className="container-fluid mt-5 pt-5 text-light bg-danger">
            <div className="row g-0">
                <div className="col-12 col-md-3">
                    <h3 className="mx-3">Contact Us</h3>
                    <ul>
                        <li><i className="fas fa-mobile-alt"></i><span className="mx-2">Mobile : +01096688707</span></li>
                        <li><i className="far fa-envelope"></i><span className="mx-2">Email :iti.institute@gmail.com</span></li>
                        <li><i className="fas fa-phone"></i><span className="mx-2">Phone : +023860007</span></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 offset-md-1">
                    <h3 className="mx-3">Our Branches</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt text-light"></i><span className="mx-2">6 Octoper (main branch)</span></li>
                        <li><i className="fas fa-map-marker-alt text-light"></i><span className="mx-2">Mansoura</span></li>
                        <li><i className="fas fa-map-marker-alt text-light"></i><span className="mx-2">Minya</span></li>
                        <li><i className="fas fa-map-marker-alt text-light"></i><span className="mx-2">Alexandria</span></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 offset-md-1">
                    <h3 className="mx-3">Social Media</h3>
                    <ul>
                        <li><i className="fab fa-facebook text-light fa-1x"></i><span className="mx-2">Facebook</span></li>
                        <li><i className="fab fa-twitter text-light fa-1x"></i><span className="mx-2">Twitter</span></li>
                        <li><i className="fab fa-instagram text-light fa-1x"></i><span className="mx-2">Instagram</span></li>
                        <li><i className="fab fa-youtube text-light fa-1x"></i><span className="mx-2">Youtube</span></li>
                    </ul>
                </div>
            </div>
</footer>
  )
}

export default Footer;