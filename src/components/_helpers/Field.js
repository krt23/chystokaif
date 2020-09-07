import React from "react";

const Field = ({ className, label, name, type, placeholder, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                className={className}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.name, e.target.value)}
            />
        </div>
    );
};

export default Field;
