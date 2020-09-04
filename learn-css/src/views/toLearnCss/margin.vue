<template>
  <div class="margin">
    <h1 class="title">BACKGROUND COLOR</h1>
    <h2 class="subtitle">
      Nós podemos alterar a cor de fundo dos elementos ultilizando o background-color.
      Nós podemos ultilizar as cores em rgb, pelo nome (em inglês), ou hexadecimal, um bom
      site para pesquisar cores é
      <a
        href="https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb"
      >Este aqui</a>
      <hr />Exemplo:
      <br />.div {
      <br />background-color: cor-desejada
      <br />}
      <hr />Teste você mesmo:
    </h2>

    <b-field label="MUDE A COR DO CÍRCULO">
      <b-input v-model="color"></b-input>
    </b-field>
    <center>
      <div :style="margin" class="myBox"></div>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      margin: "",
    };
  },
};
</script>

<style>
.myBox {
  width: 100px;
  height: 100px;
  border: 3px solid black;
  border-radius: 360px;
}
</style>