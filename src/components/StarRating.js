import React from 'react'

const StarRating = ({ rate, handleRating }) => {
    const stars = (n) => {
      let star = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= n) {
        star.push(
            <span
                key={i}
                onClick={() => handleRating(i)}
                style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
            >
            ★
            </span>
        );
        } else
        star.push(
            <span
                key={i}
                onClick={() => handleRating(i)}
                style={{ color: "black", fontSize: "20px", cursor: "pointer" }}
            >
            ★
            </span>
        );
        }
    return star;
    };
    return (
    <div
      >
        {stars(rate)}
      </div>
    );
  };
  StarRating.defaultProps = {
    rate: 1,
    handleRating: () => {},
  };
  export default StarRating;
