// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFormik } from 'formik'
import React, { useState , useEffect} from 'react';
import { Accounts } from 'meteor/accounts-base';
// eslint-disable-next-line import/no-unresolved
import { RoutePaths } from '../components/main/RoutePaths';
import { useTracker } from 'meteor/react-meteor-data';
// eslint-disable-next-line import/no-unresolved
import { SignedIn } from './SignedIn';
import { object, string } from 'yup';


export const LoginForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userId = useTracker(() => Meteor.userId());
  const navigate = useNavigate();

  const validationSchema = object({
    username: string('Enter your username').required('Username is required'),
    password: string('Enter your password').required('Password is required'),
  });

  const handleError = (error, actions) => {
    if (error) {
      const errorMessage = error?.reason || 'Sorry, please try again.';
      actions.setStatus(errorMessage);
    }
    actions.setSubmitting(false);
    navigate(RoutePaths.BLOGSPAGE);
  };

  const onSubmit = (values, actions) => {
    const { username, password } = values;
    if (isSignup) {
      Accounts.createUser({ username, password }, error => {
        handleError(error, actions);
      });
    } else {
      Meteor.loginWithPassword(username, password, error => {
        handleError(error, actions);
      });
    }
  };

  const formik = useFormik({
    initialValues: { username: 'simon', password: 'abc123' },
    validationSchema,
    onSubmit,
  });

  if (userId) {
    return <SignedIn />;
  }
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-8 mx-auto py-12 px-6">
      <h1 className="flex items-center text-4xl text-cyan-500">
            Sign in to your account
            </h1>
          <p className='text-lg  text-cyan-500'>
            to start jotting your simple jot
          </p>
       
        <div className='rounded-lg bg-gray-300 shadow-lg p-8'
        >
          <ErrorStatus status={formik.status} />
          <form onSubmit={formik.handleSubmit}>
            <div className='space-y-4'>
              <div
                isInvalid={formik.errors.username && formik.touched.username}
              >
                <input
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder="Enter your username"
                  className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage>{formik.errors.username}</ErrorMessage>
              </div>
              <div
                isInvalid={formik.errors.password && formik.touched.password}
              >
                <div className='text-lg'>
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="focus:ring-sky-500 text-gray-500 focus:border-sky-500 hover:bg-slate-500 hover:text-white block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                  <div className='width-4.5rem'>
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              </div>
              {!isSignup && (
                <>
                   <div className='space-y-10'>
                    <button
                     className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      isLoading={formik.isSubmitting}
                    >
                      Sign in
                    </button>
                  </div>
                  <div className='space-y-10'>
                    <button onClick={() => setIsSignup(true)} variant="link">
                      Create a new account
                    </button>
                  </div>
                </>
              )}

              {isSignup && (
                <>
                   <div className='space-y-10'>
                    <button
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      isLoading={formik.isSubmitting}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className='space-y-10'>
                    <button onClick={() => setIsSignup(false)} variant="link">
                      I have an account
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
  );
}
