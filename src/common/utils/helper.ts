export function classJoiner (...args: any[]): string {
    let joined: string = ""
    for(let i=0; i<args.length;i++){
        if(typeof args[i] != "undefined"){
            joined = joined + " " + args[i]
        }
    }
    return joined.trim();
}

export function onscroll (element:HTMLElement, action:()=>void, visibility: boolean) {
    let elem = element
    let elemTop = elem.offsetTop
    let elemHeight = elem.offsetHeight
    let elemView = elemTop + elemHeight
    let elemParentHeight = elem.offsetParent?.scrollHeight
    let browserHeight = window.innerHeight
    let browserScrollPos = window.scrollY
    let fullBrowserScrollView = browserHeight + browserScrollPos
    let shortBrowserScrollView = browserScrollPos + (browserHeight - (browserHeight/3))

    if(visibility){
        if(elemTop > browserScrollPos && elemTop < shortBrowserScrollView){
            action()
        }
    }else{
        //for elements in view but not upto the short browser scroll view eg footer
        if(elemTop > browserScrollPos && elemView <= fullBrowserScrollView){
          action()
        }
    }  
  }

  export const triggerEvent = (eventName: string) => {
    const event = new Event(eventName);
    window.dispatchEvent(event)
  }

  export const currencyConverter = (finalCurrency: string, initialCurrency: string, initialAmount: number, fx: {[key: string]: {rate: number, symbol: string}}) =>{
    //rates should be initial currency conversion rates
    try {
        let exchange = initialAmount;    
            if(initialCurrency != finalCurrency){
                //convert initial currency to dollars
                //convert to final currency
                    exchange = (initialAmount/fx[initialCurrency].rate)* fx[finalCurrency].rate
            }

            return exchange.toFixed(2)
    } catch (error) {
        console.log(error, ": currencyConverter function")
    }
    
  }