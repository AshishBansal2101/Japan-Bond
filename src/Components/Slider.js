// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import item1 from "../images/slider1.png";
import item2 from "../images/slider2.png";
import item3 from "../images/slider3.png";

import React from "react";
import { Carousel } from "react-carousel-minimal";
const data = [
  {
    image: item1,
    caption: "Japan Bond",
  },
  {
    image: item2,
    caption: "Adhesive Manufacturer",
  },
  {
    image: item3,
    caption: "Synthetic Resin Adhesive",
  },
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  //     caption: "Darjeeling",
  //   },
  //   {
  //     image:
  //       "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  //     caption: "Darjeeling",
  //   },
];

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};

const Slider = () => {
  return (
    <div className="App slider" id="header">
      <div style={{ textAlign: "center" }}>
        <div
          style={
            {
              // padding: "0 20px",
            }
          }
        >
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            // radius="10px"
            slideNumber={false}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "80vh",
              //   margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
