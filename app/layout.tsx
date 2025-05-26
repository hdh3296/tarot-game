import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '타로 운세 보기 - 밭간 타로 게임',
  description: '마음을 비우고 타로 카드 4장을 선택해서 운세를 확인해보세요. 전반운, 연애운, 직업운, 재물운을 알아보는 타로 점술 게임입니다.',
  keywords: ['타로', '타로카드', '운세', '점술', '타로게임', '무료타로'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
