import { element, theme } from '../lib/style.js';

const render = ({ output, error, side, config, data }) => {
  var batColor = (level) => {
    var level = parseInt(level)

    if (level > 80)
      return theme.batteryFull
    else if (level > 55)
      return theme.batteryMedium
    else if (level > 30)
      return theme.batteryLow
    return theme.batteryEmpty
  }

  var style = (level) => {
    return {
      ...element,
      ...config.style,
      float: side,
      color: batColor(level),
      borderRadius: '0 0 0 5px'
    }
  }

  var iconStyle = {
    padding: '0 0 0 10px',
    fontSize: '16px'
  }

  var iconName = (level) => {
    var level = parseInt(level)
    if (level > 80)
      return "battery-full"
    if (level > 60)
      return "battery-three-quarters"
    if (level > 40)
      return "battery-half"
    if (level > 20)
      return "battery-quarter"
    return "battery-empty"
  }

  if (error || data == 0) {
    return (
      <span style={style(0)}></span>
    )
  }

  return (
    <span style={style(data)}>
      { data < 50 ? (
        <span>{data}</span>
      ) : (
        <span style={iconStyle}>
          <i className={'far fa-' + iconName(data)}></i>
        </span>
      ) }
    </span>
  )
}

export default render
