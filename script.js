document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('generate'),
      table = document.getElementById('table-wrapper'),
      textarea = document.getElementById('textarea');

  btn.addEventListener('click', function (e) {
    generateTable(textarea, table);
  });
});


function generateTable (textarea, el) {
  var text = textarea.value,
      rows = text.split('\n');

  var table = document.createElement('table'),
      tbody = document.createElement('tbody');

  table.appendChild(tbody);

  rows.forEach(function (row) {
    var tuple = row.split(':');

    var tr = document.createElement('tr'),
        tdFirst = document.createElement('td'),
        tdSecond = document.createElement('td');

    tdFirst.innerHTML = sanitizeText(tuple[0]);
    tdSecond.innerHTML = sanitizeText(tuple[1]);

    tr.appendChild(tdFirst);
    tr.appendChild(tdSecond);

    tbody.appendChild(tr);
  });

  el.appendChild(table);

  window.a = text;
}

function sanitizeText (text) {
  text = text || '';

  return text.replace(/^\s*"/, '').replace(/"\s*,?\s*$/, '');
}