let circularProgress = document.querySelector('.circular_progress')
let progressValue = document.querySelector('.progress_value')

let startValue = 0 //progress start value
let endValue = 87 //progress end value
let speed = 10 //progress fill speed

let progress = setInterval(() => {
  startValue++
  progressValue.textContent = `${startValue}%`
  circularProgress.style.background = `conic-gradient(var(--base) ${
    startValue * 3.6
  }deg, rgba(0, 0, 0, 0.3) 0deg)`
  сircularProgress.style.boxShadow = `0 2px 10px 5px var(--base)`
  if (startValue === endValue) {
    clearInterval(progress)
  }
}, speed)
