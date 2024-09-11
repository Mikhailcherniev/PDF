var pdf = require("html-pdf");

var nomeDoAluno = "Diego";
var curso = "Desenvolvimento de Sistemas";
var materias = [
  { nome: "Programação Web", nota: 9 },
  { nome: "Banco de Dados", nota: 8.5 },
  { nome: "Desenvolvimento Mobile", nota: 9.2 },
  { nome: "Algoritmos", nota: 8.8 },
];

var conteudo = `
<h1 style='color: blue'>Boletim Escolar - Senai</h1>
<hr>
<p>Aluno: ${nomeDoAluno}</p>
<p>Curso: ${curso}</p>
<table border="1" cellpadding="5">
  <thead>
    <tr>
      <th>Matéria</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    ${materias.map(materia => `
      <tr>
        <td>${materia.nome}</td>
        <td>${materia.nota}</td>
      </tr>
    `).join('')}
  </tbody>
</table>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgN0GsxluYMvpBoiNswxvk7WBb0QDEiy-ZQ&s' alt='Logo Senai' style='width: 100px; margin-top: 20px'/>`;

pdf.create(conteudo, {}).toFile("./boletim.pdf", (err, res) => {
  if (err) {
    console.log("Um erro aconteceu: (", err);
  } else {
    console.log(res);
  }
});
