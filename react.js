import React from "react";
import { Apple } from "./Apple";
import { Circle } from "./Circle";
import { Facebook } from "./Facebook";
import { Google } from "./Google";
import { Icon } from "./Icon";
import { Icon1 } from "./Icon1";
import { IconComponentNode } from "./IconComponentNode";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="overlap">
        <div className="background" />
        <div className="new-design">
          <div className="main-dashboard">
            <div className="footer-menu">
              <div className="menu">
                <div className="text-wrapper">License</div>
                <div className="div">Blog</div>
                <div className="text-wrapper-2">Simmmple</div>
                <div className="text-wrapper-3">Creative Tim</div>
              </div>
              <div className="copyright">
                <p className="element-made-with-by">
                  <span className="span">@ 2021, Made with ❤️ by </span>
                  <span className="text-wrapper-4">Creative Tim</span>
                  <span className="span"> &amp; </span>
                  <span className="text-wrapper-4">Simmmple</span>
                  <span className="span"> for a better web</span>
                </p>
              </div>
            </div>
            <div className="overlap-group">
              <img className="image" alt="Image" src="image.png" />
              <div className="inputs">
                <div className="overlap-2">
                  <p className="already-have-an">
                    <span className="span">Already have an account?</span>
                    <span className="text-wrapper-5">&nbsp;</span>
                    <span className="text-wrapper-6">Sign in</span>
                  </p>
                  <button className="button-base">
                    <div className="width-structure">
                      <button className="height-structure">
                        <button className="button-body">
                          <div className="text">SIGN UP</div>
                        </button>
                      </button>
                      <div className="min-width">
                        <div className="content" />
                      </div>
                    </div>
                  </button>
                  <div className="remember-me">
                    <div className="text-wrapper-7">Remember me</div>
                    <div className="switch-base">
                      <div className="ellipse" />
                    </div>
                  </div>
                  <div className="password">
                    <div className="input-fieldtext-wrapper">
                      <div className="input-fieldtext">
                        <div className="text-wrapper-8">Your password</div>
                        <div className="content-wrapper">
                          <div className="content-2" />
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-9">Password</div>
                  </div>
                  <div className="email">
                    <div className="input-fieldtext-wrapper">
                      <div className="input-fieldtext">
                        <img className="your-email-address" alt="Your email address" src="your-email-address.png" />
                        <div className="content-wrapper">
                          <div className="content-2" />
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-10">Email</div>
                  </div>
                  <div className="name">
                    <div className="input-fieldtext-wrapper">
                      <div className="input-fieldtext">
                        <input className="your-full-name" id="input-1" placeholder="Your full name" type="text" />
                        <div className="content-wrapper">
                          <div className="content-2" />
                        </div>
                      </div>
                    </div>
                    <label className="label" htmlFor="input-1">
                      Name
                    </label>
                  </div>
                  <div className="register-with">
                    <div className="overlap-group-2">
                      <div className="ionicon-l-logo-wrapper">
                        <Google className="ionicon-l-logo" color="white" />
                      </div>
                      <div className="ionicon-l-logo-apple-wrapper">
                        <Apple className="icon-instance-node" color="white" />
                      </div>
                      <div className="facebook-wrapper">
                        <Facebook className="icon-instance-node" />
                      </div>
                      <div className="title">
                        <div className="text-wrapper-11">or</div>
                        <div className="text-wrapper-12">Register with</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-2">
                <p className="join-to-test-and">
                  Use these awesome forms to login or create new account in your project for free.
                </p>
                <img className="union" alt="Union" src="union.svg" />
              </div>
              <div className="menu-2">
                <div className="width-structure-wrapper">
                  <div className="width-structure">
                    <div className="button-body-wrapper">
                      <div className="button-body-2">
                        <div className="text-2">FREE DOWNLOAD</div>
                      </div>
                    </div>
                    <div className="div-wrapper">
                      <div className="content-3" />
                    </div>
                  </div>
                </div>
                <div className="pages">
                  <div className="sign-in">
                    <div className="width-structure-2">
                      <div className="button-body-wrapper">
                        <div className="button-body-3">
                          <Icon className="icon-2" />
                          <div className="text-3">SIGN IN</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="content-3" />
                      </div>
                    </div>
                  </div>
                  <div className="width-structure-wrapper-2">
                    <div className="width-structure-3">
                      <div className="button-body-wrapper">
                        <div className="button-body-3">
                          <Circle className="icon-2" color="white" />
                          <div className="text">SIGN UP</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="content-3" />
                      </div>
                    </div>
                  </div>
                  <div className="profile">
                    <div className="width-structure-4">
                      <div className="button-body-wrapper">
                        <div className="button-body-3">
                          <IconComponentNode className="icon-2" />
                          <div className="text-4">PROFILE</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="content-3" />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard">
                    <div className="width-structure-5">
                      <div className="button-body-wrapper">
                        <div className="button-body-3">
                          <Icon1 className="icon-2" />
                          <div className="text-5">DASHBOARD</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="content-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="logo">
                  <img className="logo-colored" alt="Logo colored" src="logo-colored-2x-1-removebg-preview-1-1.png" />
                  <img className="line" alt="Line" src="line-1.svg" />
                  <div className="group">
                    <img className="vector" alt="Vector" src="vector.svg" />
                    <div className="text-wrapper-13">argon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
