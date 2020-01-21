import strftime from '../lib/strftime.js';
import { element } from '../lib/style.js';

const render = ({ config, error, side }) => {
  let time = strftime(config.format, new Date());
  var style = {
    ...element,
    ...config.style,
    float: side,
  }

  return error ? (
    <span style={style}>!</span>
  ) : (
    <span style={style}>
      {time}
    </span>
  )
}

export default render
