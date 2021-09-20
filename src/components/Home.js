import CategoryList from "./Categorylist";
import Search from "./Search";
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="App">
      <div className="preloader">
        <div className="loader">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <img src="assets/img/logo/logo.svg" alt="Logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="page-scroll" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#services">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#how">How It Works</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#testimonial">Testimonials</a>
                      </li>
                    </ul>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                      <Link to="/signin-signup" className="whitespace-nowrap text-base font-medium text-gray hover:text-gray-900">
                        Sign in
                      </Link>
                      <a
                        href="#"
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink hover:bg-indigo-700"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>

                </nav>

              </div>
            </div>

          </div>

        </div>

      </header>


      <section id="home" className="hero-section">
        <div className="hero-shape">
          <img src="assets/img/hero/hero-shape.svg" alt="" className="shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Home Delivery <span>From Stores Near You</span> </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <a href="javascript:void(0)" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Download App</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/hero/hero-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="service-section pt-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-70">
                <span className="wow fadeInUp" data-wow-delay=".2s">Delivery Services</span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">All Essentials You Need</h1>
              </div>
            </div>
          </div>
          <CategoryList />
        </div>
      </section>


      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/about/about-img.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp" data-wow-delay=".2s">About Us</span>
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">On-time Delivery and Customer Satisfaction</h1>
                  <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                  <h5>Rating 4.8</h5>
                  <div className="rating">
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                  </div>
                </div>
                <div className="counter-up wow fadeInUp" data-wow-delay=".8s">
                  <div className="single-counter">
                    <h3 id="secondo1" className="countup" >1M</h3>
                    <h5>Download</h5>
                  </div>
                  <div className="single-counter position-relative">
                    <h3 id="secondo2" className="countup">234k </h3>
                    <h5>Happy User</h5>
                  </div>
                  <div className="single-counter">
                    <h3 id="secondo3" className="countup" >34k </h3>
                    <h5>Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="how" className="delivery-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="delivery-content">
                <div className="section-title">
                  <span className="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
                  <h1 className="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 30mins</h1>
                  <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore hdht dolore magna aliquyam erat, sed diam voluptua.</p>
                  <a href="javscript:void(0)" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".8s">Download App</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-first order-lg-last">
              <div className="delivery-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/delivery/delivery-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="received" className="about-section received-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img received-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/received/received-img.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content received-content">
                <div className="section-title">
                  <span className="wow fadeInUp" data-wow-delay=".2s">Contactless Delivery</span>
                  <h1 className="mb-25 wow fadeInUp" data-wow-delay=".4s">On-time Delivery to Your Doorstep</h1>
                  <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonial" className="testimonial-section img-bg pt-150 pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title mb-60 text-center">
                <span className="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">What Our Users Says</h1>
              </div>
            </div>
          </div>
          <div className="row testimonial-wrapper">
            <div className="col-lg-4 col-md-6 -mt-30">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Ena Shah</h5>
                    <p>Teacher at Abc School</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 -mt-60">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Mrs. Gosh</h5>
                    <p>Actor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>John Doe</h5>
                    <p>Model</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 -mt-30">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-4.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Jonathan Smith</h5>
                    <p>Creative Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 -mt-60">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-5.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Sara A. K.</h5>
                    <p>Heroine</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-6.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>David Smith</h5>
                    <p>Businessman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <footer id="footer" className="footer pt-100 pb-70">
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


      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>

    </div>
  );
}

export default Home