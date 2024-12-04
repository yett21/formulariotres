import React from "react";
const formato = (a,b,c)=> {
return (`
    # formulario



| **Campo** | **Valor**      |

|-----------|----------------|

| texto 1   | ${a} |

| texto 2   | ${b} |

| texto 3   | ${c}|`)

}

export default formato;