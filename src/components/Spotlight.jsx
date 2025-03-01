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
      { image: "/placeholder1.jpg", title: "Actor 1" },
      { image: "/placeholder2.jpg", title: "Actor 2" },
      { image: "/placeholder3.jpg", title: "Actor 3" },
      { image: "/placeholder4.jpg", title: "Actor 4" },
      { image: "/placeholder5.jpg", title: "Actor 5" },
      { image: "/placeholder6.jpg", title: "Actor 6" },
    ]
  };
  
  // Sample data for Cinema Spotlight
  const cinemaSpotlightData = {
    type: 'cinema',
    title: "CINEMA SPOTLIGHT",
    price: "5.99",
    items: [
      { image: "/movie1.jpg", title: "Postcard Killings" },
      { image: "/movie2.jpg", title: "Pale Door" },
      { image: "/movie3.jpg", title: "Miss Fisher" },
      { image: "/movie4.jpg", title: "Tomahawk" },
      { image: "/movie5.jpg", title: "Mandy" },
      { image: "/movie6.jpg", title: "Color Out Of Space" },
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