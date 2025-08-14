import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 模拟表单提交
        setFormStatus('sending');

        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <h1>联系我们</h1>
                <p>我们期待听到您的消息</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>联系方式</h2>
                    <div className="contact-item">
                        <div className="contact-icon">📧</div>
                        <div>
                            <h3>邮箱</h3>
                            <p>contact@reactpages.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">📱</div>
                        <div>
                            <h3>电话</h3>
                            <p>+86 10 1234 5678</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">🏢</div>
                        <div>
                            <h3>地址</h3>
                            <p>北京市海淀区科技园区88号</p>
                        </div>
                    </div>

                    <div className="map-placeholder">
                        <h3>我们的位置</h3>
                        <div className="map-image">地图区域</div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>发送消息</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">姓名</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">邮箱</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">主题</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">消息</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? '发送中...' : '发送消息'}
                        </button>

                        {formStatus === 'success' && (
                            <div className="success-message">
                                消息已成功发送！我们会尽快回复您。
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;