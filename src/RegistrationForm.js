import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Ім'я є обов'язковим полем"),
            email: Yup.string()
                .email("Введіть коректний email")
                .required("Email є обов'язковим полем"),
            phone: Yup.string()
                .matches(/^\d{12}$/, "Телефон повинен складатися з 12 цифр")
                .required("Телефон є обов'язковим полем"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Ім'я:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">Електронна пошта:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="phone">Телефон:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div>{formik.errors.phone}</div>
                ) : null}
            </div>

            <button type="submit">Відправити</button>
        </form>
    );
};

export default RegistrationForm;
