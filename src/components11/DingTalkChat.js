// src/components/DingTalkChat.js
import React from 'react';
import axios from 'axios';

function DingTalkChat() {
  const sendMessage = async () => {
    // 替换为你自己的钉钉机器人 Webhook 地址
    const webhookUrl = "https://oapi.dingtalk.com/robot/send?access_token=35e130277d3ba7f6604abbbb3ebdd377bef257b52593763535993149937f2fd3";

    const message = {
      msgtype: "text",
      text: {
        content: "有新客户下单了！订单编号：#20250406A，请采购部查看并处理。",  // 可以改成动态数据
        at: {
          atMobiles: [],   // 可选：被@人的手机号（如 ["13800001111"]）
          isAtAll: false   // 是否@所有人
        }
      }
    };

    try {
      const response = await axios.post(webhookUrl, message);
      console.log("消息发送成功！", response.data);
    } catch (error) {
      console.error("发送消息失败：", error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>发送消息给员工</h3>
      <button
        onClick={sendMessage}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        发送测试消息
      </button>
    </div>
  );
}

export default DingTalkChat;