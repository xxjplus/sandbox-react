import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>ReactPages</h3>
                    <p>专业打造现代化Web应用</p>
                </div>

                <div className="footer-column">
                    <h4>快速链接</h4>
                    <ul>
                        <li><NavLink to="/">首页</NavLink></li>
                        <li><NavLink to="/about">关于我们</NavLink></li>
                        <li><NavLink to="/services">服务项目</NavLink></li>
                        <li><NavLink to="/contact">联系我们</NavLink></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>联系方式</h4>
                    <p>邮箱: contact@reactpages.com</p>
                    <p>电话: (123) 456-7890</p>
                    <p>地址: 北京市海淀区科技园区88号</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} ReactPages 公司. 保留所有权利.</p>
            </div>
        </footer>
    );
}

export default Footer;