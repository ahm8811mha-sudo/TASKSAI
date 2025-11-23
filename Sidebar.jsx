import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'tasks', label: 'المهام', icon: '📝' },
        { id: 'calendar', label: 'التقويم', icon: '📅' },
        { id: 'email', label: 'البريد', icon: '📧' },
    ];

    return (
        <aside style={{
            width: '250px',
            backgroundColor: 'var(--surface-color)',
            borderLeft: '1px solid var(--border-color)',
            height: '100vh',
            padding: 'var(--spacing-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)'
        }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-lg)' }}>AI Task Manager</h2>
            <nav>
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            width: '100%',
                            textAlign: 'right',
                            padding: 'var(--spacing-md)',
                            backgroundColor: activeTab === item.id ? 'var(--background-color)' : 'transparent',
                            color: activeTab === item.id ? 'var(--primary-color)' : 'var(--text-secondary)',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-sm)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 'var(--spacing-sm)',
                            fontWeight: activeTab === item.id ? 'bold' : 'normal',
                            transition: 'all 0.2s'
                        }}
                    >
                        {item.label} <span>{item.icon}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
