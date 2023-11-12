import React, { useState, ChangeEvent, FormEvent } from "react";
import { useTopicsContext } from "../Context";

interface FormData {
  name: string;
  phoneNumber: string;
  dateTime: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    dateTime: "",
  });

  const [submissionComplete, setSubmissionComplete] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmissionComplete(true);
  };
  const { continueClicked } = useTopicsContext();

  return continueClicked ? (
    <div className="row d-flex justify-content-center text-center border border-white rounded-999 m-3">
      <div className="text-center col-10">
        {submissionComplete ? (
          <p className="thanks-message">
            Thanks for submitting the form! <br /> We will be in touch soon to
            confirm your viewings
          </p>
        ) : (
          <>
            <h4>Contact Form</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* Name Field */}
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <br />
              <div className="form-group">
                {/* Telephone Number Field */}
                <label htmlFor="phoneNumber">Phone Number:</label>
                <br />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  pattern="^\(?0\d{4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <br />
              <div className="form-group">
                {/* Date and Time Picker */}
                <label htmlFor="dateTime">Date and Time:</label>
                <br />
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                />
              </div>

              <br />

              {/* Submit Button */}
              <button type="submit" className="btn btn-success m-3">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default ContactForm;
