// Clear Inputs on browser load and/or refresh

window.onload = () => {
  document.getElementById('icon-form').reset()
  document.getElementById('color-form').reset()
  document.getElementById('shadow').checked = false
  document.getElementById('animation').checked = false
  document.getElementById('message-input').value = ''
}

// Window resize listener adjust slider and admonition for new size max

window.addEventListener('resize', () => {
  admonitionWrapper.style.width = ''
  var admonitionResizeWrapperWidth = admonitionWrapper.offsetWidth
  widthSlider.max = admonitionResizeWrapperWidth
  setBubble(range, bubble)
})

const admonition = document.querySelector('.admonition')
const admonitionWrapper = document.getElementById('admonition-wrapper')
const resultButton = document.getElementById('result-button')
const icons = document.querySelectorAll('.icon')
const colors = document.querySelectorAll('.color')
const shadow = document.getElementById('shadow')
const animation = document.getElementById('animation')
const inputText = document.querySelector('.input-text')
const range = document.querySelector('.range__slider')
const bubble = document.querySelector('.bubble')

var currentIcon
var currentColor
var colorPicked
var iconPicked
var widthSlider = document.getElementById('width')
var admonitionInitialWrapperWidth = admonitionWrapper.offsetWidth

widthSlider.max = admonitionInitialWrapperWidth
widthSlider.value = admonitionInitialWrapperWidth

// Admonition Event Listener

admonition.addEventListener('click', () => {
  if (admonition.classList.contains('animation-live')) {
    admonition.classList.toggle('toggle-transition')
    admonition.classList.toggle('after-shadow')
    admonition.firstChild.classList.toggle('toggle-opacity')
  }
})

// Range input for admonition width event listener

range.addEventListener('input', () => {
  setBubble(range, bubble)
})
setBubble(range, bubble)

