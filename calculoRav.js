/* TARIFA SEM RC

/*  1  AZ 675 C 07JAN 7 GRUFCO DK2  1545 0645 
  2  AZ1263 C 08JAN 1 FCONAP DK2  0935 1030 
  3  AZ1268 D 10FEB 6*NAPFCO DK2  0635 0725 
  4  AZ 678 D 10FEB 6*FCOGRU DK2  1020 1840


USD  4419.00      07JAN24SAO AZ X/ROM AZ NAP3209.50AZ X/ROM
BRL 21373.81  TARIFA SEM TAXAS     AZ SAO1209.50NUC4419.00END ROE1.00
BRL    96.40-YQ   XT BRL 9.58-EX BRL 91.03-HB BRL 121.47-IT
BRL    54.24-BR   BRL 19.43-MJ BRL 35.12-VT
BRL   276.63-XT
BRL 21801.08 TARIFA TOTAL COM TAXAS
*/
 // Código para calcular valor de taxas e de comissão automaticamente, sem necessidade de fazer cálculo//
 // Saída do programa o valor total com a comissão//



let valorTarifa = 5370.00 //INSERIR A TARIFA
let total = 5500.00 // TOTAL COM TAXAS DE EMBARQUE
let valorTotal 
let rav 
let valorTaxas = total - valorTarifa
rav = (valorTarifa * 7.00/100)
console.log("Valor da Tarifa em BRL", + valorTarifa)
console.log("Valor das taxas em BRL", valorTaxas.toFixed(2))
console.log ("Valor da rav em BRL", + rav.toFixed(2))
valorTotal = valorTarifa + rav + valorTaxas
console.log("Valor total TARIFA,TAXA E RAV em BRL",valorTotal.toFixed(2))