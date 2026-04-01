# Prompt — Dashboard Effort & Workload

## Upload vào NotebookLM
- `source_01_timesheet.csv` — Timesheet chi tiết theo ngày
- `source_02_jira_export.csv` — Jira ticket export

## Prompt
```
Từ dữ liệu timesheet và task list trong sources, phân tích:

1. **Effort mỗi member tuần này:**
   — Tổng giờ thực tế
   — % so với capacity 40h/week
   — Breakdown theo category (Development / Bug fix / Meeting / Testing / etc.)

2. **Workload balance:**
   — Ai đang overload (>100%)?
   — Ai đang rảnh (<70%)?
   — Gợi ý re-assign nếu có imbalance

3. **Task status summary:**
   — Bao nhiêu ticket Done / In Progress / To Do / Open bug?
   — Ticket nào chưa assign (Unassigned)?
   — Ticket nào estimate bị vượt (Spent > Estimate)?

4. **Risk & bottleneck:**
   — Member nào đang handle quá nhiều task cùng lúc?
   — Bug nào chưa assign mà priority cao?

Format: bảng tiếng Nhật, phù hợp paste vào weekly report cho 部長.
```

## Điểm cần chú ý khi demo
- AI có phát hiện **Pham T.D overload** không? (DB fix + 出荷指示 API + sắp assign BUG-302)
- AI có catch **3 bugs chưa assign** (INV-267, BUG-301, BUG-302) không?
- AI có tính đúng **Nguyen V.A (BrSE) effort ratio** — phần lớn là Meeting + Communication, ít Development?
- Timesheet tổng giờ mỗi người có khớp capacity 40h không? (intentional: Tran B ~40h, Le C ~39.5h, Pham D ~39h, Hoang E ~37.5h, Nguyen VA ~38h)
