import React, { useState } from "react";

const QuestionForm: React.FC = () => {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validation logic
    const validationErrors: { name?: string; phone?: string; email?: string } = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required.";
    }

    if (!phone.trim()) {
        validationErrors.phone = "Phone number is required.";
      } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
        validationErrors.phone = "Phone number must include a valid country code and digits.";
      }
      

    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Invalid email format.";
    }

    // Set errors or handle form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", { name, phone, email });
      // Add your API call or other logic here
    }
  };

  return (
    <div className="form-footer py-5 container-fluid">
      <div className="container-lg">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
          <h3 className="font-bold font-32 text-white text-center text-md-start ms-0 ps-0 ms-xl-5 ps-xl-5 mb-auto d-flex">
            Have a Question?
          </h3>
          <form
            className="align-items-center d-flex flex-column flex-md-row justify-content-center gap-3 w-100"
            onSubmit={handleSubmit}
          >
            <div className="w-100">
              <div className="col-auto mb-3">
                <label
                  htmlFor="name"
                  className="font-regular font-14 text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0 font-16 font-semibold footer-form"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <small className="orange-font">{errors.name}</small>
                )}
              </div>
              <div className="col-auto mb-3">
                <label
                  htmlFor="phone"
                  className="font-regular font-14 text-white mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control rounded-0 font-16 font-semibold footer-form"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <small className="orange-font">{errors.phone}</small>
                )}
              </div>
              <div className="col-auto mb-0">
                <label
                  htmlFor="email"
                  className="font-regular font-14 text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-0 font-16 font-semibold footer-form"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <small className="orange-font">{errors.email}</small>
                )}
              </div>
            </div>
            <div className="col-auto mt-auto w-25 text-nowrap">
              <div className="d-flex justify-content-center justify-content-md-start">
                <button
                  type="submit"
                  className="btn btn-outline-light rounded-1 px-4 font-semibold font-16"
                >
                  REACH US
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
