document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Captura os valores
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    // Validação
    if (peso <= 0 || altura <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    // Cálculo do IMC
    const imc = (peso / (altura ** 2)).toFixed(2);
    const resultadoDiv = document.getElementById('resultado');
    const imcValor = document.getElementById('imcValor');
    const classificacao = document.getElementById('classificacao');
    const recomendacao = document.getElementById('recomendacao');
  
    let classificacaoTexto = '';
    let recomendacaoTexto = '';
    let classe = '';
  
    if (imc < 18.5) {
      classificacaoTexto = 'Abaixo do peso';
      recomendacaoTexto = 'Recomenda-se consultar um nutricionista.';
      classe = 'warning';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacaoTexto = 'Peso normal';
      recomendacaoTexto = 'Continue com uma boa alimentação e exercícios!';
      classe = 'success';
    } else if (imc >= 25 && imc < 29.9) {
      classificacaoTexto = 'Sobrepeso';
      recomendacaoTexto = 'Considere revisar sua dieta e rotina de exercícios.';
      classe = 'warning';
    } else if (imc >= 30 && imc < 34.9) {
      classificacaoTexto = 'Obesidade Grau I';
      recomendacaoTexto = 'Procure orientação médica e nutricional.';
      classe = 'danger';
    } else if (imc >= 35 && imc < 39.9) {
      classificacaoTexto = 'Obesidade Grau II';
      recomendacaoTexto = 'É importante buscar acompanhamento médico.';
      classe = 'danger';
    } else {
      classificacaoTexto = 'Obesidade Grau III (Mórbida)';
      recomendacaoTexto = 'Procure ajuda médica especializada imediatamente.';
      classe = 'danger';
    }
  
    // Exibição do resultado
    imcValor.textContent = imc;
    classificacao.textContent = classificacaoTexto;
    classificacao.className = classe;
    recomendacao.textContent = recomendacaoTexto;
  
    resultadoDiv.classList.remove('hidden');
  });
  