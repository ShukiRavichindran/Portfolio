import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p>Hello,i have done my project in html, css and js.</p>
      <p> It was good time creating web pages</p>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        
      </a>
    </div>
  );
};

export default WorkItems;
