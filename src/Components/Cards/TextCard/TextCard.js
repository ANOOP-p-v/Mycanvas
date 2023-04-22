import React from 'react'
import Slider from 'react-slick';
import './Textcard.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
function TextCard() {
    const settings = {
        centermode:true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className="container">
       
            <div className="row">
            {/* <Slider {...settings}> */}
                <div className="col-md-4">
                    <div className="card-div card-1">
                        <h3>Ionic Native</h3>
                        <p>
                            A curated set of ES5/ES6/TypeScript wrappers for plugins to easily add
                            any native functionality to your Ionic apps.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-div card-1">
                        <h3>Ionic Native</h3>
                        <p>
                            A curated set of ES5/ES6/TypeScript wrappers for plugins to easily add
                            any native functionality to your Ionic apps.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-div card-1">
                        <h3>Ionic Native</h3>
                        <p>
                            A curated set of ES5/ES6/TypeScript wrappers for plugins to easily add
                            any native functionality to your Ionic apps.
                        </p>
                    </div>
                </div>
              {/* </Slider> */}
            </div>
         </div> 
      

    )
}

export default TextCard