const customRender=(element,container)=>{
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.children
    for(const prop in element.props){
        if (prop ==='children') continue;
        domElement.setAttribute(prop,element.props[prop])
        // domElement.setAttribute(prop,element.props.prop)
    }
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:"www.google.com",
        target:"_blank"
    },
    children:"Visit Google"
}



const mainContainer=document.querySelector("#root")
customRender(reactElement,root)