import { memo } from "react";
import { log } from "../../log.js";

/*
  It's use memo so it prevent IconButton to re-render, because Icon Button is still the same component
  
  */
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
