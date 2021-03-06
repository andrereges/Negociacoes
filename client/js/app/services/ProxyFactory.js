console.log("Carregou class  ProxyFactory())");

class ProxyFactory{
    static create(objeto, props, acao){
       return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                         console.log(`interceptando ${prop} de ${target[prop]}`);
                         Reflect.apply(target[prop], target, arguments);
                         return acao(target); 
                            
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    console.log(`interceptando ${prop} de ${target[prop]}`);
                    acao(target);
                }
                 return Reflect.set(target, prop, value, receiver);
                
            }
        });

    }
   static _ehFuncao(func){
         return typeof(func) ==  typeof(Function);
    }
}