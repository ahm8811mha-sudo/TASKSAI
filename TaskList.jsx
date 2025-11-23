import React, { useState } from 'react';
import TaskCreator from './TaskCreator';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'الجري الصباحي', status: 'pending', priority: 'high', steps: [] },
        { id: 2, title: 'إصلاح ديكور المنزل', status: 'in-progress', priority: 'medium', steps: [] },
    ]);
    const [showCreator, setShowCreator] = useState(false);

    const addTask = (newTask) => {
        setTasks([newTask, ...tasks]);
        setShowCreator(false);
    };

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <button
                    onClick={() => setShowCreator(true)}
                    style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        padding: 'var(--spacing-md) var(--spacing-lg)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                >
                    <span>+</span> إضافة مهمة جديدة
                </button>
            </div>

            {showCreator && <TaskCreator onSave={addTask} onCancel={() => setShowCreator(false)} />}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {tasks.map(task => (
                    <div key={task.id} style={{
                        backgroundColor: 'var(--surface-color)',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-sm)',
                        borderRight: `4px solid ${task.priority === 'high' ? 'var(--danger-color)' : 'var(--secondary-color)'}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)' }}>{task.title}</h3>
                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {task.status === 'pending' ? 'قيد الانتظار' : 'جاري العمل'}
                            </span>
                        </div>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid var(--border-color)',
                            padding: 'var(--spacing-sm)',
                            borderRadius: 'var(--radius-md)'
                        }}>➡️</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
