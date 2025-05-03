import { useState, useEffect } from 'react';
import TejImg from '../assets/tej.jpg';
import ManojImg from '../assets/manoj.jpg';
import AjitImg from '../assets/ajit.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  const testimonials = [
    {
      name: "Diwash Adhikari",
      title: "CEO, Tech Innovations",
      feedback: "NexoVision transformed our online presence. Our website traffic increased by 300% in just 3 months!",
      image: TejImg
    },
    {
      name: "Prajwol Shrestha",
      title: "Marketing Director, Retail Pro",
      feedback: "The team's attention to detail and data-driven approach delivered exceptional ROI on our ad spend.",
      image: ManojImg
    },
    {
      name: "Nirajan Singh",
      title: "Founder, Foodie Delight",
      feedback: "From website redesign to social media management, NexoVision has been an invaluable partner.",
      image: AjitImg
    }
  ];

  const changeTestimonial = (direction = 1) => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === 1
          ? (prevIndex + 1) % testimonials.length
          : (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setSlideIn(true);
    }, 500); // animation reset delay
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial(1); // Auto move to next
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What Our Clients Say</h2>

        <div className="max-w-4xl mx-auto relative overflow-hidden h-auto">
          <div
            className={`bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm transform transition-transform duration-500 ease-out
              ${slideIn ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
              />
              <div>
                <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].feedback}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => changeTestimonial(-1)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            >
              &larr;
            </button>
            <button
              onClick={() => changeTestimonial(1)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
