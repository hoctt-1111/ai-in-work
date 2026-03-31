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
| 4 | 📑 Case Study 2 — Đọc hiểu, Tóm tắt & Confirm Spec | 15 phút |
| 5 | 📝 Case Study 3 — Viết Specification & Tài liệu | 10 phút |
| 6 | 📋 Case Study 4 — Quản lý dự án với AI | 10 phút |
| 7 | 🎯 Kỹ thuật Prompt — Framework CRAFT | 15 phút |
| 8 | ✅ Quy trình Hậu kiểm — AI output ≠ Final output | 5 phút |
| 9 | 🚀 Closing — Lộ trình áp dụng & Tài nguyên | 5 phút |

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

> 📂 **Demo files:** [Brief tiếng Việt](demo-data/case-a-keigo-email/01_brief_tieng_viet.md) · [Prompt kém ❌](demo-data/case-a-keigo-email/02_prompt_kem.md) · [Prompt CRAFT ✅](demo-data/case-a-keigo-email/03_prompt_craft.md) · [Follow-up giải thích keigo](demo-data/case-a-keigo-email/04_followup_giai_thich.md)

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

> 📂 **Demo files:** [Spec gốc JP](demo-data/case-b-glossary-translation/01_sample_spec_jp.md) · [Prompt rút glossary](demo-data/case-b-glossary-translation/02_prompt_rut_glossary.md) · [Glossary mẫu](demo-data/case-b-glossary-translation/03_glossary_output_mau.md) · [Prompt dịch spec](demo-data/case-b-glossary-translation/04_prompt_dich_spec.md) · [Input glossary ChatGPT](demo-data/case-b-glossary-translation/05_input_glossary_chatgpt.md)

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

> 📂 **Demo files:** [Transcript cuộc họp](demo-data/case-c-meeting/01_meeting_transcript.md) · [Prompt tạo 議事録](demo-data/case-c-meeting/02_prompt_gijiroku.md) · [Prompt tóm tắt cho dev](demo-data/case-c-meeting/03_prompt_summary_cho_dev.md)

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

