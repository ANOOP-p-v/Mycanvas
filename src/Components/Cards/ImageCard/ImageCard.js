import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <div className="title">title</div>
      <div className="subtitle">subtitle</div>
      <Slider {...settings}>
        {/* {props.dataset?.map((item) => {
          <div className='card-container'>
            <Card style={{ width: '15rem', borderRadius: "15px", margin: "auto" }} >
              <Card.Img style={{ borderRadius: "15px" }} variant="top" src={item.url} />
            </Card>
            <div className="caption"> Doc</div>
          </div>

        }

        )
        } */}
        <div className='card-container'>
          <Card style={{ width: '15rem', borderRadius: "15px", margin:"auto" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-vector/business-woman-banner-template_23-2148798237.jpg?w=900&t=st=1682059203~exp=1682059803~hmac=10db3f4f6e2b0dfb9cc60e0232ddf51239bbc2a34829aa5d5765d911d86c54db" />
          </Card>
          <div className="caption"> Doc</div>
        </div>

        <div className='card-container'>
          <Card style={{ width: '15rem', borderRadius: "15px", margin:"auto" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-vector/business-woman-banner-template_23-2148798237.jpg?w=900&t=st=1682059203~exp=1682059803~hmac=10db3f4f6e2b0dfb9cc60e0232ddf51239bbc2a34829aa5d5765d911d86c54db" />
          </Card>
          <div className="caption">
          Doc
          </div>
        </div>
        <div className='card-container'>
          <Card  style={{ width: '15rem', borderRadius: "15px", margin:"auto" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/premium-vector/clean-new-collection-fashion-sale-landing-pages_7605-445.jpg" />
           

          </Card>
          <div className="caption"> Doc</div>
        </div>
        <div className='card-container'>
          <Card style={{ width: '15rem', borderRadius: "15px", margin:"auto" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1577341204.1682002845" />
          </Card>
          <div className="caption"> Doc</div>
          <div></div>
        </div>
        <div className='card-container'>
          <Card style={{ width: '15rem', borderRadius: "15px", margin:"auto" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-vector/flat-spring-horizontal-banner-template_23-2149280328.jpg?t=st=1682055655~exp=1682056255~hmac=2b9079ba9d2311d016e6e277a0f7ef9adbb3a011801740fb0e4a6b81455305d5" />

          </Card>
          <div className="caption"> Doc</div>
          
        </div> 
        {/* NEXT  FIVE IMAGES-iMAGE */}
        {/* <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.2.1287520646.1682078036" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}

          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/premium-photo/blue-dramatic-sunset-sky-texture-background_29332-1155.jpg?size=626&ext=jpg&ga=GA1.2.1287520646.1682078036" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/premium-photo/young-asian-indian-college-students-reading-books-studying-laptop-preparing-exam-working-group-project-while-sitting-grass-staircase-steps-college-campus_466689-7729.jpg?size=626&ext=jpg&ga=GA1.2.1287520646.1682078036" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1287520646.1682078036" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-photo/plant-against-blue-wall-background-with-copy-space_53876-98324.jpg?size=626&ext=jpg&ga=GA1.1.1287520646.1682078036" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div> */}
        {/* NEXT IMAGES FOR DOCS */}
        {/* <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://content.wepik.com/statics/13483659/preview-page0.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://content.wepik.com/statics/39498342/preview-page0.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://content.wepik.com/statics/18682576/preview-page0.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://content.wepik.com/statics/4449529/preview-page0.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div>
        <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://content.wepik.com/statics/10538755/preview-page0.jpg" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div> */}
        {/* IMAGES FOR VIDEOS */}
        {/* <div >
          <Card style={{ width: '15rem', margin: "10px", borderRadius: "15px" }} >
            <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://img.freepik.com/free-photo/young-woman-blogger-recording-video-camera_1303-27222.jpg?size=626&ext=jpg&ga=GA1.2.1287520646.1682078036&semt=robertav1_2_sidr" />
            {props.title ? <Card.Title className='txt'>{props.title ? props.title : ''}</Card.Title> : ''}
          </Card>
        </div> */}
      </Slider>
    </div>
  );
}

export default ImageCard;