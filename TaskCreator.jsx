import React, { useState } from 'react';

const TaskCreator = ({ onSave, onCancel }) => {
    const [title, setTitle] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [suggestedSteps, setSuggestedSteps] = useState([]);

    const simulateAIBreakdown = () => {
        if (!title) return;
        setIsGenerating(true);

        // Mock AI Logic based on keywords
        setTimeout(() => {
            let steps = [];
            if (title.includes('جري') || title.includes('مش')) {
                steps = [
                    'تجهيز حذاء رياضي مناسب',
                    'ارتداء ملابس رياضية مريحة',
                    'تحضير قائمة تشغيل صوتية',
                    'تمارين إحماء لمدة 5 دقائق',
                    'تحديد مسار الجري في الحي'
                ];
            } else if (title.includes('ديكور') || title.includes('منزل')) {
                steps = [
                    'تحديد الغرفة المستهدفة',
                    'أخذ قياسات المساحة',
                    'تصفح أفكار تصميم (Pinterest)',
                    'تحديد الميزانية التقديرية',
                    'شراء مواد الطلاء/الأثاث',
                    'تجهيز أدوات العمل'
                ];
            } else {
                steps = [
                    'تحديد الهدف الرئيسي',
                    'جمع المعلومات اللازمة',
                    'تنفيذ الخطوة الأولى',
                    'مراجعة التقدم'
                ];
            }
            setSuggestedSteps(steps);
            setIsGenerating(false);
        }, 1500);
    };

    const handleSave = () => {
        onSave({
            id: Date.now(),
            title,
            status: 'pending',
            priority: 'medium',
            steps: suggestedSteps
        });
    };

    return (
        <div style={{
            backgroundColor: 'white',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            marginBottom: 'var(--spacing-lg)',
            border: '1px solid var(--border-color)'
        }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✨ إنشاء مهمة ذكية</h3>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>عنوان المهمة</label>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="مثال: الجري لمدة 30 دقيقة..."
                        style={{
                            flex: 1,
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            fontSize: '1rem'
                        }}
                    />
                    <button
                        onClick={simulateAIBreakdown}
                        disabled={isGenerating || !title}
                        style={{
                            backgroundColor: isGenerating ? 'var(--text-secondary)' : 'var(--secondary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '0 var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)',
                            cursor: isGenerating ? 'wait' : 'pointer'
                        }}
                    >
                        {isGenerating ? 'جاري التفكير...' : 'تحليل AI'}
                    </button>
                </div>
            </div>

            {suggestedSteps.length > 0 && (
                <div style={{ marginBottom: 'var(--spacing-lg)', backgroundColor: 'var(--background-color)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                    <h4 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--primary-color)' }}>الخطوات المقترحة:</h4>
                    <ul style={{ listStyle: 'none', paddingRight: 'var(--spacing-md)' }}>
                        {suggestedSteps.map((step, idx) => (
                            <li key={idx} style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                <input type="checkbox" defaultChecked />
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontSize: '0.875rem' }}>توقيت البدء</label>
                    <input type="datetime-local" style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontSize: '0.875rem' }}>توقيت الانتهاء</label>
                    <input type="datetime-local" style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontSize: '0.875rem' }}>المرفقات (صور/فيديو/صوت)</label>
                <div style={{
                    border: '2px dashed var(--border-color)',
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                }}>
                    اضغط هنا لرفع الملفات أو اسحبها هنا
                </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontSize: '0.875rem' }}>مشاركة مع</label>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>+</div>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>U1</div>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>U2</div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-sm)' }}>
                <button
                    onClick={onCancel}
                    style={{
                        padding: 'var(--spacing-md)',
                        border: 'none',
                        background: 'transparent',
                        color: 'var(--text-secondary)'
                    }}
                >
                    إلغاء
                </button>
                <button
                    onClick={handleSave}
                    style={{
                        padding: 'var(--spacing-md) var(--spacing-lg)',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-md)'
                    }}
                >
                    حفظ المهمة
                </button>
            </div>
        </div>
    );
};

export default TaskCreator;
