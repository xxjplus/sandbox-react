import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>欢迎来到 小魔女 的 React JS Demo</h1>
                    <p>练习的React应用开发服务</p>
                    <div className="hero-buttons">
                        <Link to="/game" className="btn primary">来个九宫格棋子游戏</Link>
                        <Link to="/photoWall" className="btn secondary">我的照片墙</Link>
                    </div>
                </div>
            </section>

            {/*<section className="features">*/}
            {/*    <div className="feature-card">*/}
            {/*        <div className="feature-icon">🚀</div>*/}
            {/*        <h3>高性能应用</h3>*/}
            {/*        <p>使用React最新技术构建快速响应的Web应用</p>*/}
            {/*    </div>*/}

            {/*    <div className="feature-card">*/}
            {/*        <div className="feature-icon">📱</div>*/}
            {/*        <h3>响应式设计</h3>*/}
            {/*        <p>适配各种设备，从手机到桌面电脑</p>*/}
            {/*    </div>*/}

            {/*    <div className="feature-card">*/}
            {/*        <div className="feature-icon">🔒</div>*/}
            {/*        <h3>安全可靠</h3>*/}
            {/*        <p>严格的安全标准保护您的数据和用户</p>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className="testimonials">*/}
            {/*    <h2>客户评价</h2>*/}
            {/*    <div className="testimonial">*/}
            {/*        <p>"ReactPages团队为我们构建的应用超出了我们的预期，用户反馈非常好！"</p>*/}
            {/*        <div className="client-info">*/}
            {/*            <strong>张经理</strong>*/}
            {/*            <span>科技公司CEO</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}

export default Home;