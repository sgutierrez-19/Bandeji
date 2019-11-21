import React from "react";
import { Link } from "react-router-dom";

export default function NavbarBrand ({ className, ...props }) {
    const previousClasses = (className) ? ` ${className}` : "";
    const linkClasses = `navbar-brand${previousClasses}`
    return (
        <Link className={linkClasses} {...props} />
    );
}