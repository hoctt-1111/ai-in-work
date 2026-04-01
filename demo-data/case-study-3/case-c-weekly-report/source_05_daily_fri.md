# Daily Report — Thứ Sáu 2025/06/13

**Dự án:** 農産物在庫管理システム（Sprint 15）
**Người báo cáo:** Nguyen V.A (BrSE)

---

## Tiến độ team hôm nay

### Tran T.B (Backend Senior)
- ✅ 棚卸登録 API completed — PR #191 submitted, reviewed by Pham D
- 🔄 棚卸結果出力 API — 85% done, PDF layout finalize Monday
- 🔄 Investigate BUG-305: root cause tìm ra — query builder không handle filter 出荷先 khi value chứa ký tự đặc biệt (全角スペース). WIP fix.

### Le V.C (Frontend)
- ✅ Fix error message → tất cả hiển thị JP
- ✅ Loading spinner implemented
- ✅ Confirm dialog added trước 登録 action
- 🔄 棚卸登録画面 — 80% done. Còn lại: error handling edge case + responsive

### Pham T.D (Backend Junior)
- 🔄 出荷指示 API — 80% done
- Business logic check 出荷指示数 > 在庫数 → implemented (block + error message)
- Còn lại: batch 出荷指示 (複数出荷先に一括指示)
- Expected PR: Monday

### Hoang M.E (QA)
- ✅ Test 棚卸一覧 — 12/12 case PASS
- 🔄 Writing test cases for 棚卸登録 — 8/15 case done
- Note: Chưa thể test chức năng export 出荷管理 do BUG-305 chưa fix → block 3 test case

---

## Issues / Blockers

1. **🟡 BUG-305 root cause found.** Tran B WIP fix. Expected merge Monday morning. QA blocked 3 cases chờ fix.

2. **🟡 BUG-302 (encoding Shift-JIS/UTF-8)** — vẫn OPEN. Chưa assign. Khách chưa hỏi nhưng cần fix trước UAT. Lower priority than BUG-305.

3. **🟢 Sprint 15 overall progress:**
   - 棚卸一覧: BE ✅ FE ✅ QA ✅
   - 棚卸登録: BE ✅ FE 80% QA writing test
   - 棚卸結果出力: BE 85% FE not started QA not started
   - 出荷指示: BE 80% FE not started QA not started
   - → Overall: ~65% done, on track nhưng tight

4. **📝 Sprint Review Monday:** Demo items: 棚卸一覧 (live demo), 棚卸登録 (demo với dummy data, lưu ý chưa 100%). 出荷指示 chưa sẵn demo.

---

## Kế hoạch tuần tới
- **Monday:** Sprint Review meeting, fix BUG-305
- **Tran B:** Finalize 棚卸結果出力 API + BUG-305 fix
- **Le C:** Complete 棚卸登録画面 + start 棚卸結果出力画面
- **Pham D:** Complete 出荷指示 API + fix BUG-302
- **Hoang E:** Complete test 棚卸登録, start execution when BE/FE ready

---

## Ghi chú cá nhân (BrSE)
- 鈴木さん OOO thứ 4 → response chậm 1 ngày. Nên confirm schedule trước khi gửi question.
- Pham D đang handle too many tasks (出荷指示 + BUG-302). Cân nhắc re-assign BUG-302 cho Tran B tuần tới sau khi 棚卸結果出力 done.
- Sprint Review cần highlight DB performance improvement — khách quan tâm topic này từ Sprint 14.
