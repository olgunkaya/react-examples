import React from "react";

function Link({ href, children, className }) {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKet) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    //this event dispatches to the browser.
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
