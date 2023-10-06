// import React, { useState, useEffect } from 'react';
// import Typewriter from 'typewriter-effect';
// import Fade from 'react-reveal';
// import endpoints from '../constants/endpoints';
// import Social from './Social';
// import FallbackSpinner from './FallbackSpinner';

// const styles = {
//   nameStyle: {
//     fontSize: '5em',
//   },
//   inlineChild: {
//     display: 'inline-block',
//   },
//   mainContainer: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };

// function Home() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(endpoints.home, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return data ? (
//     <Fade>
//       <div style={styles.mainContainer}>
//         <h1 style={styles.nameStyle}>{data?.name}</h1>
//         <div style={{ flexDirection: 'row' }}>
//           <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
//           <Typewriter
//             options={{
//               loop: true,
//               autoStart: true,
//               strings: data?.roles,
//             }}
//           />
//         </div>
//         <Social />
//       </div>
//     </Fade>
//   ) : <FallbackSpinner />;
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  randomImage: {
    maxWidth: '100%',
    maxHeight: '300px', // Set the maximum height as needed
    margin: '20px', // Add margin for spacing
    // Add CSS properties to ensure visibility
    border: '1px solid #ccc', // Add a border for visibility
    borderRadius: '10px', // Add rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
  },
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
};

function Home() {
  const [data, setData] = useState(null);
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    // Fetch your data as before
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);

        // Choose a random image URL from an array
        const randomImages = [
          'https://media.licdn.com/dms/image/D4E03AQFHPk7bC9ZC5Q/profile-displayphoto-shrink_800_800/0/1692881346844?e=2147483647&v=beta&t=gsFM2IIAUr_h0m8bRKiEoshlEDEZ3sp527DwahFrMQg',
          // Add more image URLs as needed
        ];
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        setRandomImageUrl(randomImages[randomIndex]);
      })
      .catch((err) => err);
  }, []);

  return data ? (
    <div style={styles.mainContainer}>
      <img
        src={randomImageUrl}
        alt="Random UCL ball"
        style={styles.randomImage}
      />
      <Fade>
        <div>
          <h1 style={styles.nameStyle}>{data?.name}</h1>
          <div style={{ flexDirection: 'row' }}>
            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: data?.roles,
              }}
            />
          </div>
          <Social />
        </div>
      </Fade>
    </div>
  ) : <FallbackSpinner />;
}

export default Home;
