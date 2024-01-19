import React from "react";
import styles, { layout } from "../style";

const Form = () => {
  return (
    <div >
      <section  class="dimBluee dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-[2.5rem] font-extrabold text-center text-[#e60e57]">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-10 font-light text-center text-dimWhite text-md">
            Welcome to Our Contact Us page! We're thrilled that you want to get
            in touch with us. Your feedback and inquiries are important to us.
            Whether you have questions, suggestions, or need assistance, we're
            here to help. Fill out the form below, and we'll get back to you
            promptly.
          </p>
          <form
            action="https://formspree.io/f/meqyobaz"
            method="POST"
            class="space-y-8"
          > 
            <div>
                <label
                    for="fname"
                    class="block mb-2 text-sm font-medium text-black dark:text-gray-300">
                    YOUR NAME
                </label>
                <input
                      type="text"
                      id="name"
                      name="name"
                      class="shadow-sm bg-transparent border border-gray-300 text-dimWhite text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="What is your name"
                      required/>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black dark:text-gray-300"
                
              >
                YOUR MAIL:
              </label>
              <input
                type="email"
                id="email"
                name="mail"
                class="shadow-sm bg-transparent border border-gray-300 text-dimWhite text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Make sure to type the correct address!"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-black dark:text-gray-300"
              >
                SUBJECT:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="block p-3 w-full text-sm text-dimWhite bg-transparent rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-black dark:text-gray-400"
              >
                MESSAGE:
              </label>
              <textarea
                id="message"
                name="context"
                rows="6"
                class="block p-2.5 w-full text-sm text-dimWhite bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className={` group py-4 px-6 w-full font-poppins font-medium text-[18px] text-[#00040F] bg-[#7e8de1] hover:opacity-90 rounded-[10px] border-[#5664] outline-none ${styles} `}
            >
              SUBMIT
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 opacity-40  " />
            </button>
            
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;