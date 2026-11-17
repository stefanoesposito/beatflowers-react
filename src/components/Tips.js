import React from 'react'
import './Tips.css'

const KOFI_URL = 'https://ko-fi.com/stexpo'
const QR_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=16&data=' + encodeURIComponent(KOFI_URL)

export default function Tips() {
  return (
    <main className="bf-tips">
      <div className="bf-tips__sun" aria-hidden="true" />
      <div className="bf-tips__flower bf-tips__flower--left" aria-hidden="true">✿</div>
      <div className="bf-tips__flower bf-tips__flower--right" aria-hidden="true">✿</div>
      <div className="bf-tips__content">
        <a className="bf-tips__home" href="/" aria-label="Back to Beat FlowerS website">← BACK TO THE MUSIC</a>
        <p className="bf-tips__eyebrow">PEACE · LOVE · LIVE MUSIC</p>
        <h1 className="bf-tips__title">BEAT <span>FlowerS</span></h1>
        <div className="bf-tips__divider" aria-hidden="true">✳ ✳ ✳</div>
        <h2>Keep the music <em>blooming!</em></h2>
        <p className="bf-tips__intro">Enjoyed our music? Leave a little love in our digital tip jar. Every contribution helps the flowers grow. ☮</p>
        <section className="bf-tips__card" aria-label="Support Beat FlowerS">
          <div className="bf-tips__card-label">SCAN & SPREAD THE LOVE</div>
          <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" aria-label="Support Beat FlowerS on Ko-fi">
            <img className="bf-tips__qr" src={QR_URL} alt="QR code linking to ko-fi.com/stexpo" width="260" height="260" />
          </a>
          <p className="bf-tips__scan">Scan with your phone camera</p>
          <div className="bf-tips__or">— OR —</div>
          <a className="bf-tips__button" href={KOFI_URL} target="_blank" rel="noopener noreferrer">☕ LEAVE A TIP <span aria-hidden="true">↗</span></a>
          <p className="bf-tips__note">Secure checkout on Ko-fi · Any amount is appreciated</p>
        </section>
        <p className="bf-tips__thanks">Thank you for keeping live music alive! <span>♥</span></p>
        <p className="bf-tips__footer">MADE WITH LOVE & A LITTLE FLOWER POWER ✌</p>
      </div>
    </main>
  )
}
