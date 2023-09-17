import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { gpu, monitor, keybaord, customer1, customer2, cpus, monitors, keyboards, gpus, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: gpu,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: monitor,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: keybaord,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: cpus,
        name: "Ryzen 7",
        price: "$400.20",
    },
    {
        imgURL: monitors,
        name: "240hz Gaming Monitor",
        price: "$500.20",
    },
    {
        imgURL: keyboards,
        name: "Mechanical Keybaord",
        price: "$220.20",
    },
    {
        imgURL: gpus,
        name: "Nvedia RTX 3090",
        price: "$900",
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
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Graphic Cards", link: "/" },
            { name: "Monitors", link: "/" },
            { name: "Keybaords", link: "/" },
            { name: "Processors", link: "/" },
            { name: "Consoles", link: "/" },
            { name: "RAM", link: "/" },
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
            { name: "https://aayushmaanportfolio.vercel.app/", link: "aayushmaanlko@gmail.com" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
