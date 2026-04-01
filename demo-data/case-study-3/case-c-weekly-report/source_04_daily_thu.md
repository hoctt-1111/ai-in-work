# Daily Report — Thứ Năm 2025/06/12

**Dự án:** 農産物在庫管理システム（Sprint 15）
**Người báo cáo:** Nguyen V.A (BrSE)

---

## Tiến độ team hôm nay

### Tran T.B (Backend Senior)
- ✅ 鈴木さん reply sáng nay: rounding rule = 四捨五入（小数第2位）
- ✅ Update 棚卸登録 API với rounding logic confirmed
- 🔄 棚卸結果出力 API — 60% done, PDF generation works, đang format table

### Le V.C (Frontend)
- 🔄 棚卸登録画面 — 60% done
- Update validation 重量 field theo confirmed rounding rule
- Internal review feedback từ Tran B:
  - Error message nên hiển thị bằng JP (hiện đang mix EN/JP)
  - Loading spinner chưa có khi submit form
  - Confirm dialog trước khi 登録 → spec yêu cầu nhưng chưa implement

### Pham T.D (Backend Junior)
- 🔄 出荷指示 API — 50% done
- Implement basic CRUD, đang làm business logic (出荷可能数 check)
- Question: khi 出荷指示数 > 在庫数 thì block hoàn toàn hay cho phép với warning? → check spec

### Hoang M.E (QA)
- ✅ Regression test 入庫管理 completed — PASS全件
- 🔄 Test execution 棚卸一覧 — started, 5/12 case executed, all PASS
- 🐛 **BUG-305 (Critical):** 出荷管理 CSV export — file download nhưng nội dung trống khi filter theo 出荷先. Nghi ngờ liên quan BUG-302 (encoding issue) nhưng khác root cause.

---

## Issues / Blockers

1. **🟢 Rounding spec — RESOLVED.** 四捨五入、小数第2位. Confirmed by 鈴木さん via email.

2. **🔴 BUG-305 (Critical) — CSV export trống.** Ảnh hưởng chức năng 出荷管理 export. Cần investigate gấp. Assign cho Tran B? (Pham D đang busy với 出荷指示 API)

3. **🟡 UI feedback 棚卸登録 (3 items):** Error message JP, loading spinner, confirm dialog. Le C estimate thêm 0.5 ngày.

4. **🟡 Pham D's spec question** (出荷指示数 > 在庫数): Tôi check spec → spec nói "在庫数を超える出荷指示はエラーとする" → block hoàn toàn. Đã reply Pham D.

---

## Kế hoạch ngày mai
- Tran B: Hoàn thành 棚卸結果出力 API + investigate BUG-305
- Le C: Fix 3 UI feedback items + tiếp tục 棚卸登録画面 (target 80%)
- Pham D: 出荷指示 API (target 80%)
- Hoang E: Tiếp tục test 棚卸一覧, bắt đầu 棚卸登録 test case writing
- BrSE: Chuẩn bị Sprint Review Monday — slide + demo environment check
