<template>
<div class="encabezado">
  <h1>Usuarios</h1> <br>
  <h1 v-for="uno in Comments" :key="uno._id">Nombre: 
    {{uno.name}} <br> <br>
    Email:
    {{uno.email}} <br> <br> <hr>
    </h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'Posts',
  data(){
    return{
      Comments:[],
      Post:[]
    }
  },
  methods:{
    getComments()
    {
      axios.get('http://localhost:3001/user')
      .then((comments)=>{
        for(let i in comments.data.items.docs){
          console.log(this.Comments)
          this.Comments.push(comments.data.items.docs[i])
        }
      }).catch((e)=>{
        console.log(e)
      })
    },
    getPost(){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
      .then((post)=>{
        this.Post.push(post.data)
      }).catch((e)=>{
        console.log(e)
      })
    }
  },
  mounted() {
    this.getComments()
  }
}
</script>

<style>
.encabezado {
  font-family: 'Times New Roman', Times, serif;
  color: rgb(0, 136, 255);
  font-size: 15px;
}
</style>