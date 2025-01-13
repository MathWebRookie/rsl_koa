# 使用Node官方镜像作为基础镜像
FROM node:18-slim

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件到容器中
COPY . .

# 暴露端口（Koa默认通常是3000）
EXPOSE 3000

# 启动命令
CMD ["npm", "run", "start"] 