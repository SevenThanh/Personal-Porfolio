import React from "react";
import { useTheme } from "./ThemeContext";

function Footer() {
  const { theme } = useTheme();
  const themeClass =
    theme === "professional" ? "professional-theme" : "personal-theme";

  return (
    <footer className={`footer ${themeClass}`}>
      <p>© 2024 Johan Nguyen. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
