import {ErrorMessage , Field} from 'formik'
function Input(props)
{
  const {lable , name ,...rest } = props
  return(
      <>
      <label htmlFor="name">{lable}</label>
       <Field id={name} name={name} {...rest}/>
       <ErrorMessage name={name}/>
      </>
  )
 }
 export default Input;