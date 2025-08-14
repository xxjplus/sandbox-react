import React from 'react';

function About() {
    return (
        <div className="about-page">
            <div className="page-header">
                <h1>关于我们</h1>
                <p>了解我们的故事和使命</p>
            </div>

            <section className="about-content">
                <div className="about-text">
                    <h2>我们的故事</h2>
                    <p>ReactPages成立于2018年，由一群热爱React技术的开发者创建。我们的使命是帮助企业构建现代化、高性能的Web应用。</p>
                    <p>在过去的几年中，我们已经为超过100家企业提供了专业的React开发服务，涵盖电商、金融、教育等多个领域。</p>

                    <h2>我们的团队</h2>
                    <p>我们的团队由经验丰富的React开发专家组成，平均拥有5年以上的前端开发经验。团队成员持续学习最新的Web技术，确保为客户提供最前沿的解决方案。</p>
                </div>

                <div className="about-image">
                    <div className="image-placeholder">团队照片</div>
                </div>
            </section>

            <section className="values">
                <h2>核心价值观</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>创新</h3>
                        <p>不断探索新技术，推动行业进步</p>
                    </div>
                    <div className="value-card">
                        <h3>诚信</h3>
                        <p>诚实守信，与客户建立长期合作关系</p>
                    </div>
                    <div className="value-card">
                        <h3>卓越</h3>
                        <p>追求卓越，提供超出预期的服务</p>
                    </div>
                    <div className="value-card">
                        <h3>协作</h3>
                        <p>团队协作，共同创造更大价值</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;