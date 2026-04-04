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

**Mục tiêu cụ thể:**
1. 🔄 **Sharing nội bộ** — Chia sẻ & học hỏi cách dùng AI khác nhau trong team
2. 🛡️ **Dùng đúng cách** — Hiểu ranh giới bảo mật, tránh rủi ro compliance
3. ⚡ **Nâng cao hiệu quả** — Prompt tốt hơn, workflow tối ưu hơn, output chính xác hơn
4. 🤝 **Chuẩn hóa** — Xây dựng "cách dùng AI chung" cho team BrSE/Comtor

- **Đối tượng:** BrSE / Comtor đang làm việc trong mô hình offshore với khách hàng Nhật Bản
- **Nguồn dữ liệu:**
  - Kết quả khảo sát BrSE/Comtor thực tế
  - Insight về quy trình, đặc thù công việc BrSE/Comtor trong phát triển phần mềm với KH Nhật Bản
- **Tổng thời lượng:** ~115 phút

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
| 0 | <a class="agenda-link" data-goto="1">📊 Opening & Warmup — Thực trạng từ Survey</a> | 5 phút |
| 1 | <a class="agenda-link" data-goto="2">🌏 Bối cảnh: Vai trò BrSE/Comtor & AI là "must-have"</a> | 5 phút |
| 2 | <a class="agenda-link" data-goto="3">🔒 Nguyên tắc Vàng: Bảo mật & Compliance</a> | 10 phút |
| 3 | <a class="agenda-link" data-goto="4">🎯 Kỹ thuật Prompt — Framework CRAFT</a> | 10 phút |
| 4 | <a class="agenda-link" data-goto="5">✉️ Case Study 1 — Giao tiếp khách hàng bằng tiếng Nhật</a> | 20 phút |
| 5 | <a class="agenda-link" data-goto="6">📑 Case Study 2 — Đọc hiểu & Viết Specification</a> | 25 phút |
| 6 | <a class="agenda-link" data-goto="7">📋 Case Study 3 — Quản lý dự án với AI</a> | 15 phút |
| 7 | <a class="agenda-link" data-goto="8">💡 Case Study 4 — Ứng dụng AI sáng tạo khác</a> | 10 phút |
| 8 | <a class="agenda-link" data-goto="9">✅ Quy trình Hậu kiểm — AI output ≠ Final output</a> | 5 phút |
| 9 | <a class="agenda-link" data-goto="10">🚀 Closing — Lộ trình áp dụng & Tài nguyên</a> | 5 phút |

---

<div class="team-photo">
  <img src="images/brse-comtor-team.jpg" alt="BrSE/Comtor Team">
  <p class="team-caption">🎓 Team BrSE・Comtor — Sharing & Leveling up cùng nhau!</p>
</div>

### Cách sử dụng website này
- Dùng **sidebar bên trái** (hoặc menu ☰ trên mobile) để chuyển giữa các phần
- Phím tắt: **← →** để điều hướng
- Bấm **Copy** trên các code block để sao chép prompt template
- Chuyển **🌙 dark mode** nếu thích
`
},
{
  id: 1,
  title: 'Opening & Warmup — Thực trạng từ Survey',
  shortTitle: 'Opening',
  time: '5 phút',
  icon: '📊',
  markdown: `
## ☕ Warmup — Bạn dùng AI thế nào?

### 🙋 Giơ tay poll
> **"Ai đã dùng AI sáng nay?"** → đếm nhanh

### 💬 Share out
> Mời **2 bạn** chia sẻ nhanh: **"Lần dùng AI thành công nhất"**
>
> Mời **2 bạn** chia sẻ nhanh: **"Lần fail đáng nhớ nhất"**
> (VD: AI dịch "仕様書" thành "tấm vé đặc biệt", AI viết email kính ngữ sai cấp...)

*💡 Những câu chuyện success và fail vừa rồi — hôm nay mình sẽ hệ thống hóa lại: thành công thì nhân rộng, fail thì tránh.*

---

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

