import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaChevronDown } from 'react-icons/fa';
// import {} from 'formik'

const Step2 = () => (
  <section className="">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-8 xl:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem amet labore, harum voluptate illum minus, at ullam
            accusantium eum animi aliquid dolores. Commodi dolore repudiandae
            soluta ea corporis, laboriosam saepe eaque corrupti sed dignissimos
            ex similique impedit numquam perspiciatis nobis! Soluta deleniti
            accusamus, qui neque sint natus facilis ea earum eaque, culpa veniam
            architecto nihil pariatur saepe eum recusandae reprehenderit, minima
            provident beatae ab similique delectus nemo hic fugiat! Minus et
            quasi voluptatibus temporibus, est error possimus autem non vitae
            illum excepturi, adipisci inventore reprehenderit enim at veniam
            aliquam mollitia eveniet totam facere, ducimus expedita doloremque
            laudantium? Eum, incidunt ab.
          </p>
          <div className="mt-8">
            <a href="#" className="text-2xl font-bold text-[#f6591c]">
              Allocate to authority
            </a>
            <address className="mt-2 not-italic">Need Help ?</address>
          </div>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="committeeActivity">
                Committee Activity
              </label>
              <div className="relative w-full">
                <Field
                  as="select"
                  name="committeeActivity"
                  id="committeeActivity"
                  className="block w-full p-3 pr-10 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5 appearance-none bg-white"
                >
                  <option value="">Select an Authority</option>
                  <option value="activity1">District Officer</option>
                  <option value="activity2">Internal Committee</option>
                  <option value="activity3">State Women’s Commission</option>
                </Field>
                <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>

              <ErrorMessage
                name="committeeActivity"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <Field
                className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                placeholder="Enter Name"
                type="text"
                id="name"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <Field
                  className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <Field
                  className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                  placeholder="Enter your number"
                  type="tel"
                  id="phone"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <Field
                className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                placeholder="Enter Text here"
                as="textarea"
                rows="8"
                id="message"
                name="message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Step2;
