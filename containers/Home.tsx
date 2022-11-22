import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";

const HomeFormFields = {
  searchValue: "searchValue",
};

type FormikFields = Record<keyof typeof HomeFormFields, string>;

const validationSchema = Yup.object({
  [HomeFormFields.searchValue]: Yup.string(),
});

const HomeContainer: FunctionComponent = () => {
  const router = useRouter();

  const formik = useFormik<FormikFields>({
    initialValues: {
      searchValue: "",
    },
    validationSchema,
    onSubmit: (values) => {
      router.push(`/search/${values.searchValue}`);
    },
  });

  return (
    <main className="flex h-screen justify-center items-center">
      <form className="flex flex-col gap-4" onSubmit={formik.submitForm}>
        <input
          type="text"
          placeholder="Luke Skywalker"
          className="border-2 py-1 px-2"
          onChange={formik.handleChange}
          name={HomeFormFields.searchValue}
          value={formik.values.searchValue}
        />
        <button>Search for this person!</button>
      </form>
    </main>
  );
};

export default HomeContainer;
