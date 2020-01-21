import { element, theme } from '../lib/style.js';

let lastPlaying = ''
let timeout = null

const render = ({ config, error, data }) => {
  const style = (song, top) => {
    if (song) {
      return {
        ...element,
        ...config.style,
        width: '100%',
        textAlign: 'center',
        position: 'fixed',
        top: top,
        left: '0',
        width: '100%',
        background: theme.background,
        transition: 'top 250ms cubic-bezier(0.4, 0.0, 1, 1)'
      }
    } else {
      return { display: 'none' }
    }
  }

  const iconStyle = {
    color: '#1fd662',
    padding: '0 10px'
  }

  const renderElement = (top) => (
    <span style={style(data, top)}>
      <i className="fab fa-spotify" style={iconStyle}></i>
      { data }
    </span>
  )

  if (!data) {
    lastPlaying = ''

    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    return renderElement('-25px')
  }

  if (lastPlaying === data && !timeout) {
    return renderElement('-25px')
  }

  lastPlaying = data

  if (!timeout) {
    timeout = setTimeout(() => {
      timeout = null
    }, 10000)
  }

  return error ? (
    <span style={style("err")}>!</span>
  ) : renderElement('0')
}

export default render
