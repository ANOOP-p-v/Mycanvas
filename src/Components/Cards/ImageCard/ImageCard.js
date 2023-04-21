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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (

    <div className='containeri'>
      <h2 className='txth'>Templates</h2>
      <h3 className='txth'>Docs</h3>

      <Slider {...settings}>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/33068/image/Screen-Shot-2019-04-09-at-00.31.23.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}

          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-vector/business-woman-banner-template_23-2148798237.jpg?w=900&t=st=1682059203~exp=1682059803~hmac=10db3f4f6e2b0dfb9cc60e0232ddf51239bbc2a34829aa5d5765d911d86c54db" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}

          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/premium-vector/clean-new-collection-fashion-sale-landing-pages_7605-445.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}

          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1577341204.1682002845" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}

          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-vector/flat-spring-horizontal-banner-template_23-2149280328.jpg?t=st=1682055655~exp=1682056255~hmac=2b9079ba9d2311d016e6e277a0f7ef9adbb3a011801740fb0e4a6b81455305d5" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}

          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default ImageCard;