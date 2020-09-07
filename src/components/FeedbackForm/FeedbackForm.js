import React, {useState} from "react";
import Field from "../_helpers/Field";
import "./style.scss";

export default function FeedbackForm({onCancel, onSubmit}) {
    const initialState = {
        name: '',
        phone: '',
        service: ''
    };
    const [feedbackForm, setFeedbackForm] = useState(initialState);
    const [isSubmiting, setIsSubmiting] = useState(true);
    const [errors, setErrors] = useState(initialState);

    const onChange = (name, value) => {
        setFeedbackForm({...feedbackForm, [name]: value});
    };

    const submit = event => {
        event.preventDefault();
        // executeRecaptcha('feedbackForm').then((token) => {
        //     feedbackForm.token = token;
        //     feedbackForm.form = 'feedbackForm';
        //     client.post('/react.php', feedbackForm)
        //         .then(response => {
        //             const result = response.data.result;
        //             const resErrors = response.data.errors;
        //             if (result === 1) {
        //                 if (resErrors.hasOwnProperty('captcha')) {
        //                     alert(resErrors.captcha);
        //                 }
        //                 setErrors(resErrors);
        //                 setIsSubmiting(false);
        //             } else if (result === 0) {
        //                 setFeedbackForm(initialState);
        //                 setIsSubmiting(true);
        //                 showMessage();
        //                 setErrors(initialState);
        //             }
        //         })
        //         .catch(error => {
        //             console.log("An error occurred:", error);
        //         });
        //  });
    };
    return (
        <div className="feedbackForm">
            <div className="feedbackForm-header">
                Заповніть, будь ласка, заявку і ми вам зателефонуємо!
            </div>
            <div className="feedbackForm-body">
                <form className="form" onSubmit={submit}>
                    <Field
                        className={`input ${!isSubmiting && errors.name && "error-input"}`}
                        name="name"
                        value={feedbackForm.name}
                        placeholder="Ваше ім'я"
                        type="text"
                        onChange={onChange}
                    />
                    <Field
                        className={`input ${!isSubmiting && errors.phone && "error-input"}`}
                        name="phone"
                        value={feedbackForm.phone}
                        placeholder="Телефон"
                        type="text"
                        onChange={onChange}
                    />
                    <textarea
                        className={`input textarea ${!isSubmiting && errors.service && "error-input"}`}
                        id="service"
                        name="service"
                        placeholder="Бажана послуга"
                        value={feedbackForm.service}
                        onChange={onChange}/>
                    <div className="text-center">
                        <button className="btn btn-order">
                            Відправити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}




