import React from 'react';

function Section(){
    return(
    <section id="section">
    <div class="nav-bar">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"> <img src="/Users/youcef/youcef-belallou-website/src/assets/img/logo.jpg"/> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#top">HOME </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#about">ABOUT ME </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Skills and Qualifications">SKILLS & QUALIFICATIONS </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#experianceandachievment">EXPERIANCES & ACHIEVMENTS </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#contact">CONTACT </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>
    );
}

export default Section;