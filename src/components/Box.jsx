/* eslint-disable react/prop-types */
import Card from "./Card";
import "./Box.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";

const Box = (props) => {
  const reviews = props.reviews;
  const [show, setShow] = useState(0);

  function handleleft() {
    if (show - 1 < 0) {
      setShow(reviews.length - 1);
    } else {
      setShow(show - 1);
    }
  }

  function handleRight() {
    if (show + 1 >= reviews.length) {
      setShow(0);
    } else {
      setShow(show + 1);
    }
  }

  function handleRandon() {
    let rendomShow = Math.floor(Math.random() * reviews.length);
    setShow(rendomShow);
  }

  return (
    <div className="full-container">
      <div className="text-center">
        <div>
          <h1>Our Testimonials</h1>
          <div className="line"></div>
        </div>

        <div>
          <Card key={reviews.id} review={reviews[show]} />
          <div>
            <p onClick={handleRight}>
              <FaAngleRight />
            </p>
            <p onClick={handleleft}>
              <FaAngleLeft />
            </p>
          </div>
          <div>
            <button onClick={handleRandon}> Surprise Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
