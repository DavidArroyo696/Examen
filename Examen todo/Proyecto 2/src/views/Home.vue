<template>
<body>
    <section class="form-register">
        <center>
        <div class="cat">
        <img src="../assets/MacroPlace.png" />
        </div>
        </center>
        <h4 class="text" >Registro</h4>
        <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" v-model="nombre">
        <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" v-model="apellido">
        <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" v-model="correo">
        <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña" v-model="contraseña">
        <input class="botons" type="submit" value="Registrar" @click="reset">
        <p><a href="#">¿Ya tienes Cuenta?</a></p>
    </section>
</body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  data: () => ({
      name: '',
      nombre: '',
      apellido: '',
      correo: '',
      contraseña: ''
    }),

    methods: {
      reset () {
        console.log(this.nombre)
        console.log(this.apellido)
        console.log(this.correo)
        console.log(this.contraseña)
        var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'name': this.nombre,
  'apellido': this.apellido,
  'email': this.correo, 
  'contraseña': this.contraseña
});
var config = {
  method: 'post',
  url: 'http://localhost:3001/user',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

      },
    }
}


</script>


<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
.text{
    color: rgb(255, 230, 4);
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    font-size: 33px;
}
.form-register {
    width: 400px;
    background: #3f45efac;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    font-family: 'calibri';
    color: white;
    box-shadow: 7px 13px 37px #000;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}
body {
    /* 	background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%); */
        background: url(../assets/transporte.jpg);
        background-attachment: fixed;
        background-size:cover;
        margin: 0;
    }


.controls {
    width: 100%;
    background: #f5dd0ad2;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    border: 1px solid #1f53c5;
    font-family:'calibri';
    font-size: 18px;
    color: white;
    text-align: center;
}
img {
    max-width: 100%;
    max-height: 100%;
   }
   .cat {
    height: 200px;
    width: 200px;
   }
.form-register p {
    height: 40px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
}

.form-register a {
    color: white;
    text-decoration: none;
}

.form-register a:hover {
    color: white;
    text-decoration: underline;
}

.form-register .botons {
    width: 100%;
    background: #1f53c5;
    border: none;
    padding: 12px;
    color: white;
    margin: 16px 0;
    font-size: 16px;
}
</style>