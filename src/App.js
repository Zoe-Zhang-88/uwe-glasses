// src/App.js
import React from 'react';
import './App.css';
import DingTalkChat from './components/DingTalkChat'; // 确保这句在顶部

function App() {
  return (
    <div className="App">
      {/* ========== 公司抬头 ========== */}
      <header className="App-header">
        <img src="https://placehold.co/150x50?text=UWE+GLASSES " alt="Logo" />
        <h1>温州有为眼镜有限公司</h1>
        <p>专业的眼镜制造工厂，服务全球客户，提供高品质OEM/ODM解决方案。</p>
      </header>

      {/* ========== 产品展示区 ========== */}
      <section className="products-section">
        <h2>我们的产品</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://placehold.co/300x200?text= 时尚太阳镜" alt="时尚太阳镜" />
            <h3>时尚太阳镜</h3>
            <p>¥150</p>
          </div>
          <div className="product-card">
            <img src="https://placehold.co/300x200?text= 光学眼镜" alt="光学眼镜" />
            <h3>光学眼镜</h3>
            <p>¥80</p>
          </div>
          <div className="product-card">
            <img src="https://placehold.co/300x200?text= 儿童眼镜" alt="儿童眼镜" />
            <h3>儿童眼镜</h3>
            <p>¥60</p>
          </div>
        </div>
      </section>

      {/* ========== 员工沟通系统 ========== */}
      <section className="chat-section">
        <DingTalkChat />
      </section>

      {/* ========== 联系我们 ========== */}
      <footer className="footer">
        <p>联系我们：info@uwe-glasses.com | +86 123456789</p>
      </footer>
    </div>
  );
}

export default App;