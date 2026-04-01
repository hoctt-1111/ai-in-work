# Case B — Bước 1: Prompt rút Glossary (dùng trong NotebookLM)

## Prompt cho NotebookLM (sau khi đã upload spec)

Liệt kê tất cả thuật ngữ chuyên ngành nông nghiệp và thuật ngữ hệ thống xuất hiện trong các tài liệu đã upload.

Format dạng bảng:
| 日本語 | Tiếng Việt | English | Giải thích ngắn |

Yêu cầu:
- Bao gồm cả thuật ngữ nông nghiệp (圃場, 防除暦, v.v.) và thuật ngữ hệ thống (マスタ, プルダウン, v.v.)
- Phân loại theo nhóm: 農業用語 / システム用語 / ビジネス用語
- Nếu 1 từ có nhiều nghĩa tùy context, ghi rõ nghĩa trong context tài liệu này
