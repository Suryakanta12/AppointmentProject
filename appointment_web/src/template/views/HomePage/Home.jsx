import React from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/vendors/bootstrap.min.css";
import "../../assets/css/vendors/datatables.min.css";
import "../../assets/fonts/fontawesome/css/all.min.css";
import "../../assets/fonts/icomoon/style.css";
import "../../assets/css/vendors/daterangepicker.css";
import "../../assets/css/vendors/magnific-popup.min.css";
import "../../assets/css/vendors/swiper-bundle.min.css";
import "../../assets/css/vendors/nice-select.css";
import "../../assets/css/vendors/nouislider.min.css";
import "../../assets/css/vendors/bs-stepper.min.css";
import "../../assets/css/vendors/pignose.calendar.min.css";
import "../../assets/css/vendors/aos.min.css";
import "../../assets/css/vendors/animate.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import WebFont from 'webfontloader';
// import BsStepper from 'bs-stepper'; // Import the stepper library

// WebFont.load({
//   google: {
//     families: ['Fira Sans:400,500,600,700', 'Poppins:400,500,600']
//   }
// });
export default function Home () {
//     const [selectedOption, setSelectedOption] = useState('Paypal');

//   const handleChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
    // const stepperRef = useRef(null); // Create a ref to store the stepper instance

    // useEffect(() => {
    //   const bookingStepper = new BsStepper(stepperRef.current); // Initialize bookingStepper
    //   // You can now use `bookingStepper` to navigate through steps
    // }, []); // Empty dependency array to run only once after the initial render
  return (
    <>
    <div className="theme-color-1">
   
    <div >
        <div className="loader"></div>
    </div>
   
    <header className="header-area header-1" data-aos="fade-down">
       
        <div className="mobile-menu">
            <div className="container">
                <div className="mobile-menu-wrapper"></div>
            </div>
        </div>
       

        <div className="main-responsive-nav">
            <div className="container">
               

                <div className="logo">
                    <Link to="index.html" target="_self" title="Superv">
                        <img src="assets/images/logo/logo-1.png" alt="Brand logo"/>
                    </Link>
                </div>


               
                <button className="menu-toggler" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

        <div className="main-navbar">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                
                    <Link className="navbar-brand" to="index.html" target="_self" title="Superv">
                        <img src="assets/images/logo/logo-1.png" alt="Brand Logo"/>
                    </Link>
                 
                    <div className="collapse navbar-collapse">
                        <ul id="mainMenu" className="navbar-nav mobile-item mx-auto">
                            <li className="nav-item">
                                <Link to="#home" className="nav-link toggle">Home <i className="fal fa-plus"></i></Link>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="index.html">Home Demo 1</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="index-2.html">Home Demo 2</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="index-3.html">Home Demo 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link toggle" to="#services">Services<i className="fal fa-plus"></i></Link>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="services.html">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="service-details.html">Service Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link toggle" to="#vendors">Vendors<i className="fal fa-plus"></i></Link>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="vendors.html">Vendors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="vendor-details.html">Vendor Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link toggle" to="#pages">Pages<i className="fal fa-plus"></i></Link>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link toggle" to="#" onClick={(e) => e.preventDefault()}>My Account<i className="fal fa-plus"></i></Link>
                                        <ul className="menu-dropdown">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="dashboard.html">Dashboard</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="order.html">Order List</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="order-details.html">Order Details</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="profile.html">Profile</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="login.html">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="signup.html">Signup</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="reset-password.html">Reset Password</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="forgot-password.html">Forgot Password</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="wishlist.html">Wishlist</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="checkout.html">Checkout</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link toggle" to="#blogs">Blog<i className="fal fa-plus"></i></Link>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="blogs.html">Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="blog-details.html">Blog Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="more-option mobile-item">
                        <div className="item">
                            {/* <div className="language">
                                <select className="niceselect">
                                    <option value="1">Eng</option>
                                    <option value="2">Chi</option>
                                    <option value="3">Fre</option>
                                </select>
                            </div> */}
                        </div>
                        <div className="item">
                            <Link to="login.html" className="btn btn-md btn-primary btn-gradient icon-start" title="Login" target="_self"><i className="fal fa-sign-in-alt"></i> Login</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    

    
    <section className="hero-banner hero-banner-1 parallax">
        <div className="container container-lg-fluid">
            <div className="row align-items-center gx-xl-5">
                <div className="col-lg-6">
                    <div className="fluid-left">
                        <div className="banner-content mb-40">
                            <h1 className="title mb-30" data-aos="fade-up" data-aos-delay="100"> Find Anything From Nearest Location To Make A Booking </h1>
                            <p className="text" data-aos="fade-up" data-aos-delay="100">Link Build is an advanced and modern-looking directory script with rich SEO features where you can create your.  </p>
                            <div className="banner-filter-form mt-40" data-aos="fade-up" data-aos-delay="150">
                                <div className="form-wrapper shadow-md bg-white p-20 radius-md">
                                    <form action="#">
                                        <div className="row align-items-center">
                                            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group">
                                                    <label htmlFor="location" className="text-gradient"><i className="fal fa-map-marker-alt"></i></label>
                                                    <input type="text" id="location" className="form-control" placeholder="Search Location" />
                                                    <div className="vr"></div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group">
                                                    <label htmlFor="search" className="text-gradient"><i className="fal fa-clipboard-list"></i></label>
                                                    <input type="text" id="search" className="form-control" placeholder="Search Services"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-2 col-md-4 col-sm-6">
                                                <button type="button" className="btn btn-lg btn-primary icon-start w-100">
                                                    <i className="fal fa-search"></i>
                                                    <span>Find Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="banner-image mb-40 parallax-img" data-speed="0.5" data-revert="true">
                        <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/banner/hero-banner-1.png" alt="Banner"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

   
    <section className="category-area category-1 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title title-center mb-50" data-aos="fade-up">
                        <h2 className="title mb-0">Most Popular Categories</h2>
                    </div>
                </div>
                <div className="col-12" data-aos="fade-up">
                    <div className="swiper category-slider" id="category-slider-1" data-slides-per-view="5" data-swiper-loop="false">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card p-25 border radius-md text-center">
                                    <div className="card-icon radius-md mx-auto mb-20">
                                        <i className="ico-surgery"></i>
                                    </div>
                                    <h4 className="card-title lc-1 mb-1">
                                        <Link to="services.html" target="_self" title="Doctor">
                                            Doctor
                                        </Link>
                                    </h4>
                                    <span className="font-sm">80+ Doctor Available</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-25 border radius-md text-center">
                                    <div className="card-icon radius-md mx-auto mb-20">
                                        <i className="ico-person"></i>
                                    </div>
                                    <h4 className="card-title lc-1 mb-1">
                                        <Link to="services.html" target="_self" title="Plumber">
                                            Plumber
                                        </Link>
                                    </h4>
                                    <span className="font-sm">99+ Plumber Available</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-25 border radius-md text-center">
                                    <div className="card-icon radius-md mx-auto mb-20">
                                        <i className="ico-gym"></i>
                                    </div>
                                    <h4 className="card-title lc-1 mb-1">
                                       <Link to="services.html" target="_self" title="Gym Center">
                                            Gym Center
                                        </Link>
                                    </h4>
                                    <span className="font-sm">34+ Gym Available</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-25 border radius-md text-center">
                                    <div className="card-icon radius-md mx-auto mb-20">
                                        <i className="ico-bucket"></i>
                                    </div>
                                    <h4 className="card-title lc-1 mb-1">
                                        <Link to="services.html" target="_self" title="Cleaning">
                                            Cleaning
                                        </Link>
                                    </h4>
                                    <span className="font-sm">98+ Cleaner Available</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-25 border radius-md text-center">
                                    <div className="card-icon radius-md mx-auto mb-20">
                                        <i className="ico-thunder"></i>
                                    </div>
                                    <h4 className="card-title lc-1 mb-1">
                                        <Link to="services.html" target="_self" title="Electrical">
                                            Electrical
                                        </Link>
                                    </h4>
                                    <span className="font-sm">67+ Electrician Available</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-25 border radius-md text-center">
                                    <div className="card-icon radius-md mx-auto mb-20">
                                        <i className="ico-barbershop"></i>
                                    </div>
                                    <h4 className="card-title lc-1 mb-1">
                                        <Link to="services.html" target="_self" title="Barber Shop">
                                            Barber Shop
                                        </Link>
                                    </h4>
                                    <span className="font-sm">32+ Barber Available</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination position-static mt-40" id="category-slider-1-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="works-area works-1 pt-100 pb-60 bg-img bg-cover" data-bg-image="assets/images/work-bg-1.png">
        <div className="container">
            <div className="row align-items-center gx-xl-5">
                <div className="col-lg-5">
                    <div className="content-title mb-40" data-aos="fade-up">
                        <h2 className="title mb-25 color-white">
                            How appointment Booking System Works
                        </h2>
                        <p className="color-white">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind.
                        </p>
                        <div className="mt-30">
                            <button className="btn btn-lg btn-primary btn-gradient icon-start" data-bs-toggle="modal" data-bs-target="#makeBooking" type="button" aria-label="Book Now">
                                <i className="fal fa-calendar-check"></i>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="swiper works-slider mb-40" id="works-slider-1" data-aos="fade-up">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card p-30 radius-lg">
                                    <div className="card-icon color-white">
                                        <i className="ico-location"></i>
                                    </div>
                                    <div className="line bg-white my-3 rounded-pill"></div>
                                    <h4 className="card-title color-white lc-1 mb-15">
                                        Set Location
                                    </h4>
                                    <p className="card-text color-light">
                                        Set your location for find
                                        service or shop for
                                        appointment booking.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-30 radius-lg">
                                    <div className="card-icon color-white">
                                        <i className="ico-search"></i>
                                    </div>
                                    <div className="line bg-white my-3 rounded-pill"></div>
                                    <h4 className="card-title color-white lc-1 mb-15">
                                        Find Services
                                    </h4>
                                    <p className="card-text color-light">
                                        Set your location for find
                                        service or shop for
                                        appointment booking.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card p-30 radius-lg">
                                    <div className="card-icon color-white">
                                        <i className="ico-booking"></i>
                                    </div>
                                    <div className="line bg-white my-3 rounded-pill"></div>
                                    <h4 className="card-title color-white lc-1 mb-15">
                                        Booking
                                    </h4>
                                    <p className="card-text color-light">
                                        Set your location for find
                                        service or shop for
                                        appointment booking.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination position-static mt-30" id="works-slider-1-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    
    <section className="service-area service-1 ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title title-inline mb-50" data-aos="fade-up">
                        <h2 className="title">Our Top Featured Services</h2>
                        
                        <div className="slider-navigation">
                            <button type="button" title="Slide prev" className="slider-btn" id="product-slider-1-prev">
                                <i className="fal fa-angle-left"></i>
                            </button>
                            <button type="button" title="Slide next" className="slider-btn" id="product-slider-1-next">
                                <i className="fal fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    
                    <div className="swiper product-slider" id="product-slider-1" data-slides-per-view="4" data-swiper-loop="true" data-aos="fade-up">
                       
                        <div className="swiper-wrapper">
                           
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">

                                    <figure className="product-img mb-15">
                                        <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-1.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    
                                    <div className="product-details">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="tag font-sm">Barber Shop</span>
                                            <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                <i className="fal fa-heart"></i>
                                            </Link>
                                        </div>
                                        <h6 className="product-title mb-0">
                                            <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                            <div className="product-price">
                                                <span className="h6 new-price">$350.00</span>
                                                <span className="prev-price font-sm">$400.00</span>
                                            </div>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-2.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="tag font-sm">Barber Shop</span>
                                            <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                <i className="fal fa-heart"></i>
                                            </Link>
                                        </div>
                                        <h6 className="product-title mb-0">
                                            <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                            <div className="product-price">
                                                <span className="h6 new-price">$350.00</span>
                                                <span className="prev-price font-sm">$400.00</span>
                                            </div>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-3.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="tag font-sm">Barber Shop</span>
                                            <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                <i className="fal fa-heart"></i>
                                            </Link>
                                        </div>
                                        <h6 className="product-title mb-0">
                                            <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                            <div className="product-price">
                                                <span className="h6 new-price">$350.00</span>
                                                <span className="prev-price font-sm">$400.00</span>
                                            </div>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-4.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="tag font-sm">Barber Shop</span>
                                            <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                <i className="fal fa-heart"></i>
                                            </Link>
                                        </div>
                                        <h6 className="product-title mb-0">
                                            <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                            <div className="product-price">
                                                <span className="h6 new-price">$350.00</span>
                                                <span className="prev-price font-sm">$400.00</span>
                                            </div>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-5.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="tag font-sm">Barber Shop</span>
                                            <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                <i className="fal fa-heart"></i>
                                            </Link>
                                        </div>
                                        <h6 className="product-title mb-0">
                                            <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                            <div className="product-price">
                                                <span className="h6 new-price">$350.00</span>
                                                <span className="prev-price font-sm">$400.00</span>
                                            </div>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="swiper-pagination position-static" id="product-slider-1-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="action-banner">
        <div className="container">
            <div className="wrapper radius-md pt-40 px-60 bg-img bg-cover" data-bg-image="assets/images/banner/action-banner-bg-1.png">
                <div className="row align-items-center gx-xl-5">
                    <div className="col-lg-6">
                        <div className="content-title mb-40" data-aos="fade-up">
                            <h2 className="title color-white mb-25">
                                Now Get 50% Discount For First Booking
                            </h2>
                            <p className="color-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
                                nam eos debitis, sequi cupiditate repudiandae accusamus provident expedita omnis rem
                                facere.</p>
                            <div className="mt-30">
                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-lg btn-primary btn-gradient icon-start" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self"><i className="fal fa-calendar-check"></i>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image mb-40" data-aos="fade-left">
                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/banner/action-banner-1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="service-area service-1 ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title title-center mb-50" data-aos="fade-up">
                        <h2 className="title mb-20">Most Popular Booking Services We Offer</h2>
                        <div className="tabs-navigation">
                            <ul className="nav nav-tabs flex-wrap" data-hover="fancyHover">
                                <li className="nav-item active">
                                    <button className="nav-link hover-effect active btn-md radius-sm" data-bs-toggle="tab" data-bs-target="#tab1" type="button">All Services</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link hover-effect btn-md radius-sm" data-bs-toggle="tab" data-bs-target="#tab2" type="button">Barber Shop</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link hover-effect btn-md radius-sm" data-bs-toggle="tab" data-bs-target="#tab3" type="button">Doctor</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link hover-effect btn-md radius-sm" data-bs-toggle="tab" data-bs-target="#tab4" type="button">Fitness Center</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link hover-effect btn-md radius-sm" data-bs-toggle="tab" data-bs-target="#tab4" type="button">Lawyer</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="tab-content" data-aos="fade-up">
                        <div className="tab-pane slide show active" id="tab1">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-5.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-6.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-7.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-8.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-9.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-10.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-11.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-12.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cta-btn text-center mt-15">
                                <Link to="services.html" className="btn btn-lg btn-primary btn-gradient icon-start" title="View More" target="_self"><i className="fal fa-arrow-right"></i>View More</Link>
                            </div>
                        </div>
                        <div className="tab-pane slide" id="tab2">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-5.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-6.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-7.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-8.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-9.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-10.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-11.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-12.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cta-btn text-center mt-15">
                                <Link to="services.html" className="btn btn-lg btn-primary btn-gradient icon-start" title="View More" target="_self"><i className="fal fa-arrow-right"></i>View More</Link>
                            </div>
                        </div>
                        <div className="tab-pane slide" id="tab3">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-5.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-6.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-7.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-8.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-9.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-10.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-11.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-12.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cta-btn text-center mt-15">
                                <Link to="services.html" className="btn btn-lg btn-primary btn-gradient icon-start" title="View More" target="_self"><i className="fal fa-arrow-right"></i>View More</Link>
                            </div>
                        </div>
                        <div className="tab-pane slide" id="tab4">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-5.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-6.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-7.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-8.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-9.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-10.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-11.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up">
                                    <div className="product-default border radius-md p-15 mb-25">
                                        <figure className="product-img mb-15">
                                            <Link to="service-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/services/service-12.png" alt="Product"/>
                                            </Link>
                                        </figure>
                                        <div className="product-details">
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <span className="tag font-sm">Barber Shop</span>
                                                <Link to="wishlist.html" className="btn btn-icon border radius-sm" title="Save to Wishlist">
                                                    <i className="fal fa-heart"></i>
                                                </Link>
                                            </div>
                                            <h6 className="product-title mb-0">
                                                <Link to="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                            </h6>
                                            <div className="author mb-10 mt-10">
                                                <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt=""/>
                                                <span className="font-sm">
                                                    By <Link to="#" onClick={(e) => e.preventDefault()} target="_self" title="John Doe">John
                                                        Doe</Link>
                                                </span>
                                            </div>
                                            <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                                tower, Road : 1285, Usa</span>
                                            <div className="d-flex align-items-center justify-content-between gap-2 mt-10">
                                                <div className="product-price">
                                                    <span className="h6 new-price">$350.00</span>
                                                    <span className="prev-price font-sm">$400.00</span>
                                                </div>
                                                <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cta-btn text-center mt-15">
                                <Link to="services.html" className="btn btn-lg btn-primary btn-gradient icon-start" title="View More" target="_self"><i className="fal fa-arrow-right"></i>View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

   
    <section className="shop-area shop-1 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title title-inline mb-50" data-aos="fade-up">
                        <h2 className="title">Our Top Featured Shop</h2>
                        <Link to="vendors.html" className="btn btn-lg btn-primary btn-gradient icon-start" title="View All Shop" target="_self"><i className="fal fa-arrow-right"></i>View All Shop</Link>
                    </div>
                </div>
                <div className="col-12">
                    
                    <div className="swiper product-slider" id="product-slider-2" data-slides-per-view="4" data-swiper-loop="true" data-aos="fade-up">
                        
                        <div className="swiper-wrapper">
                           
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="vendor-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/vendor/shop-1.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <h6 className="product-title mb-0">
                                            <Link to="vendor-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="vendor-details.html" target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center gap-15 mt-10">
                                            <Link to="vendor-details.html" className="btn btn-sm btn-outline-2" title="Visit Store" target="_self">Visit Store</Link>
                                            <span className="font-sm">10+ Service Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="vendor-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/vendor/shop-2.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <h6 className="product-title mb-0">
                                            <Link to="vendor-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="vendor-details.html" target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center gap-15 mt-10">
                                            <Link to="vendor-details.html" className="btn btn-sm btn-outline-2" title="Visit Store" target="_self">Visit Store</Link>
                                            <span className="font-sm">10+ Service Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="vendor-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/vendor/shop-3.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <h6 className="product-title mb-0">
                                            <Link to="vendor-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="vendor-details.html" target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center gap-15 mt-10">
                                            <Link to="vendor-details.html" className="btn btn-sm btn-outline-2" title="Visit Store" target="_self">Visit Store</Link>
                                            <span className="font-sm">10+ Service Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="vendor-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/vendor/shop-4.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <h6 className="product-title mb-0">
                                            <Link to="vendor-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="vendor-details.html" target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center gap-15 mt-10">
                                            <Link to="vendor-details.html" className="btn btn-sm btn-outline-2" title="Visit Store" target="_self">Visit Store</Link>
                                            <span className="font-sm">10+ Service Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-default border radius-md p-15 mb-25">
                                    <figure className="product-img mb-15">
                                        <Link to="vendor-details.html" title="Image" target="_self" className="lazy-container radius-sm ratio ratio-2-3">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/vendor/shop-5.png" alt="Product"/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <h6 className="product-title mb-0">
                                            <Link to="vendor-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</Link>
                                        </h6>
                                        <div className="author mb-10 mt-10">
                                            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt=""/>
                                            <span className="font-sm">
                                                By <Link to="vendor-details.html" target="_self" title="John Doe">John
                                                    Doe</Link>
                                            </span>
                                        </div>
                                        <span className="font-sm icon-start"><i className="fal fa-map-marker-alt"></i>City
                                            tower, Road : 1285, Usa</span>
                                        <div className="d-flex align-items-center gap-15 mt-10">
                                            <Link to="vendor-details.html" className="btn btn-sm btn-outline-2" title="Visit Store" target="_self">Visit Store</Link>
                                            <span className="font-sm">10+ Service Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="swiper-pagination position-static" id="product-slider-2-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    
    <section className="testimonial-area testimonial-1 parallax pb-60">
        <div className="container container-lg-fluid">
            <div className="row align-items-center gx-xl-5">
                <div className="col-lg-6">
                    <div className="fluid-left">
                        <div className="content-title mb-40" data-aos="fade-up">
                            <h2 className="title mb-20">
                                What Customers Say About Our Booking Systems
                            </h2>
                            <div className="content-text mb-40">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis natus cumque
                                    possimus dicta suscipit enim, aperiam, voluptatum quis deleniti.
                                </p>
                            </div>
                        </div>
                        <div className="swiper mb-40" id="testimonial-slider-1" data-aos="fade-up">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="slider-item radius-md">
                                        <div className="client gap-20 flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container rounded-pill ratio ratio-1-1">
                                                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt="Person"/>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name mb-0">Hames Rodrigo</h6>
                                                    <span className="designation font-sm">UI/UX Designer</span>
                                                </div>
                                            </div>
                                            <div className="ratings size-md flex-column align-items-start">
                                                <div className="rate">
                                                    <div className="rating-icon"></div>
                                                </div>
                                                <div className="ratings-total mt-2">5 star of 20 review</div>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <span className="icon"><i className="fal fa-quote-right"></i></span>
                                            <p className="text font-lg mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                                exercitationem quibusdam ipsa in illum vel deleniti aliquid dicta
                                                voluptates accusamus esse? Suscipit quasi nihil, similique.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slider-item radius-md">
                                        <div className="client gap-20 flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container rounded-pill ratio ratio-1-1">
                                                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt="Person"/>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name mb-0">Hames Rodrigo</h6>
                                                    <span className="designation font-sm">UI/UX Designer</span>
                                                </div>
                                            </div>
                                            <div className="ratings size-md flex-column align-items-start">
                                                <div className="rate">
                                                    <div className="rating-icon"></div>
                                                </div>
                                                <div className="ratings-total mt-2">5 star of 20 review</div>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <span className="icon"><i className="fal fa-quote-right"></i></span>
                                            <p className="text font-lg mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                                exercitationem quibusdam ipsa in illum vel deleniti aliquid dicta
                                                voluptates accusamus esse? Suscipit quasi nihil, similique.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slider-item radius-md">
                                        <div className="client gap-20 flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container rounded-pill ratio ratio-1-1">
                                                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt="Person"/>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name mb-0">Hames Rodrigo</h6>
                                                    <span className="designation font-sm">UI/UX Designer</span>
                                                </div>
                                            </div>
                                            <div className="ratings size-md flex-column align-items-start">
                                                <div className="rate">
                                                    <div className="rating-icon"></div>
                                                </div>
                                                <div className="ratings-total mt-2">5 star of 20 review</div>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <span className="icon"><i className="fal fa-quote-right"></i></span>
                                            <p className="text font-lg mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                                exercitationem quibusdam ipsa in illum vel deleniti aliquid dicta
                                                voluptates accusamus esse? Suscipit quasi nihil, similique.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination position-static mt-30" id="testimonial-slider-1-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="image mb-40 parallax-img" data-speed="0.5" data-revert="true">
                        <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/testimonial-img-1.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <footer className="footer-area mt-30 bg-primary-light">
        <div className="go-top"><i className="fal fa-long-arrow-up"></i></div>
        <div className="footer-top pt-100 pb-70 text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5" data-aos="fade-up">
                        <div className="navbar-brand mt-10">
                            <span></span>
                            <Link to="index.html" target="_self" title="Link">
                                <img src="assets/images/logo/logo-1.png" alt="Brand Logo"/>
                            </Link>
                            <span></span>
                        </div>
                        <ul className="info-list mt-20">
                            <li>
                                <Link to="mailto:live@example.com">live@example.com</Link>
                            </li>
                            <li>
                                <Link to="tel:9992233555">+999 22 33 5555</Link>
                            </li>
                        </ul>
                        <div className="social-link mt-20">
                            <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="instagram"><i className="fab fa-instagram"></i></Link>
                            <Link to="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer" title="dribbble"><i className="fab fa-dribbble"></i></Link>
                            <Link to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" title="twitter"><i className="fab fa-twitter"></i></Link>
                            <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" title="youtube"><i className="fab fa-youtube"></i></Link>
                        </div>
                        <div className="newsletter-form mx-auto mt-30">
                            <form id="newsletterForm">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Enter email here..." type="text" name="EMAIL" required="" autoComplete="off"/>
                                    <button className="btn btn-md btn-primary btn-gradient no-animation" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <ul className="footer-links list-unstyled mt-30">
                            <li className="nav-item">
                                <Link to="index.html" className="nav-link" target="_self" title="link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about-us.html" className="nav-link" target="_self" title="link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services.html" className="nav-link" target="_self" title="link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="vendors.html" className="nav-link" target="_self" title="link">Shops</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact.html" className="nav-link" target="_self" title="link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right-area border-top ptb-30">
            <div className="container">
                <div className="copy-right-content">
                    <span>
                        Copyright <i className="fal fa-copyright"></i><span id="footerDate"></span> <Link to="index.html" target="_self" title="Bookapp" className="color-primary">Bookapp</Link>. All Rights Reserved
                    </span>
                </div>
            </div>
        </div>
    </footer>
    

    
    <div className="modal booking-modal fade" id="makeBooking" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-md-down">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fal fa-times"></i></button>
                <div className="modal-body">
                    <div className="bs-stepper" id="booking-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            
                            <div className="step" data-target="#staff">
                                <button type="button" className="step-trigger" role="tab" aria-controls="staff" id="staff-trigger">
                                    <span className="h3 mb-1">01</span>
                                    <span className="bs-stepper-circle"><i className="fal fa-user-circle"></i></span>
                                    <span className="bs-stepper-label">Staff</span>
                                </button>
                            </div>
                            <div className="step" data-target="#time">
                                <button type="button" className="step-trigger" role="tab" aria-controls="time" id="time-trigger">
                                    <span className="h3 mb-1">02</span>
                                    <span className="bs-stepper-circle"><i className="fal fa-clock"></i></span>
                                    <span className="bs-stepper-label">Time</span>
                                </button>
                            </div>
                            <div className="step" data-target="#info">
                                <button type="button" className="step-trigger" role="tab" aria-controls="info" id="info-trigger">
                                    <span className="h3 mb-1">03</span>
                                    <span className="bs-stepper-circle"><i className="fal fa-clipboard-list-check"></i></span>
                                    <span className="bs-stepper-label">Information</span>
                                </button>
                            </div>
                            <div className="step" data-target="#payment">
                                <button type="button" className="step-trigger" role="tab" aria-controls="payment" id="payment-trigger">
                                    <span className="h3 mb-1">04</span>
                                    <span className="bs-stepper-circle"><i className="fal fa-credit-card"></i></span>
                                    <span className="bs-stepper-label">Payment</span>
                                </button>
                            </div>
                            <div className="step" data-target="#confirm">
                                <button type="button" className="step-trigger" role="tab" aria-controls="confirm" id="confirm-trigger">
                                    <span className="h3 mb-1">05</span>
                                    <span className="bs-stepper-circle"><i className="fal fa-check-circle"></i></span>
                                    <span className="bs-stepper-label">Confirmation</span>
                                </button>
                            </div>
                        </div>
                        <div className="bs-stepper-content">
                            <div className="container">
                                <div id="staff" className="bs-stepper-pane fade" role="tabpanel" aria-labelledby="staff-trigger">
                                    
                                    <div className="staff-area pt-4">
                                        <div className="section-title title-center mb-40">
                                            <h3 className="title mb-20">Find Or Choose Your Staff</h3>
                                            <div className="search-inline-form w-75 w-sm-100 mx-auto">
                                                <form action="#">
                                                    <div className="input-inline">
                                                        <input type="search" className="form-control" placeholder="Enter staff name..."/>
                                                        <button className="btn btn-lg btn-primary btn-gradient no-animation icon-start" type="button" aria-label="Find Now">
                                                            <i className="far fa-search"></i>
                                                            Find Now
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <div className="swiper staff-slider">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="card radius-md">
                                                        <figure className="card-img">
                                                            <Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Image" className="lazy-container ratio ratio-2-3">
                                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/staff/staff-1.jpg" alt="Staff"/>
                                                            </Link>
                                                        </figure>
                                                        <div className="card-details text-center p-20">
                                                            <h5 className="card-title mb-0"><Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Staff Name">Oliver Butler</Link></h5>
                                                            <span className="card-category font-sm">user0123@gmail.com</span>
                                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary mt-10" title="Select Staff" target="_self">Select Staff</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card radius-md">
                                                        <figure className="card-img">
                                                            <Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Image" className="lazy-container ratio ratio-2-3">
                                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/staff/staff-2.jpg" alt="Staff"/>
                                                            </Link>
                                                        </figure>
                                                        <div className="card-details text-center p-20">
                                                            <h5 className="card-title mb-0"><Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Staff Name">Oliver Butler</Link></h5>
                                                            <span className="card-category font-sm">user0123@gmail.com</span>
                                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary mt-10" title="Select Staff" target="_self">Select Staff</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card radius-md">
                                                        <figure className="card-img">
                                                            <Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Image" className="lazy-container ratio ratio-2-3">
                                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/staff/staff-4.jpg" alt="Staff"/>
                                                            </Link>
                                                        </figure>
                                                        <div className="card-details text-center p-20">
                                                            <h5 className="card-title mb-0"><Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Staff Name">Oliver Butler</Link></h5>
                                                            <span className="card-category font-sm">user0123@gmail.com</span>
                                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary mt-10" title="Select Staff" target="_self">Select Staff</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card radius-md">
                                                        <figure className="card-img">
                                                            <Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Image" className="lazy-container ratio ratio-2-3">
                                                                <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/staff/staff-3.jpg" alt="Staff"/>
                                                            </Link>
                                                        </figure>
                                                        <div className="card-details text-center p-20">
                                                            <h5 className="card-title mb-0"><Link to="#" onClick={(e) => e.preventDefault()} onClick={() => bookingStepper.next()} target="_self" title="Staff Name">Oliver Butler</Link></h5>
                                                            <span className="card-category font-sm">user0123@gmail.com</span>
                                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary mt-10" title="Select Staff" target="_self">Select Staff</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination position-static mt-10" id="staff-slider-pagination"></div>
                                        </div> */}
                                        {/* <div className="text-center mt-10">
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-end" onClick={() => bookingStepper.next()} target="_self" title="Next Step">Next Step <i className="fal fa-long-arrow-right"></i></Link>
                                        </div> */}
                                    </div>
                                    
                                </div>
                                <div id="time" className="bs-stepper-pane fade" role="tabpanel" aria-labelledby="time-trigger">
                                    <div className="calender-area pt-4">
                                        <div className="section-title title-center mb-40">
                                            <h3 className="title">Set Your Available Time</h3>
                                        </div>
                                        <div className="booking-calendar mb-30"></div>
                                        <div className="booking-time">
                                            <h6 className="text-center mb-20">Our Available Schedule For You</h6>
                                            <div className="swiper booking-time-slider">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide item border radius-sm">
                                                        <i className="fal fa-clock"></i>
                                                        <div className="time d-flex flex-column gap-1">
                                                            <span>10.00 am</span>
                                                            <span>12.00 pm</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar position-static mt-10"></div>
                                            </div>
                                        </div>
                                        {/* <div className="btn-groups justify-content-center w-100 mt-20">
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-start" onClick="bookingStepper.previous()" target="_self" title="Next Step"><i className="fal fa-long-arrow-left"></i>Prev Step</Link>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-end" onClick={() => bookingStepper.next()} target="_self" title="Next Step">Next Step <i className="fal fa-long-arrow-right"></i></Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div id="info" className="bs-stepper-pane fade" role="tabpanel" aria-labelledby="staff-trigger">
                                    
                                    <div className="authentication-area pt-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="auth-form mt-3">
                                                    <form>
                                                        <div className="title mb-40">
                                                            <span className="h3 mb-0">Sign In</span>
                                                        </div>
                                                        <div className="form-group mb-20">
                                                            <label htmlFor="userName" className="form-label color-dark">Email/Username<span className="color-red">*</span></label>
                                                            <input type="text" name="user_name" id="userName" className="form-control" placeholder="Username" required/>
                                                        </div>
                                                        <div className="form-group mb-20">
                                                            <label htmlFor="password" className="form-label color-dark">Password<span className="color-red">*</span></label>
                                                            <div className="position-relative">
                                                                <input type="password" name="password" id="password" className="form-control" placeholder="Enter password" required/>
                                                                <div data-toggle="#password" className="show-password-field">
                                                                    <i className="show-icon"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-lg btn-primary btn-gradient" title="Sign In" target="_self">Sign In</Link>
                                                        <div className="link mt-20">
                                                            Don't have an account? <Link to="signup.html">Click Here</Link> to Signup
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* <div className="btn-groups mt-30">
                                                    <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-start" onClick="bookingStepper.previous()" target="_self" title="Next Step"><i className="fal fa-long-arrow-left"></i>Prev Step</Link>
                                                    <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-end" onClick={() => bookingStepper.next()} target="_self" title="Next Step">Next Step <i className="fal fa-long-arrow-right"></i></Link>
                                                </div> */}
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="auth-form mt-3">
                                                    <form>
                                                        <div className="title mb-40">
                                                            <span className="h3 mb-0">Create Account</span>
                                                        </div>
                                                        <div className="row gx-3">
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-20">
                                                                    <label htmlFor="firstName" className="form-label color-dark">First Name<span className="color-red">*</span></label>
                                                                    <input type="text" name="first_name" id="firstName" className="form-control" placeholder="Enter first name" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-20">
                                                                    <label htmlFor="lastName" className="form-label color-dark">Last Name</label>
                                                                    <input type="text" name="last_name" id="lastName" className="form-control" placeholder="Enter last name" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group mb-20">
                                                                    <label htmlFor="email" className="form-label color-dark">Email Address<span className="color-red">*</span></label>
                                                                    <input type="email" name="email" id="email" className="form-control" placeholder="Your email address" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group mb-20">
                                                                    <label htmlFor="password2" className="form-label color-dark">Password<span className="color-red">*</span></label>
                                                                    <div className="position-relative">
                                                                        <input type="password" name="password" id="password2" className="form-control" placeholder="Enter password" required/>
                                                                        <div data-toggle="#password" className="show-password-field">
                                                                            <i className="show-icon"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="custom-checkbox mb-20">
                                                                    <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox5" value=""/>
                                                                    <label className="form-check-label" htmlFor="checkbox5">I agree with Terms & Conditions <span className="color-red">*</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={(e) => e.preventDefault()} className="btn btn-lg btn-primary btn-gradient" title="Create Account" target="_self">Create Account</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div id="payment" className="bs-stepper-pane fade" role="tabpanel">
                                    <div className="payment-area pt-4">
                                        <div className="section-title title-center mb-40">
                                            <h3 className="title col-lg-8">Choose Your Perfect Payment method For Booking</h3>
                                        </div>
                                        <div className="payment-form w-50 w-sm-100 mx-auto">
                                            <form>
                                                {/* <div className="form-group">
                                                    <select  value={selectedOption} onChange={handleChange} id="payment-gateway" className="form-control form-select">
                                                        <option value="Paypal" selected="">Paypal</option>
                                                        <option value="Flutterwave">Flutterwave</option>
                                                        <option value="Razorpay">Razorpay</option>
                                                        <option value="Paytm">Paytm</option>
                                                        <option value="Paystack">Paystack</option>
                                                        <option value="Flutterwave">Flutterwave</option>
                                                        <option value="Razorpay">Razorpay</option>
                                                        <option value="Paytm">Paytm</option>
                                                        <option value="Paystack">Paystack</option>
                                                    </select>
                                                </div> */}
                                            </form>
                                        </div>
                                        {/* <div className="btn-groups justify-content-center w-100 mt-20">
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-start" onClick="bookingStepper.previous()" target="_self" title="Next Step"><i className="fal fa-long-arrow-left"></i>Prev Step</Link>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-end" onClick={() => bookingStepper.next()} target="_self" title="Next Step">Next Step <i className="fal fa-long-arrow-right"></i></Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div id="confirm" className="bs-stepper-pane fade" role="tabpanel" aria-labelledby="confirm-trigger">
                                    <div className="confirm-area pt-4">
                                        <div className="section-title title-center mb-40">
                                            <h3 className="title col-lg-8">congratulations Your Booking Completed</h3>
                                        </div>
                                        <div className="image text-center">
                                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/book-success.png" alt=""/>
                                        </div>
                                        {/* <div className="btn-groups justify-content-center w-100 mt-20">
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary icon-start" onClick="bookingStepper.previous()" target="_self" title="Next Step"><i className="fal fa-long-arrow-left"></i>Prev Step</Link>
                                            <Link to="#" onClick={(e) => e.preventDefault()} className="btn-text color-primary" title="Back to Home" target="_self" data-bs-dismiss="modal" aria-label="Close">Back to Home</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../assets/js/vendors/jquery.min.js"></script>
   
   <script src="../../assets/js/vendors/bootstrap.min.js"></script>
  
   <script src="../../assets/js/vendors/datatables.min.js"></script>
  
   <script src="../../assets/js/vendors/moment.min.js"></script>
   <script src="../../assets/js/vendors/daterangepicker.js"></script>

   <script src="../../assets/js/vendors/jquery.nice-select.min.js"></script>
   
   <script src="../../assets/js/vendors/jquery.magnific-popup.min.js"></script>
 
   <script src="../../assets/js/vendors/pignose.calendar.full.min.js"></script>
  
   <script src="../../assets/js/vendors/swiper-bundle.min.js"></script>
  
   <script src="../../assets/js/vendors/lazysizes.min.js"></script>
   
   <script src="../../assets/js/vendors/nouislider.min.js"></script>
   
   <script src="../../assets/js/vendors/tweenMax.min.js"></script>

   <script src="../../assets/js/vendors/parallax.min.js"></script>
  
   <script src="../../assets/js/vendors/aos.min.js"></script>
   
   <script src="../../assets/js/vendors/mouse-hover-move.js"></script>
  
   <script src="../../assets/js/vendors/bs-stepper.min.js"></script>
   
   <script src="../../assets/js/script.js"></script>
</div>
</>
  );
};

