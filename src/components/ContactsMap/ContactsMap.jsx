import React, { useEffect, useRef, useState } from "react";
import "./ContactsMap.css";
import { useTranslation } from "react-i18next";

const ORGANIZATION = {
  coords: [59.939774, 30.269693],
  addressKey: "contacts.addressValue",
  phone: "+7 (911) 010-17-65",
  email: "valeriov@yandex.ru",
};

export default function ContactsMap() {
  const headerRef = useRef(null);
  const innerRef = useRef(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [innerVisible, setInnerVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const opts = { threshold: 0.3 };

    const obsHeader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      opts
    );
    if (headerRef.current) obsHeader.observe(headerRef.current);

    const obsInner = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInnerVisible(true);
      },
      opts
    );
    if (innerRef.current) obsInner.observe(innerRef.current);

    return () => {
      obsHeader.disconnect();
      obsInner.disconnect();
    };
  }, []);

  const yandexMapSrc =
    "https://yandex.ru/map-widget/v1/?ll=30.269693%2C59.939774&z=17&pt=30.269693,59.939774,pm2rdl";

  return (
    <section className="contacts-map-section">
      <div className="contacts-map-header" ref={headerRef}>
        <h2
          className={`contacts-map-header-title ${
            headerVisible ? "fade-in" : "fade-in-hidden"
          }`}
        >
          {t("contacts.locationTitle")}
        </h2>
      </div>
      <div
        className={`contacts-map-inner ${
          innerVisible ? "fade-in" : "fade-in-hidden"
        }`}
        ref={innerRef}
      >
        <div className="contacts-map-contacts">
          <h2>{t("contacts.contactTitle")}</h2>
          <div>
            <span>{t("contacts.addressLabel")}</span>
            <br />
            {t(ORGANIZATION.addressKey)}
          </div>
          <div>
            <span>{t("contacts.phoneLabel")}</span>
            <br />
            <a href={`tel:${ORGANIZATION.phone}`}>{ORGANIZATION.phone}</a>
          </div>
          <div>
            <span>{t("contacts.emailLabel")}</span>
            <br />
            <a href={`mailto:${ORGANIZATION.email}`}>{ORGANIZATION.email}</a>
          </div>
        </div>
        <div className="contacts-map-map">
          <iframe
            src={yandexMapSrc}
            width="100%"
            height="400"
            frameBorder="0"
            style={{
              filter:
                "invert(0.92) saturate(0.9) brightness(0.7) contrast(1.12)",
              border: "none",
            }}
            title={t("contacts.mapTitle")}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
