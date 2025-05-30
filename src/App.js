import React, { useState } from 'react';
import './App.css';

// 模拟产品数据
const products = [
  { id: 1, name: '时尚太阳镜', price: 150, image: 'https://placehold.co/300x200?text= 时尚太阳镜' },
  { id: 2, name: '光学眼镜', price: 80, image: 'https://placehold.co/300x200?text= 光学眼镜' },
  { id: 3, name: '儿童眼镜', price: 60, image: 'https://placehold.co/300x200?text= 儿童眼镜' },
];

function App() {
  const [cart, setCart] = useState([]);

  // 添加商品到购物车
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      {/* ========== 头部 ========== */}
      <header className="App-header">
        <img src="https://placehold.co/150x50?text=UWE+GLASSES " alt="Logo" />
        <h1>温州有为眼镜有限公司</h1>
        <p>专业的眼镜制造工厂，服务全球客户，提供高品质OEM/ODM解决方案。</p>
      </header>

      {/* ========== 产品展示区 ========== */}
      <section className="products-section">
        <h2>我们的产品</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>价格: ¥{product.price}</p>
              <button onClick={() => addToCart(product)}>加入购物车</button>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 购物车 ========== */}
      <section className="cart-section">
        <h2>购物车</h2>
        <ul>
          {cart.length === 0 ? (
            <li>购物车为空</li>
          ) : (
            cart.map(item => (
              <li key={item.id}>{item.name} - ¥{item.price}</li>
            ))
          )}
        </ul>
        <button>去结算</button>
      </section>

      {/* ========== 底部 ========== */}
      <footer className="footer">
        <p>联系我们：info@uwe-glasses.com | +86 123456789</p>
      </footer>
    </div>
  );
}

export default App;