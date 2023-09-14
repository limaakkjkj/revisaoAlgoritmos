function buscarNoBancoDeDados() {
    // Simulando um erro
    throw new Error("Erro na busca no banco de dados.");
  }
  
  try {
    buscarNoBancoDeDados();
  } catch (error) {
    console.log("Ocorreu um erro: " + error.message);
    console.log("Por favor, tente novamente mais tarde.");
  }
  