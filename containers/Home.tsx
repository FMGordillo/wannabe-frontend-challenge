import { ErrorMessage, Field, Formik, FormikConfig } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import Layout from "components/Layout";

const HomeFormFields = {
  searchValue: "searchValue",
};

type FormikFields = Record<keyof typeof HomeFormFields, string>;

const validationSchema = Yup.object({
  [HomeFormFields.searchValue]: Yup.string()
    .min(1)
    .required("Please write something"),
});

const HomeContainer: FunctionComponent = () => {
  const router = useRouter();

  const formikConfig: FormikConfig<FormikFields> = {
    initialValues: {
      searchValue: "",
    },
    validationSchema,
    onSubmit: (values) => {
      router.push(`/search/${values.searchValue}`);
    },
  };

  return (
    <Layout className="flex justify-center items-center">
      <Formik {...formikConfig}>
        {({ handleSubmit, isSubmitting, isValid }) => (
          <form
            className="flex flex-col items-center py-8 px-6 gap-4 border-2 rounded border-sky-800"
            onSubmit={handleSubmit}
          >
            <label className="grid grid-cols-2 grid-rows-2 gap-x-2 items-center">
              <span className="justify-self-end">Person&apos;s name</span>
              <Field
                type="text"
                placeholder="Luke Skywalker"
                className="border-2 py-1 px-2"
                name={HomeFormFields.searchValue}
              />
              <span className="col-span-2 justify-self-center">
                <ErrorMessage name={HomeFormFields.searchValue} />
              </span>
            </label>
            <button
              disabled={isSubmitting || !isValid}
              className="py-2 px-4 rounded-lg bg-sky-300 transition-all hover:shadow-md hover:bg-sky-400 disabled:bg-gray-400"
            >
              Search for this person!
            </button>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default HomeContainer;
