var el = document.querySelector('.intro-section')
var originalValue = 0
var value = originalValue
el.style.marginTop = `${value}px`
setInterval(() => {
    let offset = document.documentElement.scrollTop
    let newValue = originalValue - Math.round(offset * 0.05) * -1
    if (value != newValue) {
        value = newValue
        el.style.top = `${newValue}px`
    }
}, 10)