import React from "react";
import  ReactDOM  from "react-dom/client";

        const heading1=(<h1 id="h1">Namaste React</h1>);

        const HeaderComponent=()=>{
            return (
                
                <div>
                    {heading1}
                    {heading1}
                    <h2>Namaste React Component</h2>
                    <h2>This is h2 tag</h2>
                </div>
            );
        };


        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(< HeaderComponent/>);