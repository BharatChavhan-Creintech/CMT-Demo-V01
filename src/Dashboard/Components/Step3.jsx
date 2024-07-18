import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Step3 = () => {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-8 xl:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem amet labore, harum voluptate illum minus, at ullam accusantium eum animi aliquid dolores. Commodi dolore repudiandae soluta ea corporis, laboriosam saepe eaque corrupti sed dignissimos ex similique impedit numquam perspiciatis nobis! Soluta deleniti accusamus, qui neque sint natus facilis ea earum eaque, culpa veniam architecto nihil pariatur saepe eum recusandae reprehenderit, minima provident beatae ab similique delectus nemo hic fugiat! Minus et quasi voluptatibus temporibus, est error possimus autem non vitae illum excepturi, adipisci inventore reprehenderit enim at veniam aliquam mollitia eveniet totam facere, ducimus expedita doloremque laudantium? Eum, incidunt ab.
              </p>
              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-[#f6591c]">Offer recommendations</a>
                <address className="mt-2 not-italic">Need Help ?</address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4">
                <div>
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
                <div>
                  <label className="sr-only" htmlFor="recommendations">Recommendations</label>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label
                        htmlFor="recommendation1"
                        className="block cursor-pointer rounded-lg border border-orange-200 p-3 text-gray-600 hover:border-[#f6591c] has-[:checked]:border-[#f6591c] has-[:checked]:bg-[#f6591c] has-[:checked]:text-white"
                      >
                        <Field
                          className="sr-only"
                          type="checkbox"
                          id="recommendation1"
                          name="recommendations"
                          value="Recommendation 1"
                        />
                        <span className="text-sm">Recommendation 1</span>
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="recommendation2"
                        className="block cursor-pointer rounded-lg border border-orange-200 p-3 text-gray-600 hover:border-[#f6591c] has-[:checked]:border-[#f6591c] has-[:checked]:bg-[#f6591c] has-[:checked]:text-white"
                      >
                        <Field
                          className="sr-only"
                          type="checkbox"
                          id="recommendation2"
                          name="recommendations"
                          value="Recommendation 2"
                        />
                        <span className="text-sm">Recommendation 2</span>
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="recommendation3"
                        className="block cursor-pointer rounded-lg border border-orange-200 p-3 text-gray-600 hover:border-[#f6591c] has-[:checked]:border-[#f6591c] has-[:checked]:bg-[#f6591c] has-[:checked]:text-white"
                      >
                        <Field
                          className="sr-only"
                          type="checkbox"
                          id="recommendation3"
                          name="recommendations"
                          value="Recommendation 3"
                        />
                        <span className="text-sm">Recommendation 3</span>
                      </label>
                    </div>
                  </div>
                  <ErrorMessage name="recommendations" component="div" className="text-red-500" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Step3;
