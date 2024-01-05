import React from "react";
import "./styles.css";
// ====================================== images ========================================
import image1 from "./images/img4.jpg";
import image2 from "./images/setImage1.png";
import image3 from "./images/setImage2.png";
import image4 from "./images/setImageOne.jpeg";

// const Banner = ({ imageSrc, title, buttonText, buttonLink, isFullWidth }) => (
//   <div
//     className={`bwp-widget-banner layout-1 ${
//       isFullWidth ? "style1" : "style2"
//     }`}>
//     <div className='bg-banner'>
//       <div className='banner-wrapper banners'>
//         <div
//           className={`bwp-image ${isFullWidth ? "full-width" : "half-width"}`}>
//           <a href={buttonLink}>
//             <img src={imageSrc} alt='Banner Image' />
//           </a>
//         </div>
//         <div className='banner-wrapper-infor'>
//           <div className='info'>
//             <div className='content'>
//               <h3 className='title-banner'>{title}</h3>
//               <a className='button' href={buttonLink}>
//                 {buttonText}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

const Home = () => {
  return (
    <div className='grid '>
      <div className='row-1'>
        <img src={image1} alt='IMG 1' srcSet='' />
      </div>

      <div className='row-2'>
        <img src={image2} alt='img 2' srcSet='' />
      </div>

      <div className='row-3'>
        <img src={image3} alt='img 3' srcSet='' />
      </div>

      <div className='row-4'>
        <img src={image4} alt='img 4' srcSet='' />
      </div>
    </div>
  );
};

export default Home;
