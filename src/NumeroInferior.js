import { useState, useEffect, useMemo } from "react";

function NumeroInferior() {
  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);
  const [suma, setsuma] = useState(0);

  useEffect(() => {
    const resultado = numero1 + numero2;
    setsuma(resultado);
  }, [numero1, numero2]);
  const mensaje = useMemo(() => {
    if (suma > 10) {
      return  "los numeros suman mas de 10";
    }
    return null;
  }, [suma]);
  const handleNumero1change = (event) => {
    setnumero1(parseInt(event.target.value));
  };
  const handleNumero2change = (event) => {
    setnumero2(parseInt(event.target.value));
  };

  return (
    <div>
      <p>Numero inferior </p>
      <label> Ingrese numero:
        <input type="text" value={numero1} onChange={handleNumero1change} />
      </label>
      <br/>
      <label> Ingrese numero:
        <input type="text" value={numero2} onChange={handleNumero2change} />
      </label>
      <br/>
      <label> resultado:{suma} / {mensaje}   
      </label>
      
    </div>
  );
}

export default NumeroInferior;
