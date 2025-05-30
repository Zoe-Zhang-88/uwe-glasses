import React from 'react';
import axios from 'axios';

function DingTalkChat() {
  const sendMessage = async () => {
    // 替换为你的钉钉机器人 Webhook 地址（从钉钉群机器人设置中获取）
    const webhookUrl = "https://oapi.dingtalk.com/robot/send?access_token=35e130277d3ba7f6604abbbb3ebdd377bef257b52593763535993149937f2fd3";

    const message = {
      msgtype: "text",
      text: {
        content: "【温州有为眼镜有限公司】\n有新订单通知！\n订单编号：#20250406A\n客户姓名：张女士\n产品：时尚太阳镜 x 2副\n请采购部尽快处理。",
        at: {
          atMobiles: [],   // 可选：填入手机号码，如 ["13800001111"]
          isAtAll: false   // 是否@所有人
        }
      }
    };

    try {
      const response = await axios.post(webhookUrl, message);
      alert("消息发送成功！");
      console.log("消息发送成功", response.data);
    } catch (error) {
      alert("发送失败，请检查网络或 Webhook 地址");
      console.error("发送消息失败：", error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #eee', margin: '20px' }}>
      <h3 style={{ marginBottom: '10px' }}>员工通知系统</h3>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
        点击按钮将测试消息发送到钉钉群。
      </p>
      <button
        onClick={sendMessage}
        style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        发送测试消息到钉钉
      </button>
    </div>
  );
}

export default DingTalkChat;