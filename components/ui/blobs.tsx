import { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update windowWidth on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial windowWidth on component mount
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define a threshold width to hide the element below
  const thresholdWidth = 1500;

  return (
    <div>
      {windowWidth > thresholdWidth && (
        // Your element to be displayed for larger screens
        <div>
          <img alt="null" className="lblob" src="/left.svg" width={900} height={900} />
          <img alt="null" className="rblob" src="/rblob.svg" width={900} height={900} />
        </div>
      )}
      {windowWidth <= thresholdWidth && (
        <div>
        <img alt="null" className="lblob" src="/left.svg" width={900} height={900} />
        </div>

      )}
    </div>
  );
};

export default MyComponent;
