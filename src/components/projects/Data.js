import React from "react";
import animals from '../../assets/Capture.JPG'
import search from '../../assets/search.JPG'
import todo from '../../assets/todo.JPG'
import fascio from '../../assets/fascio.JPG';
import card from '../../assets/card.JPG';
import parallax from '../../assets/parallax.JPG';
import readinglist from '../../assets/readinglist.JPG';
import Shopit from '../../assets/Shopit.JPG';

const data = [
     {
        name: `ShopIt`,
        img: `${Shopit}`,
        description: `ShopIt is an E-commerce website. Optimized for large screens, but responsive across various devices.`,
        href:  `https://shopit-eta.vercel.app/ `
    },
    {
        name: `Reading List`,
        img: `${readinglist}`,
        description: `Reading List is a website in which you can add, delete a book, and edit book title.`,
        href:  `https://books-eight-gamma.vercel.app/ `
    },
       
    {
        name: `AnimalLove`,
        img: `${animals}`,
        description: `This project is built to understand useState and how exactly it is used to update content on the screen.`,
        href:  `https://animals-theta-swart.vercel.app/`
    },
    {
        name: `Image Searcher`,
        img: `${search}`,
        description: `This website can fetch images for you using API. Axios library is used to make HTTP requests.`,
        href:  `https://imagesearcher-lemon.vercel.app/`
    },
    {
        name: `To-Do List`,
        img: `${todo}`,
        description: `This is a basic to-do list app. It can add, delete and show the status of the task.`,
        href:  `https://basic-to-do-list-rho.vercel.app/`
    },
    {
        name: `Fascio`,
        img: `${fascio}`,
        description: `Fascio is the landing page of a food website. This project draws inspiration from Zomato landing page.`,
        href:  `https://landing-page-ten-eta.vercel.app/`
    },
    {
        name: `Card`,
        img: `${card}`,
        description: `Card is built to understand the flex properties in CSS.`,
        href:  `https://card-flax-alpha.vercel.app/`
    },
    {
        name: `Parallax`,
        img: `${parallax}`,
        description: `This project is built to understand the flex properties in CSS.`,
        href:  `https://parallax-ruddy.vercel.app/`
    },
    

]

export default data;
