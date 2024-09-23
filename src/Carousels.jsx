import React from "react";
import Carousel from "better-react-carousel";
import "./Carousels.css";

const Carousels = () => {
  return (
    <>
      <h1>Welcome to Carousel Project</h1>
      <Carousel loop cols={1} rows={1}>
        <Carousel.Item>
          <img
            src="https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo="
            alt="carousel images"
            className="product_image"
          />
          <p>Welcome!</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://thumbs.dreamstime.com/b/urban-jungle-trendy-living-room-interior-white-couch-black-knot-pillow-wooden-furniture-copy-space-empty-wall-174228512.jpg"
            alt="carousel images"
            className="product_image"
          />
          <h2>second paragraph</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.istockphoto.com/id/1251694108/photo/scandinavian-concept-of-living-room-interior-with-design-sofa-coffee-table-plant-in-pot.jpg?s=612x612&w=0&k=20&c=ITXyoZJVlM4NlRynI5Vip1_ddWGIRPy1TyJhFbxL6Hk="
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUERsvgGvwn7koz-j5g90k0rNHMPSikdwTBg&s"
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva0KyRsjNIKF0FEJC6LU-uq4U30puwQi8UFKJNOZmdP7kWGWh0Jby3czwD1VtuDJwuAw&usqp=CAU"
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.coasterfurniture.com/wp-content/uploads/yellow-and-green-themed-living-room.jpeg"
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo="
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://thumbs.dreamstime.com/b/urban-jungle-trendy-living-room-interior-white-couch-black-knot-pillow-wooden-furniture-copy-space-empty-wall-174228512.jpg"
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.istockphoto.com/id/1251694108/photo/scandinavian-concept-of-living-room-interior-with-design-sofa-coffee-table-plant-in-pot.jpg?s=612x612&w=0&k=20&c=ITXyoZJVlM4NlRynI5Vip1_ddWGIRPy1TyJhFbxL6Hk="
            alt="carousel images"
            className="product_image"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
