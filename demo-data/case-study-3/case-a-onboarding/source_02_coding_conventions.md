# コーディング規約 — 農産物在庫管理システム

**バージョン:** 1.2
**最終更新:** 2025/05/20

---

## 1. 全般ルール

### ブランチ命名規則
```
feature/INV-{ticket番号}_{簡潔な説明}
bugfix/BUG-{番号}_{簡潔な説明}
hotfix/HOTFIX-{番号}_{簡潔な説明}
```
例: `feature/INV-180_stocktaking-list-api`

### コミットメッセージ
```
[INV-180] Add stocktaking list API endpoint
[BUG-301] Fix negative quantity validation
```
- 英語で記述
- 先頭にチケット番号
- 動詞は原形（Add, Fix, Update, Remove）

### プルリクエスト
- タイトル: `[INV-180] 棚卸一覧 API 実装`（日本語可）
- レビュアー: Tran T.B（BE）/ Le V.C（FE）— 相互レビュー
- マージ: Squash merge
- CI全グリーンが必須

---

## 2. バックエンド（Java / Spring Boot）

### パッケージ構成
```
com.agrifoods.inventory
├── controller/     # REST Controller
├── service/        # Business Logic
├── repository/     # JPA Repository
├── entity/         # JPA Entity
├── dto/            # Request/Response DTO
├── mapper/         # Entity ↔ DTO mapping
├── config/         # Configuration
├── exception/      # Custom Exception
└── util/           # Utility
```

### 命名規則
| 種類 | 規則 | 例 |
| --- | --- | --- |
| Controller | `XXXController` | `StocktakingController` |
| Service | `XXXService` / `XXXServiceImpl` | `StocktakingService` |
| Repository | `XXXRepository` | `StocktakingRepository` |
| Entity | テーブル名に対応（PascalCase） | `StocktakingRecord` |
| DTO | `XXXRequest` / `XXXResponse` | `StocktakingRegisterRequest` |

### APIエンドポイント命名
```
GET    /api/v1/stocktaking          # 一覧取得
GET    /api/v1/stocktaking/{id}     # 詳細取得
POST   /api/v1/stocktaking          # 新規登録
PUT    /api/v1/stocktaking/{id}     # 更新
DELETE /api/v1/stocktaking/{id}     # 削除
```

### エラーハンドリング
- `@RestControllerAdvice` で共通ハンドリング
- エラーレスポンス形式:
```json
{
  "code": "E001",
  "message": "入庫数量は1以上で入力してください。",
  "details": [...]
}
```

---

## 3. フロントエンド（React / TypeScript）

### ディレクトリ構成
```
src/
├── components/     # 共通コンポーネント
├── features/       # 機能別フォルダ
│   ├── stocktaking/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── api/
├── hooks/          # 共通フック
├── utils/          # ユーティリティ
└── types/          # 型定義
```

### 命名規則
- コンポーネント: PascalCase (`StocktakingList.tsx`)
- フック: camelCase + use prefix (`useStocktaking.ts`)
- 定数: UPPER_SNAKE_CASE
- CSS Modules: `[component].module.css`

### 状態管理
- サーバー状態: TanStack Query (React Query)
- ローカル状態: useState / useReducer
- グローバル状態: Context API（最小限）

---

## 4. テスト規約

### バックエンド
- Unit Test: JUnit 5 + Mockito
- 命名: `should_期待結果_when_条件()`
- カバレッジ目標: Service層 80%以上

### フロントエンド
- Unit Test: Jest + React Testing Library
- E2E: Playwright（主要フロー3本以上）

### QA テスト
- テストケース: Excel管理（Jiraリンク付き）
- エビデンス: スクリーンショット + 手順ログ
- バグ報告: Jira BUGチケット（再現手順必須）

---

## 5. デプロイ規約

### 環境
| 環境 | URL | 用途 |
| --- | --- | --- |
| Dev | dev.agrifoods-inv.internal | 開発確認 |
| Staging | stg.agrifoods-inv.internal | UAT・顧客確認 |
| Production | app.agrifoods-inv.jp | 本番 |

### デプロイフロー
1. `feature/*` → `develop` (PR + Review)
2. `develop` → Dev環境（自動デプロイ）
3. `develop` → `release/*` → Staging（手動デプロイ）
4. `release/*` → `main` → Production（承認後デプロイ）

---

## 6. よくある質問（新メンバー向け）

**Q: ローカル環境のセットアップ方法は？**
→ README.md の「Getting Started」参照。Docker Compose で一発起動。

**Q: テストデータはどうやって投入する？**
→ `src/main/resources/db/testdata/` 配下のSQLを実行。

**Q: APIの仕様書はどこ？**
→ Swagger UI: `http://localhost:8080/swagger-ui.html`（ローカル起動後）

**Q: 日本語を使う箇所は？**
→ コミットメッセージ: 英語、PRタイトル: 日本語可、コード内コメント: 英語、エラーメッセージ: 日本語（ユーザー向け）
