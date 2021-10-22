import React from 'react';
import './App.css';


function FirstPage(){
    return(
        <section id="FirstPage">
    <div class="container text-center">
        <div> <img src="/Users/youcef/youcef-belallou-website/public/img/front-photo.jpg"></img></div>
            <div class="space">
                <h1>YOUCEF BELALLOU</h1>
                <div class="space">
                    <h4>Computer Engineering</h4>
                    <h4>Electrical and Electronic Engineering</h4>
                </div>
            </div>
            <div class="scroll-btn">
                <div class="scroll-bar"><a href="#about"></a></div>
            </div>
    </div>
</section>
    );
}

export default FirstPage;