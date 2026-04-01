# Prompt — Weekly Report từ Daily Reports

## Upload vào NotebookLM
Upload 5 file daily report (thứ 2 → thứ 6) làm sources.

## Prompt
```
Tổng hợp 5 bản daily report trong sources thành Weekly Report.

Format:
1. 今週の進捗 (Tiến độ tuần này)
   — Tóm tắt accomplishments chính theo feature/chức năng
   — Nêu % progress tổng thể

2. 課題・リスク (Vấn đề & Risk)
   — Tổng hợp TẤT CẢ issues/bugs/blockers trong tuần
   — Đánh dấu status: resolved ✅ / open 🔴 / in progress 🟡
   — Không bỏ sót issue nào dù nhỏ

3. 来週の予定 (Kế hoạch tuần tới)
   — Dựa trên remaining tasks và plan nêu trong daily cuối tuần

Tone: ビジネス敬語, báo cáo cho 部長 level, ngắn gọn nhưng đầy đủ.
Ngôn ngữ: Tiếng Nhật.
```

## Điểm cần chú ý khi demo
- AI có bắt được **BUG-302 (encoding)** vẫn open không? (issue nhỏ nhưng chưa assign)
- AI có nhắc **date format inconsistency** (INV-267) không? (ghi chú nhỏ thứ 4)
- AI có tổng hợp đúng progress % cuối tuần không? (~65%)
- Ghi chú cá nhân BrSE thứ 6 — AI có extract insight về workload Pham D không?
