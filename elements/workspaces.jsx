import { element } from '../lib/style.js';

const render = ({ config, side, data }) => {
  var style = {
    ...element,
    ...config.style,
    float: side,
  }

  var wsStyle = {
    height: "23px",
    display: 'inline-block',
    padding: '0 8px',
  }

  if (!data) {
    return (<span></span>)
  }

  return (
    <span style={style}>
      { data.map((ws, index) => (
        <span key={index} style={{
          ...wsStyle,
          borderBottom: ws.focused ? '2px solid #fff' : 'none'
        }}>
          { index + 1 }
        </span>
      )) }
    </span>
  )
}

export default render
