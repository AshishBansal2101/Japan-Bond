// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import item1 from "../images/head-1.png";
import item2 from "../images/head-2.jpg";
import item3 from "../images/head-3.jpg";
import React from "react";
import { Carousel } from "react-carousel-minimal";
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3IlMjBpbiUyMHdhdGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    caption: "Japan Bond",
  },
  {
    image:
      "https://images.pexels.com/photos/891030/pexels-photo-891030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Adhesive Manufacturer",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5f5SDe3rtNH85vGAxbgGLFnufsOs5xMofCA&usqp=CAU",
    caption: "Premium Quality",
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
    <div className="App">
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
            height="400px"
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
              maxHeight: "400px",
              //   margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
