import React from 'react';

const variants = {
    primary: {
        backgroundColor: '#5a67d8',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    success: {
        backgroundColor: '#48bb78', // Solid Green
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    danger: {
        backgroundColor: '#f56565', // Solid Red
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    outline: {
        backgroundColor: 'transparent',
        border: '2px solid #e2e8f0',
        color: '#718096',
    },
    ghost: {
        backgroundColor: 'transparent',
        color: '#667eea',
        border: 'none',
        boxShadow: 'none',
        padding: '8px', // Smaller padding for ghost buttons
    },
    secondary: {
        backgroundColor: '#edf2f7',
        color: '#2d3748',
        border: 'none',
        boxShadow: 'none',
    }
};

const Button = ({ children, variant = 'primary', style = {}, ...props }) => {
    // Default styles for all buttons (Mobile friendly: bigger touch target)
    const baseStyle = {
        padding: '16px 24px',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.2s',
        ...variants[variant],
        ...style, // Allow overriding
    };

    return (
        <button
            style={baseStyle}
            onMouseOver={(e) => e.currentTarget.style.opacity = 0.9}
            onMouseOut={(e) => e.currentTarget.style.opacity = 1}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
