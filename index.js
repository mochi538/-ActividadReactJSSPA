/* Es una biblioteca o un  framework */
 function Encabezado(){
    return (
        <>
            <header className="nav justify-content-center">
                <nav className="nav-item">
                    <img src= "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" width="30" height="24"></img>
                <button type="button" className="btn btn-danger">Iniciar sesion</button>
                </nav>
            </header>
                    <main className="contenedor1">
                        <h2 className="">Tu próxima historia ahora.</h2>
                        <h3>DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS.</h3>
                        <button type="button" className="btn btn-danger">DISFRUTA GRATIS POR UN MES</button>
                    </main>
        </>
    )
 }
 function Encabezado1(){
    return (
        <>
            <header className="encabezado">
                    
                    </header>
                    <main className="contenedor1">
                        <h2 className="">Tu próxima historia ahora.</h2>
                        <h3>DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS.</h3>
                        <button>DISFRUTA GRATIS POR UN MES</button>
                    </main>
        </>
    )}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <>
    <Encabezado/>




</>
    
    

            );
