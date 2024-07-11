import axios from "axios";
import { Form, Formik } from "formik";

import FormField from "@/src/components/common/form/FormField";

interface Props {
  handleSubmit: (values: { prompt: string }) => void;
}

function TopSection({ handleSubmit }: Props) {
  const validatePrompt = (value: string) => {
    let error;
    if (!value) {
      error = "Enter a Prompt to get started";
    }
    return error;
  };

  return (
    <section className="mt-10">
      <h2 className="font-semibold text-center text-3xl py-8 text-gray-600">
        Plan your trip in seconds{" "}
        <span className="font-black text-black">NOT</span> days
      </h2>
      <div className="md:max-w-[700px] m-auto my-5">
        <Formik
          initialValues={{ prompt: "" }}
          onSubmit={async (values) => handleSubmit(values)}
        >
          {(props) => (
            <Form>
              <FormField
                name="prompt"
                placeholder="Enter a prompt to get started e.g Make an itinerary for a trip to London..."
                validate={validatePrompt}
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default TopSection;
