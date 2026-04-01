# Prompt — Tạo câu hỏi confirm chất lượng cao

## NotebookLM
**Sources đã upload:** `01_user_registration_spec.md`

```
Đóng vai QA reviewer có kinh nghiệm 10 năm trong dự án Nhật Bản.
Đọc spec chức năng đăng ký người dùng trong sources và liệt kê:
1. Các điểm mơ hồ (ambiguous)
2. Thông tin thiếu (missing information)
3. Các điểm có thể hiểu nhiều cách (multiple interpretations)

Format: bảng No. / 項目 / 不明点 / 確認したい内容
```

## GitHub Copilot
```
#file:demo-data/case-spec/case-b-confirm-questions/01_user_registration_spec.md

Đóng vai QA reviewer 10 năm kinh nghiệm dự án JP.
Liệt kê các điểm mơ hồ, thông tin thiếu, và điểm hiểu nhiều cách.
Format: bảng No. / 項目 / 不明点 / 確認したい内容
```

---

## Gợi ý các điểm mơ hồ trong spec mẫu (để presenter biết trước)

1. **パスワード要件** — Không ghi rõ min length, complexity (chữ hoa, số, ký tự đặc biệt?)
2. **確認メール** — Không ghi link có hết hạn sau bao lâu
3. **メール重複(E-004)** — Nếu trùng email thì hiển thị gì? Có cho biết email đã tồn tại? (bảo mật)
4. **プロフィール画像** — Không ghi format, dung lượng tối đa, kích thước
5. **ロール承認** — Quy trình approve thế nào? Email? Màn hình approve?
6. **電話番号** — Format? Có validate không? Trong nước hay quốc tế?
7. **初回パスワード変更** — Khi đổi password lần đầu, có yêu cầu complexity?
8. **アカウント無効化** — Nếu user không click mail confirm thì sao? Bao lâu thì xóa?
