# Prompt — Meeting Minutes → Action Items Tracking

## Upload vào NotebookLM
Upload 4 file 議事録 (meeting 12→15) làm sources.

## Prompt
```
Từ 議事録 của 4 buổi meeting gần nhất trong sources:

1. Liệt kê TẤT CẢ action items từ mỗi meeting
2. Đánh dấu status:
   ✅ Đã hoàn thành (meeting sau có mention kết quả)
   ⏳ Chưa hoàn thành (được nhắc nhưng chưa xong)
   ❓ Không rõ (không được nhắc lại ở bất kỳ meeting nào sau đó)
3. Highlight các items ❓ — đây là items có nguy cơ bị "quên"

Format: bảng
No. / Meeting回 / Meeting日 / アクション内容 / 担当者 / 期限 / ステータス
Sắp xếp theo meeting, mỗi meeting một nhóm.
```

## Đáp án — Các action items bị "rơi" (AI cần phát hiện)

### ❓ Items không bao giờ được nhắc lại:

1. **Meeting 12, No.3:** 鈴木PM cung cấp sample CSV format cho 出荷実績
   - 鈴木PM hứa cung cấp by 6/13
   - Meeting 13, 14, 15: KHÔNG ai nhắc lại
   - → Bị quên hoàn toàn. BrSE không follow up.

2. **Meeting 13, No.4:** Nguyen update WBS theo UAT schedule
   - Deadline 6/20
   - Meeting 14: Không nhắc (※ ghi chú trong file: "触れず")
   - Meeting 15: Không nhắc
   - → Bị quên. WBS có thể outdated.

3. **Meeting 14 (discussion):** 田中部長 quyết định 棚卸頻度 (月次 vs 週次)
   - 田中部長 nói "社内で検討して決定する"
   - Meeting 15: Không ai hỏi lại kết quả
   - → Quyết định quan trọng nhưng bị quên follow up.

### ⏳ Items chưa hoàn thành (acknowledged):

4. **Meeting 14, No.4:** Nguyen share テスト計画書
   - Deadline 7/1
   - Meeting 15: Nguyen thừa nhận chưa xong, hứa trong tuần
   - → Trễ nhưng có track.

### ✅ Items hoàn thành:
- Meeting 12: No.1 (spec confirm ✅), No.2 (DB perf ✅), No.4 (test URL ✅)
- Meeting 13: No.1 (estimate ✅), No.2 (regression ✅), No.3 (承認フロー ✅)
- Meeting 14: No.1 (廃棄見積もり ✅), No.2 (BUG-302 ✅), No.3 (UI fix ✅)
- Meeting 15: All new (latest meeting, chưa đến deadline)

## Điểm demo quan trọng
- AI có phát hiện đủ **3 items bị "rơi"** không?
- Đặc biệt item No.3 Meeting 12 (鈴木PM responsibility) — thường BrSE chỉ track items của mình, quên track items của khách.
- 棚卸頻度 decision — nằm trong discussion, không phải action item chính thức → AI có catch không?
