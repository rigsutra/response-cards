import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Card.css";

/* eslint-disable react/prop-types */
const Card = (props) => {
  const review = props.review;

  return (
    <div className="Full-box">
      <div>
        <div>
          <img className="image" src={review.image} />
        </div>
        <div>
          <h2>{review.name}</h2>
          <p>{review.job} </p>
        </div>
        <div>
          <p>
            <FaQuoteLeft />
          </p>
          <p>{review.text}</p>
          <p>
            <FaQuoteRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
