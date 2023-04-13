import React, { useState } from 'react';
import { baseUrl } from '../utils/env_variables';

const ConfessForm = () => {
    const [subject, setSubject] = useState('');
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleSubjectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSubject(event.target.value);
        validateForm();
    };

    const handleReasonChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setReason(event.target.value);
        validateForm();
    };

    const handleDetailsChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDetails(event.target.value);
        validateForm();
    };

    const validateForm = () => {
        // define your validation rules here
        const isSubjectValid = subject.trim().length > 0;
        const isDetailsValid = details.trim().length > 0;
        const isReasonValid = reason !== '';

        setIsValid(isSubjectValid && isDetailsValid && isReasonValid);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const confessionData = {
            subject: subject.trim(),
            reason: reason,
            details: details.trim(),
        };

        // POST the form data to the server
        fetch(`${baseUrl}/api/confess`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(confessionData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    if (!data.justTalked) {
                        // add the confession data to your list of misdemeanours
                    }
                } else {
                    // display an error message
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // display an error message
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="subject-input">Subject</label>
                <input
                    id="subject-input"
                    type="text"
                    value={subject}
                    onChange={handleSubjectChange}
                />
            </div>
            <div>
                <label htmlFor="reason-select">Reason</label>
                <select id="reason-select" value={reason} onChange={handleReasonChange}>
                    <option value="">-- Please select a reason --</option>
                    <option value="just-talk">I just want to talk</option>
                    <option value="misdemeanour-1">Misdemeanour 1</option>
                    <option value="misdemeanour-2">Misdemeanour 2</option>
                    <option value="misdemeanour-3">Misdemeanour 3</option>
                </select>
            </div>
            <div>
                <label htmlFor="details-textarea">Details</label>
                <textarea
                    id="details-textarea"
                    value={details}
                    onChange={handleDetailsChange}
                />
            </div>
            <button type="submit" disabled={!isValid}>
                Confess
            </button>
        </form>
    );
};

export default ConfessForm;
