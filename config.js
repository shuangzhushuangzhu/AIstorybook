// 火山引擎 API 配置文件
// 请将以下配置替换为你的实际火山引擎 API 信息

window.VOLCENGINE_CONFIG = {
  // 火山引擎 API 密钥 - 请替换为你的实际密钥
  accessKey: 'c2654a44-8350-4baf-a1cf-1052f6497554',
  secretKey: 'YOUR_SECRET_KEY_HERE',
  
  // 火山引擎 API 端点 - 根据你的 curl 示例更新
  apiEndpoint: 'https://ark.cn-beijing.volces.com',
  
  // 图片生成模型配置
  imageModel: 'doubao-seed-1-6-250615', // 使用你提供的模型名称
  imageConfig: {
    width: 1024,
    height: 768,
    steps: 20,
    guidance_scale: 7.5,
    negative_prompt: '恐怖，暴力，成人内容，低质量，模糊'
  },
  
  // 文本生成模型配置
  textModel: 'doubao-seed-1-6-250615', // 使用你提供的模型名称
  textConfig: {
    max_tokens: 200,
    temperature: 0.7
  }
};

// 使用说明：
// 1. 登录火山引擎控制台：https://console.volcengine.com/
// 2. 创建 API 密钥，获取 accessKey（对应 curl 中的 $ARK_API_KEY）
// 3. 将上述配置中的 YOUR_ACCESS_KEY_HERE 替换为实际的 accessKey
// 4. 确保已开通相应的 AI 服务（doubao-seed-1-6-250615 模型）
