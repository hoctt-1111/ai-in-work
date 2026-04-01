// content.js — Section metadata and markdown content
// Each section: { id, title, shortTitle, time, icon, markdown }

const SECTIONS = [
{
  id: 0,
  title: 'Tổng quan — Mục đích & Agenda',
  shortTitle: 'Tổng quan',
  time: '—',
  icon: '🏠',
  markdown: `
<div class="overview-hero">
  <img src="logos/cevc4-logo-white-full.png" alt="CEVC4" class="hero-logo hero-logo-dark">
  <img src="logos/cevc4-logo-black-full.png" alt="CEVC4" class="hero-logo hero-logo-light">
  <h2 class="hero-title">Ứng dụng AI thực chiến cho BrSE・Comtor<br>trong dự án phần mềm Nhật Bản</h2>
</div>

### Mục đích buổi sharing

> Không chỉ **"biết dùng AI"** — mà chuyển sang **"dùng AI đúng cách, an toàn, và hiệu quả cao"** trong bối cảnh outsourcing Nhật Bản.

- **Đối tượng:** BrSE / Comtor đang làm việc trong mô hình offshore với khách hàng Nhật Bản
- **Nguồn dữ liệu:** Kết quả khảo sát 12 BrSE/Comtor thực tế
- **Tổng thời lượng:** ~100 phút

### Survey snapshot

| Chỉ số | Kết quả |
| --- | --- |
| Dùng AI hàng ngày | **11/12** người |
| Năng suất tăng 30–50% | **9/12** người |
| Lo ngại bảo mật dữ liệu | **10/12** người |
| Không biết prompt hiệu quả | **4/12** người |

---

## Agenda

| # | Nội dung | Thời lượng |
| --- | --- | --- |
| 0 | 📊 Opening — Thực trạng từ Survey | 5 phút |
| 1 | 🌏 Bối cảnh: Vai trò BrSE/Comtor & AI là "must-have" | 10 phút |
| 2 | 🔒 Nguyên tắc Vàng: Bảo mật & Compliance | 10 phút |
| 3 | ✉️ Case Study 1 — Giao tiếp khách hàng bằng tiếng Nhật | 15 phút |
| 4 | 📑 Case Study 2 — Đọc hiểu & Viết Specification | 20 phút |
| 5 | 📋 Case Study 3 — Quản lý dự án với AI | 10 phút |
| 6 | 🎯 Kỹ thuật Prompt — Framework CRAFT | 15 phút |
| 7 | ✅ Quy trình Hậu kiểm — AI output ≠ Final output | 5 phút |
| 8 | 🚀 Closing — Lộ trình áp dụng & Tài nguyên | 5 phút |

---

### Cách sử dụng website này
- Dùng **sidebar bên trái** (hoặc menu ☰ trên mobile) để chuyển giữa các phần
- Phím tắt: **← →** để điều hướng
- Bấm **Copy** trên các code block để sao chép prompt template
- Chuyển **🌙 dark mode** nếu thích
`
},
{
  id: 1,
  title: 'Opening — Thực trạng & Khó khăn từ Survey',
  shortTitle: 'Opening',
  time: '5 phút',
  icon: '📊',
  markdown: `
## Dữ liệu Survey

### Tin tốt — AI đã được adopt rộng rãi:
- ✅ **11/12** người dùng AI thường xuyên hàng ngày
- ✅ **9/12** cảm nhận năng suất tăng **30–50%**
- ✅ Ứng dụng đa dạng: email, dịch thuật, tóm tắt spec, viết tài liệu

### Nhưng — vẫn tồn tại gap lớn:
- ❌ **10/12** lo ngại về bảo mật dữ liệu
- ❌ **7/12** bị hạn chế bởi quy định dự án
- ❌ **6/12** mất thời gian chỉnh sửa output AI
- ❌ **5/12** gặp kết quả AI không chính xác
- ❌ **4/12** không biết prompt thế nào cho hiệu quả
- ❌ **4/12** chưa dùng AI cho quản lý dự án

### Câu hỏi mở cho audience:
> *"Chúng ta đã dùng AI nhiều — nhưng đã dùng ĐÚNG CÁCH chưa? Hôm nay chúng ta sẽ đi qua từng khó khăn thực tế và cách AI giải quyết."*
`
},
{
  id: 2,
  title: 'Bối cảnh: Vai trò BrSE/Comtor & AI là "must-have"',
  shortTitle: 'Bối cảnh',
  time: '10 phút',
  icon: '🌏',
  markdown: `
## Chuỗi công việc đặc thù trong mô hình offshore

\`\`\`
Khách hàng (JP) ←→ BrSE/Comtor ←→ Dev Team (VN)
       ↑                  ↑                ↑
  Tiếng Nhật         Cầu nối           Tiếng Việt
  Keigo/敬語      Dịch + Hiểu + Truyền đạt   Technical
  Spec gốc        QA, Confirm, Report    Implementation
\`\`\`

## 4 Nút thắt trong workflow hàng ngày

### 🗣️ Nút thắt 1: Rào cản ngôn ngữ
- Keigo (敬語) — sai level lịch sự = mất trust
- Thuật ngữ nghiệp vụ chuyên ngành — từ điển không có
- Nuance tiếng Nhật — cùng một câu nhưng tone khác nhau ý nghĩa khác

### 📄 Nút thắt 2: Khối lượng tài liệu lớn
- Spec dài hàng chục trang, nhiều version
- Format không thống nhất giữa các khách hàng
- Phải đọc hiểu → truyền đạt chính xác cho team

### ⏰ Nút thắt 3: Áp lực thời gian
- Timezone JP-VN lệch → window giao tiếp hẹp
- Phải phản hồi nhanh trong giờ overlap
- Meeting liên tục → ít thời gian để xử lý tài liệu

### ⚖️ Nút thắt 4: Trách nhiệm kép
- Vừa hiểu kỹ thuật đủ sâu để QA spec
- Vừa communicate chính xác bằng tiếng Nhật lịch sự
- Sai ở bất kỳ phía nào → rework, cost phát sinh, mất trust

## Kết luận

AI giải quyết **trực tiếp** cả 4 nút thắt:
- Ngôn ngữ → AI hỗ trợ keigo, dịch thuật, thuật ngữ
- Tài liệu → AI tóm tắt, so sánh, tạo cấu trúc
- Thời gian → AI tăng tốc xử lý gấp 2-3 lần
- Trách nhiệm kép → AI giúp kiểm tra chéo cả kỹ thuật lẫn ngôn ngữ

> AI không phải công cụ phụ trợ mà là **năng lực lõi mới** của BrSE/Comtor.
`
},
{
  id: 3,
  title: 'Nguyên tắc Vàng: Bảo mật & Compliance',
  shortTitle: 'Bảo mật',
  time: '10 phút',
  icon: '🔒',
  markdown: `
## Dữ liệu Survey
- **10/12** lo ngại về bảo mật dữ liệu — rào cản #1
- **7/12** bị hạn chế bởi quy định dự án không cho phép dùng tài liệu khách
- 1 người chia sẻ: *"phải tinh chỉnh input (xóa key, xóa thông tin khách hàng) khá tốn công sức và hơi cực"*

## Khó khăn thực tế
> "Muốn dùng AI nhưng không dám vì sợ lộ data khách hàng"

Trong mô hình outsourcing Nhật Bản, vi phạm NDA có thể dẫn đến mất hợp đồng cả team. Nỗi lo này hoàn toàn hợp lý — nên ta cần **GIẢI QUYẾT** chứ không phải **PHỦ NHẬN**.

---

## Giải pháp

### Bước 1: Phân loại dữ liệu theo mức độ nhạy cảm

| Mức độ | Ví dụ | Có dùng AI được không? |
| --- | --- | --- |
| 🟢 An toàn | Template chung, thuật ngữ, grammar check | Dùng thoải mái |
| 🟡 Cần xử lý | Spec đã anonymize, logic nghiệp vụ chung | Dùng sau khi loại bỏ PII |
| 🔴 Cấm | Source code khách, data thật, credentials | Tuyệt đối KHÔNG |

### Bước 2: Kỹ thuật Anonymize thực tế

**Trước khi anonymize:**
\`\`\`
Hệ thống quản lý kho của Mitsui Agro sử dụng API endpoint 
https://api.mitsui-agro.co.jp/v2/inventory với API key: sk-abc123...
Người phụ trách: Tanaka-buchō (田中部長)
\`\`\`

**Sau khi anonymize:**
\`\`\`
Hệ thống quản lý kho của Company A sử dụng REST API endpoint 
để quản lý inventory.
Người phụ trách: 部長 level phía khách hàng
\`\`\`

**Nguyên tắc:**
- Tên công ty → \`Company A\`, tên hệ thống → \`System X\`
- Xóa API key, password, endpoint thật
- Thay tên người → chức danh / role
- Dùng mô tả nghiệp vụ tổng quát thay vì paste nguyên spec

### Bước 3: Checklist trước khi paste vào AI

- [ ] Đã xóa tên khách hàng / tên dự án?
- [ ] Đã xóa credentials, API key, URL nội bộ?
- [ ] Đã confirm dự án cho phép dùng AI cho loại data này?
- [ ] Đang dùng tool có chính sách data phù hợp?

### Bước 4: Chọn đúng tool

| Tool | Data dùng cho training? | Phù hợp cho dự án? |
| --- | --- | --- |
| ChatGPT Free | Có thể | ❌ Không nên |
| ChatGPT Team / Enterprise | Không | ✅ Phù hợp |
| GitHub Copilot Business | Không | ✅ Phù hợp |
| Claude (Anthropic API) | Không (API) | ✅ Phù hợp |

---

## Takeaway
> *"Không phải 'dùng hay không dùng' — mà là 'dùng thế nào cho an toàn'. Anonymize đúng cách = unlock toàn bộ sức mạnh AI mà không vi phạm bất kỳ quy định nào."*
`
},
{
  id: 4,
  title: 'Case Study 1 — Giao tiếp khách hàng bằng tiếng Nhật',
  shortTitle: 'Giao tiếp JP',
  time: '15 phút',
  icon: '✉️',
  markdown: `
## Dữ liệu Survey
- **11/12** dùng AI soạn email keigo (敬語チェック) — use case #1
- **9/12** dịch thuật Việt ↔ Nhật
- **8/12** tóm tắt nội dung cuộc họp
- **5/12** viết biên bản họp

## Khó khăn thực tế
> "Viết email cho khách mà sợ sai keigo, tone không phù hợp — ảnh hưởng relationship"

---

## Case Study A: Soạn & kiểm tra Keigo

> 📂 **Demo files:** [Brief tiếng Việt](demo-data/case-study-1/case-a-keigo-email/01_brief_tieng_viet.md) · [Prompt kém ❌](demo-data/case-study-1/case-a-keigo-email/02_prompt_kem.md) · [Prompt CRAFT ✅](demo-data/case-study-1/case-a-keigo-email/03_prompt_craft.md) · [Follow-up giải thích keigo](demo-data/case-study-1/case-a-keigo-email/04_followup_giai_thich.md)

### 📌 Tình huống
Sprint delay 3 ngày do requirement thay đổi giữa chừng. Cần gửi email xin lỗi + giải thích + đề xuất plan mới cho 部長 (buchō) phía khách.

### 🛠️ Tools sử dụng
- **ChatGPT / Claude** — Soạn email tiếng Nhật từ brief tiếng Việt
- **Gợi ý thêm:** Dùng ChatGPT tạo nhiều version → so sánh tone

### ❌ Cách dùng kém
Paste tiếng Việt → "Dịch sang tiếng Nhật" → Gửi luôn

### ✅ Cách dùng tốt
Cung cấp context đầy đủ:
- **Ai nhận:** 部長 (buchō) — cần keigo cao
- **Relationship:** Khách hàng lâu năm, trust tốt
- **Mức nghiêm trọng:** Delay 3 ngày, không critical nhưng cần xin lỗi
- **Mục đích:** Xin lỗi + giải thích nguyên nhân + đề xuất plan mới

### Prompt template
\`\`\`
[CONTEXT] Dự án offshore, email gửi cho [CHỨC DANH] phía khách hàng.
Relationship: [MÔ TẢ].
[ACTION] Viết email [MỤC ĐÍCH] với nội dung: [NỘI DUNG CHÍNH].
[FORMAT] Cấu trúc: 件名 / 本文 (tách rõ 背景・原因・対応策・お願い) 
[TONE] ビジネス敬語, mức lịch sự phù hợp với [CHỨC DANH].
\`\`\`

### 💡 Điểm hay
- AI hiểu **level keigo** theo chức danh (部長 vs 課長 vs 担当者)
- Có thể yêu cầu AI **giải thích từng pattern keigo** đã dùng → BrSE học thêm
- Tạo nhiều version (formal / semi-formal) để chọn phù hợp tình huống

---

## Case Study B: Dịch tài liệu có thuật ngữ chuyên ngành

> 📂 **Demo files:** [Spec gốc JP](demo-data/case-study-1/case-b-glossary-translation/01_sample_spec_jp.md) · [Prompt rút glossary](demo-data/case-study-1/case-b-glossary-translation/02_prompt_rut_glossary.md) · [Glossary mẫu](demo-data/case-study-1/case-b-glossary-translation/03_glossary_output_mau.md) · [Prompt dịch spec](demo-data/case-study-1/case-b-glossary-translation/04_prompt_dich_spec.md) · [Input glossary ChatGPT](demo-data/case-study-1/case-b-glossary-translation/05_input_glossary_chatgpt.md)

### 📌 Tình huống
Nhận spec hệ thống nông nghiệp từ khách chứa nhiều thuật ngữ domain-specific (圃場管理, 防除暦, 出荷予定). Cần dịch chính xác sang tiếng Việt cho team dev hiểu, và ngược lại dịch Q&A sang tiếng Nhật cho khách.

### 🛠️ Tools sử dụng
- **NotebookLM** — Rút glossary + dịch spec có context
- **ChatGPT / Claude** — Dịch với glossary được input sẵn

---

### Bước 1: Dùng NotebookLM rút Glossary từ spec cũ

Upload tất cả spec/tài liệu cũ của dự án vào NotebookLM làm source, sau đó hỏi:

\`\`\`
Liệt kê tất cả thuật ngữ chuyên ngành (tiếng Nhật) xuất hiện trong các tài liệu.
Format dạng bảng: 日本語 / Tiếng Việt / English / Giải thích ngắn
\`\`\`

**Output mẫu:**

| 日本語 | Tiếng Việt | English | Giải thích |
| --- | --- | --- | --- |
| 圃場管理 | Quản lý thửa ruộng | Farm plot management | Quản lý thông tin từng thửa ruộng: diện tích, loại cây, lịch sử canh tác |
| 防除暦 | Lịch phòng trừ dịch hại | Pest control calendar | Lịch phun thuốc / xử lý sâu bệnh theo mùa vụ |
| 出荷予定 | Kế hoạch xuất hàng | Shipment schedule | Kế hoạch thu hoạch + đóng gói + giao hàng |

> **Tip:** NotebookLM giữ context toàn bộ tài liệu → rút glossary **chính xác hơn** so với hỏi GenAI không có tài liệu gốc.

---

### Bước 2: Input glossary vào NotebookLM để dịch spec

Sau khi có glossary, **giữ nguyên trong cùng notebook** (hoặc thêm glossary như 1 source), rồi paste spec cần dịch:

\`\`\`
Dựa trên bảng thuật ngữ đã tạo ở trên, dịch nội dung spec sau sang tiếng Việt.
Yêu cầu:
- Thuật ngữ chuyên ngành phải dùng ĐÚNG bản dịch trong glossary
- Giữ nguyên cấu trúc heading
- Đối tượng đọc: Developer Việt Nam
---
[PASTE SPEC CẦN DỊCH - đã anonymize]
\`\`\`

**Ưu điểm:** NotebookLM đã có toàn bộ spec cũ làm context → hiểu đúng nghĩa thuật ngữ trong ngữ cảnh dự án, không cần giải thích lại.

---

### Bước 3: Input glossary vào ChatGPT

Với ChatGPT, có **3 cách** input glossary:

**Cách 1: Custom Instructions (推奨)**
Vào Settings → Custom Instructions → thêm glossary vào phần "What would you like ChatGPT to know about you?"
\`\`\`
Tôi là BrSE làm dự án hệ thống nông nghiệp JP.
Khi dịch tài liệu, dùng bảng thuật ngữ sau:
- 圃場管理 = Quản lý thửa ruộng
- 防除暦 = Lịch phòng trừ dịch hại
- 出荷予定 = Kế hoạch xuất hàng
- ...
\`\`\`
→ **Áp dụng cho MỌI cuộc chat** mà không cần paste lại.

**Cách 2: Project / GPTs (cho team)**
Tạo Custom GPT hoặc ChatGPT Project với glossary + instruction sẵn → share cho cả team BrSE/Comtor cùng dùng.

**Cách 3: Đầu mỗi cuộc chat**
\`\`\`
Trước khi dịch, hãy tuân thủ bảng thuật ngữ sau.
Bất kỳ thuật ngữ nào có trong bảng → dùng bản dịch chỉ định.
Thuật ngữ không có trong bảng → dịch tự nhiên + đánh dấu [?] để tôi review.

[PASTE BẢNG GLOSSARY]
\`\`\`
→ Phù hợp khi cần **linh hoạt** thay đổi glossary theo dự án.

---

### So sánh kết quả

| Thuật ngữ | Google Translate | GenAI không glossary | NotebookLM / GenAI có glossary |
| --- | --- | --- | --- |
| 圃場管理 | Quản lý cánh đồng (?) | Field management | Quản lý thửa ruộng ✅ |
| 防除暦 | Lịch phòng trừ (?) | Pest control calendar | Lịch phòng trừ dịch hại ✅ |
| 出荷予定 | Dự định xuất hàng (?) | Shipping schedule | Kế hoạch xuất hàng ✅ |

### 💡 Điểm hay
- NotebookLM: **rút glossary + dịch trong cùng 1 tool** — context liên tục, không mất thông tin
- ChatGPT Custom Instructions: **setup 1 lần, apply mọi chat** — tiết kiệm thời gian
- Custom GPT: **share cho cả team** — đảm bảo consistency thuật ngữ giữa các member
- Đánh dấu **[?]** cho thuật ngữ mới → BrSE chỉ cần review điểm chưa chắc

---

## Case Study C: Meeting translate & Meeting recording

> 📂 **Demo files:** [Transcript cuộc họp](demo-data/case-study-1/case-c-meeting/01_meeting_transcript.md) · [Prompt tạo 議事録](demo-data/case-study-1/case-c-meeting/02_prompt_gijiroku.md) · [Prompt tóm tắt cho dev](demo-data/case-study-1/case-c-meeting/03_prompt_summary_cho_dev.md)

### 📌 Tình huống
Cuộc họp 1 tiếng với khách JP — BrSE cần vừa nghe, vừa ghi chú, vừa translate cho dev team. Sau meeting phải viết 議事録 (gijiroku) trong 30 phút.

### 🛠️ Tools sử dụng

**Trong lúc meeting:**
- **Felo Translator** — Real-time subtitle dịch JP → VN ngay trên màn hình (hỗ trợ Google Meet, Zoom, Teams)
- **Microsoft Teams Copilot** — Tự động transcript + tóm tắt meeting + gợi ý action items (nếu dùng Teams)

**Sau meeting:**
- **Notta / Otter.ai** — Upload recording → auto transcript (JP) → summary
- **NotebookLM** — Upload transcript → hỏi "Tóm tắt quyết định chính" / "Liệt kê action items"
- **ChatGPT / Claude** — Format lại thành 議事録 chuẩn JP

### Workflow gợi ý
1. **Trong meeting:** Felo chạy real-time subtitle → BrSE focus vào discussion thay vì dịch
2. **Ngay sau meeting:** Export transcript từ Notta/Teams → paste vào GenAI
3. **GenAI format** thành 議事録:

\`\`\`
[CONTEXT] Meeting giữa team offshore VN và khách hàng JP.
[ACTION] Từ transcript bên dưới, viết 議事録.
[FORMAT] 日時 / 参加者 / 議題 / 議論内容 / 決定事項 / 次回アクション（担当者・期限）
[TONE] Formal, ngắn gọn, dùng ですます体 nhất quán.
---
[TRANSCRIPT]
\`\`\`

### 💡 Điểm hay
- Felo subtitle **giảm tải cognitive** — không cần vừa nghe JP vừa dịch vừa ghi chú
- Meeting transcript **tự động hóa 80% công việc** ghi chép → BrSE chỉ cần review
- Kết hợp transcript tool + GenAI → **議事録 từ 1h xuống 10 phút**

---

## Case Study D: Luyện kịch bản trước meeting / report quan trọng

> 📂 **Demo files:** [Prompt tạo script](demo-data/case-study-1/case-d-roleplay/01_prompt_tao_script.md) · [AI đóng vai khách hỏi khó](demo-data/case-study-1/case-d-roleplay/02_prompt_roleplay_khach.md) · [Luyện hỏi-đáp + đánh giá](demo-data/case-study-1/case-d-roleplay/03_prompt_luyen_tra_loi.md)

### 📌 Tình huống
Tuần tới present demo Sprint cho 部長 lần đầu. Lo lắng về: phát âm, keigo, cách trả lời câu hỏi bất ngờ, cách giải thích issue bằng tiếng Nhật.

### 🛠️ Tools sử dụng
- **ChatGPT Advanced Voice Mode** — Nói chuyện trực tiếp bằng tiếng Nhật, AI phản hồi real-time, sửa phát âm & grammar
- **ChatGPT / Claude (text)** — Viết script trước → AI review keigo, suggest cải thiện
- **NotebookLM Audio Overview** — Upload tài liệu demo → nghe podcast-style overview để nắm key points

### Workflow gợi ý

**Bước 1:** Chuẩn bị script
\`\`\`
[CONTEXT] BrSE present Sprint demo cho 部長 phía khách.
[ACTION] Viết script presentation bao gồm:
1. Greeting + giới thiệu mục tiêu Sprint
2. Demo 3 tính năng chính (mô tả ngắn gọn)
3. Known issues + plan
4. Xin feedback
[TONE] Lịch sự nhưng tự tin, ですます体.
\`\`\`

**Bước 2:** AI đóng vai khách hỏi khó
\`\`\`
[ROLE] Đóng vai 部長 của công ty khách hàng Nhật Bản. 
Hãy đặt 5 câu hỏi bằng tiếng Nhật mà 部長 hay hỏi sau buổi demo:
- Câu hỏi về tiến độ
- Câu hỏi về risk / issue
- Câu hỏi về resource
Dùng ビジネス日本語 thực tế.
\`\`\`

**Bước 3:** Practice với Voice Mode
- Đọc script → AI feedback phát âm, nhịp nói
- Trả lời câu hỏi mẫu → AI đánh giá độ rõ ràng + keigo

### 💡 Điểm hay
- **Luyện tập không cần người Nhật** — practice bất cứ lúc nào
- Voice Mode cho **feedback phát âm real-time** — như có tutor riêng
- Chuẩn bị sẵn câu trả lời cho câu hỏi khó → **tự tin hơn gấp bội** trong meeting thật
- Áp dụng tương tự cho: report quan trọng, escalation call, proposal presentation

---

## Takeaway
> *"AI không chỉ là công cụ dịch chữ — AI là partner luyện tập, trợ lý real-time, và chuyên gia keigo riêng của bạn. Kết hợp đúng tool cho đúng tình huống = 10x hiệu quả giao tiếp."*
`
},
{
  id: 5,
  title: 'Case Study 2 — Đọc hiểu & Viết Specification',
  shortTitle: 'Spec',
  time: '20 phút',
  icon: '📑',
  markdown: `
## Dữ liệu Survey
- **10/12** dùng AI tóm tắt spec dài
- **7/12** viết mô tả chức năng
- **6/12** dùng AI tạo câu hỏi confirm với khách
- **6/12** chuẩn hóa format tài liệu
- **4/12** viết Acceptance Criteria

## Khó khăn thực tế
> "30 trang spec nhận cuối ngày, sáng mai cần Q&A list — đọc không kịp, sợ bỏ sót"
> "Phải viết spec/AC bằng tiếng Nhật chuẩn format khách yêu cầu — tốn cả ngày cho vài trang"

Trong offshore, spec là **"source of truth" duy nhất**. Hiểu sai 1 dòng spec = cả team dev đi sai hướng = rework = cost phát sinh = mất trust. Phần này đi theo đúng luồng công việc: **Nhận spec → Hiểu → Confirm → Viết → Chuẩn hóa → Estimate → Review**.

---

## Hết thời "Paste spec vào prompt"

### ❌ Vấn đề với cách paste truyền thống
- **Context limit** — spec 25+ trang không paste nổi vào 1 prompt
- **Mất thời gian anonymize** — phải xử lý thủ công mỗi lần paste
- **Không có persistent context** — mỗi chat mới phải paste lại từ đầu

### ✅ Giải pháp: Dùng tool có thể đọc file trực tiếp

| Tool | Cách hoạt động | Ai nên dùng |
| --- | --- | --- |
| **📓 NotebookLM** | Upload file (PDF, Docs, text) làm **Sources** → AI đọc toàn bộ, query bao nhiêu lần tùy ý | BrSE / Comtor — không cần IDE |
| **🤖 GitHub Copilot** | Mở folder dự án trong VS Code → Copilot đọc trực tiếp các file spec, format mẫu, glossary trong workspace | BrSE / Dev dùng VS Code |

---

### 🔒 Lợi thế bảo mật — Liên kết với phần Bảo mật (#2)

> **NotebookLM** (Google Workspace) và **GitHub Copilot Business** đều cam kết **KHÔNG dùng data để training model**.
>
> Điều này có nghĩa: với các dự án cho phép dùng tool enterprise, bạn có thể **upload/mở spec gốc mà không cần anonymize** — tiết kiệm bước xử lý thủ công tốn thời gian nhất.
>
> ⚠️ Vẫn cần confirm với PM / khách hàng rằng dự án cho phép dùng tool cụ thể. Tham khảo checklist ở phần **Bảo mật & Compliance**.

---

### Workflow tổng quan

\`\`\`
📁 Folder dự án
│   spec_v2.md
│   format_mau.md
│   glossary.md
│   user_registration_spec.md
│   ...
│
├──→ 📓 NotebookLM
│       Upload các file làm Sources
│       → Query bao nhiêu lần tùy ý
│       → Cross-reference nhiều docs cùng lúc
│
└──→ 🤖 GitHub Copilot (VS Code)
        Mở folder trong VS Code → Copilot Chat
        → Attach 1 hay nhiều file cùng lúc
        → Copilot đọc trực tiếp, không cần paste
\`\`\`

---

### Setup NotebookLM (1 phút)

\`\`\`
1. Truy cập notebooklm.google.com
2. Tạo Notebook mới → đặt tên theo dự án
3. Click "Add Sources" → upload các file:
   - Spec gốc (PDF / Google Docs)
   - Format mẫu (基本設計書 template)
   - Glossary (bảng thuật ngữ)
4. Đợi AI xử lý sources → sẵn sàng query
\`\`\`

> 💡 **Tip:** Upload toàn bộ spec cũ của dự án → NotebookLM tự hiểu context, thuật ngữ, và pattern viết của khách hàng.

---

### Setup GitHub Copilot — Folder dự án trong Workspace (2 phút)

**Bước 1:** Tạo folder chứa tài liệu dự án
\`\`\`
project-abc/
├── specs/
│   ├── 基本設計書_v2.md
│   ├── user_registration_spec.md
│   └── search_feature_spec.md
├── templates/
│   └── format_mau_基本設計書.md
├── glossary.md
└── ...
\`\`\`

**Bước 2:** Mở folder trong VS Code → dùng Copilot Chat

**Attach file:** Trong Copilot Chat, bấm 📎 hoặc gõ \`#file:\` để chọn 1 hay nhiều file:
\`\`\`
#file:specs/基本設計書_v2.md
#file:glossary.md

[Prompt của bạn ở đây]
\`\`\`

**Scan toàn bộ folder:** Dùng \`@workspace\` để Copilot tự tìm file liên quan:
\`\`\`
@workspace [Prompt của bạn ở đây]
\`\`\`

> 💡 **Tip:** Tổ chức tài liệu sẵn trong folder → input nhiều file cùng lúc dễ dàng, không cần copy-paste bất kỳ thứ gì.

---

## Case A: Tóm tắt spec dài

> 📂 **Demo files:** [Spec đầy đủ JP (基本設計書)](demo-data/case-study-2/case-a-summarize/01_spec_full_jp.md) · [Prompt mẫu](demo-data/case-study-2/case-a-summarize/02_prompt.md)

### Tình huống
Nhận 基本設計書 (spec thiết kế cơ bản) 25 trang cho module mới. Cần hiểu nhanh scope và chuyển brief cho team dev.

### ❌ Cách thông thường
Đọc lướt → ghi chú rời rạc → dễ bỏ sót

### ✅ NotebookLM — Upload spec → query trực tiếp

**Sources:** Upload 基本設計書 (PDF/Docs)

**Prompt:** _(không cần paste spec — AI đã đọc từ sources)_
\`\`\`
Tóm tắt toàn bộ spec theo cấu trúc:
1. Overview (3-5 câu)
2. Danh sách chức năng chính
3. Điều kiện / ràng buộc quan trọng
4. Các điểm cần confirm với khách hàng
5. Risk / điểm chưa rõ cần làm rõ
6. Điểm cần lưu ý cho developer
\`\`\`

### ✅ GitHub Copilot — File trong workspace

\`\`\`
#file:specs/基本設計書_v2.md

Tóm tắt spec này theo cấu trúc:
1. Overview (3-5 câu)
2. Danh sách chức năng chính
3. Điều kiện / ràng buộc quan trọng
4. Các điểm cần confirm với khách hàng
5. Risk / điểm chưa rõ
\`\`\`

### Giá trị
- Spec 25 trang → structured summary 1-2 trang
- Tiết kiệm **60-70%** thời gian đọc hiểu
- Không cần paste, không cần anonymize (nếu dùng tool enterprise)

---

## Case B: Tạo câu hỏi confirm chất lượng cao

> 📂 **Demo files:** [Spec đăng ký user](demo-data/case-study-2/case-b-confirm-questions/01_user_registration_spec.md) · [Prompt + gợi ý đáp án](demo-data/case-study-2/case-b-confirm-questions/02_prompt.md)

### Tình huống
Spec chức năng "Đăng ký người dùng" — đọc xong thấy "ổn" nhưng linh cảm có điểm chưa rõ. Không biết bắt đầu hỏi từ đâu.

### ✅ NotebookLM

**Sources:** Spec chức năng đã upload

\`\`\`
Đóng vai QA reviewer có kinh nghiệm 10 năm trong dự án Nhật Bản.
Đọc spec chức năng đăng ký người dùng trong sources và liệt kê:
1. Các điểm mơ hồ (ambiguous)
2. Thông tin thiếu (missing information)
3. Các điểm có thể hiểu nhiều cách

Format: bảng No. / 項目 / 不明点 / 確認したい内容
\`\`\`

### ✅ GitHub Copilot — Attach file từ workspace

\`\`\`
#file:specs/user_registration_spec.md

Đóng vai QA reviewer 10 năm kinh nghiệm dự án JP.
Liệt kê các điểm mơ hồ, thông tin thiếu, và điểm hiểu nhiều cách.
Format: bảng No. / 項目 / 不明点 / 確認したい内容
\`\`\`

### Output mẫu

| No. | 項目 | 不明点 | 確認したい内容 |
| --- | --- | --- | --- |
| 1 | パスワード要件 | 最小文字数・複雑さ未記載 | パスワードポリシーの詳細をご教示ください |
| 2 | メール認証 | 有効期限が未定義 | 認証リンクの有効期限は何時間でしょうか |
| 3 | エラー処理 | 重複メールの挙動未記載 | 既存メールの場合どう表示しますか |

### Giá trị
- Phát hiện vấn đề **TRƯỚC KHI** dev bắt tay làm = tiết kiệm cost gấp nhiều lần
- Câu hỏi có cấu trúc, format chuẩn JP → khách dễ trả lời

---

## Case C: Từ yêu cầu mơ hồ → Spec + AC

> 📂 **Demo files:** [Spec cũ (reference format)](demo-data/case-study-2/case-c-vague-to-spec/01_existing_feature_spec.md) · [Yêu cầu mơ hồ từ khách](demo-data/case-study-2/case-c-vague-to-spec/02_vague_request.md) · [Prompt mẫu](demo-data/case-study-2/case-c-vague-to-spec/03_prompt.md)

### Tình huống
Khách gửi qua chat: "画面に検索機能を追加してほしい。条件は3つくらいで" _(Muốn thêm chức năng tìm kiếm, khoảng 3 điều kiện)_ — Yêu cầu mơ hồ, nhưng BrSE phải viết thành functional description + AC rõ ràng.

### ✅ NotebookLM — Có spec cũ làm reference

**Sources:** Spec chức năng khác đã implement (làm reference pattern)

\`\`\`
Dựa trên format và mức độ chi tiết của các spec chức năng khác trong sources, 
viết spec mới cho yêu cầu sau:

Yêu cầu khách: 「画面に検索機能を追加してほしい。条件は3つくらいで」
Màn hình hiện tại: Danh sách sản phẩm, 500+ items

Bao gồm:
1. 機能説明: 概要, 検索条件, 検索結果表示, エラー処理
2. Acceptance Criteria (Given-When-Then, cả normal + edge case)
Format: tiếng Nhật, đúng style spec trong sources.
\`\`\`

### ✅ GitHub Copilot — Attach file reference từ workspace

\`\`\`
#file:specs/existing_feature_spec.md

Dựa trên format file trên, viết spec chức năng mới:
Yêu cầu: 「画面に検索機能を追加してほしい。条件は3つくらいで」
Màn hình hiện tại: Danh sách sản phẩm, 500+ items.
Bao gồm: 機能説明 + Acceptance Criteria (Given-When-Then).
\`\`\`

### Output mẫu AC
\`\`\`
【AC-1】正常検索
  Given: ユーザーが検索画面を表示している
  When: 商品名に「りんご」を入力し、検索ボタンを押す
  Then: 商品名に「りんご」を含む商品一覧が表示される

【AC-2】検索条件なし
  Given: ユーザーが検索画面を表示している
  When: 条件を入力せずに検索ボタンを押す
  Then: エラーメッセージ「検索条件を1つ以上入力してください」が表示される
\`\`\`

### 💡 Điểm hay
- NotebookLM tự học **style viết spec** của dự án từ sources → output consistent
- Copilot dùng file reference → output match format team đang dùng

---

## Case D: Generate spec theo format mẫu

> 📂 **Demo files:** [Spec tiếng Việt](demo-data/case-study-2/case-d-format-translate/01_spec_vn.md) · [Format mẫu JP](demo-data/case-study-2/case-d-format-translate/02_format_template.md) · [Glossary](demo-data/case-study-2/case-d-format-translate/03_glossary.md) · [Prompt mẫu](demo-data/case-study-2/case-d-format-translate/04_prompt.md)

### Tình huống
Team VN viết spec tiếng Việt, cần chuyển sang JP đúng format 基本設計書 của khách.

### ✅ NotebookLM — Upload 3 files cùng lúc

**Sources:**
- 📄 Spec tiếng Việt (cần dịch)
- 📋 Format mẫu 基本設計書 (từ khách)
- 📝 Bảng glossary dự án

\`\`\`
Dịch spec tiếng Việt trong sources sang tiếng Nhật.
- Tuân theo format mẫu 基本設計書 trong sources
- Giữ nguyên heading structure
- Dùng ĐÚNG thuật ngữ trong bảng glossary sources
- Thuật ngữ không có trong glossary → dịch + đánh dấu [?]
\`\`\`

### ✅ GitHub Copilot — Attach nhiều file cùng lúc

\`\`\`
#file:specs/spec_vn.md
#file:templates/format_mau_基本設計書.md
#file:glossary.md

Dịch spec tiếng Việt (file 1) sang tiếng Nhật.
Tuân theo format mẫu (file 2). Dùng thuật ngữ từ glossary (file 3).
\`\`\`

### Giá trị
- **Một prompt, 3 file input** — không cần paste + format thủ công
- Output gần final quality — thuật ngữ nhất quán, đúng format khách

---

## Case E: Tạo estimation breakdown từ spec

> 📂 **Demo files:** [Spec 棚卸機能](demo-data/case-study-2/case-e-estimation/01_stocktaking_spec.md) · [Prompt mẫu](demo-data/case-study-2/case-e-estimation/02_prompt.md)

### Tình huống
PM khách hỏi: "見積もりをお願いします" (Xin estimation). BrSE cần phân tách spec thành task list + estimate man-day — thường tốn nửa ngày.

### ✅ NotebookLM

**Sources:** Spec chức năng cần estimate

\`\`\`
Từ spec chức năng trong sources, phân tách thành danh sách task.
Context: Team 4 developers (2 senior, 2 junior).
Mỗi task gồm: タスク名 / 工程(設計/実装/テスト/レビュー) / 複雑度(H/M/L) / 工数(人日 min-max) / 依存 / 備考
Format: bảng tiếng Nhật, paste được vào Excel.
\`\`\`

### ✅ GitHub Copilot — Attach file spec

\`\`\`
#file:specs/search_feature_spec.md

Phân tách spec này thành task list để estimate.
Team: 4 devs (2 senior, 2 junior).
Format bảng: タスク名 / 工程 / 複雑度 / 工数(人日) / 依存 / 備考
\`\`\`

### Output mẫu

| No. | タスク名 | 工程 | 複雑度 | 工数(人日) | 依存 | 備考 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 検索画面 設計 | 設計 | M | 0.5 - 1.0 | — | UI仕様の確認必要 |
| 2 | 検索API実装 | 実装 | H | 1.0 - 2.0 | #1 | パフォーマンス考慮 |
| 3 | フロントエンド実装 | 実装 | M | 1.0 - 1.5 | #1 | レスポンシブ対応 |
| 4 | 単体テスト | テスト | M | 0.5 - 1.0 | #2,#3 | 境界値テスト含む |
| 5 | 結合テスト | テスト | M | 0.5 - 1.0 | #4 | — |

> ⚠️ **Lưu ý:** AI estimate chỉ là **reference point**. BrSE cần adjust dựa trên kinh nghiệm team thực tế, skill level, và context dự án.

---

## Case F: Review spec — Check logic consistency

> 📂 **Demo files:** [User Management](demo-data/case-study-2/case-f-review-logic/01_user_management_screen.md) · [Warehousing](demo-data/case-study-2/case-f-review-logic/02_warehousing_screen.md) · [Shipping](demo-data/case-study-2/case-f-review-logic/03_shipping_screen.md) · [Shelf Life](demo-data/case-study-2/case-f-review-logic/04_shelf_life_screen.md) · [Prompt + Đáp án](demo-data/case-study-2/case-f-review-logic/05_prompt_and_answers.md)

### Tình huống
Spec 20+ trang, nhiều section viết bởi nhiều người → có thể mâu thuẫn giữa các screen, business rule conflict, edge case chưa cover.

### ✅ NotebookLM — Cross-reference nhiều section cùng lúc ⭐

**Sources:** Upload TẤT CẢ sections của spec (đây là điểm mạnh nhất của NotebookLM — cross-reference)

\`\`\`
Đọc toàn bộ spec trong sources và kiểm tra:
1. Mâu thuẫn logic giữa các section/screen
2. Business rule conflict
3. Edge case chưa được đề cập
4. Thiếu error handling

Format bảng: No. / 箇所 / 問題種別 / 詳細 / 重要度(H/M/L) / 推奨対応
\`\`\`

### ✅ GitHub Copilot — Attach toàn bộ folder specs

\`\`\`
#file:specs/user_registration_spec.md
#file:specs/search_feature_spec.md
#file:specs/order_flow_spec.md

Kiểm tra toàn bộ spec files đính kèm:
1. Mâu thuẫn logic giữa các screen/section
2. Business rule conflict
3. Edge case thiếu
4. Error handling thiếu
Format: bảng No. / 箇所 / 問題種別 / 詳細 / 重要度 / 推奨対応
\`\`\`

> 💡 Hoặc dùng \`@workspace\` để Copilot tự tìm mọi file spec trong project.

### Output mẫu

| No. | 箇所 | 問題種別 | 詳細 | 重要度 | 推奨対応 |
| --- | --- | --- | --- | --- | --- |
| 1 | 画面A vs 画面C | ロジック矛盾 | 画面Aでは電話番号が必須、画面Cでは任意 | H | 仕様統一の確認 |
| 2 | 注文フロー | エッジケース不足 | 在庫切れ時のカート内商品の扱い未定義 | H | フロー追記 |
| 3 | ユーザー権限 | ルール不整合 | 管理者権限の定義が画面間で異なる | M | 権限マトリクス作成 |

### 💡 Vì sao Case F đặc biệt phù hợp NotebookLM / Copilot multi-file?
- Cần **cross-reference TOÀN BỘ** spec → paste thủ công bất khả thi
- NotebookLM giữ TẤT CẢ sources trong context → phát hiện mâu thuẫn cross-section
- Copilot attach nhiều file → so sánh chéo giữa các spec

---

## Chọn tool nào cho case nào?

| Case | NotebookLM | Copilot (attach file từ workspace) |
| --- | --- | --- |
| A. Tóm tắt spec | ⭐ Recommended | ✅ Tốt |
| B. Câu hỏi confirm | ⭐ Recommended | ✅ Tốt |
| C. Mơ hồ → Spec + AC | ⭐ (có spec cũ reference) | ✅ (attach file reference) |
| D. Spec theo format mẫu | ⭐ (multi-source) | ⭐ (attach nhiều file cùng lúc) |
| E. Estimation breakdown | ✅ Tốt | ✅ Tốt |
| F. Review logic | ⭐⭐ Best (cross-reference) | ⭐ (attach nhiều file) |

---

## Takeaway
> *"Đừng paste spec vào prompt — hãy để tool ĐỌC spec cho bạn. NotebookLM cho BrSE cần đọc-hiểu-viết nhanh, Copilot cho dev workflow tích hợp. Cả hai đều an toàn hơn, nhanh hơn, và mạnh hơn cách paste truyền thống."*
`
},
{
  id: 6,
  title: 'Case Study 3 — Quản lý dự án với AI',
  shortTitle: 'Quản lý',
  time: '10 phút',
  icon: '📋',
  markdown: `
## Dữ liệu Survey
- **5/12** dùng AI gợi ý cách xử lý issue
- **4/12** soạn Weekly Report
- **3/12** tóm tắt tiến độ từ nhiều nguồn
- **4/12 KHÔNG dùng AI cho quản lý** — vùng chưa khai phá

## Khó khăn thực tế
> "Tổng hợp progress từ Jira, Slack, email rồi viết report mất thời gian — không biết AI giúp gì"

Phần này tập trung vào **NotebookLM** — vì quản lý dự án là **công việc team**, cần tool có thể **share cho cả team cùng dùng**. NotebookLM cho phép tạo notebook chung → BrSE, dev, QA đều truy cập được.

---

## Tại sao NotebookLM cho quản lý dự án?

| Ưu điểm | Giải thích |
| --- | --- |
| **Share cho team** | Tạo notebook → share link → cả team query cùng 1 nguồn tài liệu |
| **Multi-document context** | Upload spec + meeting notes + rules + reports → AI hiểu toàn bộ context dự án |
| **Persistent** | Sources giữ nguyên → không cần upload lại mỗi lần |
| **Không cần IDE** | BrSE, Comtor, PM — ai cũng dùng được |

---

## Case A: Onboarding Kit cho member mới

> 📂 **Demo files:** [Project Overview](demo-data/case-study-3/case-a-onboarding/source_01_project_overview.md) · [Coding Conventions](demo-data/case-study-3/case-a-onboarding/source_02_coding_conventions.md) · [Prompt mẫu](demo-data/case-study-3/case-a-onboarding/prompt.md)

### Tình huống
Member mới join dự án giữa chừng. BrSE phải brief 1-2 ngày: context, tech stack, quy trình, conventions... Mỗi lần có người mới lại tốn thời gian tương tự.

### ✅ NotebookLM — Tạo "Senior ảo" cho dự án

**Sources:** Upload tất cả tài liệu dự án:
- 📄 Spec các chức năng
- 📋 Wiki / Confluence pages
- 📝 Coding conventions
- 📊 Kiến trúc hệ thống
- 📁 Meeting minutes gần đây

**Prompt:**
\`\`\`
Từ toàn bộ tài liệu dự án trong sources, tạo tài liệu onboarding cho developer mới.
Bao gồm:
1. Tổng quan dự án (mục đích, khách hàng, timeline)
2. Tech stack & kiến trúc hệ thống
3. Quy trình làm việc (git flow, review process, deployment)
4. Thuật ngữ nghiệp vụ quan trọng (glossary top 20)
5. Danh sách contacts & roles
6. FAQ — Các câu hỏi thường gặp khi mới join
Format: Tiếng Việt, dễ đọc, có mục lục.
\`\`\`

### 💡 Điểm hay
- Member mới **tự hỏi NotebookLM** bất cứ lúc nào thay vì hỏi BrSE
- NotebookLM trở thành **"senior ảo"** — trả lời câu hỏi dựa trên toàn bộ tài liệu dự án
- BrSE chỉ cần review output + bổ sung culture / unwritten rules

---

## Case B: AI trả lời câu hỏi spec & rules tự động

> 📂 **Demo files:** [Prompt mẫu (5 queries)](demo-data/case-study-3/case-b-qa-spec/prompt.md) — Dùng chung specs từ Case Study 2

### Tình huống
Dev hỏi hàng ngày: "Screen X có cần validate field Y không?", "Rule cho admin role là gì?", "Màn hình A dùng API nào?" → BrSE phải tra lại spec rồi trả lời → chiếm thời gian mỗi ngày.

### ✅ NotebookLM — Share notebook cho team tự tra

**Sources:** Upload TẤT CẢ spec + rule documents + Q&A history

**Share:** Tạo notebook → Share link cho dev team → ai cần thì tự query

**Prompt mẫu (dev tự hỏi):**
\`\`\`
Trong spec, chức năng 入庫管理 có validate gì cho trường 入庫数量 không?
Nếu có, liệt kê: điều kiện validate, error message, và business rule liên quan.
\`\`\`

\`\`\`
Rule nào áp dụng cho user role 管理者 khi thực hiện 廃棄登録?
Cần approval từ ai? Có exception nào không?
\`\`\`

### 💡 Điểm hay
- **Giảm tải BrSE**: dev tự tra → chỉ escalate khi AI không trả lời được
- NotebookLM giữ context toàn bộ spec → trả lời **cross-reference** chính xác
- Tránh tình huống "spec nói vậy nhưng tôi hiểu khác"

> ⚠️ **Lưu ý:** AI có thể "hallucinate" nội dung không có trong spec. Dev cần verify lại với spec gốc nếu output quan trọng. Tham khảo phần **Hậu kiểm**.

---

## Case C: Weekly Report từ daily report

> 📂 **Demo files:** [Daily T2](demo-data/case-study-3/case-c-weekly-report/source_01_daily_mon.md) · [T3](demo-data/case-study-3/case-c-weekly-report/source_02_daily_tue.md) · [T4](demo-data/case-study-3/case-c-weekly-report/source_03_daily_wed.md) · [T5](demo-data/case-study-3/case-c-weekly-report/source_04_daily_thu.md) · [T6](demo-data/case-study-3/case-c-weekly-report/source_05_daily_fri.md) · [Prompt](demo-data/case-study-3/case-c-weekly-report/prompt.md)

### Tình huống
Cuối tuần, BrSE đọc 5 bản daily report → tổng hợp tuần báo → viết tiếng Nhật format khách yêu cầu. Tốn 1-2 tiếng mỗi tuần.

### ✅ NotebookLM — Upload 5 daily reports → query tổng hợp

**Sources:** Upload 5 file daily report (thứ 2 → thứ 6)

**Prompt:**
\`\`\`
Tổng hợp 5 bản daily report trong sources thành Weekly Report.
Format:
1. 今週の進捗 (Tiến độ tuần này) — tóm tắt accomplishments chính
2. 課題・リスク (Vấn đề & Risk) — tổng hợp từ các issues trong daily
3. 来週の予定 (Kế hoạch tuần tới) — dựa trên remaining tasks
Tone: ビジネス敬語, báo cáo cho 部長 level, ngắn gọn.
Không bỏ sót issue nào dù nhỏ.
\`\`\`

### 💡 Điểm hay
- Giảm từ **1-2 tiếng → 15-20 phút** (chỉ review + adjust)
- Format **nhất quán** mỗi tuần
- Không bỏ sót issue nhỏ mà daily reporter coi là minor

---

## Case D: Dashboard effort & workload từ timesheet

> 📂 **Demo files:** [Timesheet CSV](demo-data/case-study-3/case-d-dashboard/source_01_timesheet.csv) · [Jira Export CSV](demo-data/case-study-3/case-d-dashboard/source_02_jira_export.csv) · [Prompt](demo-data/case-study-3/case-d-dashboard/prompt.md)

### Tình huống
PM khách hỏi "リソースの状況は？" (Tình hình resource?). BrSE cần nắm: ai đang làm gì, effort bao nhiêu, có overload không, task nào bị block.

### ✅ NotebookLM — Upload timesheet + ticket data

**Sources:** Upload file CSV/Excel:
- 📊 Timesheet tuần (member / task / giờ)
- 📋 Jira export hoặc task list (status, assignee, estimate)

**Prompt:**
\`\`\`
Từ dữ liệu timesheet và task list trong sources, phân tích:
1. Effort mỗi member (tổng giờ, % so với capacity 40h/week)
2. Workload balance — ai đang overload (>100%), ai đang rảnh (<70%)
3. Task status summary — hoàn thành / đang làm / blocked
4. Gợi ý re-assign nếu có imbalance
Format: bảng tiếng Nhật, phù hợp paste vào report cho khách.
\`\`\`

### 💡 Điểm hay
- **Data-driven** thay vì "cảm tính"
- Phát hiện bottleneck và overload **sớm**
- Output paste được vào weekly report hoặc gửi riêng cho PM

---

## Case E: Meeting minutes → Action items tracking

> 📂 **Demo files:** [議事録 #12](demo-data/case-study-3/case-e-action-tracking/source_01_meeting_20250610.md) · [#13](demo-data/case-study-3/case-e-action-tracking/source_02_meeting_20250617.md) · [#14](demo-data/case-study-3/case-e-action-tracking/source_03_meeting_20250624.md) · [#15](demo-data/case-study-3/case-e-action-tracking/source_04_meeting_20250701.md) · [Prompt + Đáp án](demo-data/case-study-3/case-e-action-tracking/prompt.md)

### Tình huống
Mỗi tuần 2-3 meeting với khách JP. BrSE viết 議事録 → gửi → nhưng action items từ meeting trước thường bị quên follow up. "前回のアクション、進捗は？" mà BrSE không nhớ.

### ✅ NotebookLM — Upload nhiều 議事録 → track xuyên suốt ⭐⭐

**Sources:** Upload 議事録 của 3-4 buổi meeting liên tiếp

**Prompt (chuẩn bị trước meeting tiếp theo):**
\`\`\`
Từ 議事録 của 4 buổi meeting gần nhất trong sources:
1. Liệt kê TẤT CẢ action items từ mỗi meeting
2. Đánh dấu status:
   ✅ Đã hoàn thành (meeting sau có mention kết quả)
   ⏳ Chưa hoàn thành
   ❓ Không rõ (không được nhắc lại)
3. Highlight các items quá hạn hoặc chưa được nhắc lại
Format: bảng No. / Meeting日 / アクション内容 / 担当者 / 期限 / ステータス
\`\`\`

### 💡 Điểm hay
- Phát hiện action items bị **"rơi"** qua các meeting
- BrSE chuẩn bị meeting tiếp theo → biết chính xác cần follow up gì
- NotebookLM cross-reference nhiều meeting → **không sót item nào**

> Đây là điểm mạnh nhất của NotebookLM — **persistent multi-document context** cho phép track xuyên suốt nhiều meeting.

---

## Tóm tắt: NotebookLM = "Knowledge Base" cho team

| Case | Upload gì | Ai dùng | Giá trị |
| --- | --- | --- | --- |
| A. Onboarding | Toàn bộ docs dự án | Member mới | Tự onboard, giảm tải BrSE |
| B. Q&A Spec | Specs + rules | Dev team | Tự tra spec, giảm hỏi BrSE |
| C. Weekly Report | 5 daily reports | BrSE | 1-2h → 15 phút |
| D. Dashboard | Timesheet + tickets | BrSE / PM | Data-driven resource mgmt |
| E. Action Tracking | 議事録 nhiều meeting | BrSE | Không quên action items |

---

## Takeaway
> *"NotebookLM không chỉ là tool cá nhân — khi share cho team, nó trở thành knowledge base sống của dự án. Upload tài liệu 1 lần, cả team query mãi mãi."*
`
},
{
  id: 7,
  title: 'Kỹ thuật Prompt — Framework CRAFT',
  shortTitle: 'Prompt CRAFT',
  time: '15 phút',
  icon: '🎯',
  markdown: `
## Dữ liệu Survey
- **4/12** thừa nhận "không biết prompt thế nào"
- **6/12** mất thời gian chỉnh sửa output AI
- **5/12** gặp kết quả AI không chính xác

## Khó khăn thực tế
> "Không biết prompt sao cho AI hiểu, kết quả sai lè, chỉnh tới chỉnh lui mất thời gian"

---

## Framework CRAFT cho BrSE/Comtor

| Yếu tố | Ý nghĩa | Ví dụ thực tế |
| --- | --- | --- |
| **C** - Context | Bối cảnh dự án | "Dự án maintenance hệ thống EC, khách là 部長 level" |
| **R** - Role | Vai trò AI đóng | "Đóng vai BrSE senior 10 năm kinh nghiệm" |
| **A** - Action | Hành động cần làm | "Viết email xin lỗi về delay 3 ngày" |
| **F** - Format | Định dạng output | "Format: 件名 / 本文, tách rõ 原因 và 対応策" |
| **T** - Tone | Giọng điệu | "Lịch sự nhưng thẳng thắn, thể hiện trách nhiệm" |

---

## Demo: Prompt kém vs Prompt tốt

### ❌ Prompt kém:
\`\`\`
Dịch cái này sang tiếng Nhật
\`\`\`
**Kết quả:** Dịch literal, sai tone, mất thuật ngữ chuyên ngành

### ✅ Prompt CRAFT:
\`\`\`
[C] Dự án EC system. Tài liệu là mô tả chức năng thanh toán.
[R] Technical writer chuyên tài liệu JP.
[A] Dịch mô tả chức năng sau sang tiếng Nhật.
[F] Giữ heading structure. Glossary:
    - Thanh toán → 決済
    - Giỏ hàng → カート
    - Xác nhận → 確認
[T] 基本設計書 level, đối tượng đọc là engineer khách.
---
[NỘI DUNG CẦN DỊCH]
\`\`\`
**Kết quả:** Chính xác, đúng format, đúng tone, thuật ngữ nhất quán

---

## Thư viện Prompt Template

### Template 1: Email tiếng Nhật
\`\`\`
[C] Dự án [LOẠI], email gửi cho [CHỨC DANH] phía khách.
[R] BrSE senior có kinh nghiệm giao tiếp khách JP.
[A] Viết email [MỤC ĐÍCH]: [NỘI DUNG CHÍNH].
[F] 件名 / 本文 (背景・原因・対応策・お願い)
[T] ビジネス敬語, mức lịch sự phù hợp [CHỨC DANH].
\`\`\`

### Template 2: Tóm tắt Spec
\`\`\`
[C] Spec [LOẠI] cho module [TÊN MODULE].
[R] BrSE reviewer cần brief cho team dev.
[A] Tóm tắt theo: 概要 / 機能一覧 / 注意点 / 確認事項.
[F] Tiếng Việt, bullet points, tối đa 2 trang.
[T] Kỹ thuật, rõ ràng, actionable.
\`\`\`

### Template 3: Câu hỏi Confirm
\`\`\`
[C] Spec chức năng [TÊN], phase [PHASE].
[R] QA reviewer 10 năm kinh nghiệm dự án JP.
[A] Phát hiện điểm mơ hồ, sinh câu hỏi confirm.
[F] Bảng: No. / 項目 / 不明点 / 確認したい内容
[T] Chuyên nghiệp, trọng tâm, có priority.
\`\`\`

### Template 4: Weekly Report
\`\`\`
[C] Dự án [LOẠI], sprint [SỐ], team [SỐ NGƯỜI].
[R] PM báo cáo cho khách.
[A] Tổng hợp thành Weekly Report.
[F] 今週の進捗 / 課題・リスク / 来週の予定
[T] ビジネス敬語, ngắn gọn.
---
[RAW DATA]
\`\`\`

---

## Takeaway
> *"CRAFT + Template = combo giải quyết gốc rễ 'không biết prompt' và 'output sai'. Prompt tốt hơn = Output tốt hơn = Ít chỉnh sửa hơn."*
`
},
{
  id: 8,
  title: 'Quy trình Hậu kiểm — AI output ≠ Final output',
  shortTitle: 'Hậu kiểm',
  time: '5 phút',
  icon: '✅',
  markdown: `
## Dữ liệu Survey
- **5/12** gặp kết quả AI không chính xác
- **6/12** mất thời gian chỉnh sửa output

## Khó khăn thực tế
> "AI output có khi sai, nhưng không có quy trình rõ ràng để kiểm"

---

## Quy trình 3 bước: Generate → Verify → Refine

### Bước 1: AI Generate
- Dùng prompt CRAFT → nhận bản draft đầu tiên
- **KHÔNG gửi ngay** — đây mới là draft

### Bước 2: Human Verify
- Kiểm tra theo checklist bên dưới
- Ghi chú điểm cần chỉnh sửa

### Bước 3: AI Refine
- Feedback cho AI: "Chỉnh [X] thành [Y], thêm [Z]"
- AI refine → Kiểm tra lần cuối → Final output

---

## Checklist theo loại output

### ✉️ Email tiếng Nhật
- [ ] Keigo đúng level cho người nhận?
- [ ] Nội dung khớp đúng ý muốn truyền đạt?
- [ ] Tên, chức danh người nhận chính xác?
- [ ] 件名 rõ ràng, phù hợp?

### 📄 Spec / Tài liệu dịch
- [ ] Thuật ngữ nhất quán xuyên suốt?
- [ ] Logic nghiệp vụ không bị đảo/sai?
- [ ] Format đúng mẫu khách yêu cầu?
- [ ] Số liệu, tên field chính xác?

### 📋 Meeting minutes
- [ ] Ai nói gì — ghi đúng người?
- [ ] Quyết định (決定事項) ghi chính xác?
- [ ] Action items đủ: người + deadline?

### ❓ Câu hỏi confirm
- [ ] Câu hỏi rõ ràng, không mơ hồ?
- [ ] Không trùng lặp?
- [ ] Có priority?

### 📊 Weekly Report
- [ ] Số liệu khớp data gốc?
- [ ] Tone phù hợp level người đọc?
- [ ] Risk/issue phản ánh đúng tình hình?

---

## Mindset quan trọng

> **AI = "Junior staff rất nhanh nhưng đôi khi sai"** — bạn (senior) vẫn phải review. Prompt tốt hơn = ít review hơn. Nhưng **KHÔNG BAO GIỜ** bỏ qua bước review.

---

## Takeaway
> *"AI tạo draft tốt — bạn biến draft thành final. Review = luôn luôn cần."*
`
},
{
  id: 9,
  title: 'Closing — Lộ trình áp dụng & Tài nguyên',
  shortTitle: 'Closing',
  time: '5 phút',
  icon: '🚀',
  markdown: `
## Tóm tắt: Khó khăn → Giải pháp AI

| Khó khăn | Giải pháp AI | Phần |
| --- | --- | --- |
| Lo bảo mật, không dám dùng | Phân loại data + Anonymize + Checklist | #2 |
| Sợ sai keigo, tone email | Context + prompt template + so sánh output | #3 |
| Spec dài, đọc không kịp | Chain prompting + structured summary | #4 |
| Spec mơ hồ, không biết hỏi gì | AI đóng vai QA reviewer + confirm questions | #4 |
| Viết spec/AC tốn thời gian | AI sinh draft + format mẫu + glossary | #4 |
| Estimation & review spec | AI breakdown task + check logic consistency | #4 |
| Report thủ công, tốn thời gian | Multi-source → report + risk analysis | #5 |
| Prompt kém, output sai | Framework CRAFT + hậu kiểm 3 bước | #6,7 |

---

## Lộ trình 3 giai đoạn

### 🏃 Tuần 1-2: Quick Win
Chọn 1 khó khăn gặp nhiều nhất → dùng prompt template tương ứng

### 🔄 Tháng 1: Build Habit
Áp dụng checklist bảo mật + hậu kiểm. Xây prompt library riêng cho dự án.

### 🚀 Tháng 2-3: Level Up
Confirm spec bằng AI, risk analysis, spec comparison, workflow tự động.

---

## Tài nguyên phát sau buổi sharing
1. **Prompt template library** — 5 template cho email, dịch, tóm tắt, confirm, report
2. **Checklist bảo mật** — 4 bước trước khi paste vào AI
3. **Checklist hậu kiểm** — theo từng loại output
4. **Framework CRAFT reference card**

---

## Call-to-action

> *"Chọn **1 trong 7 khó khăn** hôm nay → áp dụng giải pháp **NGAY TRONG TUẦN** này → chia sẻ kết quả ở nhóm chat."*
>
> *"Bắt đầu từ cái nhỏ nhất mà bạn gặp HÀNG NGÀY."*
`
}
];
