"use client";

import "@/static/scss/reset.scss";
import "@/static/scss/normalize.scss";
import "@/static/scss/fonts.scss";
import "@/static/scss/fonts.scss";
import "@/static/scss/mixins.scss";
import "@/static/scss/GUI.scss";
import "@/static/scss/common.scss";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
