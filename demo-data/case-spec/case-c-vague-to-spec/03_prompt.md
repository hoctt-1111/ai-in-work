# Prompt — Từ yêu cầu mơ hồ → Spec + AC

## NotebookLM
**Sources đã upload:**
- `01_existing_feature_spec.md` (spec chức năng cũ làm reference format)

```
Dựa trên format và mức độ chi tiết của spec chức năng 出荷予定登録 trong sources,
viết spec mới cho yêu cầu sau:

Yêu cầu khách:
「在庫の検索をもっと便利にしてほしい。
今は品目でしか探せないけど、倉庫とか期限とかでも絞り込みたい。
あと、検索結果をExcelに出せるようにしてください。」

Hệ thống hiện tại: 農産物在庫管理システム, dữ liệu khoảng 10万件.

Bao gồm:
1. 機能説明: 概要, 検索条件, 検索結果表示, エクスポート, エラー処理
2. Acceptance Criteria (Given-When-Then, cả normal + edge case)
Format: tiếng Nhật, đúng style spec trong sources (có bảng, có AC format).
```

## GitHub Copilot
```
#file:demo-data/case-spec/case-c-vague-to-spec/01_existing_feature_spec.md

Dựa trên format file trên, viết spec chức năng mới:
Yêu cầu: 「在庫の検索をもっと便利にしてほしい。倉庫とか期限とかでも絞り込みたい。検索結果をExcelに出せるように。」
Dữ liệu: 10万件.
Bao gồm: 機能説明 + Acceptance Criteria (Given-When-Then).
```
