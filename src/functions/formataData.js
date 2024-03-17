export function formataData(dataString){
  const data = new Date(dataString);

  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
 

  // Montando a nova string no formato "DD/MM/YYYY HH:mm:ss"
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}