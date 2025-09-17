import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaSearch, FaUser, FaShoppingCart, FaStore } from "react-icons/fa";

function MyFlipCartPage() {
    const [index, setIndex] = useState(0);
    let img = [
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/3abc11594efaf6dd.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/db942a8618f0bb26.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/31a6302dd4a0dbb0.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/d077bea842aaa940.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/fb6af354b4cf44ad.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/99cfe31c9ac32d0b.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/8b6ca008fd2f7d2b.jpg?q=60"
    ];

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className="p-0">
            {/* Navbar */}
            <Row className="bg-white text-white p-3 items-center">
                <Col xs={2}>
                    <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                        alt="Flipcart Logo"
                        className="h-8"
                    />
                </Col>

                {/* Search Bar with Icon */}
                <Col xs={5} className="relative">
                <FaSearch className="absolute right-3 top-3 text-gray-500" size={18} />
                    <input
                        type="search"
                        placeholder="Search for Products, Brands and More"
                        className="w-full px-3 py-2 bg-gray-100 rounded-sm text-black focus:outline-none"
                    />
                </Col>

                {/* Buttons with Icons */}
                <Col xs={5} className="flex justify-end gap-3">
                    <button className="flex items-center gap-2 bg-white text-[#2874f0] font-semibold px-4 py-2 rounded-sm">
                        <FaUser /> Login
                    </button>
                    <button className="flex items-center gap-2 bg-white text-[#2874f0] font-semibold px-4 py-2 rounded-sm">
                        <FaShoppingCart /> Cart
                    </button>
                    <button className="flex items-center gap-2 bg-white text-[#2874f0] font-semibold px-4 py-2 rounded-sm">
                        <FaStore /> Become a Seller
                    </button>
                </Col>
            </Row>

            {/* Categories */}
            <Row className="bg-white py-4 text-center shadow">
                {[
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100", text: "Minute" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100", text: "Mobiles" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100", text: "Fashion" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/af646c36d74c4be9.png?q=100", text: "Electronics" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/1788f177649e6991.png?q=100", text: "Home & Furniture" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e90944802d996756.jpg?q=100", text: "Appliances" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3c647c2e0d937dc5.png?q=100", text: "Flights" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/b3020c99672953b9.png?q=100", text: "Beauty" },
                    { img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e730a834ad950bae.png?q=100", text: "Grocery" }
                ].map((cat, i) => (
                    <Col key={i} className="hover:text-[#2874f0] cursor-pointer">
                        <img src={cat.img} alt={cat.text} className="h-16 mx-auto" />
                        <span className="block mt-2 text-sm font-medium">{cat.text}</span>
                    </Col>
                ))}
            </Row>

            {/* Carousel */}
            <Carousel activeIndex={index} onSelect={handleSelect} className="mt-2">
                {img.map((src, i) => (
                    <Carousel.Item key={i}>
                        <img src={src} alt={`slide-${i}`} className="w-full h-[350px] object-cover rounded-md" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}

export default MyFlipCartPage;
