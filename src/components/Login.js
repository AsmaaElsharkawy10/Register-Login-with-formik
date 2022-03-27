import { Formik ,Form } from "formik";
import * as Yup from 'yup';
import FormikControl from './FormikControl'

function Login()
{
    const initialLoginData = {
        email:'',
        password:''
    }

    const validationData = Yup.object({
        email:Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid Email").required("Email is reqiured"),
        password:Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Please Enter valid pasword with 8 carachters containing charachters and numbers").required("password is reqiured"),
    })


    const onSubmit = values =>{
        console.log(values)
    }
    return(
         <Formik initialValues={initialLoginData} validationSchema={validationData} onSubmit={onSubmit}>
            {
            formik =>{
                return <Form className="container">
                    <h2 className="text-danger my-3">Login</h2>
                    <FormikControl control="input" type="email" lable="Email" name="email" className="form-control"/><br/><br/>
                    <FormikControl control="input" className="form-control" type="password" lable="Password" name="password" /> <br/>
                    <button className="btn btn-primary mt-3" type="submit" disabled={!formik.isValid}>Login</button>
                </Form>
            }
        }
         </Formik>
    )
}

export default Login;