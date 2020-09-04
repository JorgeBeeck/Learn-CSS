<template>
  <div class="textColor">
    <h1 class="title">Text Color</h1>
    <h2 :style="color" class="subtitle">
      Nós podemos alterar a cor de textos com CSS usando o recurso color,
      Nós podemos ultilizar as cores em rgb, pelo nome (em inglês), ou hexadecimal, um bom
      site para pesquisar cores é
      <a
        href="https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb"
      >Este aqui</a>
      <hr />Exemplo
      <br />h1 {
      <br />color: cor-desejada
      <br />}
      <hr />Teste você mesmo:
    </h2>
    <b-field label="MUDE A COR DO TEXTO ACIMA">
      <b-input v-model="color"></b-input>
    </b-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "",
    };
  },
};
</script>