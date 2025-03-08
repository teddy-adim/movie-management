import React from 'react';
import '../styles.css';

const SpotlightBanner = ({ type, title, price, items }) => {
  // This just adds class based on type for styling
  const bannerClass = type === 'actor' ? 'actor-spotlight' : 'cinema-spotlight';
  
  return (
    <div className={`spotlight-banner ${bannerClass}`}>
      <div className="spotlight-content">
        <div className="spotlight-title-area">
          {price && <span className="spotlight-price">${price}</span>}
          <h2 className="spotlight-title">{title}</h2>
        </div>
        
        <div className="spotlight-items">
          {items.map((item, index) => (
            <div key={index} className="spotlight-item">
              <img 
                src={item.image} 
                alt={item.title || "Spotlight item"} 
                className="spotlight-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Component with example usage included
const SpotlightExample = () => {
  // Sample data for Actor Spotlight
  const actorSpotlightData = {
    type: 'actor',
    title: "ACTOR'S SPOTLIGHT",
    items: [
      { image: "./images/placeholder1.jpg", title: "Actor 1" },
      { image: "images/placeholder2.jpg", title: "Actor 2" },
      { image: "images/placeholder3.jpeg", title: "Actor 3" },
      { image: "images/placeholder4.jpeg", title: "Actor 4" },
      { image: "images/placeholder5.jpeg", title: "Actor 5" },
      { image: "images/placeholder6.jpeg", title: "Actor 6" },
    ]
  };
  
  // Sample data for Cinema Spotlight
  const cinemaSpotlightData = {
    type: 'cinema',
    title: "CINEMA SPOTLIGHT",
    price: "5.99",
    items: [
      { image: "images/movies1.jpeg", title: "Postcard Killings" },
      { image: "images/movies2.jpeg", title: "Pale Door" },
      { image: "images/movies3.jpeg", title: "Miss Fisher" },
      { image: "images/movies4.jpeg", title: "Tomahawk" },
      { image: "images/movies5.jpeg", title: "Mandy" },
      { image: "images/movies6.jpeg", title: "Color Out Of Space" },
    ]
  };
  
  return (
    <div className="spotlight-container">
      <SpotlightBanner {...actorSpotlightData} />
      <SpotlightBanner {...cinemaSpotlightData} />
    </div>
  );
};

// This Exports both the base component and the example
export { SpotlightBanner, SpotlightExample };
export default SpotlightExample;