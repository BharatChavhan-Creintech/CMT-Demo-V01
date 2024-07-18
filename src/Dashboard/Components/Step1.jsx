// Step1.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Step1 = () => (

    <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-8 xl:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem amet labore, harum voluptate illum minus, at ullam accusantium eum animi aliquid dolores. Commodi dolore repudiandae soluta ea corporis, laboriosam saepe eaque corrupti sed dignissimos ex similique impedit numquam perspiciatis nobis! Soluta deleniti accusamus, qui neque sint natus facilis ea earum eaque, culpa veniam architecto nihil pariatur saepe eum recusandae reprehenderit, minima provident beatae ab similique delectus nemo hic fugiat! Minus et quasi voluptatibus temporibus, est error possimus autem non vitae illum excepturi, adipisci inventore reprehenderit enim at veniam aliquam mollitia eveniet totam facere, ducimus expedita doloremque laudantium? Eum, incidunt ab.
              </p>
              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-[#f6591c]">Fill Your Data</a>
                <address className="mt-2 not-italic">Need Help ?</address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4">
                <div className=''>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <Field
                    className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                    placeholder="Enter Name"
                    type="text"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <Field
                      className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <Field
                      className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                      placeholder="Enter your number"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-orange-200 p-3 text-gray-600 hover:border-[#f6591c] has-[:checked]:border-[#f6591c] has-[:checked]:bg-[#f6591c] has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <Field className="sr-only" id="Option1" type="radio" name="option" value="Option 1" />
                      <span className="text-sm"> Option 1 </span>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-orange-200 p-3 text-gray-600 hover:border-[#f6591c] has-[:checked]:border-[#f6591c] has-[:checked]:bg-[#f6591c] has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <Field className="sr-only" id="Option2" type="radio" name="option" value="Option 2" />
                      <span className="text-sm"> Option 2 </span>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-orange-200 p-3 text-gray-600 hover:border-[#f6591c] has-[:checked]:border-[#f6591c] has-[:checked]:bg-[#f6591c] has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <Field className="sr-only" id="Option3" type="radio" name="option" value="Option 3" />
                      <span className="text-sm"> Option 3 </span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <Field
                    className="appearance-none block w-full p-3 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-500 transition duration-150 ease-in-out sm:text-md sm:leading-5"
                    placeholder="Enter Text here"
                    as="textarea"
                    rows="8"
                    id="message"
                    name="message"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

);

export default Step1;
