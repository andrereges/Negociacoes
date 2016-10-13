class NegociacoesView {
    constructor(element) {
        this._element = element;
		
    }
    _template(model){
        return `
		<table class="table table-hover table-bordered">
            <thead>
                <tr class="active">
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
			${model.negociacoes.map(n =>{
					
					return `
						<tr>
                           <td>${DataHelper.dataParaTexto(n.data)}</td>
                           <td>${n.quantidade}</td>
                           <td>${n.valor}</td>
                          <td>${n.volume}</td>
                         </tr>
						`	
				}).join('')
			}
            </tbody>
        </table>
		`;
   }
		
		
		
    update(model){
        this._element.innerHTML = this._template(model);
    }
}
