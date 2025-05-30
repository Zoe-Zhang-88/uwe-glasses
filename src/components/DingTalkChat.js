// src/components/DingTalkChat.js
import React from 'react';
import axios from 'axios';

function DingTalkChat() {
  const sendMessage = async () => {
    // 替换为你的钉钉机器人地址
    const webhookUrl = "https://oapi.dingtalk.com/robot/send?access_token=35e130277d3ba7f6604abbbb3ebdd377bef257b52593763535993149937f2fd3 ";

    const message = {
      msgtype: "text",
      text: {
        content: "【温州有为眼镜有限公司】\n有新客户下单啦！订单编号：#20250406A\n请采购部尽快处理。",
        at: {
          atMobiles: [],
          isAtAll: false
        }
      }
    };

    try {
      const response = await axios.post(webhookUrl, message);
      alert("消息发送成功！");
      console.log("消息发送成功", response.data);
    } catch (error) {
      alert("消息发送失败，请检查网络或 Webhook 地址");
      console.error("发送消息失败：", error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>通知员工</h3>
      <p style={{ fontSize: '14px', color: '#555' }}>点击按钮将消息推送到钉钉群</p>
      <button 
        onClick={sendMessage}
        style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        发送测试消息到钉钉
      </button>
    </div>
  );
}

export default DingTalkChat;