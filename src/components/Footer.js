

const Footer = () => {
    return (
        <footer id="footer" className="footer pt-100 pb-70 mt-20 mb-0 bootom-0 ">
            <div className="footer-shape">
                <img src="assets/img/footer/footer-left.svg" alt="" className="shape shape-1" />
                <img src="assets/img/footer/footer-right.svg" alt="" className="shape shape-2" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                            <div className="logo">
                                <a href="#"><img src="assets/img/logo/logo-2.svg" alt="logo" /></a>
                            </div>
                            <div className="download-btns">
                                <a href="javascript:void(0)">
                                    <span className="icon"><i className="lni lni-apple"></i></span>
                                    <span className="text">Download on the <b>App Store</b> </span>
                                </a>
                                <a href="javascript:void(0)">
                                    <span className="icon"><i className="lni lni-play-store"></i></span>
                                    <span className="text">GET IT ON <b>Play Store</b> </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                            <h3>About Us</h3>
                            <ul className="links">
                                <li>
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Services</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">About Us</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".6s">
                            <h3>About</h3>
                            <ul className="links">
                                <li>
                                    <a href="javascript:void(0)">Partners</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Refund Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".8s">
                            <h3>Support</h3>
                            <ul className="links">
                                <li>
                                    <a href="javascript:void(0)">Open Ticket</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Community</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Return Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Accessibility</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer