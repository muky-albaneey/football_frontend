import React from 'react';
import { Image } from 'antd';
import home from '../assets/home.jpg';
import away from '../assets/away.jpg';
import './Shoping.css'; 

const Kit_img: React.FC = () => (
  <Image.PreviewGroup
    items={[
        away,  
        home,
    ]}
  >
    <Image
    //   width={200}
    id='kitImg'
      src={home}
    />
  </Image.PreviewGroup>
);

export default Kit_img;

// import React, { useState } from 'react';
// import { Image } from 'antd';
// import home from '../assets/home.jpg';
// import away from '../assets/away.jpg';
// import './Shoping.css'; 

// const Kit_img: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState(home); // Initially set to home image

//   const handleImageClick = (src: string) => {
//     setSelectedImage(src);
//   };

//   return (
//     <Image.PreviewGroup>
//       <Image
//         id='kitImg'
//         src={home}
//         onClick={() => handleImageClick(home)} // Set the home image as selected on click
//       />
//       <Image
//         id='kitImg'
//         src={away}
//         onClick={() => handleImageClick(away)} // Set the away image as selected on click
//       />
//     </Image.PreviewGroup>
//   );
// };

// export default Kit_img;
