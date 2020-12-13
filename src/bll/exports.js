import React from "react"
import html2canvas from 'html2canvas'


export const copyHTML = (props) => {
    const node = document.getElementById('canvas')
    const copyOfNode = node.outerHTML
    // отправляем разметку в буффер обмена, обернув ее ссылкой на сайт
    navigator.clipboard.writeText(`<a href=${props.destLink} style='display: block; heigth: 100%' target='_blank'>` + copyOfNode + '</a>')
    .then(() => {
        console.log(copyOfNode)
/*       props.showNotification('скопированно в буфер обмена как HTML')
      setTimeout(props.hideNotification, 500) */
    })
    .catch(() => {
/*       props.showNotification('что-то пошло не так')
      setTimeout(props.hideNotification, 500) */
    })
  }

  export const copySettingsToJSON = (props) => {
    const bannerText = document.getElementById('banner_text').textContent
    const config = {
      ...props.bannerParams,
      textValue: bannerText // добавим в конфигурацию баннера текст
    };
    navigator.clipboard.writeText(JSON.stringify(config)) // кладем конфиг в буффер обмена
    .then(() => {
/*       props.showNotification('<b>настройки скопированы в буфер как JSON</b>')
      setTimeout(props.hideNotification, 500) */
    })
    .catch(() => {
/*         props.showNotification('что-то пошло не так')
        setTimeout(props.hideNotification, 500) */
    });
  };