import React from 'react';

const ContactModal = ({ isOpen, onClose, contactInfo }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3 className="modal-title">Get in Touch</h3>
        </div>

        <div className="modal-body">
          <p>If you'd like to collaborate, talk about design systems, or just say hello, feel free to reach out!</p>
          
          <div className="modal-info-row">
            <span className="modal-label">Email</span>
            <span className="modal-value">{contactInfo.email}</span>
          </div>

          <div className="modal-info-row">
            <span className="modal-label">Twitter / X</span>
            <span className="modal-value">{contactInfo.twitter}</span>
          </div>

          <div className="modal-info-row">
            <span className="modal-label">LinkedIn</span>
            <span className="modal-value">{contactInfo.linkedin}</span>
          </div>

          <a href={`mailto:${contactInfo.email}`} className="modal-action-btn">
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
