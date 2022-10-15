import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  // When we switch routes dont set image to unmounted component
  const mountedRef = useRef(false);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      // When the component unmounts !
      mountedRef.current = true;
    };
  }, [book.url]);

  return (
    <div className="book">
      {!img ? (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      )}
    </div>
  );
}

export default Book;
