import React, { useEffect } from 'react';
import LazyLoad from './lazyLoads';  // Import LazyLoad class

const App: React.FC = () => {
  useEffect(() => {
    new LazyLoad('.lazy'); // Initialize lazy loading for images with the 'lazy' class
  }, []);

  return (
    <div>
      <h1>Lazy Load Example</h1>
      <img className="lazy" data-src="https://static6.depositphotos.com/1014550/624/i/450/depositphotos_6240474-stock-photo-test-word-on-keyboard.jpg" alt="Lazy Image 1" />
      <br />
      <img className="lazy" data-src="https://cutandcreate.au/wp-content/uploads/2023/10/test.jpg" alt="Lazy Image 2" />
    </div>
  );
};

export default App;
