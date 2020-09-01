import React, { useState } from "react";
import ModalVideo from "react-modal-video";
// import { useHistory } from 'react-router-dom';
// import {history} from 'react-router-dom';
// import {Redirect } from 'react-router-dom';
// import Popup from 'reactjs-popup';

// import Drawer from 'react-drag-drawer';
// import swal from 'sweetalert';
// import swal from '@sweetalert/with-react';



import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";
import LogoKP from "../assets/images/thumbnail.png";
// import MalaysiaWish from "../assets/images/resources/MalaysiaIndependenceDayKP.jpg";


const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false
    // toggle: true
    // redirect: false
  });

 



  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };
//   const onSubmit= () => {
//       setTimeout(( )=> {
//         return  <Redirect  to="https://karma-pluss.vercel.app/" />

//       },50)
    
//  }
// const history = useHistory();
// const handleClick = () => {
//   history.push("/home");
// }
// {swal("Hello world!")}
// swal(<img src={MalaysiaWish} className="banner-one checkSize" alt="Karma Pluss Wishes Malaysia Independence Day" />, {buttons: false, className: "modalBox"}
  
    
  
// )





  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">

      
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="6fwY4thYtAY"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>
       
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt="Karma Pluss Productivity Benefits and Healthy Lifestyle"
          />
        </div>
        <img src={LogoKP} className="wow logoStyle" alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <form
                className="banner-one__mc-form mc-form pure-form pure-form-stacked"
                method="POST"  data-email="karmapluss2020@gmail.com"
          action="https://script.google.com/macros/s/AKfycbwdGY48GrYlwWI8pME5Gjzg68XXmMRbZ-CX2pCtKw/exec"
              >
                <input className="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" name="email" id="emailInterest"  required={true} placeholder="Email address" />
                <button type="submit"  className="thm-btn banner-one__mc-btn">
                {/* {this.renderRedirect()} */}
                  <span>Know More</span>
                </button>
                 
              </form>
              <div className="mc-form__response"></div>
              <h1>
                Become Your <br /> "BEST VERSION"
              </h1>
              <h4>To Manifest <br /> AWESOMENESS in YOU</h4>
              <p>
  Karma Pluss helps you in becoming <strong>"Best version <br/> of Yourself"</strong>  by guiding you in doing good deeds <br/> to maximize your <strong>mind, body, soul </strong>potential.
              </p>
              <a href="#videoOne" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
