// @ts-nocheck
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
// import {
// editPostAction,
//   fetchPostAction,
// } from "../../../redux/slices/posts/postSlices";
import {CategoriesOptions} from "../../Categories/CategoriesOptions";
import { DisabledBtn } from "../../DisabledBtn/DisabledBtn";
import { ServerErrors } from "../../ErrorMessage/SeverErrors/ServerErrors";
import { LoadingComponent } from "../../Loading/LoadingComponent";

const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.object().required("Category is required"),
});

export const UpdatePost = (props) =>{
  const {
    computedMatch: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  //Fetch post
  useEffect(() => {
    dispatch(fetchPostAction(id));
  }, [id, dispatch]);
  //store
  const posts = useSelector((state) => state?.posts);
  const { postLoading, postAppErr, postServerErr, isUpdated, post } = posts;

  //formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: post?.title,
      description: post?.description,
      image: "",
      category: "",
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        id,
        category: values?.category?.label,
      };

      dispatch(editPostAction(data));
    },
    validationSchema: formSchema,
  });
  //Redirect
  if (isUpdated) {
    return <Redirect to="/posts" />;
  }
  return (
    <>
      {postLoading ? (
        <LoadingComponent />
      ) : postAppErr || postServerErr ? (
        <ServerErrors appErr={postAppErr} serverErr={postServerErr} />
      ) : (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
              Are you sure you want to edit{" "}
              <span className="text-green-300">{post?.title}</span>
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="mt-1">
                    <input
                      id="title"
                      name="title"
                      type="title"
                      autoComplete="title"
                      onBlur={formik.handleBlur("title")}
                      value={formik.values.title}
                      onChange={formik.handleChange("title")}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-red-500">
                    {formik.touched.title && formik.errors.title}
                  </div>
                </div>

                <CategoriesOptions
                  value={formik.values.category?.categoryTitle}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.category}
                  touched={formik.touched.category}
                />
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    rows="5"
                    cols="10"
                    onBlur={formik.handleBlur("description")}
                    value={formik.values.description}
                    onChange={formik.handleChange("description")}
                    className="rounded-lg appearance-none block w-full py-3 px-3 text-base text-center leading-tight text-gray-600 bg-transparent focus:bg-transparent  border border-gray-200 focus:border-gray-500  focus:outline-none"
                    type="text"
                  ></textarea>
                  <div className="text-red-500">
                    {formik.touched.description && formik.errors.description}
                  </div>
                </div>

                <div>
                  {postLoading ? (
                    <DisabledBtn />
                  ) : (
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
