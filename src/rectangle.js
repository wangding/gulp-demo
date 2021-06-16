const q = document.querySelector,
      $ = q.bind(document);

let $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $('#area');

$btnCal.onclick = () => {
  let w = Number($width.value),
      h = Number($height.value);

  let p = 2 * (w + h),
      a = w * h;

  $perimeter.value = p;
  $area.value = a;
};
