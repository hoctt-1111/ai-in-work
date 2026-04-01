# Prompt — AI trả lời câu hỏi spec & rules

## Upload vào NotebookLM
Upload TẤT CẢ spec + rule documents:
- Spec files từ `case-spec/` folder (spec gốc 農産物在庫管理)
- `case-a-onboarding/source_02_coding_conventions.md` (rules)
- Bất kỳ Q&A history có sẵn

Sau đó **Share notebook** cho dev team.

## Prompt mẫu — Dev tự query (không cần hỏi BrSE)

### Query 1: Validate rule
```
Trong spec, chức năng 入庫管理 có validate gì cho trường 入庫数量 không?
Nếu có, liệt kê: điều kiện validate, error message, và business rule liên quan.
```

### Query 2: Role permission
```
Rule nào áp dụng cho user role 管理者 khi thực hiện 廃棄登録?
Cần approval từ ai? Có exception nào không?
```

### Query 3: API convention
```
Tôi cần tạo API mới cho chức năng 廃棄登録.
Theo coding convention hiện tại, endpoint URL format là gì?
Package structure nên đặt ở đâu? Naming convention cho Controller, Service, DTO?
```

### Query 4: Cross-reference
```
Khi 出荷指示数 vượt quá 在庫数 thì hệ thống xử lý thế nào?
Đồng thời, có screen nào khác cũng check 在庫数 không? Liệt kê tất cả.
```

### Query 5: Test convention
```
Tôi cần viết unit test cho StocktakingService.
Theo convention, naming pattern là gì? Framework nào? Coverage target?
```

## Điểm demo
- Dev tự tra spec **mà không cần hỏi BrSE**
- Cross-reference nhiều documents → AI tổng hợp answer chính xác
- Query 4 đặc biệt hay: hỏi cross-screen logic → rất khó tra thủ công

⚠️ **Remind team:** AI có thể hallucinate. Verify với spec gốc nếu output ảnh hưởng code!
