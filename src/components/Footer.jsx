import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/Logo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Solutions",
    items: ["Brand Strategy", "Content Marketing", "SEO & SEM", "Social Media Management"],
  },

  {
    title: "Get to Know Us",
    items: ["Our Philosophy", "Career Opportunities", "Media Kit", "Get in Touch"],
  },
  {
    title: "Legal",
    items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility Statement"],
  },
];


export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Alowes Marketing Solutions
                </div>
              </div>
              <p className="text-gray-400 mt-4">
                Casting tales of marketing magic and digital enchantments far and wide.
              </p>
              <div className="w-36 mx-auto lg:mx-0 mt-3 ">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>


            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between text-white">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold">Solutions</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-teal-300 transition-colors duration-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold">Get to Know Us</h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-teal-300 transition-colors duration-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold">Legal</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-teal-300 transition-colors duration-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Crafted with care and a sprinkle of fairy dust by &nbsp;
            <a
              href="https://softdone.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors duration-300"
            >
                Softdone
            </a>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  );
};
