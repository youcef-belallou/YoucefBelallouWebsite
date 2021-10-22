import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import frontphoto from './assets/front-photo.jpg';
import logo from './assets/logo.jpg';
import gradutionphoto from './assets/gradution_photo.jpg';
import './App.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PoolIcon from '@mui/icons-material/Pool';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Home() {
    return (
        <div>

            <head>
                <title> YOUCEF BELALLOU</title>
                <link rel="stylesheet" href="style.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <section id="user-info">
                <div className="nav-bar">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#"> <img src={logo}/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#top">HOME </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#about">ABOUT ME </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#Skills and Qualifications">SKILLS &
                                        QUALIFICATIONS </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#experiance&achievment">EXPERIANCES &
                                        ACHIEVMENTS </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#contact">CONTACT </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <section id="header">
                <div class="container text-center">
                    <div class="user-box"><img src={frontphoto}/></div>
                    <div class="space1">
                        <h3>YOUCEF BELALLOU</h3>
                        <div class="space1">
                            <h4>Computer Engineering / Electrical & Electronic Engineering</h4>
                            <h5>Frontend developer: JavaScript, ReactJS</h5>
                            <h5>Backend developer: JAVA, SpringBoot, Database, API</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about container" id="about">
                <div class="row">
                    <div class="col-md-4 user-box1"><img src={gradutionphoto} class="profile-img"/></div>
                    <div class="col-md-8">
                        <div class="space2"/>
                        <h3>YOUCEF BELALLOU </h3>
                        <p> Highly motivated Computer, Electrical and Electronics Engineering.
                            pursuing an opening in programming (Frontend & Backend developer), I have experiance on
                            Backend,
                            worked on creating API services. Moreover, having experiance on Frontend, working as web
                            developer.
                            Interested in working as Frontend developer. Furthermore, I have electronics skills, light
                            experience in circuit design
                            and simulation.
                        </p>
                        <ol>
                            <p><i class="fa fa-graduation-cap"></i> Best senior project in the university (Antalya Bilim
                                university)</p>
                            <p><i class="fa fa-graduation-cap"></i> Having certificate of honor</p>
                            <p><i class="fa fa-graduation-cap"></i> GPA of 3.55/4</p>
                            <p><i class="fa fa-graduation-cap"></i> 4th top student in the department (EEE)</p>
                        </ol>
                    </div>
                </div>
            </section>
            <section class="skills " id="Skills and Qualifications">
                <div class="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div class="space2"/>
                            <h3><i class="fa fa-language"></i> LANGUAGES</h3>
                            <div class="space2"/>
                            <div class="skills-bar">
                                <p>Tamazight (native)</p>
                                <div className="progressBar">
                                    <ProgressBar now={100} label={`${100}%`}/>
                                </div>
                                <p>Arabic</p>
                                <div className="progressBar">
                                    <ProgressBar now={100} label={`${100}%`}/>
                                </div>
                                <p>English</p>
                                <div className="progressBar">
                                    <ProgressBar now={90} label={`${90}%`}/>
                                </div>
                                <p>French</p>
                                <div className="progressBar">
                                    <ProgressBar now={80} label={`${80}%`}/>
                                </div>
                                <p>Turkish</p>
                                <div className="progressBar">
                                    <ProgressBar now={80} label={`${80}%`}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div class="space2"/>
                            <h3><i class="fa fa-laptop"></i> COMPUTER SKILLS</h3>
                            <div class="space2"/>
                            <div>JavaScript</div>
                            <div>ReactJS</div>
                            <div> SpringBoot</div>
                            <div>JAVA</div>
                            <div>C</div>
                            <div>MATLAB</div>
                            <div>NI Multisim</div>
                            <div>Android studio</div>
                            <div>proteus 8 (Assembly)</div>
                            <div>AutoCAD</div>
                            <div>Microsoft office</div>

                            <div class="space2"/>
                            <h3>Hobbies</h3>
                            <div class="space2"/>
                            <div><SportsSoccerIcon/> Football</div>
                            <div><PoolIcon/> Swimming</div>
                            <div><MenuBookIcon/> Reading books</div>
                            <div><FlightTakeoffIcon/> Travelling</div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="resume" id="experiance&achievment">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="text-center">MY EXPERIANCES </h3>
                            <ul class="timeline">
                                <li>
                                    <h4>Frontend Developer (Hotech)</h4>
                                    <p><a href='https://hotech.systems'>https://hotech.systems</a><br/>
                                        <b><LocationCityIcon/></b> Hotech<br/>
                                        <b><AccessTimeIcon/></b> 01/2021 - Present<br/>
                                        <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                    </p>
                                </li>
                                <li>
                                    <h4>Backend Developer (Hotech)</h4>
                                    <p><a href='https://hotech.system' s>https://hotech.systems</a><br/>
                                        <b><LocationCityIcon/></b> Hotech<br/>
                                        <b><AccessTimeIcon/></b> 01/2020 - Present<br/>
                                        <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                    </p>
                                </li>
                                <li>
                                    <h4>Concierge (Vogue Hotel)</h4>
                                    <p> Renting Cars,Yakhts,Helicopters... <br/>
                                        <b><LocationCityIcon/></b> BQluxury<br/>
                                        <b><AccessTimeIcon/></b> 06/2019 - 09/2019<br/>
                                        <b><LocationOnIcon/></b> Bodrum - Turkey<br/>
                                    </p>
                                </li>
                                <li>
                                    <h4>Internship (Panelsan)</h4>
                                    <p><a href='http://www.07panelsan.com'>http://www.07panelsan.com</a><br/>
                                        <b><LocationCityIcon/></b> 07panelsan<br/>
                                        <b><AccessTimeIcon/></b> 06/2018 - 07/2018<br/>
                                        <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                    </p>
                                </li>
                                <li>
                                    <h4> Guest relation (Kingdom Hotel)</h4>
                                    <p>
                                        <a href='https://thelandoflegendsthemepark.com'>https://thelandoflegendsthemepark.com</a><br/>
                                        <b><LocationCityIcon/></b> Kingdom Hotel (The land of legends)<br/>
                                        <b><AccessTimeIcon/></b> 06/2017 - 10-2017<br/>
                                        <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                    </p>
                                </li>
                                <li>
                                    <h4> Research student, Tubitak- Efficiency challenge – Electrical Vehicle</h4>
                                    <p><a href='https://www.imecar.com'>https://www.imecar.com</a><br/>
                                        <b><LocationCityIcon/></b> Imecar<br/>
                                        <b><AccessTimeIcon/></b> 06/2016 - 08/2016<br/>
                                        <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                    </p>
                                </li>
                                <li>
                                    <h4>Orienting And Teaching</h4>
                                    <p> Teaching the basic of programming and Robotics for Algerian students.<br/>
                                        <b><LocationCityIcon/></b> Hezarfen for science and culture<br/>
                                        <b><AccessTimeIcon/></b> 07/2015 - 08/2015<br/>
                                        <b><LocationOnIcon/></b> Istanbul - Turkey<br/>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h3 class="text-center">MY ACHIEVMENTS</h3>
                            <ul class="timeline">
                                <li>
                                    <h4>Web Designer</h4>
                                    <b>WebSites:</b><br/>
                                    <b><i class="fa fa-circle" aria-hidden="true"></i><a
                                        href='https://hotech.systems'> https://hotech.systems</a>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing the landing page of Hotech
                                        </ul>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing the mobile version of Hotech pages
                                        </ul>
                                        <ul>
                                            <ArrowRightAltIcon/> Add French and Arabic pages
                                        </ul>
                                    </b><br/>
                                    <b><i class="fa fa-circle" aria-hidden="true"></i><a
                                        href='https://amonra.com.tr'> https://amonra.com.tr</a>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing the landing page of Amonra
                                        </ul>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing the mobile version of Amonra pages
                                        </ul>
                                        <ul>
                                            <ArrowRightAltIcon/> Add French and Arabic pages
                                        </ul>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing German page of Amonra page
                                        </ul>
                                    </b><br/>
                                    <b><i class="fa fa-circle" aria-hidden="true"></i><a
                                        href='https://vimahotels.com'> https://vimahotels.com</a>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing our team page of Vimahotels
                                        </ul>
                                        <ul>
                                            <ArrowRightAltIcon/> Developing contact page of Vimahotels
                                        </ul>
                                    </b><br/>
                                    <b><AccessTimeIcon/></b> 2021 - present<br/>
                                    <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                </li>
                                <li>
                                    <h4>Backend Developer</h4>
                                    <b>Creat API services for Frontend team</b><br/>
                                    <b><AccessTimeIcon/></b> 2020 - present<br/>
                                    <b><LocationOnIcon/></b> Antalya - Turkey<br/>
                                </li>
                                <li>
                                    <h4>A Spectrally Efficient OFDM-Based Modulation Scheme for Future Wireless
                                        Systems</h4>
                                    <b>Research paper:</b> Scientific contribution to EBBT’2019 <br/>
                                    <b><AccessTimeIcon/></b> 24/04/2019 - 26/04/2019<br/>
                                    <b><LocationOnIcon/></b> Istanbul - Turkey<br/>
                                </li>
                                <li>
                                    <h4>OFDM-Subcarrier Power Modulation With Two Dimensional Signal Constellation</h4>
                                    <b>Research paper:</b> Scientific contribution to ASYU’2019 <br/>
                                    <b><AccessTimeIcon/></b> 07/2019<br/>
                                    <b><LocationOnIcon/></b> London - England<br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact" id="contact">
                <div class="container text-center">
                    <h4> CONTACT ME </h4>
                    <div class="col-md-5">
                        <a href='https://www.linkedin.com/in/youcef-belallou-650567139'>
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <div class="col-md-5">
                        <a href="https://www.facebook.com/profile.php?id=100000390916379">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </div>
                    <div class="col-md-5">
                        <a href="https://www.instagram.com/youcef.belallou">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </div>
                    <div class="col-md-5">
                        <a href="tel:+905511336578">
                            <i class="fa fa-phone"></i>
                        </a>
                    </div>
                    <div class="col-md-5">
                        <a href="mailto:youcef.belallou@gmail.com">
                            <i class="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;