import React, { useState, useRef, useEffect } from "react";
import "./RequestForm.css";

export default function ContactForm() {
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
        const errorData = await response.json();
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
        <h1 className="contact-form-title">Свяжитесь с нами</h1>
        <div className="contact-form-divider"></div>
        <p className="contact-form-description">
          Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время
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
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Ваше имя"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="ваш@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+7 (999) 999-99-99"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Ваше сообщение..."
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
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
          {submitStatus === "success" && (
            <div className="form-status-message success">
              Сообщение успешно отправлено!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="form-status-message error">
              Ошибка при отправке. Попробуйте ещё раз.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
