var umaPropaganda = function() {
  var propagandas = ['O que acha de comprar uma lancha?',
                      'O que acha de comprar uma motocicleta?',
                      'O que acha de comprar uma bicicleta?',
                      'O que acha de comprar um carro?',
                    ]
  var posicao = Math.floor(propagandas.length * Math.random());
  var texto = propagandas[posicao];
  var tr = $('<tr>').addClass('.propaganda').append($('<td colspan="6">'));
  tr.find('td').text(texto);
  return tr;
};



var atualizaDados = function() {
  var carrinhos = $('.carrinho');
  carrinhos.each(function() {
    var carrinho = $(this);
    var itens = carrinho.find('.item-total:visible');
    var total = 0;
    for (var i = 0; i < itens.length; i++) {
      var item = $(itens[i]);
      var valor = parseFloat(item.text());
      total  = total + valor;
    }
    carrinho.find('.valor-total').text(total);
    carrinho.find('.quantidade-de-itens').text(itens.length);
  });
};

var removeItem = function(event) {
  event.preventDefault();

  var self = $(this);
  self.closest('tr').hide();

  atualizaDados();
};


var undo = function() {

  var carrinho = $(this).closest('.carrinho');
  carrinho.find('tr:visible').removeClass('recuperado');

  var trs = carrinho.find('tr:hidden');
  atualizaDados();
  trs.addClass('recuperado');
  trs.show();
};
var aposInicializado = function() {
  atualizaDados();
  $('.undo').click(undo)
  $('.remove-item').click(removeItem);
  $('tr:nth-child(3n)').each(function() {
    umaPropaganda().insertAfter($(this))
  });
};
$(aposInicializado);
