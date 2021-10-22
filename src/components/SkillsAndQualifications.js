import React from 'react';
import './App.css';

function SkillsAndQualifications(){
    return(
        <section class="skills " id="Skills and Qualifications">
        <div class="container">
            <div class="col-md-6">
                <h3><i class="fa fa-language"></i> LANGUAGES</h3>
                <div class="skills-bar">
                    <p>Tamazight (native)</p>
                    <div class="progress">
                        <div class="progress-bar" style="width: 100%">100%</div>
                    </div>
                    <p>Arabic</p>
                    <div class="progress">
                        <div class="progress-bar" style="width: 100%">100%</div>
                    </div>
                    <p>English</p>
                    <div class="progress">
                        <div class="progress-bar" style="width: 90%">90%</div>
                    </div>
                    <p>French</p>
                    <div class="progress">
                        <div class="progress-bar" style="width: 80%">80%</div>
                    </div>
                    <p>Turkish</p>
                    <div class="progress">
                        <div class="progress-bar" style="width: 80%">80%</div>
                    </div>
                </div>
            </div>
            <h3><i class="fa fa-laptop"></i> COMPUTER SKILLS</h3>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> JavaScript</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> ReactJS</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> SpringBoot</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> JAVA</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> C</i>
            </div>

            <div class="col-md-4">
                <i class="fa fa-check-square-o"> MATLAB</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> NI Multisim</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> Android studio</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> proteus 8 (Assembly)</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> AutoCAD</i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> Microsoft office</i>
            </div>
            <h3>Hobbies</h3>
            <div class="col-md-4">
                <i class="fa fa-futbol-o"> Football </i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-check-square-o"> Swimming </i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-book"> Reading books </i>
            </div>
            <div class="col-md-4">
                <i class="fa fa-plane"> Travelling </i>
            </div>
        </div>
    </section>
    );
}

export default SkillsAndQualifications;