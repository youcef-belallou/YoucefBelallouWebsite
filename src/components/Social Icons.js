import React from 'react';
import './App.css';

function SocialIcons(){
    return(
    <section id="user-info">
     <div class="social-icons">
        <ul>
            <a href='https://www.linkedin.com/in/youcef-belallou-650567139'>
                <li><i class="fa fa-linkedin"></i></li>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100000390916379'>
                <li><i class="fa fa-facebook"></i></li>
            </a>
            <a href='https://www.instagram.com/youcef.belallou'>
                <li><i class="fa fa-instagram"></i></li>
            </a>
        </ul>
    </div>
</section>
    );
}

export default SocialIcons;