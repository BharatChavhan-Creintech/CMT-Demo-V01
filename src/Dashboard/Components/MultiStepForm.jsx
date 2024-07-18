import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Summary from "./Summery";
import { FormContext } from "../../context/FormContext";
import ProgressSteps from "./PrgressSteps";
import { step1Schema, step2Schema, step3Schema } from "../../Core/validation";

const MultiStepForm = () => {
  const { formData, setFormData, nextStep, prevStep } = useContext(FormContext);

  const validationSchema = formData.step === 3 ? step3Schema : formData.step === 2 ? step2Schema : formData.step === 1 ? step1Schema : null;

  // console.log("Step", formData.step);

  const handleSubmit = (values, { setSubmitting }) => {
    setFormData((prevState) => ({ ...prevState, ...values }));
    if (formData.step === 4) {
      console.log(values); // Final submission
    } else {
      nextStep();
    }
    setSubmitting(false); // should be false, not true
  };

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Summary />;
      default:
        return <Step1 />;
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <ProgressSteps />
          {renderStep()}
          <div className="flex justify-around">
           
              <button
                type="button"
                className={`border-[1px] px-4 py-2 ${formData.step < 2 ? "border-orange-300 px-4 rounded-md font-semibold text-orange-300 cursor-not-allowed":" border-orange-600 rounded-md font-semibold text-orange-600 hover:bg-orange-500 hover:border-none hover:text-white transition-all ease-in-out duration-75"} `}
                onClick={prevStep}
                disabled={formData.step < 2}
              >
                Previous
              </button>
       
            <button
              type="submit"
              className={
                "border-[1px] border-orange-600 px-4 py-2 rounded-md font-semibold text-orange-600 hover:bg-orange-500 hover:border-none hover:text-white transition-all ease-in-out duration-75"
              }
              disabled={isSubmitting}
            >
              {formData.step === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
