import React, { useState, useRef, useEffect } from "react";
import "./RequestForm.css";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (formRef.current) formObserver.observe(formRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (formRef.current) formObserver.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = "https://httpbin.org/post";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-bg">
      <div
        className={`contact-form-header ${
          headerVisible ? "fade-in-opacity" : "fade-in-opacity-hidden"
        }`}
        ref={headerRef}
      >
        <h1 className="contact-form-title">{t("request.title")}</h1>
        <div className="contact-form-divider"></div>
        <p className="contact-form-description">
          {t("request.description")}
        </p>
      </div>

      <div
        className={`contact-form-container ${
          formVisible ? "fade-in" : "fade-in-hidden"
        }`}
        ref={formRef}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              {t("request.fields.name.label")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder={t("request.fields.name.placeholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              {t("request.fields.email.label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder={t("request.fields.email.placeholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              {t("request.fields.phone.label")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder={t("request.fields.phone.placeholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              {t("request.fields.message.label")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder={t("request.fields.message.placeholder")}
              rows="6"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            className="form-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("request.submit.sending") : t("request.submit.default")}
          </button>
          {submitStatus === "success" && (
            <div className="form-status-message success">
              {t("request.status.success")}
            </div>
          )}
          {submitStatus === "error" && (
            <div className="form-status-message error">
              {t("request.status.error")}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
