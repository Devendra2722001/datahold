import React from "react";

const Footer = () => {

    return (
        <>
            <div class="footer">
                <a class="navbar-brand" href="/" id="footerlogo"> <img src="../images/logo1.png" width="180px;" alt="Logo"></img></a>

                <div class="">© 2020 Copyright:
                    <a class="dark-grey-text" href="https://volansys.com/" target="_blank" id="copyright"> Volansys</a>
                </div>

                <div><ul class="list-unstyled list-inline align-items-center" id="mediaicon">
                    <li class="list-inline-item">
                        <a class="btn-floating btn-fb mx-1">
                            <i class="fa fa-facebook fa-lg"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-tw mx-1">
                            <i class="fa fa-twitter fa-lg"> </i>
                        </a>
                    </li>                   
                    <li class="list-inline-item">
                        <a class="btn-floating btn-li mx-1">
                            <i class="fa fa-linkedin fa-lg"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-dribbble mx-1">
                            <i class="fa fa-dribbble fa-lg"> </i>
                        </a>
                    </li>
                </ul></div>

            </div>
        </>
    );
};

export default Footer;



