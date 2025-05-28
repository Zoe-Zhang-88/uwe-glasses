import React from 'react';

function App() {
  return (
    <div>
      {/* ========== 导航栏 ========== */}
      <nav style={{ backgroundColor: '#ffffff', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#007BFF', fontSize: '24px' }}>UWE glasses</h1>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', marginTop: '10px' }}>
          <li><a href="#home">首页</a></li>
          <li><a href="#products">产品</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </nav>

      {/* ========== 主体区 ========== */}
      <section id="home" style={{ backgroundColor: '#e6f0ff', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>专业眼镜制造工厂</h2>
        <p style={{ fontSize: '18px', margin: '10px 0 20px' }}>
          我们有5年生产经验，提供高品质眼镜OEM/ODM及配件服务
        </p>
        <a href="#products" style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          查看产品
        </a>
      </section>

      {/* ========== 产品展示 ========== */}
      <section id="products" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>我们的产品</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img src="https://placehold.co/300x200?text= 眼镜+款式1" alt="产品1" style={{ width: '100%' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>眼镜款式1</h3>
            <p>经典设计，适合日常佩戴</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img src="https://placehold.co/300x200?text= 眼镜+款式2" alt="产品2" style={{ width: '100%' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>眼镜款式2</h3>
            <p>轻盈舒适，适合长时间佩戴</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img src="https://placehold.co/300x200?text= 眼镜+款式3" alt="产品3" style={{ width: '100%' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>眼镜款式3</h3>
            <p>时尚潮流，深受年轻人喜爱</p>
          </div>
        </div>
      </section>

      {/* ========== 关于我们 ========== */}
      <section id="about" style={{ backgroundColor: '#f0f0f0', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>关于我们</h2>
        <p style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
          UWE GLASSES 是一家拥有5年眼镜制造经验的专业工厂，服务于全球多个国家的客户。
          我们专注于高品质眼镜及眼镜配件 OEM 和 ODM 生产，提供从设计到成品的一站式解决方案。
        </p>
      </section>

      {/* ========== 联系我们 ========== */}
      <section id="contact" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>联系我们</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          如有任何合作意向，请通过以下方式与我们联系：
        </p>
        <p>📧 邮箱：uwe_glasses@163.com</p>
        <p>📞 电话：+86 138 0603 2961</p>
      </section>

      {/* ========== 底部 ========== */}
      <footer style={{ backgroundColor: '#222', color: 'white', padding: '20px 10px', textAlign: 'center' }}>
        <p>&copy; 2025 UWE GLASSES. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;