# AI 绘本工坊 · 移动端 Demo

一个基于火山引擎 AI 的移动端网页应用。输入主题或点击示例，生成 6 页可左右滑动阅读的绘本。

## 功能特性

- 🎨 **AI 图片生成**：使用火山引擎 Stable Diffusion 生成儿童绘本风格插画
- 📝 **AI 文本生成**：使用火山引擎 LLM 生成温馨有趣的绘本文案
- 📱 **移动端优化**：响应式设计，支持触摸滑动和手势操作
- ⚡ **并行生成**：同时生成图片和文本，提升用户体验
- 🔄 **降级处理**：API 失败时自动降级到本地占位内容

## 快速开始

### 1. 配置火山引擎 API

编辑 `config.js` 文件，替换为你的火山引擎 API 密钥：

```javascript
window.VOLCENGINE_CONFIG = {
  accessKey: 'YOUR_ACCESS_KEY_HERE',  // 替换为你的 Access Key
  secretKey: 'YOUR_SECRET_KEY_HERE',  // 替换为你的 Secret Key
  // ... 其他配置
};
```

### 2. 获取火山引擎 API 密钥

1. 登录 [火山引擎控制台](https://console.volcengine.com/)
2. 创建 API 密钥，获取 `accessKey` 和 `secretKey`
3. 确保已开通以下服务：
   - 图片生成服务（Stable Diffusion）
   - 文本生成服务（LLaMA）

### 3. 运行应用

直接用浏览器打开 `index.html` 即可。建议使用手机或浏览器的移动端预览模式。

## 项目结构

- `index.html`: 页面骨架与可访问语义结构
- `styles.css`: 移动端优先的样式、过渡动画与栅格
- `app.js`: AI 接口调用、分页逻辑、手势/键盘导航
- `config.js`: 火山引擎 API 配置文件

## API 接口说明

### 图片生成
- **模型**: `doubao-seed-1-6-250615`
- **API 端点**: `https://ark.cn-beijing.volces.com/api/v3/chat/completions`
- **风格**: 儿童绘本风格，温馨可爱

### 文本生成
- **模型**: `doubao-seed-1-6-250615`
- **API 端点**: `https://ark.cn-beijing.volces.com/api/v3/chat/completions`
- **长度**: 50字以内
- **风格**: 简单易懂，适合儿童阅读

## 注意事项

⚠️ **重要**: 由于浏览器安全限制，签名验证需要在服务端实现。当前版本使用简化认证，建议在生产环境中使用代理服务器处理 API 调用。

## 故障排除

- **API 调用失败**: 检查 API 密钥配置和网络连接
- **图片加载失败**: 自动降级到本地占位图
- **文本生成失败**: 自动降级到本地文案模板



