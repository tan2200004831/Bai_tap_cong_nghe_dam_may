# --- GIAI ĐOẠN 1: BUILD (Xây dựng) ---
# Đặt tên cho giai đoạn này là 'builder'
FROM node:16-alpine AS builder

# Đặt thư mục làm việc cho client
WORKDIR /app/client

# Sao chép file package.json của client và cài đặt
COPY client/package*.json ./
RUN npm install

# Sao chép toàn bộ code của client
COPY client/. ./

# Chạy lệnh build của React
RUN npm run build


# --- GIAI ĐOẠN 2: RUN (Chạy) ---
# Bắt đầu từ một image Node.js sạch
FROM node:16-alpine

# Đặt thư mục làm việc cho server
WORKDIR /app

# Sao chép các file package.json của server và cài đặt chỉ các gói production
COPY package*.json ./
RUN npm install --production

# Sao chép code của server
COPY server.js .

# *** PHẦN QUAN TRỌNG NHẤT ***
# Sao chép các file đã được build từ giai đoạn 'builder'
# vào đúng vị trí mà server Express mong đợi.
COPY --from=builder /app/client/build ./client/build

# Thông báo cổng mà server sẽ chạy
EXPOSE 5000

# Lệnh để khởi chạy server
CMD ["node", "server.js"]
