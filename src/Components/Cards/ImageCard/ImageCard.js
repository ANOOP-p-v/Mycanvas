import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import './ImageCard.css'
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

function ImageCard(props) {
  console.log(props);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings1 = {

    centerMode: true,
    infinite: true,

    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1
  };
  if (props.type == "suggested")
    return (
      <div className='containeri'>
        <div className="title">{props?.dataset?.sugTitle}</div>
        <div className="subtitle">{props?.dataset?.sugSubtitle}</div>
        <Slider {...settings}>
          {props?.dataset?.suggested?.map((data, key) => {
            return (
              <div className='card-container' key={data.id}>
                <Card style={{ width: '15rem', borderRadius: "15px", margin: "auto" }} >
                  <Card.Img style={{ borderRadius: "15px" }} variant="top" src={data.url} />
                </Card>
                <div className="caption"> {data.title}</div>
              </div>
            );
          })}
        </Slider>
      </div>

    );
  if (props.type == "template")
    return (
      <div className='containeri'>
        <div className="title">{props?.dataset?.tempTitle}</div>
        <div className="subtitle">{props?.dataset?.tmpSubtitle}</div>
        <Slider {...settings1}>
          {props?.dataset?.template?.map((data, key) => {
            return (
              <div className='card-container' key={data.id}>
                <Card style={{ width: '15rem', borderRadius: "15px", margin: "auto" }} >
                  <Card.Img style={{ borderRadius: "15px" }} variant="top" src={data.url} />
                </Card>
                <div className="caption"> {data.title}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
}

export default ImageCard;