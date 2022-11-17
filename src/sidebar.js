import React from "react";
import { Chart } from 'chart.js';
import Cards from "./cards";
import { Link } from "react-router-dom";

let  bgColor ={"Blue":"#4c72de"}

function Sidebar() {
    return (


        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>


            <hr class="sidebar-divider my-0" />

            <li class="nav-item active">
                <Link class="nav-link" to={"/"}  >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>


            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Interface
            </div>






            <div class="accordion" id="accordionExample" style={{backgroundColor: 'lime'}}>
                <div class="accordion-item ">
                    <span class="accordion-header" id="headingOne">
                        <a class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="flase" aria-controls="collapseOne">
                            Components
                        </a>
                    </span>
                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <h6 class="collapse-header">Custom Components:</h6>

                        <div class="accordion-body">
                            <Link class="accordion-body" to={"/buttons"}>
                                Buttons   </Link>
                        </div>

                        <div class="accordion-body" >
                            <Link class="accordion-body" to={"/cards"}>
                                Cards   </Link>
                        </div>
                    </div>
                </div>
                </div>




            <div class="accordion" id="accordionExample">
              

                <div class="accordion-item ">
                    <span class="accordion-header" id="headingUtilities">
                        <a class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
                            Utilities
                        </a>
                    </span>
                    <div id="collapseUtilities" class="accordion-collapse collapse " aria-labelledby="headingUtilities" data-bs-parent="#accordionExample">
                        <h6 class="collapse-header">Custom Utilities:</h6>

                        <div class="accordion-body">
                            <Link class="accordion-body" to={"/colors"}>
                                Colors  </Link>
                        </div>

                        <div class="accordion-body" >
                            <Link class="accordion-body" to={"/borders"}>
                                Borders   </Link>
                        </div>
                        <div class="accordion-body">
                            <Link class="accordion-body" to={"/animations"}>
                                Animations  </Link>
                        </div>

                        <div class="accordion-body" >
                            <Link class="accordion-body" to={"/other"}>
                                Other   </Link>
                        </div>
                    </div>
                </div>
            </div>



            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Addons
            </div>


       

            <div class="accordion" id="accordionExample">


                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Pages
                        </a>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <div class="accordion-body">
                            <Link class="accordion-body" to={"/login"}>
                                Login  </Link>
                        </div>

                        <div class="accordion-body" >
                            <Link class="accordion-body" to={"/register"}>
                                Register  </Link>
                        </div>
                        <div class="accordion-body" >
                            <Link class="accordion-body" to={"/forgotpassword"}>
                                Forgot Password </Link>
                        </div>


                    </div>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <h6 class="collapse-header">Other Pages:</h6>
                        <div class="accordion-body">
                            <Link class="accordion-body" to={"/404pages"}>
                                404 Page  </Link>
                        </div>


                        <div class="accordion-body">
                            <Link class="accordion-body" to={"/blankpages"}>
                                Blank Pages  </Link>
                        </div>
                    </div>

                </div>
            </div>


            <li class="nav-item">
                <Link to={"/charts"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>


            <li class="nav-item">
                <Link to={"/tables"} class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>


            <hr class="sidebar-divider d-none d-md-block" />


            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


            {/* <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
            <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div> */}

        </ul>






    )
}

export default Sidebar