import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Ethan Grant",
    customerTitle: "Marketing Director at Creativio",
    content:
      "Alowes Marketing Solutions empowered us to unlock the full potential of our data. Their marketing analytics suite provided us with unparalleled insights, enabling our team to craft campaigns that resonate deeply with our audience. The results? Increased engagement and a significant boost in conversions.",
   image: testimonial1,
  },
  {
    customerName: "Samantha Lee",
    customerTitle: "CMO at TrendMakers",
    content:
      "The predictive analytics from Alowes Marketing Solutions has been a revelation for our strategy sessions. It's like we've been given the keys to a treasure trove of market predictions that have consistently put us ahead of the competition. Our marketing efforts are now more proactive than reactive, thanks to Alowes.",
     image: testimonial2,
  },
  {
    customerName: "Mario Gomez",
    customerTitle: "CMO at Apex Dynamics",
    content:
      "Integrating Alowes Marketing Solutions into our workflow was a game-changer. The seamless API integrations brought all our marketing channels into one easy-to-navigate platform. It's been instrumental in streamlining our processes and enhancing the efficiency of our marketing strategies, thanks for all.",
      image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
        Join the Community 
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
