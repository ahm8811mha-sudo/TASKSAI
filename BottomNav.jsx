import React from 'react';

const BottomNav = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'tasks', label: 'المهام', icon: '📝' },
        { id: 'calendar', label: 'التقويم', icon: '📅' },
        { id: 'email', label: 'البريد', icon: '📧' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'var(--surface-color)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-around',
            padding: 'var(--spacing-sm)',
            zIndex: 1000,
            boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
        }} className="mobile-nav">
            {menuItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        color: activeTab === item.id ? 'var(--primary-color)' : 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        padding: 'var(--spacing-sm)'
                    }}
                >
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    {item.label}
                </button>
            ))}
        </nav>
    );
};

export default BottomNav;
