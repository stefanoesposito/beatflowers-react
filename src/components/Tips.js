import React from 'react'
import {useTranslation} from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Tips.css'

const KOFI_URL = 'https://ko-fi.com/stexpo'
const QR_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=16&data=' + encodeURIComponent(KOFI_URL)

export default function Tips() {
  const {t} = useTranslation()
  return (
    <main className="bf-tips">
      <div className="bf-tips__sun" aria-hidden="true" />
      <div className="bf-tips__flower bf-tips__flower--left" aria-hidden="true">✿</div>
      <div className="bf-tips__flower bf-tips__flower--right" aria-hidden="true">✿</div>
      <div className="bf-tips__content">
        <div className="bf-tips__topbar">
          <a className="bf-tips__home" href="/" aria-label={t('tips.back')}>← {t('tips.back')}</a>
          <LanguageSwitcher />
        </div>
        <p className="bf-tips__eyebrow">{t('tips.eyebrow')}</p>
        <h1 className="bf-tips__title beatles">BeaT FlowerS</h1>
        <div className="bf-tips__divider" aria-hidden="true">✳ ✳ ✳</div>
        <h2>{t('tips.heading')} <em>{t('tips.blooming')}</em></h2>
        <p className="bf-tips__intro">{t('tips.intro')}</p>
        <section className="bf-tips__card" aria-label={t('tips.support')}>
          <div className="bf-tips__card-label">{t('tips.scanTitle')}</div>
          <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" aria-label={t('tips.supportOnKofi')}>
            <img className="bf-tips__qr" src={QR_URL} alt={t('tips.qrAlt')} width="260" height="260" />
          </a>
          <p className="bf-tips__scan">{t('tips.scan')}</p>
          <div className="bf-tips__or">— {t('tips.or')} —</div>
          <a className="bf-tips__button" href={KOFI_URL} target="_blank" rel="noopener noreferrer">☕ {t('tips.button')} <span aria-hidden="true">↗</span></a>
          <p className="bf-tips__note">{t('tips.note')}</p>
        </section>
        <p className="bf-tips__thanks">{t('tips.thanks')} <span>♥</span></p>
        <p className="bf-tips__footer">{t('tips.footer')}</p>
      </div>
    </main>
  )
}
