# Case B — Bước 2: Prompt dịch spec (dùng trong NotebookLM có glossary)

```
Dựa trên bảng thuật ngữ đã tạo ở trên, dịch nội dung spec sau sang tiếng Việt.

Yêu cầu:
- Thuật ngữ chuyên ngành phải dùng ĐÚNG bản dịch trong glossary
- Giữ nguyên cấu trúc heading và numbering
- Giữ nguyên bảng, format markdown
- Đối tượng đọc: Developer Việt Nam
- Nếu gặp thuật ngữ CHƯA CÓ trong glossary → đánh dấu [?] để review

---

## 3. 画面設計

### 3.1 出荷予定一覧画面
- 検索条件：圃場名、出荷先、出荷予定日（From-To）、品目
- 一覧表示項目：出荷予定No.、圃場名、品目、出荷数量（予定）、出荷予定日、出荷先、ステータス
- ステータス：未出荷、出荷済、キャンセル

### 3.2 出荷予定登録画面
- 入力項目：
  - 圃場（プルダウン選択）
  - 品目（圃場に紐づく品目から選択）
  - 出荷予定数量（kg）
  - 出荷予定日
  - 出荷先（プルダウン選択）
  - 備考
```
