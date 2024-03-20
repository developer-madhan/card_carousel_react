import "./App.css";
import { Container, Button, Card } from "react-bootstrap";
import Slider from "react-slick";

const data = [
  {
    name: "Germaine Jambrozek",
    img: "images/1.jpg",
    review: "ac nibh fusce lacus purus aliquet at feugiat non pretium",
  },
  {
    name: "Ralph Pittam",
    img: "images/2.jpg",
    review:
      "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
  },
  {
    name: "Collin Abelwhite",
    img: "images/3.jpg",
    review:
      "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",
  },
  {
    name: "Roderigo Mantha",
    img: "images/4.jpg",
    review:
      "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
  },
  {
    name: "Nanete Cokly",
    img: "images/5.png",
    review:
      "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
  },
  {
    name: "Emmy Dach",
    img: "images/1.jpg",
    review:
      "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
  },
  {
    name: "Savina Vaud",
    img: "images/2.jpg",
    review:
      "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
  },
  {
    name: "Sylvia Duckhouse",
    img: "images/3.jpg",
    review:
      "cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
  },
  {
    name: "Axel Gullane",
    img: "images/4.jpg",
    review:
      "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet",
  },
  {
    name: "Whitney Eccleston",
    img: "images/5.png",
    review:
      "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
  },
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="App">
      <Container>
        <div className="mt-4 ">
          <Slider {...settings}>
            {data.map((d) => (
              // <div key={d.name} className="bg-whigth" >
              //   <div>
              //     <img src={d.img} alt="image" />
              //   </div>
              //   <div>
              //     <p className="text-info">{d.name}</p>
              //     <p>{d.review}</p>
              //     <Button variant="primary">Primary</Button>
              //   </div>
              // </div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={d.img}
                  style={{ backgroundColor: "indigo", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text> {d.review} </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default App;
