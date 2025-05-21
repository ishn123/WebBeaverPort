"use client";
import React, { useState, useRef, useEffect } from 'react';
import "@/styles/CareersPopup.css";

interface FormData {
    name: string;
    email: string;
    message: string;
    role: string;
    resume: File | null;
}
interface CareerPopupProps{
    isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const CareersPopup = ({isOpen,setIsOpen}:CareerPopupProps) => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        role: '',
        resume: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setIsOpen(false);
            // Reset form
            setFormData({
                name: '',
                email: '',
                message: '',
                role: '',
                resume: null
            });
        }, 1500);
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup-content" ref={popupRef}>
                        <button
                            className="close-btn"
                            onClick={togglePopup}
                            aria-label="Close popup"
                        >
                            &times;
                        </button>

                        <h2>Let&#39;s Create Together</h2>
                        <p className="subtitle">Tell me how you&#39;d like to collaborate</p>

                        <form onSubmit={handleSubmit} className="careers-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="name">Your Name</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-group">
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />
                                <label htmlFor="message">How can we collaborate?</label>
                            </div>

                            <div className="form-group">
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled defaultValue="">Select an option</option>
                                    <option value="freelance">Freelance Project</option>
                                    <option value="fulltime">Full-time Position</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                                <label htmlFor="role">Interest Type</label>
                            </div>

                            <div className="form-group file-group">
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                />
                                <label htmlFor="resume" className="file-label">
                                    {formData.resume ? formData.resume.name : 'Attach Resume/CV (Optional)'}
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Request'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CareersPopup;