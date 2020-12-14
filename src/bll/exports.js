import html2canvas from 'html2canvas'


export const saveAsPNG = () => {
  
  html2canvas(document.getElementById('canvas'), { allowTaint: true, useCORS: true }).then(function(canvas) {
    let link = document.createElement('a');
    link.download = 'banner.png';
    link.href = canvas.toDataURL()
    link.click();
  })  
}

export const copyHTML = (data) => {

  html2canvas(document.getElementById('canvas'), { allowTaint: true, useCORS: true }).then(function(canvas) {
      navigator.clipboard.writeText(`<a href=${data} style='display: block; heigth: 100%' target='_blank'>${canvas.outerHTML} </a>`)
  }).then(()=>alert("скопировано"))
    .catch(() => {alert('что-то пошло не так')
  })
}

