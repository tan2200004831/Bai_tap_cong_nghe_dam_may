const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Phục vụ file tĩnh
app.use(express.static(path.join(__dirname, 'client/build')));

// CÁCH 1: Dùng regex rõ ràng (tốt nhất)
app.get(/.*/, (req, res) => {  // <-- Sử dụng regex literal
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Hoặc CÁCH 2: Dùng parameter
// app.get(':all(.*)', (req, res) => {  // <-- Đặt tên parameter rõ ràng
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});