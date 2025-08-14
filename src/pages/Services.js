import React from 'react';

function Services() {
    const services = [
        {
            title: 'React应用开发',
            description: '使用React构建高性能、可扩展的Web应用',
            features: ['单页面应用', '组件化开发', '状态管理']
        },
        {
            title: '响应式设计',
            description: '确保您的网站在所有设备上完美展示',
            features: ['移动优先', '自适应布局', '触摸优化']
        },
        {
            title: '性能优化',
            description: '提升应用加载速度和运行效率',
            features: ['代码分割', '懒加载', '缓存策略']
        },
        {
            title: 'API集成',
            description: '无缝连接各种后端服务和第三方API',
            features: ['RESTful API', 'GraphQL', 'WebSocket']
        }
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <h1>我们的服务</h1>
                <p>专业React开发服务，满足您的业务需求</p>
            </div>

            <section className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">🔧</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul>
                            {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="pricing">
                <h2>服务定价</h2>
                <div className="pricing-table">
                    <div className="pricing-tier">
                        <h3>基础版</h3>
                        <div className="price">¥9,999</div>
                        <ul>
                            <li>单页面应用开发</li>
                            <li>响应式设计</li>
                            <li>基础SEO优化</li>
                            <li>1个月技术支持</li>
                        </ul>
                    </div>

                    <div className="pricing-tier featured">
                        <h3>专业版</h3>
                        <div className="price">¥24,999</div>
                        <ul>
                            <li>高级React应用开发</li>
                            <li>定制UI/UX设计</li>
                            <li>高级性能优化</li>
                            <li>API集成</li>
                            <li>3个月技术支持</li>
                        </ul>
                    </div>

                    <div className="pricing-tier">
                        <h3>企业版</h3>
                        <div className="price">¥49,999+</div>
                        <ul>
                            <li>全栈解决方案</li>
                            <li>复杂状态管理</li>
                            <li>持续集成/部署</li>
                            <li>高级安全特性</li>
                            <li>6个月技术支持</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;