> 📂 **Demo files:** [Prompt tạo script](demo-data/case-d-roleplay/01_prompt_tao_script.md) · [AI đóng vai khách hỏi khó](demo-data/case-d-roleplay/02_prompt_roleplay_khach.md) · [Luyện hỏi-đáp + đánh giá](demo-data/case-d-roleplay/03_prompt_luyen_tra_loi.md)

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
  title: 'Case Study 2 — Đọc hiểu, Tóm tắt & Confirm Spec',
  shortTitle: 'Đọc hiểu Spec',
  time: '15 phút',
  icon: '📑',
  markdown: `
## Dữ liệu Survey
- **10/12** dùng AI tóm tắt spec dài
- **10/12** dùng AI giải thích thuật ngữ khó
- **6/12** dùng AI tạo câu hỏi confirm với khách

## Khó khăn thực tế
> "30 trang spec nhận cuối ngày, sáng mai cần Q&A list — đọc không kịp, sợ bỏ sót"

---

## Case Study A: Tóm tắt spec dài — Chain Prompting

### Tình huống
Nhận 基本設計書 (spec thiết kế cơ bản) 25 trang cho module mới. Cần hiểu nhanh scope và chuyển brief cho team dev.

### ❌ Cách thông thường
Đọc lướt → ghi chú rời rạc → dễ bỏ sót

### ✅ Cách dùng AI: Chain prompting

**Bước 1** — Tóm từng section:
\`\`\`
Tóm tắt section sau của spec theo cấu trúc:
- Mục tiêu của section
- Chức năng chính
- Điều kiện / ràng buộc
- Điểm cần lưu ý cho developer
---
[PASTE SECTION - đã anonymize]
\`\`\`

**Bước 2** — Tổng hợp overview:
\`\`\`
Dựa trên các tóm tắt section ở trên, tổng hợp:
1. Overview toàn bộ spec (3-5 câu)
2. Danh sách chức năng chính
3. Các điểm cần confirm với khách hàng
4. Các risk / điểm chưa rõ cần làm rõ
\`\`\`

---

## Case Study B: Giải thích thuật ngữ chuyên ngành

### Tình huống
Spec hệ thống nông nghiệp có thuật ngữ không có trong từ điển thông thường.

| Thuật ngữ | Từ điển | AI có context |
| --- | --- | --- |
| 圃場管理 | Quản lý cánh đồng | Farm plot management — quản lý thông tin từng thửa ruộng |
| 防除暦 | Lịch phòng trừ | Pest control calendar — lịch phun thuốc theo mùa vụ |
| 出荷予定 | Dự định xuất hàng | Shipment schedule — kế hoạch thu hoạch + giao hàng |

---

## Case Study C: Tạo câu hỏi confirm chất lượng cao

### Tình huống
Spec chức năng "Đăng ký người dùng" — đọc xong thấy "ổn" nhưng linh cảm có điểm chưa rõ.

### Prompt — AI đóng vai QA reviewer
\`\`\`
Đóng vai QA reviewer có kinh nghiệm 10 năm trong dự án Nhật Bản.
Đọc spec chức năng sau và liệt kê:
1. Các điểm mơ hồ (ambiguous)
2. Thông tin thiếu (missing information)
3. Các điểm có thể hiểu nhiều cách (multiple interpretations)

Format output dạng bảng: 
No. / 項目 / 不明点 / 確認したい内容
---
[PASTE SPEC - đã anonymize]
\`\`\`

### Output mẫu

| No. | 項目 | 不明点 | 確認したい内容 |
| --- | --- | --- | --- |
| 1 | パスワード要件 | 最小文字数・複雑さ未記載 | パスワードポリシーの詳細をご教示ください |
| 2 | メール認証 | 有効期限が未定義 | 認証リンクの有効期限は何時間でしょうか |
| 3 | エラー処理 | 重複メールの挙動未記載 | 既存メールの場合どう表示しますか |

---

## Takeaway
> *"AI không thay bạn đọc spec — AI giúp bạn đọc NHANH HƠN và KHÔNG BỎ SÓT."*
`
},
{
  id: 6,
  title: 'Case Study 3 — Viết Specification & Tài liệu',
  shortTitle: 'Viết Spec',
  time: '10 phút',
  icon: '📝',
  markdown: `
## Dữ liệu Survey
- **7/12** viết mô tả chức năng
- **7/12** dịch spec sang tiếng Nhật
- **6/12** chuẩn hóa format tài liệu
- **4/12** viết Acceptance Criteria = **1/12** so sánh version spec

## Khó khăn thực tế
> "Phải viết spec/AC bằng tiếng Nhật chuẩn format khách yêu cầu — tốn cả ngày cho vài trang"

---

## Case Study A: Từ yêu cầu mơ hồ → Spec + AC

### Tình huống
Khách gửi qua chat: "画面に検索機能を追加してほしい。条件は3つくらいで" _(Muốn thêm chức năng tìm kiếm, khoảng 3 điều kiện)_

### Prompt
\`\`\`
[CONTEXT] Dự án EC system cho khách JP. Đang ở phase 詳細設計.
[ACTION] Từ yêu cầu khách bên dưới, viết mô tả chức năng (機能説明).
Bao gồm: 概要, 検索条件, 検索結果表示, エラー処理.
[FORMAT] Tiếng Nhật, format 詳細設計書.
---
Yêu cầu: 画面に検索機能を追加してほしい。条件は3つくらいで
Màn hình hiện tại: Danh sách sản phẩm, có 500+ items
\`\`\`

### Output mẫu — Acceptance Criteria
\`\`\`
【AC-1】正常検索
  Given: ユーザーが検索画面を表示している
  When: 商品名に「りんご」を入力し、検索ボタンを押す
  Then: 商品名に「りんご」を含む商品一覧が表示される

【AC-2】検索条件なし
  Given: ユーザーが検索画面を表示している
  When: 条件を入力せずに検索ボタンを押す
  Then: エラーメッセージが表示される
\`\`\`

---

## Case Study B: Dịch & chuẩn hóa theo format mẫu

### Prompt
\`\`\`
[ACTION] Dịch tài liệu spec sau sang tiếng Nhật.
[FORMAT] Tuân theo format mẫu bên dưới. Giữ nguyên heading structure.
[GLOSSARY] 
  - Đăng ký → 登録
  - Người dùng → ユーザー  
  - Xác thực → 認証
---
[SPEC TIẾNG VIỆT]
---
[FORMAT MẪU từ khách]
\`\`\`

---

## Case Study C: So sánh version spec

### Prompt
\`\`\`
So sánh 2 version spec bên dưới.
Liệt kê CHỈ các thay đổi về nghiệp vụ (KHÔNG liệt kê typo, format change).
Đánh giá impact: High / Medium / Low.
Format: No. / 変更箇所 / 変更内容 / 影響度 / 備考
---
[VERSION 2.0]
---
[VERSION 2.1]
\`\`\`

---

## Takeaway
> *"Cung cấp format mẫu + glossary cho AI = output gần final quality. Tiết kiệm 60-70% thời gian."*
`
},
{
  id: 7,
  title: 'Case Study 4 — Quản lý dự án với AI',
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

---

## Case Study A: Weekly Report tự động

### Prompt
\`\`\`
[CONTEXT] Dự án offshore phát triển hệ thống cho khách JP. Sprint 2 tuần.
[ACTION] Tổng hợp thông tin sau thành Weekly Report.
[FORMAT] 
  1. 今週の進捗 (Tiến độ tuần này)
  2. 課題・リスク (Vấn đề & Risk)
  3. 来週の予定 (Kế hoạch tuần tới)
[TONE] Báo cáo cho 部長 level, ビジネス敬語, ngắn gọn.
---
[RAW DATA từ Jira + Slack + ghi chú]
\`\`\`

### Giá trị
- Giảm từ 1-2 tiếng → 15-20 phút
- Format nhất quán mỗi tuần

---

## Case Study B: Risk identification

### Tình huống
2 member nghỉ ốm cùng lúc, đúng tuần deadline.

### Prompt
\`\`\`
[CONTEXT] Dự án offshore, team 5 người, sprint cuối trước release.
[ACTION] Phân tích tình huống và liệt kê risk + countermeasure.
[FORMAT] Bảng: No. / リスク内容 / 影響度(H/M/L) / 発生確率(H/M/L) / 対応策
---
Tình huống: 2/5 member nghỉ ốm. Deadline trong 5 ngày.
Task còn lại: Unit test (3 ngày), integration test (2 ngày), bug fix.
\`\`\`

### Output mẫu

| No. | リスク内容 | 影響度 | 発生確率 | 対応策 |
| --- | --- | --- | --- | --- |
| 1 | テスト工数不足でリリース遅延 | H | H | 残メンバーでタスク再配分 |
| 2 | テストカバレッジ低下 | M | H | クリティカルパスのテスト優先 |
| 3 | 引継ぎ工数 | L | M | 作業ログ詳細記録 |

---

## Case Study C: Status summary cho stakeholder

PM khách hỏi: "全体の進捗はどうですか？" — cần trả lời nhanh, chính xác.

\`\`\`
[ACTION] Tổng hợp thông tin thành status summary.
[FORMAT] Ngắn gọn, 5-7 dòng, tiếng Nhật.
  全体進捗 → 完了タスク → 進行中 → ブロッカー → 次のアクション
---
[Jira summary] [Slack discussion] [Email updates]
\`\`\`

---

## Takeaway
> *"AI không chỉ giúp ngôn ngữ — AI giúp tư duy quản lý. Report, risk, progress summary — AI làm tốt nếu bạn cung cấp đúng data."*
`
},
{
  id: 8,
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
  id: 9,
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
  id: 10,
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
| Spec mơ hồ, không biết hỏi gì | AI đóng vai QA reviewer | #4 |
| Viết tài liệu JP tốn thời gian | AI sinh draft + format mẫu + glossary | #5 |
| Report thủ công, tốn thời gian | Multi-source → report + risk analysis | #6 |
| Prompt kém, output sai | Framework CRAFT + hậu kiểm 3 bước | #7,8 |

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
