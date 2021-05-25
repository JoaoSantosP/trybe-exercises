let peca = "REI";

switch (peca.toLowerCase()){
  case "rei":
  console.log("Peça: "+peca.toLowerCase(), " Movimento: 1 casa em qualquer direcão");
  break;
  
  case "rainha":
    console.log("Peça: "+peca.toLowerCase(), " Movimento: Em qualquer direcão" );
    break;

    case "bispo":
      console.log("Peça: "+peca.toLowerCase(), " Movimento: Anda nas diagonais");
      break;

      case "peao":
        console.log("Peça: "+peca.toLowerCase(), " Movimento: Anda reto");
        break;

        case "torre":
          console.log("Peça: "+peca.toLowerCase(), " Movimento: Anda reto");
          break;

          case "cavalo":
            console.log("Peça: "+peca.toLowerCase(), " Movimento: Anda em L");
            break;

            default : 
            console.log("Peça nao encontrada."); 

}