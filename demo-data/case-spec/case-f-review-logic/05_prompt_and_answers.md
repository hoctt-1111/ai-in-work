# Prompt — Review spec: Check logic consistency

## NotebookLM
**Sources đã upload (tất cả 4 file):**
- `01_user_management_screen.md`
- `02_warehousing_screen.md`
- `03_shipping_screen.md`
- `04_shelf_life_screen.md`

```
Đọc toàn bộ spec trong sources và kiểm tra:
1. Mâu thuẫn logic giữa các section/screen
2. Business rule conflict
3. Edge case chưa được đề cập
4. Thiếu error handling

Format bảng: No. / 箇所 / 問題種別 / 詳細 / 重要度(H/M/L) / 推奨対応
```

## GitHub Copilot
```
#file:demo-data/case-spec/case-f-review-logic/01_user_management_screen.md
#file:demo-data/case-spec/case-f-review-logic/02_warehousing_screen.md
#file:demo-data/case-spec/case-f-review-logic/03_shipping_screen.md
#file:demo-data/case-spec/case-f-review-logic/04_shelf_life_screen.md

Kiểm tra toàn bộ spec files đính kèm:
1. Mâu thuẫn logic giữa các screen/section
2. Business rule conflict
3. Edge case thiếu
4. Error handling thiếu
Format: bảng No. / 箇所 / 問題種別 / 詳細 / 重要度 / 推奨対応
```

---

## Đáp án — Các mâu thuẫn cài sẵn trong demo data

Dưới đây là danh sách các mâu thuẫn được **cố tình cài vào** để AI phát hiện.
Presenter dùng để verify output AI và giải thích cho audience.

### 1. 電話番号: 必須 vs 任意 (H)
- **User Management** (01): 一覧画面 → 電話番号 **必須**
- **User Management** (01): 編集画面 → 電話番号 **任意**
- → Mâu thuẫn trong cùng 1 file: tạo thì required, sửa thì optional?

### 2. 収穫ロットNo.: 必須 vs 任意 (H)
- **基本設計書** (Case A spec): 入庫 → 収穫ロットNo. **必須**
- **Warehousing screen** (02): 入庫 → 収穫ロットNo. **任意**
- → Nếu optional thì traceability bị ảnh hưởng

### 3. 倉庫容量警告: 90% vs 80% (M)
- **基本設計書** (Case A spec): 容量 **90%** 以上 → 警告
- **Warehousing screen** (02): 容量 **80%** 以上 → 警告
- → Threshold khác nhau giữa overview spec và detail spec

### 4. 出荷先制約 JAグループ: 秀・優のみ vs 秀・優・良 (H)
- **基本設計書** BR-005: JA → 等級「**秀**」「**優**」のみ
- **Shipping screen** (03): JA → 「**秀**」「**優**」「**良**」すべて可能
- → Trực tiếp ảnh hưởng business logic

### 5. 廃棄承認: 管理者承認必須 vs 不要 (H)
- **基本設計書** BR-006: 廃棄には **管理者承認が必要**
- **Shelf Life screen** (04): 廃棄は倉庫担当者が **直接実行可能**（承認不要）
- → Ai có quyền phê duyệt phế bỏ?

### 6. 要廃棄在庫の出庫: 可能 vs 不可 (H)
- **Shipping screen** (03) BR-SHP-002: 要廃棄在庫も **出庫可能**（値引き出荷用）
- **Shelf Life screen** (04) BR-EXP-001: 要廃棄在庫は **出庫不可**
- → Trực tiếp mâu thuẫn, cần xác nhận với khách

### 7. FIFO例外: 理由入力必須 vs 不要 (M)
- **基本設計書** BR-002: FIFO変更 → 理由入力 **必須**
- **Shipping screen** (03) BR-SHP-003: FIFO変更 → 理由入力 **不要**
- → Kiểm soát quality vs convenience

### 8. 賞味期限アラート: 1日/3日 vs 2日/5日 (M)
- **基本設計書** ダッシュボード: 🔴 **1日** 以内、🟡 **3日** 以内
- **Shelf Life screen** (04): 🔴 **2日** 以内、🟡 **5日** 以内
- → Threshold khác nhau

### 9. 入庫数量上限: 9999.9 vs 99999.9 (M)
- **基本設計書** 収穫登録: 数量上限 **9999.9** kg
- **Warehousing screen** (02): 数量上限 **99999.9** kg
- → Harvest giới hạn thấp hơn warehousing, có hợp lý không?

### 10. Edge case thiếu
- Warehousing (02): Nếu nhập kho trong khi đang棚卸 thì sao? (棚卸spec nói input bị block nhưng warehousing screen không đề cập)
- Shipping (03): Nếu user xuất kho ngay trước thời điểm hết hạn (23:59 ngày cuối) thì sao?
- User Management (01): Nếu disable user đang có session active thì xử lý thế nào?
