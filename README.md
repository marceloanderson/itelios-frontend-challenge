# Itelios Frontend Challenge

Olá, o projeto pode ser visualizado no seguinte link: http://marceloanderson.github.io/itelios/ 

## Iniciando

### Instalação

Este projeto pode ser instalado com o NPM I e executado chamando o gulp.

- [npm](https://www.npmjs.com/package/owl.carousel): `npm install`
- [bower](https://gulpjs.com/): `gulp`

#### HTML Estático

Para rodar o HTML estático do projeto, baixe o repositório, abra a pasta build e rode o arquivo index.html em seu navegador.

### O Teste

Este Teste foi desenvolvido com `HTML`, `CSS`, `JS` e `jQuery`.

Para o Carousel utilizei o plugin "owl-carousel" e consequentemente apliquei o jQuery no projeto.
Com esse plugin, o desenvolvimento foi mais rápido e facilitou trabalhar a responsividade, utilização e animação do carousel.
Em dispositivos móveis é possível rotacionar o caroussel arrastando o dedo pra esquerda e direita.

```javascript
$(document).ready(function(){
  $('.shelf-recommended-items').owlCarousel();
});
```