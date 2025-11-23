import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import TaskList from './components/TaskList';

function App() {
    const [activeTab, setActiveTab] = useState('tasks');

    return (
        <div className="app-container" style={{ display: 'flex', height: '100vh', direction: 'rtl' }}>
            <div className="desktop-sidebar">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <main style={{ flex: 1, padding: 'var(--spacing-lg)', overflowY: 'auto', paddingBottom: '80px' }}>
                <header style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
                        {activeTab === 'tasks' && 'مهامي'}
                        {activeTab === 'calendar' && 'التقويم'}
                        {activeTab === 'email' && 'البريد الإلكتروني'}
                    </h1>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                        <button style={{
                            padding: 'var(--spacing-sm) var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            background: 'white'
                        }}>🔔</button>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--primary-color)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>U</div>
                    </div>
                </header>

                {activeTab === 'tasks' && <TaskList />}
                {activeTab === 'calendar' && <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>مساحة التقويم (قريباً)</div>}
                {activeTab === 'email' && <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>مساحة البريد (قريباً)</div>}
            </main>

            <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}

export default App;
