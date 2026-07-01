import { useState } from 'react';

const initialForm = {
  projectType: '',
  propertyType: '',
  city: '',
  area: '',
  timeline: '',
  budget: '',
  details: '',
  hasPlans: '',
  name: '',
  phone: '',
  email: '',
  contactMethod: 'Call',
};

function ProjectRequest() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 7;
  const businessEmail = 'sidhupacifichomes@gmail.com';
  const businessPhone = '604-862-3472';

  const updateForm = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    if (step === 1 && !form.projectType) return 'Choose a project type.';
    if (step === 2 && !form.propertyType) return 'Choose a property type.';
    if (step === 3 && !form.city.trim()) return 'Enter the project city.';
    if (step === 4 && !form.timeline) return 'Choose a timeline.';
    if (step === 5 && !form.budget) return 'Choose a rough budget.';
    if (step === 6 && !form.hasPlans) return 'Choose whether you have photos or plans.';
    if (step === 7 && (!form.name.trim() || !form.phone.trim())) {
      return 'Enter your name and phone number.';
    }
    return '';
  };

  const nextStep = () => {
    const error = validateStep();
    if (error) {
      alert(error);
      return;
    }
    setStep((prev) => Math.min(prev + 1, 8));
  };

  const backStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const getSmartMessage = () => {
    if (form.projectType === 'New Build / Custom Home') {
      return 'New build and custom home projects usually require drawings, plans, site details, and a full scope review before an accurate estimate can be prepared.';
    }

    if (form.projectType === 'Commercial Project') {
      return 'Commercial projects may require access planning, code requirements, scheduling coordination, and a custom scope review before pricing can be confirmed.';
    }

    if (form.projectType === 'Electrical Work' && form.timeline === 'ASAP') {
      return 'This looks like a time-sensitive electrical request. Photos, a clear description, and the project address will help speed up the review process.';
    }

    if (form.projectType === 'Renovation' && form.budget === 'Under $2,500') {
      return 'Renovation pricing can vary depending on materials, demolition, electrical work, and site conditions. Your request can still be reviewed, but the final scope may affect pricing.';
    }

    if (form.hasPlans === 'No photos or plans yet') {
      return 'This project can still be reviewed, but photos, measurements, drawings, or plans may be requested before an accurate estimate is prepared.';
    }

    return 'Based on your answers, this project will need a custom review. Pricing can vary depending on site conditions, materials, permits, access, and final scope.';
  };

  const submitForm = (event) => {
    event.preventDefault();

    const message = `Project Request\n\nProject Type: ${form.projectType}\nProperty Type: ${form.propertyType}\nCity: ${form.city}\nArea: ${form.area || 'Not provided'}\nTimeline: ${form.timeline}\nBudget: ${form.budget}\nPhotos / Plans: ${form.hasPlans}\n\nProject Details:\n${form.details || 'No details provided'}\n\nClient Info:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'Not provided'}\nPreferred Contact: ${form.contactMethod}`;

    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(
      'New Project Request - Sidhu Pacific Homes'
    )}&body=${encodeURIComponent(message)}`;

    setSubmitted(true);
  };

  const options = {
    projectType: [
      'Electrical Work',
      'Lighting Installation',
      'Renovation',
      'New Build / Custom Home',
      'Commercial Project',
      'General Contracting',
      'Not Sure Yet',
    ],
    propertyType: [
      'House',
      'Townhouse',
      'Condo',
      'Retail Space',
      'Office / Commercial Unit',
      'New Construction Site',
      'Other',
    ],
    timeline: ['ASAP', 'Within 1 Month', '1–3 Months', '3+ Months', 'Just Planning'],
    budget: ['Under $2,500', '$2,500–$10,000', '$10,000–$50,000', '$50,000+', 'Not Sure Yet'],
    hasPlans: ['Yes, I have photos or plans', 'No photos or plans yet'],
  };

  const progress = step === 8 ? 100 : (step / totalSteps) * 100;

  const OptionButtons = ({ name, items }) => (
    <div className="request-options">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={`request-option ${form[name] === item ? 'selected' : ''}`}
          onClick={() => updateForm(name, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );

  if (submitted) {
    return (
      <section id="project-request" className="project-request-section">
        <div className="project-request-container">
          <div className="request-success">
            <p className="eyebrow">Project Request</p>
            <h2>Request Prepared</h2>
            <p>
              Your email app should open with the full project request filled in. Send it from there
              and Sidhu Pacific Homes can review the details.
            </p>
            <div className="request-success-actions">
              <a href={`tel:${businessPhone}`} className="request-primary-btn">Call Now</a>
              <a href="#contact" className="request-secondary-btn">Contact Section</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="project-request" className="project-request-section">
      <div className="project-request-container">
        <div className="project-request-heading">
          <p className="eyebrow">Project Request Tool</p>
          <h2>Start Your Project Review</h2>
          <p>
            Answer a few quick questions and we’ll prepare the next step for your project. This is
            not an instant quote.
          </p>
        </div>

        <form className="request-card" onSubmit={submitForm}>
          <div className="request-progress">
            <div className="request-progress-bar">
              <div style={{ width: `${progress}%` }}></div>
            </div>
            <span>{step === 8 ? 'Review your request' : `Step ${step} of ${totalSteps}`}</span>
          </div>

          {step === 1 && (
            <div className="request-step">
              <h3>What type of project are you planning?</h3>
              <OptionButtons name="projectType" items={options.projectType} />
            </div>
          )}

          {step === 2 && (
            <div className="request-step">
              <h3>What type of property is this for?</h3>
              <OptionButtons name="propertyType" items={options.propertyType} />
            </div>
          )}

          {step === 3 && (
            <div className="request-step">
              <h3>Where is the project located?</h3>
              <label>
                City
                <input
                  value={form.city}
                  onChange={(event) => updateForm('city', event.target.value)}
                  placeholder="Example: Surrey, Langley, Burnaby"
                />
              </label>
              <label>
                Neighbourhood / area optional
                <input
                  value={form.area}
                  onChange={(event) => updateForm('area', event.target.value)}
                  placeholder="Example: Fleetwood, Clayton, South Surrey"
                />
              </label>
            </div>
          )}

          {step === 4 && (
            <div className="request-step">
              <h3>When are you hoping to start?</h3>
              <OptionButtons name="timeline" items={options.timeline} />
            </div>
          )}

          {step === 5 && (
            <div className="request-step">
              <h3>Do you have a rough budget in mind?</h3>
              <p className="request-note">This only helps understand project size. It is not a final quote.</p>
              <OptionButtons name="budget" items={options.budget} />
            </div>
          )}

          {step === 6 && (
            <div className="request-step">
              <h3>Tell us about the project.</h3>
              <label>
                Project details
                <textarea
                  value={form.details}
                  onChange={(event) => updateForm('details', event.target.value)}
                  placeholder="Example: I need pot lights installed, or I’m planning a basement renovation and need electrical/general contracting support."
                  rows="5"
                />
              </label>
              <OptionButtons name="hasPlans" items={options.hasPlans} />
            </div>
          )}

          {step === 7 && (
            <div className="request-step">
              <h3>Where should we send the next steps?</h3>
              <div className="request-contact-grid">
                <label>
                  Name
                  <input
                    value={form.name}
                    onChange={(event) => updateForm('name', event.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Phone
                  <input
                    value={form.phone}
                    onChange={(event) => updateForm('phone', event.target.value)}
                    placeholder="778-123-4567"
                  />
                </label>
                <label>
                  Email optional
                  <input
                    value={form.email}
                    onChange={(event) => updateForm('email', event.target.value)}
                    placeholder="you@email.com"
                  />
                </label>
                <label>
                  Preferred contact
                  <select
                    value={form.contactMethod}
                    onChange={(event) => updateForm('contactMethod', event.target.value)}
                  >
                    <option>Call</option>
                    <option>Text</option>
                    <option>Email</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {step === 8 && (
            <div className="request-step">
              <h3>Your Project Summary</h3>
              <div className="request-summary">
                <p><strong>Project Type:</strong> {form.projectType}</p>
                <p><strong>Property Type:</strong> {form.propertyType}</p>
                <p><strong>Location:</strong> {form.area ? `${form.city}, ${form.area}` : form.city}</p>
                <p><strong>Timeline:</strong> {form.timeline}</p>
                <p><strong>Budget:</strong> {form.budget}</p>
                <p><strong>Photos / Plans:</strong> {form.hasPlans}</p>
                <p><strong>Contact:</strong> {form.name} · {form.phone}</p>
              </div>
              <div className="request-smart-message">{getSmartMessage()}</div>
              <button type="submit" className="request-submit-btn">Submit Project Request</button>
            </div>
          )}

          <div className="request-actions">
            {step > 1 && <button type="button" onClick={backStep} className="request-back-btn">Back</button>}
            {step < 8 && <button type="button" onClick={nextStep} className="request-next-btn">Next</button>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProjectRequest;
