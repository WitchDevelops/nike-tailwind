import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, customer4,shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        rating: 5.0,
        name: "Mike Cloud Walkers",
        price: "$149.99",
    },
    {
        imgURL: shoe5,
        rating: 4.5,
        name: "Mike VelocityRun X1",
        price: "$129.99",
    },
    {
        imgURL: shoe6,
        rating: 4.0,
        name: "Mike Classic Elegance",
        price: "$79.99",
    },
    {
        imgURL: shoe7,
        rating: 4.5,
        name: "Mike UrbanStride Pro",
        price: "$89.95",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.0,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5.0,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer3,
        customerName: "Eleanor Jansen",
        rating: 4.5,
        feedback: "I've been searching for sneakers that combine style and comfort, and Mike nailed it. The sneakers are top-notch."
    },
    {
        imgURL: customer4,
        customerName: "Max Fisher",
        rating: 5.0,
        feedback: "From the moment I put on my Mike's, I fell in love. Nothing beats that premium feel. I'm never taking them off." 
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Cloud Walkers", link: "/" },
            { name: "TrailBlaze", link: "/" },
            { name: "VelocityRun X1", link: "/" },
            { name: "Classic Elegance", link: "/" },
            { name: "UrbanStride Pro", link: "/" },
            { name: "GymFlex Performance", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@mike.com", link: "mailto:customer@mike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];