// import React, { useState } from 'react';
// import styles from './Testimonial.module.css';

// const testimonialsData = [
//   { id: 1, text: 'a.TechSphere gave me the perfect platform to showcase my skills and connect with like-minded innovators. The experience was both challenging and rewarding!', userImage: '/src/TestImages/image1.png', userName: 'John Doe',userDesignation:"Programmer" },
//   { id: 2, text: "b.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer" },
//   { id: 3, text: 'c.Winning at TechSphere was a turning point for me. The cash prize and exposure opened doors to new career opportunities!', userImage: '/src/TestImages/image1.png', userName: 'Alice Johnson',userDesignation:"Programmer" },
//   { id: 4, text: "d.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer" },
//   { id: 5, text: "e.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer" },
//   { id: 6, text: "f.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer"},
//   { id: 7, text: "g.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer" },
//   { id: 8, text: "h.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer" },
//   { id: 9, text: "i.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/src/TestImages/image1.png', userName: 'Jane Smith',userDesignation:"Programmer"},
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
//   };

//   const handleNext = () => {
//     setCurrentIndex(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
//   };

//   return (
//     <section className={styles.testimonials}>
//       <div className = {styles.header}>
//         <h2>Testimonials</h2>
//         <div className={styles.navigation}>
//           <button className={styles.arrow} onClick={handlePrev}><img src = "/src/TestImages/arrow1.svg"></img></button>
//           <button className={styles.arrow} onClick={handleNext}><img src = "/src/TestImages/arrow2.svg"></img></button>
//           </div>
//         </div>
//       <div className={styles.testimonialCards}>
//         {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial) => (
//           <div key={testimonial.id} className={styles.testimonialCard}>
//             <p>{testimonial.text}</p>
//             <div className={styles.user}>
//               <img src={testimonial.userImage} alt={testimonial.userName} className={styles.userImage} />
//               <div className={styles.userText}>
//                 <p>{testimonial.userName}</p>
//                 <p>{testimonial.userDesignation}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React, { useState } from 'react';
import styles from './Testimonial.module.css';

const testimonialsData = [
  { id: 1, text: 'a.TechSphere gave me the perfect platform to showcase my skills and connect with like-minded innovators. The experience was both challenging and rewarding!', userImage: '/TestImages/image1.png', userName: 'John Doe', userDesignation: 'Programmer' },
  { id: 2, text: "b.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
  { id: 3, text: 'c.Winning at TechSphere was a turning point for me. The cash prize and exposure opened doors to new career opportunities!', userImage: '/TestImages/image1.png', userName: 'Alice Johnson', userDesignation: 'Programmer' },
  { id: 4, text: "d.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
  { id: 5, text: "e.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
  { id: 6, text: "f.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
  { id: 7, text: "g.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
  { id: 8, text: "h.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
  { id: 9, text: "i.Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: '/TestImages/image1.png', userName: 'Jane Smith', userDesignation: 'Programmer' },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? testimonialsData.length - (testimonialsData.length % 3 || 3) : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonialsData.length ? 0 : prevIndex + 3
    );
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <h2>Testimonials</h2>
        <div className={styles.navigation}>
          <button className={styles.arrow} onClick={handlePrev}>
            <img src="/TestImages/arrow1.svg" alt="Previous" />
          </button>
          <button className={styles.arrow} onClick={handleNext}>
            <img src="/TestImages/arrow2.svg" alt="Next" />
          </button>
        </div>
      </div>
      <div className={styles.testimonialCards}>
        {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <p>{testimonial.text}</p>
            <div className={styles.user}>
              <img src={testimonial.userImage} alt={testimonial.userName} className={styles.userImage} />
              <div className={styles.userText}>
                <p className={styles.userName}>{testimonial.userName}</p>
                <p className={styles.userDesignation}>{testimonial.userDesignation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


// import React, { useState } from "react";
// import styles from "./Testimonial.module.css";

// const testimonialsData = [
//   { id: 1, text: "TechSphere gave me the perfect platform to showcase my skills and connect with like-minded innovators. The experience was both challenging and rewarding!", userImage: "/TestImages/image1.png", userName: "John Doe", userDesignation: "Programmer" },
//   { id: 2, text: "Our team built a fully functional prototype in just 48 hours, thanks to TechSphere's seamless event organization. Highly recommend it to every tech enthusiast!", userImage: "/TestImages/image1.png", userName: "Jane Smith", userDesignation: "Programmer" },
//   { id: 3, text: "Winning at TechSphere was a turning point for me. The cash prize and exposure opened doors to new career opportunities!", userImage: "/TestImages/image1.png", userName: "Alice Johnson", userDesignation: "Programmer" },
//   { id: 4, text: "TechSphere's hackathon was an unforgettable experience. Our team built something amazing!", userImage: "/TestImages/image1.png", userName: "Michael Brown", userDesignation: "Developer" },
//   { id: 5, text: "Highly organized, great networking opportunities, and valuable learning experiences!", userImage: "/TestImages/image1.png", userName: "Emma Wilson", userDesignation: "Software Engineer" },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalTestimonials = testimonialsData.length;
//   const itemsPerPage = 3;

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - itemsPerPage : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex >= totalTestimonials - itemsPerPage ? 0 : prevIndex + 1));
//   };

//   return (
//     <section className={styles.testimonials}>
//       <div className={styles.header}>
//         <h2>Testimonials</h2>
//         <div className={styles.navigation}>
//           <button className={styles.arrow} onClick={handlePrev}>
//             <img src="/TestImages/arrow1.svg" alt="Previous" />
//           </button>
//           <button className={styles.arrow} onClick={handleNext}>
//             <img src="/TestImages/arrow2.svg" alt="Next" />
//           </button>
//         </div>
//       </div>
//       <div className={styles.testimonialCards}>
//         {testimonialsData.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial) => (
//           <div key={testimonial.id} className={styles.testimonialCard}>
//             <p>{testimonial.text}</p>
//             <div className={styles.user}>
//               <img src={testimonial.userImage} alt={testimonial.userName} className={styles.userImage} />
//               <div className={styles.userText}>
//                 <p>{testimonial.userName}</p>
//                 <p>{testimonial.userDesignation}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
