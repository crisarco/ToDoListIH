<template>
  <h3><a href="#modal1">MODAL</a></h3>
  <div id="modal1" class="modalmask">
    <div class="modalbox movedown">
        <a href="#close" title="Close" class="close">X</a>
        <h2>Mensaje de Error</h2>
        <p>Aquí puedes incluir cualquier cosa como vídeos, mapas, formularios...</p>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style>
.modalmask {
    position: fixed;
    font-family: Arial, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
}
.modalmask:target {
    opacity:1;
    pointer-events: auto;
}

/*Formato de la ventana*/
.modalbox{
    width: 400px;
    position: relative;
    padding: 5px 20px 13px 20px;
    background: #fff;
    border-radius:3px;
    -webkit-transition: all 500ms ease-in;
    -moz-transition: all 500ms ease-in;
    transition: all 500ms ease-in;
}

/*Movimientos*/
.movedown {
    margin: 0 auto;
}

.modalmask:target .movedown{
    margin:10% auto;
}

/*Boton de cerrar*/
.close {
    background: #606061;
    color: #FFFFFF;
    line-height: 25px;
    position: absolute;
    right: 1px;
    text-align: center;
    top: 1px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    border-radius:3px;

}

.close:hover {
    background: #FAAC58;
    color:#222;
}
</style>
