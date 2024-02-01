import React from 'react';
import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {

  const categories = 
  [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://images.unsplash.com/photo-1595326947594-d0074652a181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://images.unsplash.com/photo-1607970395070-4d44a8370c59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div>
        <Outlet/>
        <Directory categories={categories}></Directory>
    </div>
  )
}

export default Home;
