plugins.table_generator = function(items) {
    const $table = _generateTable(items);
    return $table;
  };

  function _generateTable(items) {
    const $table = document.createElement('table');
    $table.appendChild(document.createElement('tr'))

    items.forEach(item => {
      $td = document.createElement('td');
      $td.setAttribute('data-item-id', item.id);
      $td.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${item.img}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <a href="#" class="btn btn-primary" onclick="showInfoModal(${item.id})">See details</a>
            <a href="#" class="btn btn-danger" onclick="showDeleteModal(${item.id})">Remove</a> 
          </div>
        </div>
      `;
      $table.querySelector('tr').appendChild($td)
    });
    return $table;
  }