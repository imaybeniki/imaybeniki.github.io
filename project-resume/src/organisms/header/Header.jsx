import React from "react";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import "./header.css";
import Icons from "../../molecules/icons/Icons";

/**
 * @summary Renders the header of the page, works for sticky or static headers
 * @prop {object} history: the history from react router
 * @prop {string} stickyHeaderText: the header you see when scrolling
 * @prop {string} unstickyHeaderText: the header you see when at the top of the page
 */
function Header(props) {
  const {history, stickyHeaderText, unstickyHeaderText} = props;
  const [headerText, setHeaderText] = useState(unstickyHeaderText);
  useEffect(() => {
    const header = document.getElementById("myHeader");
  const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (headerText !== stickyHeaderText) {
          setHeaderText(stickyHeaderText);
        }
      } else {
        header.classList.remove("sticky");
        if (headerText !== unstickyHeaderText) {
          setHeaderText(unstickyHeaderText);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [headerText, stickyHeaderText, unstickyHeaderText]);

  return (
    <div>
      <header id="myHeader" className="header">
        <Icons history={history} icons={["home"]} />
        <h2><span>{headerText}</span></h2>
      </header>
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  stickyHeaderText: PropTypes.string,
  unstickyHeaderText: PropTypes.string,
}

Header.defaultProps = {
  stickyHeaderText: '',
  unstickyHeaderText: '',
}

export default Header;
