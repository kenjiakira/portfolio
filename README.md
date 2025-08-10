# 🌟 Portfolio Website - Kenji Akira

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

## 📋 Table of Contents / Mục lục / 目次

- [English](#english) 🇺🇸
- [Tiếng Việt](#tiếng-việt) 🇻🇳  
- [日本語](#日本語) 🇯🇵

---

## 🇺🇸 English

### 🚀 About This Project

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. Features a beautiful UI with smooth animations, dark/light theme support, and multilingual capabilities (Vietnamese, English, Japanese).

### ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **🌙 Dark/Light Theme**: Automatic theme switching with system preference detection
- **🌍 Multilingual**: Full support for Vietnamese, English, and Japanese
- **📱 Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance**: Built with Next.js 15 for optimal performance
- **🎭 Animations**: Smooth transitions powered by Framer Motion
- **🎯 SEO Optimized**: Meta tags, structured data, and performance optimization
- **🔧 TypeScript**: Full type safety and better development experience

### 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19.1.1
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **3D Graphics**: Three.js
- **Theme**: Next Themes

### 🚀 Getting Started

#### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

#### Installation

```bash
# Clone the repository
git clone https://github.com/kenjiakira/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

#### Build for Production

```bash
npm run build
npm start
```

### 📁 Project Structure

```
portfolio/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── atoms/            # Atomic components
│   ├── molecules/        # Molecular components  
│   ├── organisms/        # Organism components
│   ├── templates/        # Page templates
│   ├── ui/               # UI components (shadcn/ui)
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── translations/     # Multilingual content
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── assets/           # Images, SVGs, etc.
└── styles/               # Additional styles
```

### 🌍 Language Support

The website supports three languages:

- **Vietnamese** (vi) - Default language
- **English** (en) - International version  
- **Japanese** (ja) - Japanese version

Translation files are located in `lib/translations/` and can be easily extended.

### 🎨 Customization

#### Adding New Languages

1. Create a new translation file in `lib/translations/`
2. Add the language to the language selector
3. Update the translation context

#### Styling

The project uses Tailwind CSS with custom design tokens. Modify `tailwind.config.ts` for theme customization.

#### Content

Update content in the translation files or modify components directly.

### 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

### 🚀 Deployment

#### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

#### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 📞 Contact

- **Developer**: Kenji Akira (Hoàng Ngọc Từ)
- **Email**: kenjiakira2006@gmail.com
- **Location**: Hanoi, Vietnam
- **Portfolio**: hnt.io.vn

---

## 🇻🇳 Tiếng Việt

### 🚀 Về Dự Án Này

Website portfolio hiện đại, responsive được xây dựng với Next.js 15, React 19 và TypeScript. Có giao diện đẹp với animation mượt mà, hỗ trợ theme sáng/tối và khả năng đa ngôn ngữ (Tiếng Việt, Tiếng Anh, Tiếng Nhật).

### ✨ Tính Năng

- **🎨 Thiết Kế Hiện Đại**: Giao diện sạch sẽ, chuyên nghiệp với animation mượt mà
- **🌙 Theme Sáng/Tối**: Chuyển đổi theme tự động với phát hiện tùy chọn hệ thống
- **🌍 Đa Ngôn Ngữ**: Hỗ trợ đầy đủ Tiếng Việt, Tiếng Anh và Tiếng Nhật
- **📱 Responsive**: Tối ưu cho mọi thiết bị và kích thước màn hình
- **⚡ Hiệu Suất**: Xây dựng với Next.js 15 để có hiệu suất tối ưu
- **🎭 Animation**: Chuyển đổi mượt mà với Framer Motion
- **🎯 SEO Tối Ưu**: Meta tags, structured data và tối ưu hiệu suất
- **🔧 TypeScript**: An toàn kiểu dữ liệu đầy đủ và trải nghiệm phát triển tốt hơn

### 🛠️ Công Nghệ Sử Dụng

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19.1.1
- **Ngôn Ngữ**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.17
- **Animation**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **3D Graphics**: Three.js
- **Theme**: Next Themes

### 🚀 Bắt Đầu

#### Yêu Cầu

- Node.js 18+
- npm, yarn, hoặc pnpm

#### Cài Đặt

```bash
# Clone repository
git clone https://github.com/kenjiakira/portfolio.git
cd portfolio

# Cài đặt dependencies
npm install
# hoặc
yarn install
# hoặc
pnpm install

# Chạy development server
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

#### Build Cho Production

```bash
npm run build
npm start
```

### 📁 Cấu Trúc Dự Án

```
portfolio/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── atoms/            # Atomic components
│   ├── molecules/        # Molecular components  
│   ├── organisms/        # Organism components
│   ├── templates/        # Page templates
│   ├── ui/               # UI components (shadcn/ui)
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── translations/     # Multilingual content
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── assets/           # Images, SVGs, etc.
└── styles/               # Additional styles
```

### 🌍 Hỗ Trợ Ngôn Ngữ

Website hỗ trợ ba ngôn ngữ:

- **Tiếng Việt** (vi) - Ngôn ngữ mặc định
- **Tiếng Anh** (en) - Phiên bản quốc tế
- **Tiếng Nhật** (ja) - Phiên bản tiếng Nhật

File dịch thuật nằm trong `lib/translations/` và có thể dễ dàng mở rộng.

### 🎨 Tùy Chỉnh

#### Thêm Ngôn Ngữ Mới

1. Tạo file dịch thuật mới trong `lib/translations/`
2. Thêm ngôn ngữ vào bộ chọn ngôn ngữ
3. Cập nhật translation context

#### Styling

Dự án sử dụng Tailwind CSS với custom design tokens. Chỉnh sửa `tailwind.config.ts` để tùy chỉnh theme.

#### Nội Dung

Cập nhật nội dung trong file dịch thuật hoặc chỉnh sửa components trực tiếp.

### 📱 Thiết Kế Responsive

Website hoàn toàn responsive với breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 🚀 Triển Khai

#### Vercel (Khuyến Nghị)

```bash
npm install -g vercel
vercel
```

#### Nền Tảng Khác

Dự án có thể triển khai trên bất kỳ nền tảng nào hỗ trợ Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

### 📄 Giấy Phép

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

### 📞 Liên Hệ

- **Developer**: Kenji Akira (Hoàng Ngọc Từ)
- **Email**: kenjiakira2006@gmail.com
- **Địa Chỉ**: Hà Nội, Việt Nam
- **Portfolio**: hnt.io.vn

---

## 🇯🇵 日本語

### 🚀 このプロジェクトについて

Next.js 15、React 19、TypeScriptで構築されたモダンでレスポンシブなポートフォリオウェブサイト。美しいUI、スムーズなアニメーション、ダーク/ライトテーマサポート、多言語対応（ベトナム語、英語、日本語）を特徴としています。

### ✨ 機能

- **🎨 モダンデザイン**: スムーズなアニメーションを備えたクリーンでプロフェッショナルなインターフェース
- **🌙 ダーク/ライトテーマ**: システム設定検出による自動テーマ切り替え
- **🌍 多言語対応**: ベトナム語、英語、日本語の完全サポート
- **📱 レスポンシブ**: すべてのデバイスと画面サイズに最適化
- **⚡ パフォーマンス**: 最適なパフォーマンスのためにNext.js 15で構築
- **🎭 アニメーション**: Framer Motionによるスムーズなトランジション
- **🎯 SEO最適化**: メタタグ、構造化データ、パフォーマンス最適化
- **🔧 TypeScript**: 完全な型安全性とより良い開発体験

### 🛠️ 技術スタック

- **フレームワーク**: Next.js 15.2.4
- **UIライブラリ**: React 19.1.1
- **言語**: TypeScript 5.0
- **スタイリング**: Tailwind CSS 3.4.17
- **アニメーション**: Framer Motion
- **UIコンポーネント**: Radix UI
- **アイコン**: Lucide React
- **フォーム**: React Hook Form + Zod
- **3Dグラフィックス**: Three.js
- **テーマ**: Next Themes

### 🚀 はじめに

#### 前提条件

- Node.js 18+
- npm、yarn、またはpnpm

#### インストール

```bash
# リポジトリをクローン
git clone https://github.com/kenjiakira/portfolio.git
cd portfolio

# 依存関係をインストール
npm install
# または
yarn install
# または
pnpm install

# 開発サーバーを実行
npm run dev
# または
yarn dev
# または
pnpm dev
```

[http://localhost:3000](http://localhost:3000)を開いてウェブサイトを表示します。

#### 本番用ビルド

```bash
npm run build
npm start
```

### 📁 プロジェクト構造

```
portfolio/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── atoms/            # Atomic components
│   ├── molecules/        # Molecular components  
│   ├── organisms/        # Organism components
│   ├── templates/        # Page templates
│   ├── ui/               # UI components (shadcn/ui)
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── translations/     # Multilingual content
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── assets/           # Images, SVGs, etc.
└── styles/               # Additional styles
```

### 🌍 言語サポート

ウェブサイトは3つの言語をサポートしています：

- **ベトナム語** (vi) - デフォルト言語
- **英語** (en) - 国際版
- **日本語** (ja) - 日本語版

翻訳ファイルは`lib/translations/`にあり、簡単に拡張できます。

### 🎨 カスタマイズ

#### 新しい言語の追加

1. `lib/translations/`に新しい翻訳ファイルを作成
2. 言語セレクターに言語を追加
3. 翻訳コンテキストを更新

#### スタイリング

プロジェクトはカスタムデザイントークンを使用したTailwind CSSを使用しています。テーマカスタマイズのために`tailwind.config.ts`を修正してください。

#### コンテンツ

翻訳ファイルのコンテンツを更新するか、コンポーネントを直接修正してください。

### 📱 レスポンシブデザイン

ウェブサイトは完全にレスポンシブで、ブレークポイントは以下の通りです：
- モバイル: < 768px
- タブレット: 768px - 1024px
- デスクトップ: > 1024px

### 🚀 デプロイ

#### Vercel（推奨）

```bash
npm install -g vercel
vercel
```

#### その他のプラットフォーム

プロジェクトはNext.jsをサポートする任意のプラットフォームにデプロイできます：
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### 🤝 貢献

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. プルリクエストを開く

### 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細については[LICENSE](LICENSE)ファイルを参照してください。

### 📞 連絡先

- **開発者**: Kenji Akira (Hoàng Ngọc Từ)
- **メール**: kenjiakira2006@gmail.com
- **所在地**: ハノイ、ベトナム
- **ポートフォリオ**: hnt.io.vn

---

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/kenjiakira/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/kenjiakira/portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/kenjiakira/portfolio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kenjiakira/portfolio)
![GitHub license](https://img.shields.io/github/license/kenjiakira/portfolio)

---

<div align="center">

**Made with ❤️ by Kenji Akira**

</div>