function calcularOperadoraA() {
    var idadeA = parseInt(document.getElementById('idadeA').value);
    var pesoA = parseFloat(document.getElementById('pesoA').value);
    var alturaA = parseFloat(document.getElementById('alturaA').value);
  
    if (idadeA && pesoA && alturaA) {
      var imcA = pesoA / (alturaA * alturaA);
  
      var precoBasicoA = 100 + (idadeA * 10 * (imcA / 10));
      var precoStandardA = (150 + (idadeA * 15)) * (imcA / 10);
      var precoPremiumA = (200 - (imcA * 10) + (idadeA * 20)) * (imcA / 10);
  
      document.getElementById('resultadoA').innerHTML = `
        <p><strong>IMC (Operadora A):</strong> ${imcA.toFixed(2)}</p>
        <p><strong>Preço Básico:</strong> R$ ${precoBasicoA.toFixed(2)}</p>
        <p><strong>Preço Standard:</strong> R$ ${precoStandardA.toFixed(2)}</p>
        <p><strong>Preço Premium:</strong> R$ ${precoPremiumA.toFixed(2)}</p>
      `;
  
      atualizarComparacao('basicoA', precoBasicoA, 'standardA', precoStandardA, 'premiumA', precoPremiumA);
    } else {
      alert('Por favor, preencha todos os campos para a Operadora A.');
    }
  }
  
  function calcularOperadoraB() {
    var idadeB = parseInt(document.getElementById('idadeB').value);
    var pesoB = parseFloat(document.getElementById('pesoB').value);
    var alturaB = parseFloat(document.getElementById('alturaB').value);
  
    if (idadeB && pesoB && alturaB) {
      var imcB = pesoB / (alturaB * alturaB);
      var fatorComorbidadeB = obterFatorComorbidade(imcB);
  
      var precoBasicoB = 100 + (fatorComorbidadeB * 10 * (imcB / 10));
      var precoStandardB = (150 + (fatorComorbidadeB * 15)) * (imcB / 10);
      var precoPremiumB = (200 - (imcB * 10) + (fatorComorbidadeB * 20)) * (imcB / 10);
  
      document.getElementById('resultadoB').innerHTML = `
        <p><strong>IMC (Operadora B):</strong> ${imcB.toFixed(2)}</p>
        <p><strong>Preço Básico:</strong> R$ ${precoBasicoB.toFixed(2)}</p>
        <p><strong>Preço Standard:</strong> R$ ${precoStandardB.toFixed(2)}</p>
        <p><strong>Preço Premium:</strong> R$ ${precoPremiumB.toFixed(2)}</p>
      `;
  
      atualizarComparacao('basicoB', precoBasicoB, 'standardB', precoStandardB, 'premiumB', precoPremiumB);
    } else {
      alert('Por favor, preencha todos os campos para a Operadora B.');
    }
  }
  
  function obterFatorComorbidade(imc) {
    if (imc < 18.5) {
      return 10;
    } else if (imc < 24.9) {
      return 1;
    } else if (imc < 29.9) {
      return 6;
    } else if (imc < 34.9) {
      return 10;
    } else if (imc < 39.9) {
      return 20;
    } else {
      return 30;
    }
  }
  
  function atualizarComparacao(idA, precoA, idB, precoB, idC, precoC) {
    document.getElementById(idA).innerText = `R$ ${precoA.toFixed(2)}`;
    document.getElementById(idB).innerText = `R$ ${precoB.toFixed(2)}`;
    document.getElementById(idC).innerText = `R$ ${precoC.toFixed(2)}`;
  }
  