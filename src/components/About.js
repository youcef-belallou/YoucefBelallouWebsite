import React from 'react';
import './App.css';

function About(){
    return(
    <section class="about container" id="about">
        <div class="row">
            <div class="col-md-6 text-center"> <img src="/Users/youcef/youcef-belallou-website/public/img/gradution_photo.jpg" class="profile-img"/></div>
            <div class="col-md-6">
                <h3>WHO I AM? </h3>
                <p>Highly motivated Electrical and Electronics Engineer with a minor in Computer Engineering. pursuing
                    an opening in programming (Frontend & Backend developer), I have experiance in Backend and Frontend.
                    Interested in web developer. I have electronics skills, light experience in circuit design and
                    simulation. Also interested in telecommunication and Robotic.
                </p>
                <ol>
                    <p><i class="fa fa-graduation-cap"></i> Best senior project in the university (Antalya Bilim
                        university)</p>
                    <p><i class="fa fa-graduation-cap"></i> Having certificate of honor</p>
                    <p><i class="fa fa-graduation-cap"></i> GPA of 3.55/4</p>
                    <p><i class="fa fa-graduation-cap"></i> 4th top student in the department</p>
                </ol>
            </div>
        </div>
</section>
    );
}

export default About;