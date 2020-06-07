import {$} from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  let value;

  document.onmousemove = (e) => {
    if (type === 'col') {
      $resizer.css({
        bottom: `-100vh`,
        zIndex: 1000,
      });
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({right: -delta + 'px'});
    } else {
      $resizer.css({
        right: `-100vw`,
        zIndex: 1000,
      });
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({bottom: -delta + 'px'});
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    $resizer.css({
      bottom: 0,
      right: 0,
      zIndex: 1,
    });

    if (type === 'col') {
      $parent.css({width: value + 'px'});
      $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => el.style.width = value + 'px');
    } else {
      $parent.css({height: value + 'px'});
      $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => el.style.height = value + 'px');
    }
  };
}
