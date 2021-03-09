import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <div>
        <img src={`${process.env.GATSBY_API_URL}/seed/picsum/200/300`} alt="Logo" />
      </div>
      {children}
    </div>
  );
}