### Câu hỏi mở:
> *"Chúng ta đã dùng AI nhiều — nhưng đã dùng ĐÚNG CÁCH chưa? Hôm nay chúng ta sẽ đi qua từng khó khăn thực tế và cách AI giải quyết."*
`
},
{
  id: 2,
  title: 'Bối cảnh: Vai trò BrSE/Comtor & AI là "must-have"',
  shortTitle: 'Bối cảnh',
  time: '5 phút',
  icon: '🌏',
  markdown: `
> 🙋 **Câu hỏi mở:** Trong công việc BrSE/Comtor hàng ngày, bạn đang dành nhiều thời gian nhất cho việc gì? Và bạn đang xử lý nó như thế nào?


## Chuỗi công việc đặc thù trong mô hình Offshore

\`\`\`text
Khách hàng (JP)
   ↑         ↕       
   │   (giao tiếp)   
   ↓                 
BrSE / Comtor  ←-→  Dev Team (VN)
   ↑
   │
  (Đảm bảo yêu cầu, đảm bảo chất lượng, quản lý tiến độ)
\`\`\`
## Chuỗi công việc đặc thù trong mô hình Offshore

<div class="diagram" style="text-align:center; margin:18px 0;">
  <img src="images/brse-work.png" alt="BrSE work flow" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 8px 20px rgba(0,0,0,0.08);" />
</div>

---

### Ba đầu việc lớn của BrSE / Comtor

1. **Giao tiếp với khách hàng (Customer Communication)**
   - Email keigo, meeting, confirm requirement, negotiate scope.

2. **Làm việc với yêu cầu & Specification (Requirement & Spec Work)**
   - Đọc hiểu tài liệu JP, tóm tắt, soạn confirmation questions, viết/chuẩn hoá spec.

3. **Quản lý team & tiến độ (Team Management)**
   - Onboarding, phân task, timesheet, báo cáo/đánh giá effort, follow-up action items.

---

### Các nút thắt tương ứng

- **Giao tiếp với khách hàng:**
  - Keigo/tone sai → mất trust
  - Thiếu context → yêu cầu bị hiểu sai
  - Báo cáo, giao tiếp kém hiệu quả → mất thời gian, lòng tin khách hàng với team
  - Lượng thông tin, tài liệu nhiều → Phản hồi chậm, block công việc của nhiều bên

- **Yêu cầu & Spec:**
  - Tài liệu dài/vô cấu trúc → mất nhiều thời gian đọc
  - Thiếu confirmation questions → spec mơ hồ, mất thời gian đi lại với khách, rework nhiều lần
  - Không thống nhất format/glossary → sai khớp requirements

- **Quản lý team:**
  - Report thủ công, tốn thời gian
  - Action item bị rơi giữa meeting và thực thi
  - Estimation không chuẩn → quá/thiếu tài nguyên
  - Tốn nhiều thời gian vào những việc ít giá trị → CHẬM

---

### Mở bài cho phần case study

Hôm nay chúng ta sẽ đi qua các *case study* ứng với từng đầu việc lớn:
- Case Study 1 — Giao tiếp khách hàng (email, roleplay, glossary)
- Case Study 2 — Đọc hiểu & Viết Spec (tóm tắt, confirm-questions, format)
- Case Study 3 — Quản lý dự án (onboarding kit, weekly report, action tracking)

Mục tiêu: với mỗi đầu việc — chỉ ra nút thắt, demo cách dùng AI để giải, và cho bạn template / checklist để áp dụng ngay.
`
},
{
  id: 3,
  title: 'Nguyên tắc Vàng: Bảo mật & Compliance',
  shortTitle: 'Bảo mật',
  time: '10 phút',
  icon: '🔒',
  markdown: `
> 🙋 **Câu hỏi mở:** Khi bạn ghép nối "muốn dùng AI" với "sợ lộ data khách", bạn thường xử lý thế nào? Hãy chia sẻ cách làm hiện tại của bạn

---

## Dữ liệu Survey
- **10/12** lo ngại về bảo mật dữ liệu — rào cản #1
- **7/12** bị hạn chế bởi quy định dự án không cho phép dùng tài liệu khách
- 1 người chia sẻ: *"phải tinh chỉnh input (xóa key, xóa thông tin khách hàng) khá tốn công sức và hơi cực"*

## Khó khăn thực tế
> "Muốn dùng AI nhưng không dám vì sợ lộ data khách hàng"

Trong mô hình outsourcing Nhật Bản, vi phạm NDA có thể dẫn đến mất hợp đồng cả team. Nỗi lo này hoàn toàn hợp lý — nên ta cần **GIẢI QUYẾT** chứ không phải **PHỦ NHẬN**.

---

## Giải pháp

### Phân loại dữ liệu theo mức độ nhạy cảm

| Mức độ | Ví dụ | Tool phù hợp |
| --- | --- | --- |
| 🟢 An toàn | Template chung, thuật ngữ, grammar check | Bất kỳ AI nào (free tier được) |
| 🟡 Cần xử lý | Spec dự án, logic nghiệp vụ dự án | Anonymize + AI thường, hoặc AI Pro (Copilot/Gemini) |
| 🔴 Đặc biệt nhạy cảm | Source code khách, data thật, credentials | Local tool (Cần xác nhận trước khi dùng với KH) |

---

## GIẢI PHÁP 1: Kỹ thuật Anonymize

**Mục đích:** Loại bỏ PII → dùng GenAI bình thường

**Cách thực hiện:** Thay tên công ty/dự án, xóa credentials, thay tên người bằng chức danh.

*Ví dụ:*
- ❌ \`Mitsui Agro API key: sk-abc123 - Tanaka-buchō\`
- ✅ \`Company A - API endpoint - 部長 level\`

**Khi dùng:**
- ✅ Email, spec, meeting notes — **90% case**
- ❌ Source code, financial, contract — **quá sensitive**

**Ưu điểm:**
- Miễn phí
- Dùng bất kỳ GenAI nào (free tier được)
- An toàn nếu anonymize kỹ lưỡng

**Nhược điểm:**
- Tốn thời gian thủ công
- Dễ quên detail → gây rủi ro
- Phải kiểm tra cẩn thận trước paste

---

## GIẢI PHÁP 2: NotebookLM + Gemini Pro (Đọc tài liệu)

**Mục đích:** Upload tài liệu (anonymized) → AI đọc toàn bộ → trả lời với context đầy đủ

**Cách thực hiện:**
- Mua Gemini Pro ($20/tháng) → vào NotebookLM
- Upload tài liệu dự án làm source
- Hỏi AI rút glossary / dịch spec dựa trên toàn bộ tài liệu

**Khi dùng:**
- ✅ Spec dài (20+ trang) + glossary phức tạp
- ✅ Project dài hạn (3+ tháng) — cần glossary nhất quán
- ✅ Team mới — share glossary chung

**Ưu điểm:**
- **Cross-document Q&A** — context từ 10+ files cùng lúc
- **Rút glossary tự động** chính xác hơn manual
- **Share team** — dùng chung notebook

**Nhược điểm:**
- Giao diện phức tạp hơn ChatGPT
- Tốc độ chậm hơn (10-20s vs 5s)

---

## GIẢI PHÁP 3: GitHub Copilot / Claude Pro (Tool Premium + File local)

**Mục đích:** Dùng tool có data security guarantee + kết hợp file local → cross-docs tài liệu mà không cần anonymize

**3 option:**

- **GitHub Copilot Business** ($19/user/tháng) — Tích hợp IDE, no-training guarantee
- **Claude Pro** ($20/tháng) — Cao context (200K), quality cao, turn off "Improve Claude"

**Cách thực hiện:**
- Mở folder project local trong IDE / chat
- Attach multiple files (spec cũ, glossary, QA list)
- Chat với file — AI đọc context từ toàn bộ files
> 💡 (Có thể kết hợp với các MCP Server khác để có thể access vào các data sources khác như Confluence, Google Drive, Figma...)

**Khi dùng:**
- ✅ Data nhạy cảm hơn
- ✅ Team setup — Copilot Business cho cả team
- ✅ Cross-docs — dùng file browser hoặc clipboard paste
- ✅ Cần tương tác (input/output) nhiều với file (edit spec, comment code...)
- ❌ Siêu sensitive — vẫn nên anonymize 100%

**Ưu điểm:**
- **Data security guarantee** — Không dùng cho training
- **Tốc độ nhanh**
- **Cross-document** — Kết hợp file local
- **Chất lượng cao**

**Nhược điểm:**
- Phí cao ($19-20/user/tháng)
- Cần setup ban đầu (IDE, file structure)

---

## So sánh 3 giải pháp

| Tiêu chí | Anonymize | NotebookLM + Gemini | Copilot / Claude Pro |
|---|---|---|---|
| **Giá** | Miễn phí | $20/tháng | $19-20/user/tháng |
| **Data policy** | User responsibility | Google Workspace | Guarantee no training |
| **Cross-docs** | ❌ Không | ✅ (10+ files upload) | ✅ (file browser/clipboard) |
| **Team sharing** | ❌ Khó sync | ✅ Easy (share notebook) | ✅ Public output rồi mới share được cho team |
| **Tốc độ phản hồi** | ⚡ Nhanh | 🟡 Trung bình | ⚡ Nhanh |
| **Phù hợp nhất** | 90% case | Nhiều tài liệu + cần sharing với nhiều bên | Data nhạy cảm + cần brainstorming nhiều xử lý phức tạp với AI |

---

## Takeaway
> *"Không phải 'dùng hay không dùng' — mà là 'dùng thế nào cho an toàn'. Chọn giải pháp phù hợp với mức độ nhạy cảm data = unlock toàn bộ sức mạnh AI mà không vi phạm quy định."*
`
},
{
  id: 4,
  title: 'Kỹ thuật Prompt — Framework CRAFT',
  shortTitle: 'Prompt CRAFT',
  time: '10 phút',
  icon: '🎯',
  markdown: `
> 🙋 **Câu hỏi mở:** Khi AI cho output không đúng ý, bạn thường làm gì tiếp theo? Bạn có cách nào để làm cho prompt hiệu quả hơn không?

---

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

### Template 5: Confirm Action Items từ Meeting
\`\`\`
[C] Meeting [TÊN], ngày [NGÀY], attendees: [DANH SÁCH].
[R] Secretary ghi biên bản chuyên nghiệp dự án JP.
[A] Trích xuất tất cả action items từ nội dung meeting.
[F] Bảng: No. / Action Item / Assignee / Due Date / Status
[T] Ngắn gọn, rõ owner và deadline, tiếng Việt.
---
[NỘI DUNG MEETING]
\`\`\`

---

## Công cụ check & cải thiện prompt

### 🔧 Auto-optimize — Dán prompt vào, nhận lại prompt tốt hơn

| Tool | Tính năng nổi bật | Link |
| --- | --- | --- |
| **ChatGPT — Improve Prompt** ✨ | Prompt Improver sẵn trong ChatGPT — paste prompt thô, AI tự viết lại | [chat.openai.com](https://chat.openai.com) |
| **Prompt Enhancement** | Nhập prompt của bạn, hệ thống sẽ giúp bạn đề xuất prompt tốt hơn | [maxai.co](https://www.maxai.co/ai-tools/ai-writer/prompt-enhancement/) |

### 📚 Tài liệu học — Nền tảng & Best practices

| Tool | Mô tả | Link |
| --- | --- | --- |
| **Learn Prompting** | Hướng dẫn toàn diện, miễn phí, có interactive examples | [learnprompting.org](https://learnprompting.org) |
| **OpenAI Prompt Guide** | Best practices chính thức từ OpenAI | [platform.openai.com](https://platform.openai.com/docs/guides/prompt-engineering) |
| **Anthropic Prompt Library** | Thư viện 60+ prompt mẫu theo use case thực tế | [docs.anthropic.com](https://docs.anthropic.com/en/prompt-library) |

### 🌐 Cộng đồng — Tham khảo & chia sẻ prompt

| Tool | Mô tả | Link |
| --- | --- | --- |
| **FlowGPT** | Cộng đồng chia sẻ prompt, lọc theo use case | [flowgpt.com](https://flowgpt.com) |
| **PromptBase** | Marketplace prompt chất lượng cao, có rating | [promptbase.com](https://promptbase.com) |

---

## Takeaway
> *"CRAFT + Template = combo giải quyết gốc rễ 'không biết prompt' và 'output sai'. Prompt tốt hơn = Output tốt hơn = Ít chỉnh sửa hơn."*
`
},
{
  id: 5,
  title: 'Case Study 1 — Giao tiếp khách hàng bằng tiếng Nhật',
  shortTitle: 'Giao tiếp JP',
  time: '20 phút',
  icon: '✉️',
  markdown: `
> 🙋 **Câu hỏi mở:** Khi cần viết email tiếng Nhật cho khách hàng, quy trình của bạn là gì — từ lúc bắt đầu đến khi bấm 送信?

---

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
  id: 6,
  title: 'Case Study 2 — Đọc hiểu & Viết Specification',
  shortTitle: 'Spec',
  time: '25 phút',
  icon: '📑',
  markdown: `
> 🙋 **Câu hỏi mở:** Bạn thường đọc hiểu một tài liệu spec dài như thế nào? Có mẹo hay workflow riêng không?

---

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
  id: 7,
  title: 'Case Study 3 — Quản lý dự án với AI',
  shortTitle: 'Quản lý',
  time: '15 phút',
  icon: '📋',
  markdown: `
> 🙋 **Câu hỏi mở:** Báo cáo tuần (weekly report) của bạn thường mất bao lâu để viết? Bạn đang tổng hợp thông tin từ đâu và theo quy trình nào?

---

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

> 📂 **Demo files:** [Project Overview](demo-data/case-study-3/case-a-onboarding/source_01_project_overview.md) · [Coding Conventions](demo-data/case-study-3/case-a-onboarding/source_02_coding_conventions.md) · [Setup môi trường](demo-data/case-study-3/case-a-onboarding/source_03_environment_setup.md) · [Git Workflow](demo-data/case-study-3/case-a-onboarding/source_04_git_workflow.md) · [Glossary nghiệp vụ](demo-data/case-study-3/case-a-onboarding/source_05_domain_glossary.md) · [Prompt mẫu](demo-data/case-study-3/case-a-onboarding/prompt.md)

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
  id: 8,
  title: 'Case Study 4 — Ứng dụng AI sáng tạo khác',
  shortTitle: 'AI Sáng tạo',
  time: '10 phút',
  icon: '💡',
  markdown: `
> 🙋 **Câu hỏi mở:** Ngoài viết email, đọc spec, quản lý dự án — bạn có nghĩ AI có thể giúp bạn TẠO RA công cụ hay sản phẩm gì không?

---

## Ý tưởng cốt lõi

> "AI không chỉ hỗ trợ workflow — AI có thể **SINH RA** workflow mới."

3 case dưới đây đều có chung 1 pattern:
- **Input:** Ý tưởng + mô tả bằng text
- **Output:** Sản phẩm hoàn chỉnh (HTML/CSS/JS) — chạy được ngay
- **Thời gian:** 30 phút → 2 giờ (thay vì 2-5 ngày)

---

## 🖥️ CASE A: Tạo UI Demo cho khách hàng

**Bối cảnh:** Buổi proposal/kick-off, khách muốn thấy "hình dung" sản phẩm. Chưa có design, chưa có dev — chỉ có danh sách chức năng và màn hình.

**Input cho AI:**
- Danh sách chức năng (feature list)
- Danh sách màn hình dự kiến
- Phong cách UI mong muốn (ví dụ: "admin dashboard kiểu Nhật, clean, sidebar navigation")

**Prompt pattern:**
> "Tạo 1 file HTML hoàn chỉnh (HTML + CSS + JS inline) cho admin dashboard demo gồm các màn hình: [danh sách]. Style: professional, Japanese enterprise. Dùng dummy data. Tất cả trong 1 file duy nhất."

**Kết quả:**
- ✅ 1 file HTML duy nhất (~2000 dòng) — mở trình duyệt là chạy
- ✅ Sidebar navigation, bảng data, chart, form input
- ✅ Responsive, professional look
- ✅ Khách hàng hình dung được sản phẩm ngay tại buổi họp

**Thời gian:** ⏱️ 30-60 phút (gồm prompt + chỉnh sửa) thay vì 2-3 ngày design

**Tips thực tế:**
- Dùng **Copilot Agent mode** hoặc **Claude** với context dài
- Chia nhỏ: tạo layout trước → thêm từng màn hình
- Dummy data nên giống thật (tên nhân viên JP, ngày tháng JP format)
- Gửi file cho khách qua email — không cần deploy

> 📂 **Demo files:** [Feature list input](demo-data/case-study-4/case-a-ui-demo/01_feature_list_input.md) · [Prompt tạo UI](demo-data/case-study-4/case-a-ui-demo/02_prompt_tao_ui.md) · [Kết quả đánh giá](demo-data/case-study-4/case-a-ui-demo/03_ket_qua_danh_gia.md)

---

## 🧮 CASE E: Tự tạo công cụ cá nhân

**Bối cảnh:** Bạn cần 1 tool nhỏ phục vụ công việc hàng ngày — nhưng không có tool nào trên mạng đúng ý. Thay vì tìm kiếm mãi, hãy tự tạo!

**Ví dụ thực tế: Calculator Online**

Tôi cần 1 máy tính online hỗ trợ:
- Phép tính cơ bản + nâng cao (%, √, x²)
- Lịch sử tính toán (localStorage)
- Dark/Light mode
- Keyboard shortcut
- Deploy miễn phí trên Netlify

**Quy trình:**
1. **Viết spec** bằng tiếng Việt → AI giúp cấu trúc hóa
2. **Sinh code** từ spec → HTML/CSS/JS thuần (không framework)
3. **Iterate** — test → feedback → AI sửa
4. **Deploy** lên Netlify (miễn phí, 5 phút)

**Kết quả:**
- ✅ Spec 13 trang chi tiết (AI giúp viết từ ý tưởng thô)
- ✅ 6 file JS module hóa (calculator, display, history, keyboard, theme)
- ✅ Hoàn thành trong **2 giờ** — từ ý tưởng đến deploy
- ✅ Dùng hàng ngày cho công việc

**Ý tưởng khác bạn có thể tự tạo:**

| Tool | Mục đích | Độ khó |
|---|---|---|
| Pomodoro Timer | Quản lý thời gian focus | ⭐ Dễ |
| Expense Tracker | Theo dõi chi tiêu cá nhân | ⭐⭐ Vừa |
| Flashcard App | Học từ vựng JLPT/chuyên ngành | ⭐⭐ Vừa |
| Project Dashboard | Track task/deadline nhiều dự án | ⭐⭐⭐ Nâng cao |
| Meeting Note Template | Auto-format 議事録 | ⭐ Dễ |

> 📂 **Demo files:** [Ý tưởng ban đầu](demo-data/case-study-4/case-e-personal-tool/01_y_tuong_ban_dau.md) · [Spec do AI sinh](demo-data/case-study-4/case-e-personal-tool/02_spec_do_ai_sinh.md) · [Kết quả & Deploy](demo-data/case-study-4/case-e-personal-tool/03_ket_qua_deploy.md)

---

## 🎨 CASE G: Sinh Presentation / Sharing Material

**Bối cảnh:** Cần tạo slide sharing kiến thức cho team — PowerPoint thì mất thời gian design, Google Slides thì giới hạn layout.

**Giải pháp:** Dùng AI sinh **website presentation** (HTML) — chính là cách website bạn đang xem được tạo ra!

**Quy trình:**
1. **Viết outline** các section (bullet points)
2. **AI sinh content** cho từng section (markdown)
3. **AI tạo website** — Navigation, theme toggle, responsive
4. **Iterate**: Chỉnh nội dung, thêm demo, sửa style
5. **Deploy** hoặc gửi file HTML

**Ưu điểm so với PowerPoint/Slides:**

| Tiêu chí | PowerPoint | AI Website |
|---|---|---|
| **Thời gian design** | 4-8 giờ | 1-2 giờ |
| **Interactive demo** | ❌ Static | ✅ Click, navigate |
| **Dark mode** | ❌ | ✅ Tự động |
| **Code example** | Khó format | ✅ Syntax highlight |
| **Responsive** | ❌ Fixed size | ✅ Mobile friendly |
| **Share** | File nặng | Link hoặc 1 folder nhẹ |

**Meta example:** Website này:
- 11 sections, sidebar navigation
- Dark/Light mode toggle
- Demo file viewer tích hợp
- Responsive trên mobile
- **Toàn bộ tạo bằng AI** — từ content đến code

> 📂 **Demo files:** [Outline ban đầu](demo-data/case-study-4/case-g-presentation/01_outline_ban_dau.md) · [Prompt tạo website](demo-data/case-study-4/case-g-presentation/02_prompt_tao_website.md) · [So sánh trước/sau](demo-data/case-study-4/case-g-presentation/03_so_sanh_truoc_sau.md)

---

## Takeaway

> *"AI không chỉ là trợ lý — nó là công cụ sản xuất. Từ UI demo cho khách hàng, tool cá nhân, đến presentation — bất cứ thứ gì bạn mô tả được, AI có thể giúp bạn tạo ra."*

**Pattern chung:**
1. 📝 Mô tả ý tưởng (càng chi tiết càng tốt)
2. 🤖 AI sinh bản đầu tiên
3. 🔄 Iterate: review → feedback → AI sửa
4. 🚀 Deploy / Sử dụng ngay
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

> **AI = "Junior staff rất nhanh nhưng đôi khi sai"** — bạn (senior) vẫn phải review.

### Tại sao con người PHẢI review?

| AI giỏi ở | AI YẾU ở |
|---|---|
| Tổng hợp thông tin nhanh | Hiểu ngữ cảnh dự án cụ thể |
| Ngữ pháp, format chuẩn | Phán đoán tình huống nhạy cảm |
| Sinh draft đầy đủ structure | Kiểm tra sự thật (hallucination) |
| Nhất quán format | Đánh giá relationship với khách |

### 3 nguyên tắc review

1. **"Trust but verify"** — Tin AI nhưng luôn kiểm tra. Đặc biệt với số liệu, tên người, thuật ngữ chuyên ngành.
2. **"AI draft, Human final"** — AI tạo 80% giá trị trong 20% thời gian. 20% còn lại (review + polish) là trách nhiệm của bạn — và đó là phần tạo nên sự khác biệt.
3. **"Càng quan trọng, càng phải review kỹ"** — Email nội bộ: review nhanh. Email cho 部長: review kỹ. Hợp đồng/NDA: review cực kỹ + nhờ người thứ 2.

> 💡 *Hãy nghĩ thế này: AI giúp bạn từ trang giấy trắng → bản draft 80%. Công việc của bạn là biến 80% → 100%. Không có AI, bạn đi từ 0% → 100% một mình.*

---

## Takeaway
> *"AI tạo draft tốt — bạn biến draft thành final. Output tốt nhất = AI generate + Human review. KHÔNG BAO GIỜ bỏ qua bước review."*
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
| Spec mơ hồ, không biết hỏi gì | AI đóng vai QA reviewer + confirm questions | #4 |
| Viết spec/AC tốn thời gian | AI sinh draft + format mẫu + glossary | #4 |
| Estimation & review spec | AI breakdown task + check logic consistency | #4 |
| Report thủ công, tốn thời gian | Multi-source → report + risk analysis | #5 |
| UI demo, tool cá nhân, presentation | AI sinh sản phẩm hoàn chỉnh từ mô tả | #6 |
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

<div class="team-photo">
  <img src="images/closing.png" alt="AI × BrSE/Comtor Closing">
  <p class="team-caption">🚀 Cùng nhau level up — AI là công cụ, con người là giá trị!</p>
</div>

## Call-to-action

> *"Chọn **1 trong 7 khó khăn** hôm nay → áp dụng giải pháp **NGAY TRONG TUẦN** này → chia sẻ kết quả ở nhóm chat."*
>
> *"Bắt đầu từ cái nhỏ nhất mà bạn gặp HÀNG NGÀY."*
`
}
];
