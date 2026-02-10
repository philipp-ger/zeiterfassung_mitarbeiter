import React from 'react';

const Input = ({ label, id, ...props }) => {
    return (
        <div style={{ marginBottom: '16px' }}>
            {label && (
                <label
                    htmlFor={id}
                    style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#2d3748',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                {...props}
            />
        </div>
    );
};

export default Input;
