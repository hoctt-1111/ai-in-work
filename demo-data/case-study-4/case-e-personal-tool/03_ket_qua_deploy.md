# Case E — Kết quả & Deploy

## Quá trình phát triển

### Timeline
| Bước | Thời gian | Mô tả |
|---|---|---|
| Viết ý tưởng thô | 5 phút | Bullet points cơ bản |
| AI sinh spec | 15 phút | Spec 13 trang chi tiết |
| Review & chỉnh spec | 20 phút | Thêm/bớt features |
| AI sinh code lần 1 | 20 phút | 6 files JS + HTML + CSS |
| Test & feedback | 30 phút | Tìm bugs, yêu cầu sửa |
| AI iterate lần 2-3 | 25 phút | Fix bugs + polish UI |
| Deploy lên Netlify | 5 phút | Git push → auto deploy |
| **Tổng** | **~2 giờ** | Từ ý tưởng → production |

### Kết quả cuối cùng
- ✅ **6 file JS** module hóa — clean code, easy maintain
- ✅ **Shunting-yard algorithm** — tính chính xác `2+3×4=14` (không phải 20)
- ✅ **Lịch sử tính toán** — lưu localStorage, persist qua refresh
- ✅ **Dark/Light mode** — CSS Variables, smooth transition
- ✅ **Full keyboard support** — gõ nhanh hơn click
- ✅ **Responsive** — dùng được trên mobile
- ✅ **Deploy miễn phí** — Netlify, custom domain optional

---

## So sánh: AI-assisted vs Traditional

| Tiêu chí | Tự code từ đầu | AI-assisted |
|---|---|---|
| **Thời gian** | 1-2 ngày | ~2 giờ |
| **Spec** | Thường skip | 13 trang chi tiết |
| **Architecture** | Có thể messy | Module hóa từ đầu |
| **Edge cases** | Dễ quên | AI cover sẵn |
| **Testing** | Manual | AI suggest test scenarios |

---

## Workflow tổng quát để tự tạo tool

```
1. Ý tưởng (5 phút)
   └── Viết bullet points: cần gì, để làm gì

2. Spec (15-20 phút)
   └── Prompt AI: "Viết spec cho [ý tưởng]"
   └── Review + chỉnh

3. Code (20-30 phút)
   └── Prompt AI: "Implement theo spec này"
   └── AI sinh full codebase

4. Iterate (30-45 phút)
   └── Test → tìm bugs
   └── Feedback cho AI → AI sửa
   └── Repeat 2-3 lần

5. Deploy (5 phút)
   └── Git push → Netlify/Vercel/GitHub Pages
   └── Done! Dùng hàng ngày
```

---

## Bài học
1. **Spec trước, code sau** — AI output tốt hơn 10x khi có spec rõ
2. **Module hóa** — Để AI chia nhỏ files, dễ debug từng phần
3. **Iterate > Perfect first time** — 3 lần iterate tốt hơn 1 lần prompt dài
4. **Deploy ngay** — Càng sớm dùng thật, càng sớm thấy thiếu gì
