import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function FooterBottom() {
  const { t } = useTranslation();

  return (
    <footer className="footer-bottom">
      <p className="copyright">
        {t("footer.copyright")}
      </p>
      <div className="made-by">
        {t("footer.madeBy")} <span className="antilogov-underline">Antilogov</span>
      </div>
    </footer>
  );
}
