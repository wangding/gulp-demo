const q = document.querySelector,
      $ = q.bind(document);

import {Rectangle} from './rectangle.js';

let $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $('#area');

$btnCal.onclick = () => {
  let r = new Rectangle($width.value, $height.value);

  $perimeter.value = r.perimeter;
  $area.value = r.area;
};
