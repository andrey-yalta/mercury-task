import React from "react";
import {Formik,Form} from "formik";
import * as yup from "yup"


export const FeedbackForm = ()=>{

    const validationSchema = yup.object().shape({
        name:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        lastName:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        number:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),

    })

    return(
        <Formik
            initialValues={{name:"", lastName:"", number:"" }}
            validateOnBLur validationSchema={validationSchema } onSubmit={(values)=>{alert( values.name+ ' '+ values.lastName + ' ' +values.number)}}

        >
            {({values, errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty}
            )=>(
                    <Form className={"feedback__form-inputs"}>
                        <input type="text" name="name" className={touched.name && errors.name && "feedback__form-error" } placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                        {touched.name && errors.name && <p  className={"feedback__form-error"}>{ errors.name}</p>}
                        <input type="text" name="lastName" placeholder="last name" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
                        {touched.lastName && errors.lastName && <p className={"feedback__form-error"}>{ errors.lastName}</p>}
                        <input type="tel" name="number" placeholder="Nuber" onChange={handleChange} onBlur={handleBlur} value={values.number}/>
                        {touched.number && errors.number && <p className={"feedback__form-error"}>{ errors.number}</p>}
                        <button  className={!isValid?"cart-button disabled":"cart-button"} disabled={!isValid} onClick={handleSubmit} type={'submit'}>
                            Отправить
                        </button>
                    </Form>
            )}
        </Formik>
    )
}