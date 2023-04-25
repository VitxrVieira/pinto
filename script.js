const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  const altura = window.innerHeight - botao.clientHeight;
  const largura = window.innerWidth - botao.clientWidth;

  const novoTopo = Math.floor(Math.random() * altura);
  const novoEsquerda = Math.floor(Math.random() * largura);

  botao.style.top = novoTopo + 'px';
  botao.style.left = novoEsquerda + 'px';
});