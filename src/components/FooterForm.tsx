import React, { useState } from 'react';

const FooterForm = () => {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted:', { email, name, company });
  };

  return (
    <div className="form-footer py-5 container-fluid">
      <div className="container">
        <h3 className="font-bold font-32 text-white mb-5 text-center">
          Get our updates by signing up below
        </h3>
        <form
          className="row align-items-center justify-content-center mt-3 mb-2"
          onSubmit={handleSubmit}
        >
          <div className="col-md-3 mb-5">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0 rounded-1 font-16 font-semibold footer-form"
              id="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3 mb-5">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0 rounded-1 font-16 font-semibold footer-form"
              id="name"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3 mb-5">
            <label htmlFor="company" className="visually-hidden">
              Company
            </label>
            <input
              type="text"
              className="form-control rounded-0 rounded-1 font-16 font-semibold footer-form"
              id="company"
              placeholder="Company *"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary mb-3 rounded-0 orange-color px-5 py-2 font-semibold font-16 border-0"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
