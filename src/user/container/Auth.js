// import React from 'react';

// const Sign = () => {
//     return (
//         <>
//             {/* <div className="page-heading header-text">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <h3>Our game</h3>
//                             <span className="breadcrumb"><a href="#">Home</a> &gt; Our Game</span>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}

//         </>
//     );
// };

// export default Sign;

import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../component/UI/Button';

function Auth(props) {

  const [authType, setAuthType] = useState('login');
  const navigate = useNavigate();


  let authObj = {}, authVal = {}

  if (authType === 'login') {
    authObj = {
      email: yup.string().email('please enter a valid email').required('please enter a email'),
      password: yup.string().required('please enter a password'),
    }
    authVal = {
      email: '',
      password: ''
    }

  } else if (authType === 'sign up') {
    authObj = {
      name: yup.string().required('plase enter a name'),
      email: yup.string().email('please enter a valid email').required('please enter a email'),
      password: yup.string().required('please enter a password'),
    }
    authVal = {
      name: '',
      email: '',
      password: ''
    }
  } else {
    authObj = {
      email: yup.string().required('please enter a password'),
    }
    authVal = {
      email: ''
    }
  }


  let authSchema = yup.object(authObj);

  const formik = useFormik({
    validationSchema: authSchema,
    initialValues: authVal,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      action.resetForm();
      console.log('sdd');
      console.log(values);

      if (authType === 'login') {
        handlelogin();
      } else if (authType === 'sign up') {
        handleregister()
      } else if (authType === 'forgot') {
        handleforgot();
      }
    },
  });

  const handlelogin = () => {
    localStorage.setItem("logindata", 'true')
    navigate('/')
  }

  const handleregister = () => {

  }

  const handleforgot = () => {

  }

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik;


  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our game</h3>
              <span className="breadcrumb"><a href="#">Home</a> &gt; Our Game</span>
            </div>  
          </div>
        </div>
      </div>


      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {
              authType === 'login' ? <h2>Login</h2> :
                authType === 'sign up' ? <h2>Sign up</h2> : <h2>Reset password</h2>
            }

            {/* <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p> */}
          </div>
          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row justify-content-center" >
              {
                authType === 'login' || authType === 'forgot' ? null :
                  <div className="col-md-7 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}</span>
                    <div className="validate" />
                  </div>

              }

              <div className="col-md-7 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}</span>

                <div className="validate" />
              </div>

              {
                authType !== 'forgot' ?
                  <div className="col-md-7 form-group mt-3 mt-md-0">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Your password"
                      data-rule="minlen:4"
                      data-msg="Please enter a password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : null}</span>
                    <div className="validate" />
                  </div> : null
              }

            </div>

            {
              authType === 'login' ?
                <div className="text-center"><Button>Login</Button></div> :
                authType === 'sign up' ?
                  <div className="text-center"><Button>Sign up</Button></div> :
                  <div className="text-center"><Button>Submit</Button></div>
            }

          </form>
        </div>
        {
          authType === 'login' ?
            <>
              <div className='text-center'>
                <a href="#" onClick={() => setAuthType('forgot')}>  Forgot password ?</a>
                <div className='text-center'>
                  <span>You have already account ? <a href="#" onClick={() => setAuthType('sign up')}> Sign up </a></span>
                </div>
              </div>
            </> :
            <div className='text-center'>
              <span>Creat new account<a href="#" onClick={() => setAuthType('login')}>  Login </a> </span>
            </div>
        }<br /><br />

      </section>

    </>
  );
}

export default Auth;