## Bối cảnh
Công việc hàng ngày cần tính toán nhanh — estimate man-day, convert currency, tính % allocation... Dùng máy tính điện thoại thì thiếu tính năng, Google Calculator thì không lưu lịch sử.

---

## Ý tưởng thô (viết trong 5 phút)

```
Cần 1 máy tính online, có:
- Phép tính cơ bản: +, -, x, ÷
- Phép tính nâng cao: %, căn bậc 2, bình phương, 1/x
- Có lịch sử tính toán (lưu lại để xem lại sau)
- Dark mode (vì hay làm đêm)
- Keyboard shortcut (gõ nhanh hơn click)
- Deploy miễn phí ở đâu đó
- Không cần backend, chạy offline được
```

---

## Prompt đầu tiên cho AI

```
Tôi muốn tạo ứng dụng Calculator Online. Hãy giúp tôi viết spec đầy đủ.

Yêu cầu cơ bản:
- Phép tính cơ bản (+-×÷) và nâng cao (%, √, x², 1/x)
- Lịch sử tính toán lưu localStorage
- Dark/Light mode
- Keyboard shortcut
- Responsive
- HTML/CSS/JS thuần, không framework
- Deploy trên Netlify

Hãy viết spec theo format:
1. Tổng quan
2. Tech stack
3. Chức năng chi tiết (bảng)
4. UI/UX design
5. Keyboard shortcut mapping
6. Error handling
7. File structure
```

---

## Kết quả
AI sinh ra spec 13 trang — chi tiết hơn nhiều so với ý tưởng ban đầu, bao gồm edge cases, accessibility, và animation specs mà mình chưa nghĩ tới.