function setBubble(range, bubble) {
  const val = range.value
  const min = range.min ? range.min : 0
  const max = range.max ? range.max : 100
  const newVal = Number(((val - min) * 100) / (max - min))
  bubble.innerHTML = val

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${24 - newVal * 0.5}px))`
  admonitionWrapper.style.width = val + 'px'
}

// Shadow switch event listener

shadow.addEventListener('click', () => {
  if (shadow.checked) {
    admonition.classList.add('toggle-shadow')
  } else {
    admonition.classList.remove('toggle-shadow')
  }
})

//  Animation switch event listener

animation.addEventListener('click', () => {
  if (animation.checked) {
    admonition.classList.add('animation-live')
  } else {
    admonition.classList.remove('animation-live')
    admonition.classList.remove('toggle-transition')
    admonition.classList.remove('after-shadow')
    admonition.firstChild.classList.remove('toggle-opacity')
  }
})

// Admonition message input event listener

inputText.addEventListener('keyup', (e) => {
  admonition.firstElementChild.innerText = inputText.value

  if (e.key === 'Enter') {
    e.target.value = ''
  }
})

// Icon picker radio button event listener

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    var iconSelect = icon.firstElementChild.value
    iconPicked = document.querySelector('input[name="icon"]:checked')
    colorPicked = document.querySelector('input[name="color"]:checked')
    if (colorPicked) {
      currentColor = document.querySelector('input[name="color"]:checked').value
    } else {
      currentColor = 'start-color'
    }

    // Logic to pick the icon and to keep the classes attached to the admonition

    switch (iconSelect) {
      case 'note':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('note')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'summary':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('summary')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'info':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('info')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'tip':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('tip')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'success':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('success')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'question':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('question')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'warning':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('warning')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'danger':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('danger')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'bug':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('bug')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'fail':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('fail')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'example':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('example')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'quote':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('quote')
        admonition.classList.add(currentColor)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      default:
        break
    }
  })
})

// Color picker radio button event listener

colors.forEach((color) => {
  color.addEventListener('click', () => {
    var colorSelect = color.firstElementChild.value
    iconPicked = document.querySelector('input[name="icon"]:checked')
    colorPicked = document.querySelector('input[name="color"]:checked')

    if (iconPicked) {
      currentIcon = document.querySelector('input[name="icon"]:checked').value
    } else {
      currentIcon = 'start-icon'
    }

    // Logic to pick the color and to keep the classes attached to the admonition

    switch (colorSelect) {
      case 'blue':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('blue')
        admonition.classList.add(currentIcon)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'green':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('green')
        admonition.classList.add(currentIcon)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'orange':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('orange')
        admonition.classList.add(currentIcon)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'red':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('red')
        admonition.classList.add(currentIcon)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'yellow':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('yellow')
        admonition.classList.add(currentIcon)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      case 'grey':
        admonition.className = ''
        admonition.classList.add('admonition')
        admonition.classList.add('grey')
        admonition.classList.add(currentIcon)
        void (shadow.checked && admonition.classList.add('toggle-shadow'))
        break
      default:
        break
    }
  })
})

// Result button event listener -- building final selects for result output

resultButton.addEventListener('click', () => {
  const finalMessage = admonition.firstChild.innerText
  const resultTitles = document.querySelectorAll('.result-title')
  const finalIcon = iconPicked ? iconPicked.value : 'start-icon'
  const finalColor = colorPicked ? colorPicked.value : 'start-color'
  const finalShadow = shadow.checked ? 'toggle-shadow' : ''
  const finalAnimation = animation.checked ? 'animation-live' : ''
  const finalWidth = widthSlider.value
  const htmlCodeResult = document.getElementById('html-result-code')

  // HTML template literal for insertion into HTML results code area

  htmlCodeResult.innerHTML = ''
  htmlCodeResult.innerHTML = `&ltdiv class='admonition-wrapper'&gt<br>&nbsp&nbsp&ltp class='admonition ${finalIcon} ${finalColor} ${finalShadow} ${finalAnimation}'&gt&ltspan&gt${finalMessage}&lt/span&gt&lt/p&gt<br>&lt/div&gt`

  // Change text on results button after intial click

  resultButton.innerText = 'Refresh Code Results'

  // Call functions for icons and color CSS code

  let colorSwatch = getColorSwatch(finalColor)
  let iconCSS = getIcon(finalIcon)

  // JavaScript template literal for insertion into JavaScript results code area

  const finalJS = animation.checked
    ? `const admonition = document.querySelector('.admonition')

    admonition.addEventListener('click', () => {
    if (admonition.classList.contains('animation-live')) {
      admonition.classList.toggle('after-shadow')
      admonition.firstChild.classList.toggle('toggle-opacity')
    }
  })`
    : 'No Animation is present so no JavaScript necessary.'

  const shadowCSS = shadow.checked
    ? `.toggle-shadow {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }`
    : ''

  // Aminimation CSS template literal for insertion into the CSS results code area

  const animationCSS = animation.checked
    ? `
    .animation-live {
      transition: width 0.6s ease-in-out, box-shadow 0.3s ease;
    }

    .animation-live > span {
      opacity: 0;
      transition: opacity 0.6s ease-in-out;
    }

    .animation-live:hover > span {
      opacity: 1;
    }

    .animation-live:active {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
    }

    .animation-live:after {
      content: '';
      position: absolute;
      top: 0;
      left: -5px;
      background-color: #000;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.9);
      width: 5px;
      height: 44.5px;
      transition: box-shadow 0.2s ease;
    }

    .after-shadow:after {
      content: '';
      position: absolute;
      top: 0;
      left: -5px;
      background-color: #000;
      box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.9);
      width: 5px;
      height: 44.5px;
    }
    
    .toggle-opacity {
      opacity: 1 !important;
    }`
    : ''

  // Standard CSS template literal for insertion into the CSS results code area
  const cssCodeResult = document.getElementById('css-result-code')
  cssCodeResult.innerHTML = ''
  cssCodeResult.innerHTML = `
  p {
    margin: 0 auto;
    font-weight: 600;
    position: relative;
    border-radius: 0 6px 6px 0;
    line-height: 18px;
    overflow: hidden;
    padding: 12px 0 12px 12px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    width: ${finalWidth}px;
  }

  p:before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 1.2rem;
    padding-right: 15px;
  }

  ${colorSwatch}

  ${iconCSS}

  ${shadowCSS}

  ${animationCSS}

  `

  const jsCodeResult = document.getElementById('js-result-code')
  jsCodeResult.innerHTML = ''

  jsCodeResult.innerHTML = finalJS

  resultTitles.forEach((title) => {
    title.nextElementSibling.classList.add('active')
  })
})

// Function to get the color CSS

function getColorSwatch(color) {
  switch (color) {
    case 'start-color':
      colorSwatch = `
      .start-color {
        background-color: #ccc;
        color: #777;
        border-bottom: #444;
        border-left: #444;
      }`
      break
    case 'blue':
      colorSwatch = `
      .blue {
        background-color: #f0f7fb;
        color: #3f78d9;
        border-bottom: solid 1px #3f77d5;
        border-left: solid 5px #3f77d5;
      }`
      break
    case 'green':
      colorSwatch = `
      .green {
        background-color: #f5fff9;
        color: #03c051;
        border-bottom: solid 1px #09a94b;
        border-left: solid 5px #09a94b;
      }`
      break
    case 'orange':
      colorSwatch = `
      .orange {
        background-color: #fff5e8;
        color: #ff9100;
        border-bottom: solid 1px #d57d09;
        border-left: solid 5px #d57d09;
      }`
      break
    case 'red':
      colorSwatch = `
      .red {
        background-color: #fed3dc;
        color: #ff1744;
        border-bottom: solid 1px #d51b3f;
        border-left: solid 5px #d51b3f;
      }`
      break
    case 'yellow':
      colorSwatch = `
      .yellow {
        background-color: #fffef1;
        color: #eed202;
        border-bottom: solid 1px #fff102;
        border-left: solid 5px #fff102;
      }`
      break
    case 'grey':
      colorSwatch = `
      .grey {
        background-color: #e5e5e5;
        color: #878787;
        border-bottom: solid 1px #878787;
        border-left: solid 5px #878787;
      }`
      break
    default:
      break
  }

  return colorSwatch
}

// Function to get the icon CSS

function getIcon(icon) {
  switch (icon) {
    case 'start-icon':
      iconCSS = String.raw`
      .start-icon:before {
        content: '\f0b2';
      }
      `
      break
    case 'note':
      iconCSS = String.raw`
      .note:before {
        content: '\f303';
      }
      `
      break
    case 'summary':
      iconCSS = String.raw`
      .summary:before {
        content: '\f036';
      }
      `
      break
    case 'info':
      iconCSS = String.raw`
      .info:before {
        content: '\f05a';
      }
      `
      break
    case 'tip':
      iconCSS = String.raw`
      .tip:before {
        content: '\f0eb';
      }
      `
      break
    case 'success':
      iconCSS = String.raw`
      .success:before {
        content: '\f00c';
      }
      `
      break
    case 'question':
      iconCSS = String.raw`
      .question:before {
        content: '\f059';
      }
      `
      break
    case 'warning':
      iconCSS = String.raw`
      .warning:before {
        content: '\f071';
      }
      `
      break
    case 'danger':
      iconCSS = String.raw`
      .danger:before {
        content: '\f0e7';
      }
      `
      break
    case 'bug':
      iconCSS = String.raw`
      .bug:before {
        content: '\f188';
      }
      `
      break
    case 'fail':
      iconCSS = String.raw`
      .fail:before {
        content: '\f00d';
      }
      `
      break
    case 'example':
      iconCSS = String.raw`
      .example:before {
        content: '\f0cb';
      }
      `
      break
    case 'quote':
      iconCSS = String.raw`
      .quote:before {
        content: '\f10e';
      }
      `
      break
    default:
      break
  }

  return iconCSS
}
