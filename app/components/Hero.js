// components/Hero.js
import React from 'react';
import './Hero.module.css'
const Hero = () => {
    return (
        <section className="hero" >
            <div className="hero-content">
                <h1 className="hero-title mt-5"> ما هو نظام الخازن دوت نت؟</h1>
                <p className="hero-description">
                الخازن دوت نت هو نظام لضبط الأعمال المحاسبية والمستودعات، جاء نتيجة سلسلة من العمل المضني منذ عام 1988م وبعد سلسلة من الإصدارات السابقة بدءاً بالإصدار 1 وانتهاء بالإصدار 3.5 حيث تم صب الخبرات المكتسبة في جميع هذه الإصدارات في الإصدار الجديد من أنظمتنا المحاسبية الخازن دوت نت.


                </p>
                <a href="/services" className="hero-button">استكشف خدماتنا</a>
            </div>
        </section>
    );
};

export default Hero;
