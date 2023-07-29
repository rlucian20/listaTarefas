$('form').on('submit', function (e) {
  e.preventDefault()

  const novaTarefa = $('#nova-Tarefa').val()

  $(`<li>${novaTarefa}</li>`).appendTo('ul')

  $('li').on('click', function () {
    $(this).addClass('tarefaConcluida')
  })
})
